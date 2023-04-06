// SPDX-License-Identifier: GPL-3.0-only

pragma solidity =0.6.11;

interface IOSWAP_RestrictedLiquidityProvider4 {
    function factory() external view returns (address);
    function WETH() external view returns (address);
    function govToken() external view returns (address);
    function configStore() external view returns (address);

    // **** ADD LIQUIDITY ****
    function addLiquidity(
        address tokenA,
        address tokenB,
        bool addingTokenA,
        uint256[9] calldata params,
        bytes32 merkleRoot,
        string calldata allowlistIpfsCid
    ) external returns (address pair, uint256 _offerIndex);
    function addLiquidityETH(
        address tokenA,
        bool addingTokenA,
        uint256[9] calldata params,
        bytes32 merkleRoot,
        string calldata allowlistIpfsCid
    ) external payable returns (address pair, uint256 _offerIndex);


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
    ) external;
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
    ) external;
    function removeAllLiquidity(
        address tokenA,
        address tokenB,
        address to,
        uint256 pairIndex,
        uint256 deadline
    ) external returns (uint256 amountA, uint256 amountB, uint256 feeOut);
    function removeAllLiquidityETH(
        address tokenA,
        address to,
        uint256 pairIndex,
        uint256 deadline
    ) external returns (uint256 amountToken, uint256 amountETH, uint256 feeOut);
}

pragma solidity =0.6.11;

interface IOSWAP_PausablePair {
    function isLive() external view returns (bool);
    function factory() external view returns (address);

    function setLive(bool _isLive) external;
}
pragma solidity =0.6.11;


interface IOSWAP_RestrictedPair is IOSWAP_PausablePair {

    struct Offer {
        address provider;
        bool locked;
        bool allowAll;
        uint256 amount;
        uint256 receiving;
        uint256 restrictedPrice;
        uint256 startDate;
        uint256 expire;
    } 

    event NewProviderOffer(address indexed provider, bool indexed direction, uint256 index, bool allowAll, uint256 restrictedPrice, uint256 startDate, uint256 expire);
    // event AddLiquidity(address indexed provider, bool indexed direction, uint256 indexed index, uint256 amount, uint256 newAmountBalance);
    event Lock(bool indexed direction, uint256 indexed index);
    // event RemoveLiquidity(address indexed provider, bool indexed direction, uint256 indexed index, uint256 amountOut, uint256 receivingOut, uint256 newAmountBalance, uint256 newReceivingBalance);
    event Swap(address indexed to, bool indexed direction, uint256 amountIn, uint256 amountOut, uint256 tradeFee, uint256 protocolFee);
    event SwappedOneOffer(address indexed provider, bool indexed direction, uint256 indexed index, uint256 price, uint256 amountOut, uint256 amountIn, uint256 newAmountBalance, uint256 newReceivingBalance);

    event ApprovedTrader(bool indexed direction, uint256 indexed offerIndex, address indexed trader, uint256 allocation);

    function counter(bool direction) external view returns (uint256);
    function offers(bool direction, uint256 i) external view returns (
        address provider,
        bool locked,
        bool allowAll,
        uint256 amount,
        uint256 receiving,
        uint256 restrictedPrice,
        uint256 startDate,
        uint256 expire
    );

    function providerOfferIndex(bool direction, address provider, uint256 i) external view returns (uint256 index);
    function approvedTrader(bool direction, uint256 offerIndex, uint256 i) external view returns (address trader);
    function isApprovedTrader(bool direction, uint256 offerIndex, address trader) external view returns (bool);
    function traderAllocation(bool direction, uint256 offerIndex, address trader) external view returns (uint256 amount);
    function traderOffer(bool direction, address trader, uint256 i) external view returns (uint256 index);

    function governance() external view returns (address);
    function whitelistFactory() external view returns (address);
    function restrictedLiquidityProvider() external view returns (address);
    function govToken() external view returns (address);
    function configStore() external view returns (address);
    function token0() external view returns (address);
    function token1() external view returns (address);
    function scaleDirection() external view returns (bool);
    function scaler() external view returns (uint256);

    function lastGovBalance() external view returns (uint256);
    function lastToken0Balance() external view returns (uint256);
    function lastToken1Balance() external view returns (uint256);
    function protocolFeeBalance0() external view returns (uint256);
    function protocolFeeBalance1() external view returns (uint256);
    function feeBalance() external view returns (uint256);

    function initialize(address _token0, address _token1) external;

    function getProviderOfferIndexLength(address provider, bool direction) external view returns (uint256);
    function getTraderOffer(address trader, bool direction, uint256 start, uint256 length) external view returns (uint256[] memory index, address[] memory provider, bool[] memory lockedAndAllowAll, uint256[] memory receiving, uint256[] memory amountAndPrice, uint256[] memory startDateAndExpire);
    function getProviderOffer(address _provider, bool direction, uint256 start, uint256 length) external view returns (uint256[] memory index, address[] memory provider, bool[] memory lockedAndAllowAll, uint256[] memory receiving, uint256[] memory amountAndPrice, uint256[] memory startDateAndExpire);
    function getApprovedTraderLength(bool direction, uint256 offerIndex) external view returns (uint256);
    function getApprovedTrader(bool direction, uint256 offerIndex, uint256 start, uint256 end) external view returns (address[] memory traders, uint256[] memory allocation);

    function getOffers(bool direction, uint256 start, uint256 length) external view returns (uint256[] memory index, address[] memory provider, bool[] memory lockedAndAllowAll, uint256[] memory receiving, uint256[] memory amountAndPrice, uint256[] memory startDateAndExpire);

    function getLastBalances() external view returns (uint256, uint256);
    function getBalances() external view returns (uint256, uint256, uint256);

    function getAmountOut(address tokenIn, uint256 amountIn, address trader, bytes calldata data) external view returns (uint256 amountOut);
    function getAmountIn(address tokenOut, uint256 amountOut, address trader, bytes calldata data) external view returns (uint256 amountIn);

    function createOrder(address provider, bool direction, bool allowAll, uint256 restrictedPrice, uint256 startDate, uint256 expire) external returns (uint256 index);
    // function addLiquidity(bool direction, uint256 index) external;
    function lockOffer(bool direction, uint256 index) external;
    // function removeLiquidity(address provider, bool direction, uint256 index, uint256 amountOut, uint256 receivingOut) external;
    // function removeAllLiquidity(address provider) external returns (uint256 amount0, uint256 amount1);
    // function removeAllLiquidity1D(address provider, bool direction) external returns (uint256 totalAmount, uint256 totalReceiving);

    // function setApprovedTrader(bool direction, uint256 offerIndex, address trader, uint256 allocation) external;
    // function setMultipleApprovedTraders(bool direction, uint256 offerIndex, address[] calldata trader, uint256[] calldata allocation) external;

    function swap(uint256 amount0Out, uint256 amount1Out, address to, address trader, bytes calldata data) external;

    function sync() external;

    function redeemProtocolFee() external;
}
pragma solidity =0.6.11;


interface IOSWAP_RestrictedPairPrepaidFee is IOSWAP_RestrictedPair {

    event AddLiquidity(address indexed provider, bool indexed direction, uint256 indexed index, uint256 amount, uint256 newAmountBalance, uint256 feeIn, uint256 newFeeBalance);
    event RemoveLiquidity(address indexed provider, bool indexed direction, uint256 indexed index, uint256 amountOut, uint256 receivingOut, uint256 feeOut, uint256 newAmountBalance, uint256 newReceivingBalance, uint256 newFeeBalance);

    function prepaidFeeBalance(bool direction, uint256 i) external view returns (uint balance);

    function addLiquidity(bool direction, uint256 index, uint256 feeIn) external;
    function removeLiquidity(address provider, bool direction, uint256 index, uint256 amountOut, uint256 receivingOut, uint256 feeOut) external;
    function removeAllLiquidity(address provider) external returns (uint256 amount0, uint256 amount1, uint256 feeOut);
    function removeAllLiquidity1D(address provider, bool direction) external returns (uint256 totalAmount, uint256 totalReceiving, uint256 totalRemainingFee);
 
}
pragma solidity =0.6.11;


interface IOSWAP_RestrictedPair4 is IOSWAP_RestrictedPairPrepaidFee {

    event MerkleRoot(address indexed provider, bool indexed direction, uint256 index, bytes32 merkleRoot, string ipfsCid);

    function lastTraderAllocation(bool direction, uint256 offerIndex, address trader) external view returns (uint256 lastAllocation);
    function offerMerkleRoot(bool direction, uint256 i) external view returns (bytes32 root);
    function offerAllowlistIpfsCid(bool direction, uint256 i) external view returns (string memory ipfsCid);
    function setMerkleRoot(bool direction, uint256 index, bytes32 merkleRoot, string calldata ipfsCid) external ;
    function setApprovedTraderByMerkleProof(bool direction, uint256 offerIndex, address trader, uint256 allocation, bytes32[] calldata proof) external;
}
pragma solidity =0.6.11;

interface IOSWAP_PausableFactory {
    event Shutdowned();
    event Restarted();
    event PairShutdowned(address indexed pair);
    event PairRestarted(address indexed pair);

    function governance() external view returns (address);

    function isLive() external returns (bool);
    function setLive(bool _isLive) external;
    function setLiveForPair(address pair, bool live) external;
}

pragma solidity =0.6.11;


interface IOSWAP_RestrictedFactory is IOSWAP_PausableFactory { 

    event PairCreated(address indexed token0, address indexed token1, address pair, uint newPairSize, uint newSize);
    event Shutdowned();
    event Restarted();
    event PairShutdowned(address indexed pair);
    event PairRestarted(address indexed pair);
    event ParamSet(bytes32 name, bytes32 value);
    event ParamSet2(bytes32 name, bytes32 value1, bytes32 value2);
    event OracleAdded(address indexed token0, address indexed token1, address oracle);

    function whitelistFactory() external view returns (address);
    function pairCreator() external returns (address);
    function configStore() external returns (address);

    function tradeFee() external returns (uint256);
    function protocolFee() external returns (uint256);
    function protocolFeeTo() external returns (address);

    function getPair(address tokenA, address tokenB, uint256 i) external returns (address pair);
    function pairIdx(address pair) external returns (uint256 i);
    function allPairs(uint256 i) external returns (address pair);

    function restrictedLiquidityProvider() external returns (address);
    function oracles(address tokenA, address tokenB) external returns (address oracle);
    function isOracle(address oracle) external returns (bool);

    function init(address _restrictedLiquidityProvider) external;
    function getCreateAddresses() external view returns (address _governance, address _whitelistFactory, address _restrictedLiquidityProvider, address _configStore);

    function pairLength(address tokenA, address tokenB) external view returns (uint256);
    function allPairsLength() external view returns (uint);

    function createPair(address tokenA, address tokenB) external returns (address pair);

    function setOracle(address tokenA, address tokenB, address oracle) external;
    function addOldOracleToNewPair(address tokenA, address tokenB, address oracle) external;

    function isPair(address pair) external view returns (bool);

    function setTradeFee(uint256 _tradeFee) external;
    function setProtocolFee(uint256 _protocolFee) external;
    function setProtocolFeeTo(address _protocolFeeTo) external;

    function checkAndGetOracleSwapParams(address tokenA, address tokenB) external view returns (address oracle_, uint256 tradeFee_, uint256 protocolFee_);
    function checkAndGetOracle(address tokenA, address tokenB) external view returns (address oracle);
}
pragma solidity =0.6.11;

interface IOAXDEX_Governance {

    struct NewStake {
        uint256 amount;
        uint256 timestamp;
    }
    struct VotingConfig {
        uint256 minExeDelay;
        uint256 minVoteDuration;
        uint256 maxVoteDuration;
        uint256 minOaxTokenToCreateVote;
        uint256 minQuorum;
    }

    event ParamSet(bytes32 indexed name, bytes32 value);
    event ParamSet2(bytes32 name, bytes32 value1, bytes32 value2);
    event AddVotingConfig(bytes32 name, 
        uint256 minExeDelay,
        uint256 minVoteDuration,
        uint256 maxVoteDuration,
        uint256 minOaxTokenToCreateVote,
        uint256 minQuorum);
    event SetVotingConfig(bytes32 indexed configName, bytes32 indexed paramName, uint256 minExeDelay);

    event Stake(address indexed who, uint256 value);
    event Unstake(address indexed who, uint256 value);

    event NewVote(address indexed vote);
    event NewPoll(address indexed poll);
    event Vote(address indexed account, address indexed vote, uint256 option);
    event Poll(address indexed account, address indexed poll, uint256 option);
    event Executed(address indexed vote);
    event Veto(address indexed vote);

    function votingConfigs(bytes32) external view returns (uint256 minExeDelay,
        uint256 minVoteDuration,
        uint256 maxVoteDuration,
        uint256 minOaxTokenToCreateVote,
        uint256 minQuorum);
    function votingConfigProfiles(uint256) external view returns (bytes32);

    function oaxToken() external view returns (address);
    function votingToken() external view returns (address);
    function freezedStake(address) external view returns (uint256 amount, uint256 timestamp);
    function stakeOf(address) external view returns (uint256);
    function totalStake() external view returns (uint256);

    function votingRegister() external view returns (address);
    function votingExecutor(uint256) external view returns (address);
    function votingExecutorInv(address) external view returns (uint256);
    function isVotingExecutor(address) external view returns (bool);
    function admin() external view returns (address);
    function minStakePeriod() external view returns (uint256);

    function voteCount() external view returns (uint256);
    function votingIdx(address) external view returns (uint256);
    function votings(uint256) external view returns (address);


	function votingConfigProfilesLength() external view returns(uint256);
	function getVotingConfigProfiles(uint256 start, uint256 length) external view returns(bytes32[] memory profiles);
    function getVotingParams(bytes32) external view returns (uint256 _minExeDelay, uint256 _minVoteDuration, uint256 _maxVoteDuration, uint256 _minOaxTokenToCreateVote, uint256 _minQuorum);

    function setVotingRegister(address _votingRegister) external;
    function votingExecutorLength() external view returns (uint256);
    function initVotingExecutor(address[] calldata _setVotingExecutor) external;
    function setVotingExecutor(address _setVotingExecutor, bool _bool) external;
    function initAdmin(address _admin) external;
    function setAdmin(address _admin) external;
    function addVotingConfig(bytes32 name, uint256 minExeDelay, uint256 minVoteDuration, uint256 maxVoteDuration, uint256 minOaxTokenToCreateVote, uint256 minQuorum) external;
    function setVotingConfig(bytes32 configName, bytes32 paramName, uint256 paramValue) external;
    function setMinStakePeriod(uint _minStakePeriod) external;

    function stake(uint256 value) external;
    function unlockStake() external;
    function unstake(uint256 value) external;
    function allVotings() external view returns (address[] memory);
    function getVotingCount() external view returns (uint256);
    function getVotings(uint256 start, uint256 count) external view returns (address[] memory _votings);

    function isVotingContract(address votingContract) external view returns (bool);

    function getNewVoteId() external returns (uint256);
    function newVote(address vote, bool isExecutiveVote) external;
    function voted(bool poll, address account, uint256 option) external;
    function executed() external;
    function veto(address voting) external;
    function closeVote(address vote) external;
}

pragma solidity =0.6.11;

// helper methods for interacting with ERC20 tokens and sending ETH that do not consistently return true/false
library TransferHelper {
    function safeApprove(address token, address to, uint value) internal {
        // bytes4(keccak256(bytes('approve(address,uint256)')));
        (bool success, bytes memory data) = token.call(abi.encodeWithSelector(0x095ea7b3, to, value));
        require(success && (data.length == 0 || abi.decode(data, (bool))), 'TransferHelper: APPROVE_FAILED');
    }

    function safeTransfer(address token, address to, uint value) internal {
        // bytes4(keccak256(bytes('transfer(address,uint256)')));
        (bool success, bytes memory data) = token.call(abi.encodeWithSelector(0xa9059cbb, to, value));
        require(success && (data.length == 0 || abi.decode(data, (bool))), 'TransferHelper: TRANSFER_FAILED');
    }

    function safeTransferFrom(address token, address from, address to, uint value) internal {
        // bytes4(keccak256(bytes('transferFrom(address,address,uint256)')));
        (bool success, bytes memory data) = token.call(abi.encodeWithSelector(0x23b872dd, from, to, value));
        require(success && (data.length == 0 || abi.decode(data, (bool))), 'TransferHelper: TRANSFER_FROM_FAILED');
    }

    function safeTransferETH(address to, uint value) internal {
        (bool success,) = to.call{value:value}(new bytes(0));
        require(success, 'TransferHelper: ETH_TRANSFER_FAILED');
    }
}


pragma solidity >=0.6.0 <0.8.0;

/**
 * @dev Wrappers over Solidity's arithmetic operations with added overflow
 * checks.
 *
 * Arithmetic operations in Solidity wrap on overflow. This can easily result
 * in bugs, because programmers usually assume that an overflow raises an
 * error, which is the standard behavior in high level programming languages.
 * `SafeMath` restores this intuition by reverting the transaction when an
 * operation overflows.
 *
 * Using this library instead of the unchecked operations eliminates an entire
 * class of bugs, so it's recommended to use it always.
 */
library SafeMath {
    /**
     * @dev Returns the addition of two unsigned integers, reverting on
     * overflow.
     *
     * Counterpart to Solidity's `+` operator.
     *
     * Requirements:
     *
     * - Addition cannot overflow.
     */
    function add(uint256 a, uint256 b) internal pure returns (uint256) {
        uint256 c = a + b;
        require(c >= a, "SafeMath: addition overflow");

        return c;
    }

    /**
     * @dev Returns the subtraction of two unsigned integers, reverting on
     * overflow (when the result is negative).
     *
     * Counterpart to Solidity's `-` operator.
     *
     * Requirements:
     *
     * - Subtraction cannot overflow.
     */
    function sub(uint256 a, uint256 b) internal pure returns (uint256) {
        return sub(a, b, "SafeMath: subtraction overflow");
    }

    /**
     * @dev Returns the subtraction of two unsigned integers, reverting with custom message on
     * overflow (when the result is negative).
     *
     * Counterpart to Solidity's `-` operator.
     *
     * Requirements:
     *
     * - Subtraction cannot overflow.
     */
    function sub(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {
        require(b <= a, errorMessage);
        uint256 c = a - b;

        return c;
    }

    /**
     * @dev Returns the multiplication of two unsigned integers, reverting on
     * overflow.
     *
     * Counterpart to Solidity's `*` operator.
     *
     * Requirements:
     *
     * - Multiplication cannot overflow.
     */
    function mul(uint256 a, uint256 b) internal pure returns (uint256) {
        // Gas optimization: this is cheaper than requiring 'a' not being zero, but the
        // benefit is lost if 'b' is also tested.
        // See: https://github.com/OpenZeppelin/openzeppelin-contracts/pull/522
        if (a == 0) {
            return 0;
        }

        uint256 c = a * b;
        require(c / a == b, "SafeMath: multiplication overflow");

        return c;
    }

    /**
     * @dev Returns the integer division of two unsigned integers. Reverts on
     * division by zero. The result is rounded towards zero.
     *
     * Counterpart to Solidity's `/` operator. Note: this function uses a
     * `revert` opcode (which leaves remaining gas untouched) while Solidity
     * uses an invalid opcode to revert (consuming all remaining gas).
     *
     * Requirements:
     *
     * - The divisor cannot be zero.
     */
    function div(uint256 a, uint256 b) internal pure returns (uint256) {
        return div(a, b, "SafeMath: division by zero");
    }

    /**
     * @dev Returns the integer division of two unsigned integers. Reverts with custom message on
     * division by zero. The result is rounded towards zero.
     *
     * Counterpart to Solidity's `/` operator. Note: this function uses a
     * `revert` opcode (which leaves remaining gas untouched) while Solidity
     * uses an invalid opcode to revert (consuming all remaining gas).
     *
     * Requirements:
     *
     * - The divisor cannot be zero.
     */
    function div(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {
        require(b > 0, errorMessage);
        uint256 c = a / b;
        // assert(a == b * c + a % b); // There is no case in which this doesn't hold

        return c;
    }

    /**
     * @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),
     * Reverts when dividing by zero.
     *
     * Counterpart to Solidity's `%` operator. This function uses a `revert`
     * opcode (which leaves remaining gas untouched) while Solidity uses an
     * invalid opcode to revert (consuming all remaining gas).
     *
     * Requirements:
     *
     * - The divisor cannot be zero.
     */
    function mod(uint256 a, uint256 b) internal pure returns (uint256) {
        return mod(a, b, "SafeMath: modulo by zero");
    }

    /**
     * @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),
     * Reverts with custom message when dividing by zero.
     *
     * Counterpart to Solidity's `%` operator. This function uses a `revert`
     * opcode (which leaves remaining gas untouched) while Solidity uses an
     * invalid opcode to revert (consuming all remaining gas).
     *
     * Requirements:
     *
     * - The divisor cannot be zero.
     */
    function mod(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {
        require(b != 0, errorMessage);
        return a % b;
    }
}

pragma solidity =0.6.11;

interface IWETH {
    function deposit() external payable;
    function transfer(address to, uint value) external returns (bool);
    function withdraw(uint) external;
}

pragma solidity =0.6.11;

interface IOSWAP_ConfigStore {
    event ParamSet(bytes32 indexed name, bytes32 value);

    function governance() external view returns (address);

    function customParam(bytes32 paramName) external view returns (bytes32 paramValue);
    function customParamNames(uint256 i) external view returns (bytes32 paramName);
    function customParamNamesLength() external view returns (uint256 length);
    function customParamNamesIdx(bytes32 paramName) external view returns (uint256 i);

    function setCustomParam(bytes32 paramName, bytes32 paramValue) external;
    function setMultiCustomParam(bytes32[] calldata paramName, bytes32[] calldata paramValue) external;
}

pragma solidity =0.6.11;









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