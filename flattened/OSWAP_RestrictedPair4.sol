// SPDX-License-Identifier: GPL-3.0-only

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

interface IERC20 {
    event Approval(address indexed owner, address indexed spender, uint value);
    event Transfer(address indexed from, address indexed to, uint value);

    function name() external view returns (string memory);
    function symbol() external view returns (string memory);
    function decimals() external view returns (uint8);
    function totalSupply() external view returns (uint);
    function balanceOf(address owner) external view returns (uint);
    function allowance(address owner, address spender) external view returns (uint);

    function approve(address spender, uint value) external returns (bool);
    function transfer(address to, uint value) external returns (bool);
    function transferFrom(address from, address to, uint value) external returns (bool);
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

/**
 * @dev Collection of functions related to the address type
 */
library Address {
    /**
     * @dev Returns true if `account` is a contract.
     *
     * [IMPORTANT]
     * ====
     * It is unsafe to assume that an address for which this function returns
     * false is an externally-owned account (EOA) and not a contract.
     *
     * Among others, `isContract` will return false for the following
     * types of addresses:
     *
     *  - an externally-owned account
     *  - a contract in construction
     *  - an address where a contract will be created
     *  - an address where a contract lived, but was destroyed
     * ====
     */
    function isContract(address account) internal view returns (bool) {
        // This method relies on extcodesize, which returns 0 for contracts in
        // construction, since the code is only stored at the end of the
        // constructor execution.

        uint256 size;
        assembly {
            size := extcodesize(account)
        }
        return size > 0;
    }

    /**
     * @dev Replacement for Solidity's `transfer`: sends `amount` wei to
     * `recipient`, forwarding all available gas and reverting on errors.
     *
     * https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost
     * of certain opcodes, possibly making contracts go over the 2300 gas limit
     * imposed by `transfer`, making them unable to receive funds via
     * `transfer`. {sendValue} removes this limitation.
     *
     * https://diligence.consensys.net/posts/2019/09/stop-using-soliditys-transfer-now/[Learn more].
     *
     * IMPORTANT: because control is transferred to `recipient`, care must be
     * taken to not create reentrancy vulnerabilities. Consider using
     * {ReentrancyGuard} or the
     * https://solidity.readthedocs.io/en/v0.5.11/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern].
     */
    function sendValue(address payable recipient, uint256 amount) internal {
        require(address(this).balance >= amount, "Address: insufficient balance");

        (bool success, ) = recipient.call{value: amount}("");
        require(success, "Address: unable to send value, recipient may have reverted");
    }

    /**
     * @dev Performs a Solidity function call using a low level `call`. A
     * plain `call` is an unsafe replacement for a function call: use this
     * function instead.
     *
     * If `target` reverts with a revert reason, it is bubbled up by this
     * function (like regular Solidity function calls).
     *
     * Returns the raw returned data. To convert to the expected return value,
     * use https://solidity.readthedocs.io/en/latest/units-and-global-variables.html?highlight=abi.decode#abi-encoding-and-decoding-functions[`abi.decode`].
     *
     * Requirements:
     *
     * - `target` must be a contract.
     * - calling `target` with `data` must not revert.
     *
     * _Available since v3.1._
     */
    function functionCall(address target, bytes memory data) internal returns (bytes memory) {
        return functionCall(target, data, "Address: low-level call failed");
    }

    /**
     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`], but with
     * `errorMessage` as a fallback revert reason when `target` reverts.
     *
     * _Available since v3.1._
     */
    function functionCall(
        address target,
        bytes memory data,
        string memory errorMessage
    ) internal returns (bytes memory) {
        return functionCallWithValue(target, data, 0, errorMessage);
    }

    /**
     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],
     * but also transferring `value` wei to `target`.
     *
     * Requirements:
     *
     * - the calling contract must have an ETH balance of at least `value`.
     * - the called Solidity function must be `payable`.
     *
     * _Available since v3.1._
     */
    function functionCallWithValue(
        address target,
        bytes memory data,
        uint256 value
    ) internal returns (bytes memory) {
        return functionCallWithValue(target, data, value, "Address: low-level call with value failed");
    }

    /**
     * @dev Same as {xref-Address-functionCallWithValue-address-bytes-uint256-}[`functionCallWithValue`], but
     * with `errorMessage` as a fallback revert reason when `target` reverts.
     *
     * _Available since v3.1._
     */
    function functionCallWithValue(
        address target,
        bytes memory data,
        uint256 value,
        string memory errorMessage
    ) internal returns (bytes memory) {
        require(address(this).balance >= value, "Address: insufficient balance for call");
        require(isContract(target), "Address: call to non-contract");

        (bool success, bytes memory returndata) = target.call{value: value}(data);
        return _verifyCallResult(success, returndata, errorMessage);
    }

    /**
     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],
     * but performing a static call.
     *
     * _Available since v3.3._
     */
    function functionStaticCall(address target, bytes memory data) internal view returns (bytes memory) {
        return functionStaticCall(target, data, "Address: low-level static call failed");
    }

    /**
     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],
     * but performing a static call.
     *
     * _Available since v3.3._
     */
    function functionStaticCall(
        address target,
        bytes memory data,
        string memory errorMessage
    ) internal view returns (bytes memory) {
        require(isContract(target), "Address: static call to non-contract");

        (bool success, bytes memory returndata) = target.staticcall(data);
        return _verifyCallResult(success, returndata, errorMessage);
    }

    /**
     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],
     * but performing a delegate call.
     *
     * _Available since v3.4._
     */
    function functionDelegateCall(address target, bytes memory data) internal returns (bytes memory) {
        return functionDelegateCall(target, data, "Address: low-level delegate call failed");
    }

    /**
     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],
     * but performing a delegate call.
     *
     * _Available since v3.4._
     */
    function functionDelegateCall(
        address target,
        bytes memory data,
        string memory errorMessage
    ) internal returns (bytes memory) {
        require(isContract(target), "Address: delegate call to non-contract");

        (bool success, bytes memory returndata) = target.delegatecall(data);
        return _verifyCallResult(success, returndata, errorMessage);
    }

    function _verifyCallResult(
        bool success,
        bytes memory returndata,
        string memory errorMessage
    ) private pure returns (bytes memory) {
        if (success) {
            return returndata;
        } else {
            // Look for revert reason and bubble it up if present
            if (returndata.length > 0) {
                // The easiest way to bubble the revert reason is using memory via assembly

                assembly {
                    let returndata_size := mload(returndata)
                    revert(add(32, returndata), returndata_size)
                }
            } else {
                revert(errorMessage);
            }
        }
    }
}

pragma solidity =0.6.11;


interface IOSWAP_FactoryBase is IOSWAP_PausableFactory {
    event PairCreated(address indexed token0, address indexed token1, address pair, uint newSize);

    function pairCreator() external view returns (address);

    function getPair(address tokenA, address tokenB) external view returns (address pair);
    function allPairs(uint) external view returns (address pair);

    function allPairsLength() external view returns (uint);

    function createPair(address tokenA, address tokenB) external returns (address pair);
}

pragma solidity =0.6.11;


interface IOSWAP_OracleFactory is IOSWAP_FactoryBase {
    event ParamSet(bytes32 name, bytes32 value);
    event ParamSet2(bytes32 name, bytes32 value1, bytes32 value2);
    event OracleAdded(address indexed token0, address indexed token1, address oracle);
    event OracleScores(address indexed oracle, uint256 score);
    event Whitelisted(address indexed who, bool allow);

    function oracleLiquidityProvider() external view returns (address);

    function tradeFee() external view returns (uint256);
    function protocolFee() external view returns (uint256);
    function feePerDelegator() external view returns (uint256);
    function protocolFeeTo() external view returns (address);

    function securityScoreOracle() external view returns (address);
    function minOracleScore() external view returns (uint256);

    function oracles(address token0, address token1) external view returns (address oracle);
    function minLotSize(address token) external view returns (uint256);
    function isOracle(address) external view returns (bool);
    function oracleScores(address oracle) external view returns (uint256);

    function whitelisted(uint256) external view returns (address);
    function whitelistedInv(address) external view returns (uint256);
    function isWhitelisted(address) external returns (bool);

    function setOracleLiquidityProvider(address _oracleRouter, address _oracleLiquidityProvider) external;

    function setOracle(address from, address to, address oracle) external;
    function addOldOracleToNewPair(address from, address to, address oracle) external;
    function setTradeFee(uint256) external;
    function setProtocolFee(uint256) external;
    function setFeePerDelegator(uint256 _feePerDelegator) external;
    function setProtocolFeeTo(address) external;
    function setSecurityScoreOracle(address, uint256) external;
    function setMinLotSize(address token, uint256 _minLotSize) external;

    function updateOracleScore(address oracle) external;

    function whitelistedLength() external view returns (uint256);
    function allWhiteListed() external view returns(address[] memory list, bool[] memory allowed);
    function setWhiteList(address _who, bool _allow) external;

    function checkAndGetOracleSwapParams(address tokenA, address tokenB) external view returns (address oracle, uint256 _tradeFee, uint256 _protocolFee);
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

interface IOSWAP_OracleAdaptor2 {
    function isSupported(address from, address to) external view returns (bool supported);
    function getRatio(address from, address to, uint256 fromAmount, uint256 toAmount, address trader, bytes calldata payload) external view returns (uint256 numerator, uint256 denominator);
    function getLatestPrice(address from, address to, bytes calldata payload) external view returns (uint256 price);
    function decimals() external view returns (uint8);
}

pragma solidity =0.6.11;


contract OSWAP_PausablePair is IOSWAP_PausablePair {
    bool public override isLive;
    address public override immutable factory;

    constructor() public {
        factory = msg.sender;
        isLive = true;
    }
    function setLive(bool _isLive) external override {
        require(msg.sender == factory, 'FORBIDDEN');
        isLive = _isLive;
    }
}
pragma solidity =0.6.11;











contract OSWAP_RestrictedPair is IOSWAP_RestrictedPair, OSWAP_PausablePair {
    using SafeMath for uint256;

    uint256 constant FEE_BASE = 10 ** 5;
    uint256 constant WEI = 10**18;

    bytes32 constant FEE_PER_ORDER = "RestrictedPair.feePerOrder";
    bytes32 constant FEE_PER_TRADER = "RestrictedPair.feePerTrader";
    bytes32 constant MAX_DUR = "RestrictedPair.maxDur";
    bytes4 private constant SELECTOR = bytes4(keccak256(bytes('transfer(address,uint256)')));

    uint256 internal unlocked = 1;
    modifier lock() {
        require(unlocked == 1, 'LOCKED');
        unlocked = 0;
        _;
        unlocked = 1;
    }

    mapping(bool => uint256) public override counter;
    mapping(bool => Offer[]) public override offers;
    mapping(bool => mapping(address => uint256[])) public override providerOfferIndex;

    mapping(bool => mapping(uint256 => address[])) public override approvedTrader;
    mapping(bool => mapping(uint256 => mapping(address => bool))) public override isApprovedTrader;
    mapping(bool => mapping(uint256 => mapping(address => uint256))) public override traderAllocation;
    mapping(bool => mapping(address => uint256[])) public override traderOffer;

    address public override immutable governance;
    address public override immutable whitelistFactory;
    address public override immutable restrictedLiquidityProvider;
    address public override immutable govToken;
    address public override immutable configStore;
    address public override token0;
    address public override token1;
    bool public override scaleDirection;
    uint256 public override scaler;

    uint256 public override lastGovBalance;
    uint256 public override lastToken0Balance;
    uint256 public override lastToken1Balance;
    uint256 public override protocolFeeBalance0;
    uint256 public override protocolFeeBalance1;
    uint256 public override feeBalance;

    constructor() public {
        (address _governance, address _whitelistFactory, address _restrictedLiquidityProvider, address _configStore) = IOSWAP_RestrictedFactory(msg.sender).getCreateAddresses();
        governance = _governance;
        whitelistFactory = _whitelistFactory;
        govToken = IOAXDEX_Governance(_governance).oaxToken();
        restrictedLiquidityProvider = _restrictedLiquidityProvider;
        configStore = _configStore;

        offers[true].push(Offer({
            provider: address(this),
            locked: true,
            allowAll: false,
            amount: 0,
            receiving: 0,
            restrictedPrice: 0,
            startDate: 0,
            expire: 0
        }));
        offers[false].push(Offer({
            provider: address(this),
            locked: true,
            allowAll: false,
            amount: 0,
            receiving: 0,
            restrictedPrice: 0,
            startDate: 0,
            expire: 0
        }));
    }

    // called once by the factory at time of deployment
    function initialize(address _token0, address _token1) external override {
        require(msg.sender == factory, 'FORBIDDEN'); // sufficient check

        token0 = _token0;
        token1 = _token1;
        require(token0 < token1, "Invalid token pair order"); 
        address oracle = IOSWAP_RestrictedFactory(factory).oracles(token0, token1);
        require(oracle != address(0), "No oracle found");

        uint8 token0Decimals = IERC20(token0).decimals();
        uint8 token1Decimals = IERC20(token1).decimals();
        if (token0Decimals == token1Decimals) {
            scaler = 1;
        } else {
            scaleDirection = token1Decimals > token0Decimals;
            scaler = 10 ** uint256(scaleDirection ? (token1Decimals - token0Decimals) : (token0Decimals - token1Decimals));
        }
    }

    function getOffers(bool direction, uint256 start, uint256 length) external override view returns (uint256[] memory index, address[] memory provider, bool[] memory lockedAndAllowAll, uint256[] memory receiving, uint256[] memory amountAndPrice, uint256[] memory startDateAndExpire) {
        return _showList(0, address(0), direction, start, length);
    }

    function getLastBalances() external view override returns (uint256, uint256) {
        return (
            lastToken0Balance,
            lastToken1Balance
        );
    }
    function getBalances() public view override returns (uint256, uint256, uint256) {
        return (
            IERC20(govToken).balanceOf(address(this)),
            IERC20(token0).balanceOf(address(this)),
            IERC20(token1).balanceOf(address(this))
        );
    }

    function _safeTransfer(address token, address to, uint256 value) internal {
        (bool success, bytes memory data) = token.call(abi.encodeWithSelector(SELECTOR, to, value));
        require(success && (data.length == 0 || abi.decode(data, (bool))), 'TRANSFER_FAILED');
    }
    function _safeTransferFrom(address token, address from, address to, uint value) internal {
        (bool success, bytes memory data) = token.call(abi.encodeWithSelector(0x23b872dd, from, to, value));
        require(success && (data.length == 0 || abi.decode(data, (bool))), 'TRANSFER_FROM_FAILED');
    }

    function _getSwappedAmount(bool direction, uint256 amountIn, address trader, uint256 index, address oracle, uint256 tradeFee) internal view returns (uint256 amountOut, uint256 price, uint256 tradeFeeCollected) {
        tradeFeeCollected = amountIn.mul(tradeFee).div(FEE_BASE);
        amountIn = amountIn.sub(tradeFeeCollected);
        (uint256 numerator, uint256 denominator) = IOSWAP_OracleAdaptor2(oracle).getRatio(direction ? token0 : token1, direction ? token1 : token0, amountIn, 0, trader, abi.encodePacked(index));
        amountOut = amountIn.mul(numerator);
        if (scaler > 1)
            amountOut = (direction == scaleDirection) ? amountOut.mul(scaler) : amountOut.div(scaler);
        amountOut = amountOut.div(denominator);
        price = numerator.mul(WEI).div(denominator);
    }
    function getAmountOut(address tokenIn, uint256 amountIn, address trader, bytes calldata /*data*/) external view override returns (uint256 amountOut) {
        require(amountIn > 0, 'INSUFFICIENT_INPUT_AMOUNT');
        (uint256[] memory list, uint256[] memory amount) = _decodeData(0x84);
        bool direction = token0 == tokenIn;
        (address oracle, uint256 tradeFee, )  = IOSWAP_RestrictedFactory(factory).checkAndGetOracleSwapParams(token0, token1);
        uint256 _amount;
        for (uint256 i = 0 ; i < list.length ; i++) {
            uint256 offerIdx = list[i];
            require(offerIdx <= counter[direction], "Offer not exist");
            _amount = amount[i].mul(amountIn).div(1e18);
            (_amount,,) = _getSwappedAmount(direction, _amount, trader, offerIdx, oracle, tradeFee);
            amountOut = amountOut.add(_amount);
        }
    }
    function getAmountIn(address /*tokenOut*/, uint256 /*amountOut*/, address /*trader*/, bytes calldata /*data*/) external view override returns (uint256 /*amountIn*/) {
        revert("Not supported");
    }

    function getProviderOfferIndexLength(address provider, bool direction) external view override returns (uint256 length) {
        return providerOfferIndex[direction][provider].length;
    }
    function getTraderOffer(address trader, bool direction, uint256 start, uint256 length) external view override returns (uint256[] memory index, address[] memory provider, bool[] memory lockedAndAllowAll, uint256[] memory receiving, uint256[] memory amountAndPrice, uint256[] memory startDateAndExpire) {
        return _showList(1, trader, direction, start, length);
    }  

    function getProviderOffer(address _provider, bool direction, uint256 start, uint256 length) external view override returns (uint256[] memory index, address[] memory provider, bool[] memory lockedAndAllowAll, uint256[] memory receiving, uint256[] memory amountAndPrice, uint256[] memory startDateAndExpire) {
        return _showList(2, _provider, direction, start, length);
    }
    function _showList(uint256 listType, address who, bool direction, uint256 start, uint256 length) internal view returns (uint256[] memory index, address[] memory provider, bool[] memory lockedAndAllowAll, uint256[] memory receiving, uint256[] memory amountAndPrice, uint256[] memory startDateAndExpire) {
        uint256 tmpInt;
        uint256[] storage __list;
        if (listType == 0) {
            __list = providerOfferIndex[direction][address(0)];
            tmpInt = offers[direction].length;
        } else if (listType == 1) {
            __list = traderOffer[direction][who];
            tmpInt = __list.length;
        } else if (listType == 2) {
            __list = providerOfferIndex[direction][who];
            tmpInt = __list.length;
        } else {
            revert("Unknown list");
        }
        uint256 _listType = listType; // stack too deep
        Offer[] storage _list = offers[direction];
        if (start < tmpInt) {
            if (start.add(length) > tmpInt) {
                length = tmpInt.sub(start);
            }
            index = new uint256[](length);
            provider = new address[](length);
            receiving = new uint256[](length);
            tmpInt = length * 2;
            lockedAndAllowAll = new bool[](tmpInt);
            amountAndPrice = new uint256[](tmpInt);
            startDateAndExpire = new uint256[](tmpInt);
            for (uint256 i ; i < length ; i++) {
                tmpInt = i.add(start);
                tmpInt = _listType == 0 ? tmpInt :
                         _listType == 1 ? __list[tmpInt] :
                                         __list[tmpInt];
                Offer storage offer = _list[tmpInt];
                index[i] = tmpInt;
                tmpInt =  i.add(length);
                provider[i] = offer.provider;
                lockedAndAllowAll[i] = offer.locked;
                lockedAndAllowAll[tmpInt] = offer.allowAll;
                receiving[i] = offer.receiving;
                amountAndPrice[i] = offer.amount;
                amountAndPrice[tmpInt] = offer.restrictedPrice;
                startDateAndExpire[i] = offer.startDate;
                startDateAndExpire[tmpInt] = offer.expire;
            }
        } else {
            provider = new address[](0);
            lockedAndAllowAll = new bool[](0);
            receiving = amountAndPrice = startDateAndExpire = new uint256[](0);
        }
    }

    function _collectFee(address provider, uint256 feeIn) internal {
        if (msg.sender == provider) {
            _safeTransferFrom(govToken, provider, address(this), feeIn);
            feeBalance = feeBalance.add(feeIn);
            lastGovBalance = lastGovBalance.add(feeIn);
            if (govToken == token0)
                lastToken0Balance = lastToken0Balance.add(feeIn);
            if (govToken == token1)
                lastToken1Balance = lastToken1Balance.add(feeIn);
        } else {
            uint256 balance = IERC20(govToken).balanceOf(address(this));
            uint256 feeDiff = balance.sub(lastGovBalance);
            require(feeDiff >= feeIn, "Not enough fee");
            feeBalance = feeBalance.add(feeDiff);
            lastGovBalance = balance;
            if (govToken == token0)
                lastToken0Balance = balance;
            if (govToken == token1)
                lastToken1Balance = balance;
        }
    }

    function createOrder(address provider, bool direction, bool allowAll, uint256 restrictedPrice, uint256 startDate, uint256 expire) external override lock returns (uint256 index) {
        require(IOSWAP_RestrictedFactory(factory).isLive(), 'GLOBALLY PAUSED');
        require(isLive, "PAUSED");
        require(msg.sender == restrictedLiquidityProvider || msg.sender == provider, "Not from router or owner");
        require(expire >= startDate, "Already expired");
        require(expire >= block.timestamp, "Already expired");
        {
        uint256 maxDur = uint256(IOSWAP_ConfigStore(configStore).customParam(MAX_DUR));
        require(expire <= block.timestamp + maxDur, "Expire too far away");
        }

        index = (++counter[direction]);
        providerOfferIndex[direction][provider].push(index);

        offers[direction].push(Offer({
            provider: provider,
            locked: false,
            allowAll: allowAll,
            amount: 0,
            receiving: 0,
            restrictedPrice: restrictedPrice,
            startDate: startDate,
            expire: expire
        }));

        uint256 feeIn = uint256(IOSWAP_ConfigStore(configStore).customParam(FEE_PER_ORDER));
        _collectFee(provider, feeIn);

        emit NewProviderOffer(provider, direction, index, allowAll, restrictedPrice, startDate, expire);
    }
    function lockOffer(bool direction, uint256 index) external override {
        Offer storage offer = offers[direction][index];
        require(msg.sender == restrictedLiquidityProvider || msg.sender == offer.provider, "Not from router or owner");
        offer.locked = true;
        emit Lock(direction, index);
    }

    function getApprovedTraderLength(bool direction, uint256 offerIndex) external override view returns (uint256) {
        return approvedTrader[direction][offerIndex].length;
    }
    function getApprovedTrader(bool direction, uint256 offerIndex, uint256 start, uint256 length) external view override returns (address[] memory trader, uint256[] memory allocation) {
        address[] storage list = approvedTrader[direction][offerIndex];
        uint256 listLength = list.length;
        if (start < listLength) {
            if (start.add(length) > listLength) {
                length = listLength.sub(start);
            }
            trader = new address[](length);
            allocation = new uint256[](length);
            for (uint256 i = 0 ; i < length ; i++) {
                allocation[i] = traderAllocation[direction][offerIndex][ trader[i] = list[i.add(start)] ];
            }
        } else {
            trader = new address[](0);
            allocation = new uint256[](0);
        }
    }
    function _setApprovedTrader(bool direction, uint256 offerIndex, address trader, uint256 allocation) internal {
        if (!isApprovedTrader[direction][offerIndex][trader]){
            approvedTrader[direction][offerIndex].push(trader);
            isApprovedTrader[direction][offerIndex][trader] = true;
            traderOffer[direction][trader].push(offerIndex);
        }
        traderAllocation[direction][offerIndex][trader] = allocation;

        emit ApprovedTrader(direction, offerIndex, trader, allocation);
    }

    // format for the data parameter
    // data size + offer index length + list offer index (+ amount for that offer) 
    function swap(uint256 amount0Out, uint256 amount1Out, address to, address trader, bytes calldata /*data*/) external override lock {
        if (!IOSWAP_OracleFactory(whitelistFactory).isWhitelisted(msg.sender)) {
            require(tx.origin == msg.sender && !Address.isContract(msg.sender) && trader == msg.sender, "Invalid trader");
        }
        require(isLive, "PAUSED");
        uint256 amount0In = IERC20(token0).balanceOf(address(this)).sub(lastToken0Balance);
        uint256 amount1In = IERC20(token1).balanceOf(address(this)).sub(lastToken1Balance);

        uint256 amountOut;
        uint256 protocolFeeCollected;
        if (amount0Out == 0 && amount1Out != 0){
            (amountOut, protocolFeeCollected) = _swap(true, amount0In, trader/*, data*/);
            require(amountOut >= amount1Out, "INSUFFICIENT_AMOUNT");
            _safeTransfer(token1, to, amountOut); // optimistically transfer tokens
            protocolFeeBalance0 = protocolFeeBalance0.add(protocolFeeCollected);
        } else if (amount0Out != 0 && amount1Out == 0){
            (amountOut, protocolFeeCollected) = _swap(false, amount1In, trader/*, data*/);
            require(amountOut >= amount0Out, "INSUFFICIENT_AMOUNT");
            _safeTransfer(token0, to, amountOut); // optimistically transfer tokens
            protocolFeeBalance1 = protocolFeeBalance1.add(protocolFeeCollected);
        } else {
            revert("Not supported");
        }

        _sync();
    }

    function _decodeData(uint256 offset) internal pure returns (uint256[] memory list, uint256[] memory amount) {
        uint256 dataRead;
        require(msg.data.length >= offset.add(0x60), "Invalid offer list");
        assembly {
            let count := calldataload(add(offset, 0x20))
            let size := mul(count, 0x20)

            if lt(calldatasize(), add(add(offset, 0x40), mul(2, size))) {//add(offset, add(mul(2, size), 0x20))) { // offset + 0x20 (bytes_size_header) + 0x20 (count) + 2* count*0x20 (list_size)
                revert(0, 0)
            }
            let mark := mload(0x40)
            mstore(0x40, add(mark, mul(2, add(size, 0x20)))) // malloc
            mstore(mark, count) // array length
            calldatacopy(add(mark, 0x20), add(offset, 0x40), size) // copy data to list
            list := mark
            mark := add(mark, add(0x20, size))
            // offset := add(offset, size)
            mstore(mark, count) // array length
            calldatacopy(add(mark, 0x20), add(add(offset, 0x40), size), size) // copy data to list
            amount := mark
            dataRead := add(mul(2, size), 0x20)
        }
        require(offset.add(dataRead).add(0x20) == msg.data.length, "Invalid data length");
        require(list.length > 0, "Invalid offer list");
    }

    function _swap2(bool direction, address trader, uint256 offerIdx, uint256 amountIn, address oracle, uint256[2] memory fee/*uint256 tradeFee, uint256 protocolFee*/) internal 
        returns (uint256 amountOut, uint256 tradeFeeCollected, uint256 protocolFeeCollected) 
    {
        require(offerIdx <= counter[direction], "Offer not exist");
        Offer storage offer = offers[direction][offerIdx];
        {
        // check approved list
        require(
            offer.allowAll ||
            isApprovedTrader[direction][offerIdx][trader], 
        "Not a approved trader");

        // check offer period
        require(block.timestamp >= offer.startDate, "Offer not begin yet");
        require(block.timestamp <= offer.expire, "Offer expired");
        }

        uint256 price;
        uint256 amountInWithholdProtocolFee;
        (amountOut, price, tradeFeeCollected) = _getSwappedAmount(direction, amountIn, trader, offerIdx, oracle, fee[0]);

        if (fee[1] == 0) {
            amountInWithholdProtocolFee = amountIn;
        } else {
            protocolFeeCollected = tradeFeeCollected.mul(fee[1]).div(FEE_BASE);
            amountInWithholdProtocolFee = amountIn.sub(protocolFeeCollected);
        }

        // check allocation
        if (!offer.allowAll) {
            uint256 alloc = traderAllocation[direction][offerIdx][trader];
            require(amountOut <= alloc, "Amount exceeded allocation");
            traderAllocation[direction][offerIdx][trader] = alloc.sub(amountOut);
        }

        require(amountOut <= offer.amount, "Amount exceeds available fund");

        offer.amount = offer.amount.sub(amountOut);
        offer.receiving = offer.receiving.add(amountInWithholdProtocolFee);

        emit SwappedOneOffer(offer.provider, direction, offerIdx, price, amountOut, amountInWithholdProtocolFee, offer.amount, offer.receiving);
    }
    function _swap(bool direction, uint256 amountIn, address trader/*, bytes calldata data*/) internal returns (uint256 totalOut, uint256 totalProtocolFeeCollected) {
        (uint256[] memory idxList, uint256[] memory amountList) = _decodeData(0xa4);
        address oracle;
        uint256[2] memory fee;
        (oracle, fee[0], fee[1])  = IOSWAP_RestrictedFactory(factory).checkAndGetOracleSwapParams(token0, token1);

        uint256 totalIn;
        uint256 totalTradeFeeCollected;
        for (uint256 index = 0 ; index < idxList.length ; index++) {
            totalIn = totalIn.add(amountList[index]);
            uint256[3] memory amount;
            uint256 thisIn = amountList[index].mul(amountIn).div(1e18);
            (amount[0], amount[1], amount[2])/*(uint256 amountOut, uint256 tradeFeeCollected, uint256 protocolFeeCollected)*/ = _swap2(direction, trader, idxList[index], thisIn, oracle, fee/*tradeFee, protocolFee*/);
            totalOut = totalOut.add(amount[0]);
            totalTradeFeeCollected = totalTradeFeeCollected.add(amount[1]);
            totalProtocolFeeCollected = totalProtocolFeeCollected.add(amount[2]);
        }
        require(totalIn == 1e18, "Invalid input");
        emit Swap(trader, direction, amountIn, totalOut, totalTradeFeeCollected, totalProtocolFeeCollected);
    }

    function sync() external override lock {
        _sync();
    }
    function _sync() internal {
        (lastGovBalance, lastToken0Balance, lastToken1Balance) = getBalances();
    }

    function redeemProtocolFee() external override lock {
        address protocolFeeTo = IOSWAP_RestrictedFactory(factory).protocolFeeTo();
        _safeTransfer(govToken, protocolFeeTo, feeBalance); // optimistically transfer tokens
        _safeTransfer(token0, protocolFeeTo, protocolFeeBalance0); // optimistically transfer tokens
        _safeTransfer(token1, protocolFeeTo, protocolFeeBalance1); // optimistically transfer tokens
        feeBalance = 0;
        protocolFeeBalance0 = 0;
        protocolFeeBalance1 = 0;
        
        _sync();
    }
}
pragma solidity =0.6.11;




abstract contract OSWAP_RestrictedPairPrepaidFee is IOSWAP_RestrictedPairPrepaidFee, OSWAP_RestrictedPair {
    mapping(bool => mapping(uint256 => uint256)) public override prepaidFeeBalance;

    function addLiquidity(bool direction, uint256 index, uint256 feeIn) external override lock {
        require(IOSWAP_RestrictedFactory(factory).isLive(), 'GLOBALLY PAUSED');
        require(isLive, "PAUSED");
        Offer storage offer = offers[direction][index];
        require(msg.sender == restrictedLiquidityProvider || msg.sender == offer.provider, "Not from router or owner");

        (uint256 newGovBalance, uint256 newToken0Balance, uint256 newToken1Balance) = getBalances();
        require(newGovBalance.sub(lastGovBalance) >= feeIn, "Invalid feeIn");
        uint256 newFeeBalance = prepaidFeeBalance[direction][index].add(feeIn);
        prepaidFeeBalance[direction][index] = newFeeBalance;

        uint256 amountIn;
        if (direction) {
            amountIn = newToken1Balance.sub(lastToken1Balance);
            if (govToken == token1)
                amountIn = amountIn.sub(feeIn);
        } else {
            amountIn = newToken0Balance.sub(lastToken0Balance);
            if (govToken == token0)
                amountIn = amountIn.sub(feeIn);
        }
        require(amountIn > 0 || feeIn > 0, "No amount in");

        offer.amount = offer.amount.add(amountIn);

        lastGovBalance = newGovBalance;
        lastToken0Balance = newToken0Balance;
        lastToken1Balance = newToken1Balance;

        emit AddLiquidity(offer.provider, direction, index, amountIn, offer.amount, feeIn, newFeeBalance);
    }


    function removeLiquidity(address provider, bool direction, uint256 index, uint256 amountOut, uint256 receivingOut, uint256 feeOut) external override lock {
        require(msg.sender == restrictedLiquidityProvider || msg.sender == provider, "Not from router or owner");
        _removeLiquidity(provider, direction, index, amountOut, receivingOut, feeOut);
        (address tokenA, address tokenB) = direction ? (token1,token0) : (token0,token1);
        _safeTransfer(tokenA, msg.sender, amountOut); // optimistically transfer tokens
        _safeTransfer(tokenB, msg.sender, receivingOut); // optimistically transfer tokens
        _safeTransfer(govToken, msg.sender, feeOut); // optimistically transfer tokens
        _sync();
    }
    function removeAllLiquidity(address provider) external override lock returns (uint256 amount0, uint256 amount1, uint256 feeOut) {
        (amount0, amount1, feeOut) = _removeAllLiquidity1D(provider, false);
        (uint256 amount2, uint256 amount3, uint256 feeOut2) = _removeAllLiquidity1D(provider, true);
        amount0 = amount0.add(amount3);
        amount1 = amount1.add(amount2);
        feeOut = feeOut.add(feeOut2);
    }
    function removeAllLiquidity1D(address provider, bool direction) external override lock returns (uint256 totalAmount, uint256 totalReceiving, uint256 totalRemainingFee) {
        return _removeAllLiquidity1D(provider, direction);
    }
    function _removeAllLiquidity1D(address provider, bool direction) internal returns (uint256 totalAmount, uint256 totalReceiving, uint256 totalRemainingFee) {
        require(msg.sender == restrictedLiquidityProvider || msg.sender == provider, "Not from router or owner");
        uint256[] storage list = providerOfferIndex[direction][provider];
        uint256 length =  list.length;
        for (uint256 i = 0 ; i < length ; i++) {
            uint256 index = list[i];
            Offer storage offer = offers[direction][index]; 
            totalAmount = totalAmount.add(offer.amount);
            totalReceiving = totalReceiving.add(offer.receiving);
            uint256 feeBalance = prepaidFeeBalance[direction][index];
            totalRemainingFee = totalRemainingFee.add(feeBalance);
            _removeLiquidity(provider, direction, index, offer.amount, offer.receiving, feeBalance);
        }
        (uint256 amount0, uint256 amount1) = direction ? (totalReceiving, totalAmount) : (totalAmount, totalReceiving);
        _safeTransfer(token0, msg.sender, amount0); // optimistically transfer tokens
        _safeTransfer(token1, msg.sender, amount1); // optimistically transfer tokens
        _safeTransfer(govToken, msg.sender, totalRemainingFee); // optimistically transfer tokens
        _sync();
    }
    function _removeLiquidity(address provider, bool direction, uint256 index, uint256 amountOut, uint256 receivingOut, uint256 feeOut) internal {
        require(index > 0, "Provider liquidity not found");

        Offer storage offer = offers[direction][index]; 
        require(offer.provider == provider, "Not from provider");

        if (offer.locked && amountOut > 0) {
            require(offer.expire < block.timestamp, "Not expired");
        }

        offer.amount = offer.amount.sub(amountOut);
        offer.receiving = offer.receiving.sub(receivingOut);
        uint256 newFeeBalance = prepaidFeeBalance[direction][index].sub(feeOut);
        prepaidFeeBalance[direction][index] = newFeeBalance;

        emit RemoveLiquidity(provider, direction, index, amountOut, receivingOut, feeOut, offer.amount, offer.receiving, newFeeBalance);
    }


}
// OpenZeppelin Contracts (last updated v4.7.0) (utils/cryptography/MerkleProof.sol)

pragma solidity =0.6.11;

/**
 * @dev These functions deal with verification of Merkle Tree proofs.
 *
 * The proofs can be generated using the JavaScript library
 * https://github.com/miguelmota/merkletreejs[merkletreejs].
 * Note: the hashing algorithm should be keccak256 and pair sorting should be enabled.
 *
 * See `test/utils/cryptography/MerkleProof.test.js` for some examples.
 *
 * WARNING: You should avoid using leaf values that are 64 bytes long prior to
 * hashing, or use a hash function other than keccak256 for hashing leaves.
 * This is because the concatenation of a sorted pair of internal nodes in
 * the merkle tree could be reinterpreted as a leaf value.
 */
library MerkleProof {
    /**
     * @dev Returns true if a `leaf` can be proved to be a part of a Merkle tree
     * defined by `root`. For this, a `proof` must be provided, containing
     * sibling hashes on the branch from the leaf to the root of the tree. Each
     * pair of leaves and each pair of pre-images are assumed to be sorted.
     */
    function verify(
        bytes32[] memory proof,
        bytes32 root,
        bytes32 leaf
    ) internal pure returns (bool) {
        return processProof(proof, leaf) == root;
    }

    /**
     * @dev Calldata version of {verify}
     *
     * _Available since v4.7._
     */
    function verifyCalldata(
        bytes32[] calldata proof,
        bytes32 root,
        bytes32 leaf
    ) internal pure returns (bool) {
        return processProofCalldata(proof, leaf) == root;
    }

    /**
     * @dev Returns the rebuilt hash obtained by traversing a Merkle tree up
     * from `leaf` using `proof`. A `proof` is valid if and only if the rebuilt
     * hash matches the root of the tree. When processing the proof, the pairs
     * of leafs & pre-images are assumed to be sorted.
     *
     * _Available since v4.4._
     */
    function processProof(bytes32[] memory proof, bytes32 leaf) internal pure returns (bytes32) {
        bytes32 computedHash = leaf;
        for (uint256 i = 0; i < proof.length; i++) {
            computedHash = _hashPair(computedHash, proof[i]);
        }
        return computedHash;
    }

    /**
     * @dev Calldata version of {processProof}
     *
     * _Available since v4.7._
     */
    function processProofCalldata(bytes32[] calldata proof, bytes32 leaf) internal pure returns (bytes32) {
        bytes32 computedHash = leaf;
        for (uint256 i = 0; i < proof.length; i++) {
            computedHash = _hashPair(computedHash, proof[i]);
        }
        return computedHash;
    }

    /**
     * @dev Returns true if the `leaves` can be proved to be a part of a Merkle tree defined by
     * `root`, according to `proof` and `proofFlags` as described in {processMultiProof}.
     *
     * _Available since v4.7._
     */
    function multiProofVerify(
        bytes32[] memory proof,
        bool[] memory proofFlags,
        bytes32 root,
        bytes32[] memory leaves
    ) internal pure returns (bool) {
        return processMultiProof(proof, proofFlags, leaves) == root;
    }

    /**
     * @dev Calldata version of {multiProofVerify}
     *
     * _Available since v4.7._
     */
    function multiProofVerifyCalldata(
        bytes32[] calldata proof,
        bool[] calldata proofFlags,
        bytes32 root,
        bytes32[] memory leaves
    ) internal pure returns (bool) {
        return processMultiProofCalldata(proof, proofFlags, leaves) == root;
    }

    /**
     * @dev Returns the root of a tree reconstructed from `leaves` and the sibling nodes in `proof`,
     * consuming from one or the other at each step according to the instructions given by
     * `proofFlags`.
     *
     * _Available since v4.7._
     */
    function processMultiProof(
        bytes32[] memory proof,
        bool[] memory proofFlags,
        bytes32[] memory leaves
    ) internal pure returns (bytes32 merkleRoot) {
        // This function rebuild the root hash by traversing the tree up from the leaves. The root is rebuilt by
        // consuming and producing values on a queue. The queue starts with the `leaves` array, then goes onto the
        // `hashes` array. At the end of the process, the last hash in the `hashes` array should contain the root of
        // the merkle tree.
        uint256 leavesLen = leaves.length;
        uint256 totalHashes = proofFlags.length;

        // Check proof validity.
        require(leavesLen + proof.length - 1 == totalHashes, "MerkleProof: invalid multiproof");

        // The xxxPos values are "pointers" to the next value to consume in each array. All accesses are done using
        // `xxx[xxxPos++]`, which return the current value and increment the pointer, thus mimicking a queue's "pop".
        bytes32[] memory hashes = new bytes32[](totalHashes);
        uint256 leafPos = 0;
        uint256 hashPos = 0;
        uint256 proofPos = 0;
        // At each step, we compute the next hash using two values:
        // - a value from the "main queue". If not all leaves have been consumed, we get the next leaf, otherwise we
        //   get the next hash.
        // - depending on the flag, either another value for the "main queue" (merging branches) or an element from the
        //   `proof` array.
        for (uint256 i = 0; i < totalHashes; i++) {
            bytes32 a = leafPos < leavesLen ? leaves[leafPos++] : hashes[hashPos++];
            bytes32 b = proofFlags[i] ? leafPos < leavesLen ? leaves[leafPos++] : hashes[hashPos++] : proof[proofPos++];
            hashes[i] = _hashPair(a, b);
        }

        if (totalHashes > 0) {
            return hashes[totalHashes - 1];
        } else if (leavesLen > 0) {
            return leaves[0];
        } else {
            return proof[0];
        }
    }

    /**
     * @dev Calldata version of {processMultiProof}
     *
     * _Available since v4.7._
     */
    function processMultiProofCalldata(
        bytes32[] calldata proof,
        bool[] calldata proofFlags,
        bytes32[] memory leaves
    ) internal pure returns (bytes32 merkleRoot) {
        // This function rebuild the root hash by traversing the tree up from the leaves. The root is rebuilt by
        // consuming and producing values on a queue. The queue starts with the `leaves` array, then goes onto the
        // `hashes` array. At the end of the process, the last hash in the `hashes` array should contain the root of
        // the merkle tree.
        uint256 leavesLen = leaves.length;
        uint256 totalHashes = proofFlags.length;

        // Check proof validity.
        require(leavesLen + proof.length - 1 == totalHashes, "MerkleProof: invalid multiproof");

        // The xxxPos values are "pointers" to the next value to consume in each array. All accesses are done using
        // `xxx[xxxPos++]`, which return the current value and increment the pointer, thus mimicking a queue's "pop".
        bytes32[] memory hashes = new bytes32[](totalHashes);
        uint256 leafPos = 0;
        uint256 hashPos = 0;
        uint256 proofPos = 0;
        // At each step, we compute the next hash using two values:
        // - a value from the "main queue". If not all leaves have been consumed, we get the next leaf, otherwise we
        //   get the next hash.
        // - depending on the flag, either another value for the "main queue" (merging branches) or an element from the
        //   `proof` array.
        for (uint256 i = 0; i < totalHashes; i++) {
            bytes32 a = leafPos < leavesLen ? leaves[leafPos++] : hashes[hashPos++];
            bytes32 b = proofFlags[i] ? leafPos < leavesLen ? leaves[leafPos++] : hashes[hashPos++] : proof[proofPos++];
            hashes[i] = _hashPair(a, b);
        }

        if (totalHashes > 0) {
            return hashes[totalHashes - 1];
        } else if (leavesLen > 0) {
            return leaves[0];
        } else {
            return proof[0];
        }
    }

    function _hashPair(bytes32 a, bytes32 b) private pure returns (bytes32) {
        return a < b ? _efficientHash(a, b) : _efficientHash(b, a);
    }

    function _efficientHash(bytes32 a, bytes32 b) private pure returns (bytes32 value) {
        /// @solidity memory-safe-assembly
        assembly {
            mstore(0x00, a)
            mstore(0x20, b)
            value := keccak256(0x00, 0x40)
        }
    }
}

pragma solidity =0.6.11;





// traders set their own allocation from merkle tree proof
contract OSWAP_RestrictedPair4 is IOSWAP_RestrictedPair4, OSWAP_RestrictedPairPrepaidFee {

    mapping(bool => mapping(uint256 => mapping(address => uint256))) public override lastTraderAllocation;
    mapping(bool => mapping(uint256 => bytes32)) public override offerMerkleRoot;
    mapping(bool => mapping(uint256 => string)) public override offerAllowlistIpfsCid;

    function setMerkleRoot(bool direction, uint256 index, bytes32 merkleRoot, string calldata ipfsCid) external override lock {
        if (merkleRoot != offerMerkleRoot[direction][index]) {
            Offer storage offer = offers[direction][index];
            require(msg.sender == restrictedLiquidityProvider || msg.sender == offer.provider, "not from provider");
            require(!offer.locked, "offer locked");
            offerMerkleRoot[direction][index] = merkleRoot;
            offerAllowlistIpfsCid[direction][index] = ipfsCid;
            emit MerkleRoot(offer.provider, direction, index, merkleRoot, ipfsCid);
        }
    }
    function setApprovedTraderByMerkleProof(bool direction, uint256 offerIndex, address trader, uint256 allocation, bytes32[] calldata proof) external override {
        require(offerMerkleRoot[direction][offerIndex] != 0, "merkle root not set");
        require(
            MerkleProof.verifyCalldata(proof, offerMerkleRoot[direction][offerIndex], keccak256(abi.encodePacked(msg.sender, allocation)))
        , "merkle proof failed");

        uint256 delta = allocation.sub(lastTraderAllocation[direction][offerIndex][trader], "new allocation smaller than original");
        lastTraderAllocation[direction][offerIndex][trader] = allocation;
        uint256 newAllocation = traderAllocation[direction][offerIndex][trader].add(delta);

        // collect fee from trader instead of LP
        uint256 fee = uint256(IOSWAP_ConfigStore(configStore).customParam(FEE_PER_TRADER));
        prepaidFeeBalance[direction][offerIndex] = prepaidFeeBalance[direction][offerIndex].sub(fee);
        feeBalance = feeBalance.add(fee);

        _setApprovedTrader(direction, offerIndex, trader, newAllocation);
    }

}