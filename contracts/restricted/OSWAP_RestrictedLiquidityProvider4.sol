// SPDX-License-Identifier: GPL-3.0-only
pragma solidity =0.6.11;

import './interfaces/IOSWAP_RestrictedLiquidityProvider4.sol';
import './interfaces/IOSWAP_RestrictedPair4.sol';
import './interfaces/IOSWAP_RestrictedFactory.sol';
import '../gov/interfaces/IOAXDEX_Governance.sol';
import '../libraries/TransferHelper.sol';
import '../libraries/SafeMath.sol';
import '../interfaces/IWETH.sol';
import './interfaces/IOSWAP_ConfigStore.sol';

contract OSWAP_RestrictedLiquidityProvider4 is IOSWAP_RestrictedLiquidityProvider4 {
    using SafeMath for uint256;

    uint256 constant BOTTOM_HALF = 0xffffffffffffffffffffffffffffffff;

    bytes32 constant FEE_PER_ORDER = "RestrictedPair.feePerOrder";
    bytes32 constant FEE_PER_TRADER = "RestrictedPair.feePerTrader";

    address public immutable override factory;
    address public immutable override WETH;
    address public immutable override govToken;
    address public immutable override configStore;

    modifier ensure(uint256 deadline) {
        require(deadline >= block.timestamp, 'EXPIRED');
        _;
    }

    constructor(address _factory, address _WETH) public {
        factory = _factory;
        WETH = _WETH;
        govToken = IOAXDEX_Governance(IOSWAP_RestrictedFactory(_factory).governance()).oaxToken();
        configStore = IOSWAP_RestrictedFactory(_factory).configStore();
    }
    
    receive() external payable {
        require(msg.sender == WETH, 'Transfer failed'); // only accept ETH via fallback from the WETH contract
    }

    // **** ADD LIQUIDITY ****
    function _getPair(address tokenA, address tokenB, uint256 pairIndex) internal returns (address pair) {
        uint256 pairLen = IOSWAP_RestrictedFactory(factory).pairLength(tokenA, tokenB);
        if (pairIndex == 0 && pairLen == 0) {
            pair = IOSWAP_RestrictedFactory(factory).createPair(tokenA, tokenB);
        } else {
            require(pairIndex <= pairLen, "Invalid pair index");
            pair = pairFor(tokenA, tokenB, pairIndex);
        }
    }
    function _checkOrder(
        address pair,
        bool direction, 
        uint256 offerIndex,
        bool allowAll,
        uint256 restrictedPrice,
        uint256 startDate,
        uint256 expire
    ) internal view {
        (,,bool _allowAll,,,uint256 _restrictedPrice,uint256 _startDate,uint256 _expire) = IOSWAP_RestrictedPair(pair).offers(direction, offerIndex);
        require(allowAll==_allowAll && restrictedPrice==_restrictedPrice && startDate==_startDate && expire==_expire, "Order params not match");
    }
    // params:
    // 0: pairIndex
    // 1: offerIndex
    // 2: amountIn
    // 3: allowAll
    // 4: restrictedPrice
    // 5: startDate
    // 6: expire
    // 7: feeIn
    // 8: deadline
    function addLiquidity(
        address tokenA,
        address tokenB,
        bool addingTokenA,
        uint256[9] calldata params,
        bytes32 merkleRoot,
        string calldata allowlistIpfsCid
    ) public virtual override ensure(params[8]) returns (address pair, uint256 _offerIndex) {
        pair = _getPair(tokenA, tokenB, params[0]);

        _offerIndex = params[1];

        bool direction = (tokenA < tokenB) ? !addingTokenA : addingTokenA;
        uint256 feeIn = params[7];

        if (_offerIndex == 0) {
            {
            uint256 perOrderFee = uint256(IOSWAP_ConfigStore(configStore).customParam(FEE_PER_ORDER));
            TransferHelper.safeTransferFrom(govToken, msg.sender, pair, perOrderFee);
            feeIn = feeIn.sub(perOrderFee);
            }
            _offerIndex = IOSWAP_RestrictedPair4(pair).createOrder(msg.sender, direction, params[3]!=0, params[4], params[5], params[6]);
        } else {
            _checkOrder(pair, direction, _offerIndex, params[3]!=0, params[4], params[5], params[6]);
        }
        IOSWAP_RestrictedPair4(pair).setMerkleRoot(direction, _offerIndex, merkleRoot, allowlistIpfsCid);

        if (params[2] > 0)
            TransferHelper.safeTransferFrom(addingTokenA ? tokenA : tokenB, msg.sender, pair, params[2]);
        if (feeIn > 0)
            TransferHelper.safeTransferFrom(govToken, msg.sender, pair, feeIn);

        if (params[2] > 0 || feeIn > 0) {
            IOSWAP_RestrictedPair4(pair).addLiquidity(direction, _offerIndex, feeIn);
        }
    }
    function addLiquidityETH(
        address tokenA,
        bool addingTokenA,
        uint256[9] calldata params,
        bytes32 merkleRoot,
        string calldata allowlistIpfsCid
    ) public virtual override payable ensure(params[8]) returns (address pair, uint256 _offerIndex) {
        pair = _getPair(tokenA, WETH, params[0]);

        _offerIndex = params[1];

        bool direction = (tokenA < WETH) ? !addingTokenA : addingTokenA;
        uint256 feeIn = params[7];

        if (_offerIndex == 0) {
            {
            uint256 perOrderFee = uint256(IOSWAP_ConfigStore(configStore).customParam(FEE_PER_ORDER));
            TransferHelper.safeTransferFrom(govToken, msg.sender, pair, perOrderFee);
            feeIn = feeIn.sub(perOrderFee);
            }
            _offerIndex = IOSWAP_RestrictedPair4(pair).createOrder(msg.sender, direction, params[3]!=0, params[4], params[5], params[6]);
        } else {
            _checkOrder(pair, direction, _offerIndex, params[3]!=0, params[4], params[5], params[6]);
        }
        IOSWAP_RestrictedPair4(pair).setMerkleRoot(direction, _offerIndex, merkleRoot, allowlistIpfsCid);

        if (addingTokenA) {
            if (params[2] > 0)
                TransferHelper.safeTransferFrom(tokenA, msg.sender, pair, params[2]);
        } else {
            uint256 ETHIn = msg.value;
            IWETH(WETH).deposit{value: ETHIn}();
            require(IWETH(WETH).transfer(pair, ETHIn), 'Transfer failed');
        }
        if (feeIn > 0)
            TransferHelper.safeTransferFrom(govToken, msg.sender, pair, feeIn);

        if (params[2] > 0 || msg.value > 0 || feeIn > 0)
            IOSWAP_RestrictedPair4(pair).addLiquidity(direction, _offerIndex, feeIn);
    }

    // **** REMOVE LIQUIDITY ****
    function removeLiquidity(
        address tokenA,
        address tokenB,
        bool removingTokenA,
        address to,
        uint256 pairIndex,
        uint256 offerIndex,
        uint256 amountOut,
        uint256 receivingOut,
        uint256 feeOut,
        uint256 deadline
    ) public virtual override ensure(deadline) {
        address pair = pairFor(tokenA, tokenB, pairIndex);
        bool direction = (tokenA < tokenB) ? !removingTokenA : removingTokenA;
        IOSWAP_RestrictedPair4(pair).removeLiquidity(msg.sender, direction, offerIndex, amountOut, receivingOut, feeOut);

        (uint256 tokenAOut, uint256 tokenBOut) = removingTokenA ? (amountOut, receivingOut) : (receivingOut, amountOut);
        if (tokenAOut > 0) {
            TransferHelper.safeTransfer(tokenA, to, tokenAOut);
        }
        if (tokenBOut > 0) {
            TransferHelper.safeTransfer(tokenB, to, tokenBOut);
        }
        if (feeOut > 0) {
            TransferHelper.safeTransfer(govToken, to, feeOut);
        }
    }
    function removeLiquidityETH(
        address tokenA,
        bool removingTokenA,
        address to,
        uint256 pairIndex,
        uint256 offerIndex,
        uint256 amountOut,
        uint256 receivingOut,
        uint256 feeOut,
        uint256 deadline
    ) public virtual override ensure(deadline) {
        address pair = pairFor(tokenA, WETH, pairIndex);
        bool direction = (tokenA < WETH) ? !removingTokenA : removingTokenA;
        IOSWAP_RestrictedPair4(pair).removeLiquidity(msg.sender, direction, offerIndex, amountOut, receivingOut, feeOut);

        (uint256 tokenOut, uint256 ethOut) = removingTokenA ? (amountOut, receivingOut) : (receivingOut, amountOut);

        if (tokenOut > 0) {
            TransferHelper.safeTransfer(tokenA, to, tokenOut);
        }
        if (ethOut > 0) {
            IWETH(WETH).withdraw(ethOut);
            TransferHelper.safeTransferETH(to, ethOut);
        }
        if (feeOut > 0) {
            TransferHelper.safeTransfer(govToken, to, feeOut);
        }
    }
    function removeAllLiquidity(
        address tokenA,
        address tokenB,
        address to,
        uint256 pairIndex,
        uint256 deadline
    ) public virtual override ensure(deadline) returns (uint256 amountA, uint256 amountB, uint256 feeOut) {
        address pair = pairFor(tokenA, tokenB, pairIndex);
        (uint256 amount0, uint256 amount1, uint256 _feeOut) = IOSWAP_RestrictedPair4(pair).removeAllLiquidity(msg.sender);
        // (uint256 amount0, uint256 amount1) = IOSWAP_RestrictedPair4(pair).removeAllLiquidity1D(msg.sender, false);
        // (uint256 amount2, uint256 amount3) = IOSWAP_RestrictedPair4(pair).removeAllLiquidity1D(msg.sender, true);
        // amount0 = amount0.add(amount3);
        // amount1 = amount1.add(amount2);
        (amountA, amountB) = (tokenA < tokenB) ? (amount0, amount1) : (amount1, amount0);
        feeOut = _feeOut;
        TransferHelper.safeTransfer(tokenA, to, amountA);
        TransferHelper.safeTransfer(tokenB, to, amountB);
        TransferHelper.safeTransfer(govToken, to, feeOut);
    }
    function removeAllLiquidityETH(
        address tokenA,
        address to, 
        uint256 pairIndex,
        uint256 deadline
    ) public virtual override ensure(deadline) returns (uint256 amountToken, uint256 amountETH, uint256 feeOut) {
        address pair = pairFor(tokenA, WETH, pairIndex);
        (uint256 amount0, uint256 amount1, uint256 _feeOut) = IOSWAP_RestrictedPair4(pair).removeAllLiquidity(msg.sender);
        // (uint256 amount0, uint256 amount1) = IOSWAP_RestrictedPair4(pair).removeAllLiquidity1D(msg.sender, false);
        // (uint256 amount2, uint256 amount3) = IOSWAP_RestrictedPair4(pair).removeAllLiquidity1D(msg.sender, true);
        // amount0 = amount0.add(amount3);
        // amount1 = amount1.add(amount2);
        (amountToken, amountETH) = (tokenA < WETH) ? (amount0, amount1) : (amount1, amount0);
        feeOut = _feeOut;
        TransferHelper.safeTransfer(tokenA, to, amountToken);
        IWETH(WETH).withdraw(amountETH);
        TransferHelper.safeTransferETH(to, amountETH);
        TransferHelper.safeTransfer(govToken, to, feeOut);
    }

    // **** LIBRARY FUNCTIONS ****
    // returns sorted token addresses, used to handle return values from pairs sorted in this order
    function sortTokens(address tokenA, address tokenB) internal pure returns (address token0, address token1) {
        require(tokenA != tokenB, 'IDENTICAL_ADDRESSES');
        (token0, token1) = tokenA < tokenB ? (tokenA, tokenB) : (tokenB, tokenA);
        require(token0 != address(0), 'ZERO_ADDRESS');
    }

    // calculates the CREATE2 address for a pair without making any external calls
    function pairFor(address tokenA, address tokenB, uint256 index) internal view returns (address pair) {
        (address token0, address token1) = sortTokens(tokenA, tokenB);
        pair = address(uint256(keccak256(abi.encodePacked(
                hex'ff',    
                factory,
                keccak256(abi.encodePacked(token0, token1, index)),
                /*restricted*/hex'b327e3a980c558efc86f97b28d41c7a2929418be2a34a24e1696ec3b20dfa23c' // restricted init code hash
            ))));
    }
}