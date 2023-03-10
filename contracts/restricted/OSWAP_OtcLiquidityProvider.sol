// SPDX-License-Identifier: GPL-3.0-only
pragma solidity =0.6.11;

import './interfaces/IOSWAP_OtcLiquidityProvider.sol';
import './interfaces/IOSWAP_OtcPair.sol';
import './interfaces/IOSWAP_RestrictedFactory.sol';
import '../gov/interfaces/IOAXDEX_Governance.sol';
import '../libraries/TransferHelper.sol';
import '../libraries/SafeMath.sol';
import '../interfaces/IWETH.sol';
import './interfaces/IOSWAP_ConfigStore.sol';

contract OSWAP_OtcLiquidityProvider is IOSWAP_OtcLiquidityProvider {
    using SafeMath for uint256;

    bytes32 constant FEE_PER_ORDER = "OtcPair.feePerOrder";
    bytes32 constant FEE_PER_TRADER = "OtcPair.feePerTrader";

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
        (,,bool _allowAll,,,,,uint256 _restrictedPrice,uint256 _startDate,uint256 _expire) = IOSWAP_OtcPair(pair).offers(direction, offerIndex);
        require(allowAll==_allowAll && restrictedPrice==_restrictedPrice && startDate==_startDate && expire==_expire, "Order params not match");
    }
    function addLiquidity(
        address tokenA,
        address tokenB,
        bool addingTokenA,
        uint256 pairIndex,
        uint256 offerIndex,
        uint256 amountIn,
        bool allowAll,
        uint256 restrictedPrice,
        uint256 startDate,
        uint256 expire,
        uint256 deadline
    ) public virtual override ensure(deadline) returns (address pair, uint256 _offerIndex) {
        pair = _getPair(tokenA, tokenB, pairIndex);

        bool direction = (tokenA < tokenB) ? !addingTokenA : addingTokenA;

        if (offerIndex == 0) {
            uint256 feeIn = uint256(IOSWAP_ConfigStore(configStore).customParam(FEE_PER_ORDER));
            TransferHelper.safeTransferFrom(govToken, msg.sender, pair, feeIn);
            offerIndex = IOSWAP_OtcPair(pair).createOrder(msg.sender, direction, allowAll, restrictedPrice, startDate, expire);
        } else {
            _checkOrder(pair, direction, offerIndex, allowAll, restrictedPrice, startDate, expire);
        }

        if (amountIn > 0) {
            TransferHelper.safeTransferFrom(addingTokenA ? tokenA : tokenB, msg.sender, pair, amountIn);
            IOSWAP_OtcPair(pair).addLiquidity(direction, offerIndex);
        }

        _offerIndex = offerIndex;
    }
    function addLiquidityETH(
        address tokenA,
        bool addingTokenA,
        uint256 pairIndex,
        uint256 offerIndex,
        uint256 amountAIn,
        bool allowAll,
        uint256 restrictedPrice,
        uint256 startDate,
        uint256 expire,
        uint256 deadline
    ) public virtual override payable ensure(deadline) returns (/*bool direction, */address pair, uint256 _offerIndex) {
        pair = _getPair(tokenA, WETH, pairIndex);

        bool direction = (tokenA < WETH) ? !addingTokenA : addingTokenA;

        if (offerIndex == 0) {
            uint256 feeIn = uint256(IOSWAP_ConfigStore(configStore).customParam(FEE_PER_ORDER));
            TransferHelper.safeTransferFrom(govToken, msg.sender, pair, feeIn);
            offerIndex = IOSWAP_OtcPair(pair).createOrder(msg.sender, direction, allowAll, restrictedPrice, startDate, expire);
        } else {
            _checkOrder(pair, direction, offerIndex, allowAll, restrictedPrice, startDate, expire);
        }

        if (addingTokenA) {
            if (amountAIn > 0)
                TransferHelper.safeTransferFrom(tokenA, msg.sender, pair, amountAIn);
        } else {
            uint256 ETHIn = msg.value;
            IWETH(WETH).deposit{value: ETHIn}();
            require(IWETH(WETH).transfer(pair, ETHIn), 'Transfer failed');
        }
        if (amountAIn > 0 || msg.value > 0)
            IOSWAP_OtcPair(pair).addLiquidity(direction, offerIndex);

        _offerIndex = offerIndex;
    }

    function _addLiquidity(address tokenA, address tokenB, bool addingTokenA, uint256[11] calldata param) internal virtual 
        returns (address pair, uint256 offerIndex) 
    {
        (pair, offerIndex) = addLiquidity(
            tokenA,
            tokenB,
            addingTokenA,
            param[3],
            param[4],
            param[5],
            param[6]==1,
            param[7],
            param[8],
            param[9],
            param[10]
        );
    }
    function addLiquidityAndTrader(
        uint256[11] calldata param, 
        address[] calldata trader, 
        uint256[] calldata allocation
    ) external virtual override 
        returns (address pair, uint256 offerIndex) 
    {
        require(param.length == 11, "Invalid param length");
        address tokenA = address(bytes20(bytes32(param[0]<<96)));
        address tokenB = address(bytes20(bytes32(param[1]<<96)));
        bool b = param[2]==1; // addingTokenA
        (pair, offerIndex) = _addLiquidity(tokenA, tokenB, b, param);
        b = (tokenA < tokenB) ? !b : b; // direction
        
        uint256 feePerTrader = uint256(IOSWAP_ConfigStore(configStore).customParam(FEE_PER_TRADER));
        TransferHelper.safeTransferFrom(govToken, msg.sender, pair, feePerTrader.mul(trader.length));
        IOSWAP_OtcPair(pair).setMultipleApprovedTraders(b, offerIndex, trader, allocation);
    }
    function _addLiquidityETH(address tokenA, bool addingTokenA, uint256[10] calldata param) internal virtual
        returns (address pair, uint256 offerIndex) 
    {
        (pair, offerIndex) = addLiquidityETH(
            tokenA,
            addingTokenA,
            param[2],
            param[3],
            param[4],
            param[5]==1,
            param[6],
            param[7],
            param[8],
            param[9]
        );
    }
    function addLiquidityETHAndTrader(
        uint256[10] calldata param, 
        address[] calldata trader, 
        uint256[] calldata allocation
    ) external virtual override payable 
        returns (address pair, uint256 offerIndex) 
    {
        require(param.length == 10, "Invalid param length");
        address tokenA = address(bytes20(bytes32(param[0]<<96)));
        bool b = param[1]==1; // addingTokenA
        (pair, offerIndex) = _addLiquidityETH(tokenA, b, param);
        b = (tokenA < WETH) ? !b : b; // direction
        uint256 feePerTrader = uint256(IOSWAP_ConfigStore(configStore).customParam(FEE_PER_TRADER));
        TransferHelper.safeTransferFrom(govToken, msg.sender, pair, feePerTrader.mul(trader.length));
        IOSWAP_OtcPair(pair).setMultipleApprovedTraders(b, offerIndex, trader, allocation);
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
        uint256 deadline
    ) public virtual override ensure(deadline) {
        address pair = pairFor(tokenA, tokenB, pairIndex);
        bool direction = (tokenA < tokenB) ? !removingTokenA : removingTokenA;
        IOSWAP_OtcPair(pair).removeLiquidity(msg.sender, direction, offerIndex, amountOut, receivingOut);

        (uint256 tokenAOut, uint256 tokenBOut) = removingTokenA ? (amountOut, receivingOut) : (receivingOut, amountOut);
        if (tokenAOut > 0) {
            TransferHelper.safeTransfer(tokenA, to, tokenAOut);
        }
        if (tokenBOut > 0) {
            TransferHelper.safeTransfer(tokenB, to, tokenBOut);
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
        uint256 deadline
    ) public virtual override ensure(deadline) {
        address pair = pairFor(tokenA, WETH, pairIndex);
        bool direction = (tokenA < WETH) ? !removingTokenA : removingTokenA;
        IOSWAP_OtcPair(pair).removeLiquidity(msg.sender, direction, offerIndex, amountOut, receivingOut);

        (uint256 tokenOut, uint256 ethOut) = removingTokenA ? (amountOut, receivingOut) : (receivingOut, amountOut);

        if (tokenOut > 0) {
            TransferHelper.safeTransfer(tokenA, to, tokenOut);
        }
        if (ethOut > 0) {
            IWETH(WETH).withdraw(ethOut);
            TransferHelper.safeTransferETH(to, ethOut);
        }
    }
    function removeAllLiquidity(
        address tokenA,
        address tokenB,
        address to,
        uint256 pairIndex,
        uint256 deadline
    ) public virtual override ensure(deadline) returns (uint256 amountA, uint256 amountB) {
        address pair = pairFor(tokenA, tokenB, pairIndex);
        (uint256 amount0, uint256 amount1) = IOSWAP_OtcPair(pair).removeAllLiquidity(msg.sender);
        // (uint256 amount0, uint256 amount1) = IOSWAP_OtcPair(pair).removeAllLiquidity1D(msg.sender, false);
        // (uint256 amount2, uint256 amount3) = IOSWAP_OtcPair(pair).removeAllLiquidity1D(msg.sender, true);
        // amount0 = amount0.add(amount3);
        // amount1 = amount1.add(amount2);
        (amountA, amountB) = (tokenA < tokenB) ? (amount0, amount1) : (amount1, amount0);
        TransferHelper.safeTransfer(tokenA, to, amountA);
        TransferHelper.safeTransfer(tokenB, to, amountB);
    }
    function removeAllLiquidityETH(
        address tokenA,
        address to, 
        uint256 pairIndex,
        uint256 deadline
    ) public virtual override ensure(deadline) returns (uint256 amountToken, uint256 amountETH) {
        address pair = pairFor(tokenA, WETH, pairIndex);
        (uint256 amount0, uint256 amount1) = IOSWAP_OtcPair(pair).removeAllLiquidity(msg.sender);
        // (uint256 amount0, uint256 amount1) = IOSWAP_OtcPair(pair).removeAllLiquidity1D(msg.sender, false);
        // (uint256 amount2, uint256 amount3) = IOSWAP_OtcPair(pair).removeAllLiquidity1D(msg.sender, true);
        // amount0 = amount0.add(amount3);
        // amount1 = amount1.add(amount2);
        (amountToken, amountETH) = (tokenA < WETH) ? (amount0, amount1) : (amount1, amount0);
        TransferHelper.safeTransfer(tokenA, to, amountToken);
        IWETH(WETH).withdraw(amountETH);
        TransferHelper.safeTransferETH(to, amountETH);
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
                /*otc*/hex'071dad4967122e2ab9077d51af070aa79bd73c56ddd3590efd6d2a856e7d9b58' // otc init code hash
            ))));
    }

}