"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_OracleFactory = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const OSWAP_OracleFactory_json_1 = __importDefault(require("./OSWAP_OracleFactory.json"));
class OSWAP_OracleFactory extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_OracleFactory_json_1.default.abi, OSWAP_OracleFactory_json_1.default.bytecode);
        this.assign();
    }
    deploy(params, options) {
        return this.__deploy([params.governance, params.pairCreator, this.wallet.utils.toString(params.tradeFee), this.wallet.utils.toString(params.protocolFee), this.wallet.utils.toString(params.feePerDelegator), params.protocolFeeTo], options);
    }
    parseOracleAddedEvent(receipt) {
        return this.parseEvents(receipt, "OracleAdded").map(e => this.decodeOracleAddedEvent(e));
    }
    decodeOracleAddedEvent(event) {
        let result = event.data;
        return {
            token0: result.token0,
            token1: result.token1,
            oracle: result.oracle,
            _event: event
        };
    }
    parseOracleScoresEvent(receipt) {
        return this.parseEvents(receipt, "OracleScores").map(e => this.decodeOracleScoresEvent(e));
    }
    decodeOracleScoresEvent(event) {
        let result = event.data;
        return {
            oracle: result.oracle,
            score: new eth_contract_1.BigNumber(result.score),
            _event: event
        };
    }
    parseOwnershipTransferredEvent(receipt) {
        return this.parseEvents(receipt, "OwnershipTransferred").map(e => this.decodeOwnershipTransferredEvent(e));
    }
    decodeOwnershipTransferredEvent(event) {
        let result = event.data;
        return {
            previousOwner: result.previousOwner,
            newOwner: result.newOwner,
            _event: event
        };
    }
    parsePairCreatedEvent(receipt) {
        return this.parseEvents(receipt, "PairCreated").map(e => this.decodePairCreatedEvent(e));
    }
    decodePairCreatedEvent(event) {
        let result = event.data;
        return {
            token0: result.token0,
            token1: result.token1,
            pair: result.pair,
            newSize: new eth_contract_1.BigNumber(result.newSize),
            _event: event
        };
    }
    parsePairRestartedEvent(receipt) {
        return this.parseEvents(receipt, "PairRestarted").map(e => this.decodePairRestartedEvent(e));
    }
    decodePairRestartedEvent(event) {
        let result = event.data;
        return {
            pair: result.pair,
            _event: event
        };
    }
    parsePairShutdownedEvent(receipt) {
        return this.parseEvents(receipt, "PairShutdowned").map(e => this.decodePairShutdownedEvent(e));
    }
    decodePairShutdownedEvent(event) {
        let result = event.data;
        return {
            pair: result.pair,
            _event: event
        };
    }
    parseParamSetEvent(receipt) {
        return this.parseEvents(receipt, "ParamSet").map(e => this.decodeParamSetEvent(e));
    }
    decodeParamSetEvent(event) {
        let result = event.data;
        return {
            name: result.name,
            value: result.value,
            _event: event
        };
    }
    parseParamSet2Event(receipt) {
        return this.parseEvents(receipt, "ParamSet2").map(e => this.decodeParamSet2Event(e));
    }
    decodeParamSet2Event(event) {
        let result = event.data;
        return {
            name: result.name,
            value1: result.value1,
            value2: result.value2,
            _event: event
        };
    }
    parseRestartedEvent(receipt) {
        return this.parseEvents(receipt, "Restarted").map(e => this.decodeRestartedEvent(e));
    }
    decodeRestartedEvent(event) {
        let result = event.data;
        return {
            _event: event
        };
    }
    parseShutdownedEvent(receipt) {
        return this.parseEvents(receipt, "Shutdowned").map(e => this.decodeShutdownedEvent(e));
    }
    decodeShutdownedEvent(event) {
        let result = event.data;
        return {
            _event: event
        };
    }
    parseWhitelistedEvent(receipt) {
        return this.parseEvents(receipt, "Whitelisted").map(e => this.decodeWhitelistedEvent(e));
    }
    decodeWhitelistedEvent(event) {
        let result = event.data;
        return {
            who: result.who,
            allow: result.allow,
            _event: event
        };
    }
    assign() {
        let allPairs_call = async (param1, options) => {
            let result = await this.call('allPairs', [this.wallet.utils.toString(param1)], options);
            return result;
        };
        this.allPairs = allPairs_call;
        let allPairsLength_call = async (options) => {
            let result = await this.call('allPairsLength', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.allPairsLength = allPairsLength_call;
        let allWhiteListed_call = async (options) => {
            let result = await this.call('allWhiteListed', [], options);
            return {
                list: result.list,
                allowed: result.allowed
            };
        };
        this.allWhiteListed = allWhiteListed_call;
        let checkAndGetOracleParams = (params) => [params.tokenA, params.tokenB];
        let checkAndGetOracle_call = async (params, options) => {
            let result = await this.call('checkAndGetOracle', checkAndGetOracleParams(params), options);
            return result;
        };
        this.checkAndGetOracle = checkAndGetOracle_call;
        let checkAndGetOracleSwapParamsParams = (params) => [params.tokenA, params.tokenB];
        let checkAndGetOracleSwapParams_call = async (params, options) => {
            let result = await this.call('checkAndGetOracleSwapParams', checkAndGetOracleSwapParamsParams(params), options);
            return {
                oracle: result.oracle_,
                tradeFee: new eth_contract_1.BigNumber(result.tradeFee_),
                protocolFee: new eth_contract_1.BigNumber(result.protocolFee_)
            };
        };
        this.checkAndGetOracleSwapParams = checkAndGetOracleSwapParams_call;
        let feePerDelegator_call = async (options) => {
            let result = await this.call('feePerDelegator', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.feePerDelegator = feePerDelegator_call;
        let getPairParams = (params) => [params.param1, params.param2];
        let getPair_call = async (params, options) => {
            let result = await this.call('getPair', getPairParams(params), options);
            return result;
        };
        this.getPair = getPair_call;
        let governance_call = async (options) => {
            let result = await this.call('governance', [], options);
            return result;
        };
        this.governance = governance_call;
        let isLive_call = async (options) => {
            let result = await this.call('isLive', [], options);
            return result;
        };
        this.isLive = isLive_call;
        let isOracle_call = async (param1, options) => {
            let result = await this.call('isOracle', [param1], options);
            return result;
        };
        this.isOracle = isOracle_call;
        let isWhitelisted_call = async (param1, options) => {
            let result = await this.call('isWhitelisted', [param1], options);
            return result;
        };
        this.isWhitelisted = isWhitelisted_call;
        let minLotSize_call = async (param1, options) => {
            let result = await this.call('minLotSize', [param1], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.minLotSize = minLotSize_call;
        let minOracleScore_call = async (options) => {
            let result = await this.call('minOracleScore', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.minOracleScore = minOracleScore_call;
        let oracleLiquidityProvider_call = async (options) => {
            let result = await this.call('oracleLiquidityProvider', [], options);
            return result;
        };
        this.oracleLiquidityProvider = oracleLiquidityProvider_call;
        let oracleScores_call = async (param1, options) => {
            let result = await this.call('oracleScores', [param1], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.oracleScores = oracleScores_call;
        let oraclesParams = (params) => [params.param1, params.param2];
        let oracles_call = async (params, options) => {
            let result = await this.call('oracles', oraclesParams(params), options);
            return result;
        };
        this.oracles = oracles_call;
        let owner_call = async (options) => {
            let result = await this.call('owner', [], options);
            return result;
        };
        this.owner = owner_call;
        let pairCreator_call = async (options) => {
            let result = await this.call('pairCreator', [], options);
            return result;
        };
        this.pairCreator = pairCreator_call;
        let protocolFee_call = async (options) => {
            let result = await this.call('protocolFee', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.protocolFee = protocolFee_call;
        let protocolFeeTo_call = async (options) => {
            let result = await this.call('protocolFeeTo', [], options);
            return result;
        };
        this.protocolFeeTo = protocolFeeTo_call;
        let securityScoreOracle_call = async (options) => {
            let result = await this.call('securityScoreOracle', [], options);
            return result;
        };
        this.securityScoreOracle = securityScoreOracle_call;
        let tradeFee_call = async (options) => {
            let result = await this.call('tradeFee', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.tradeFee = tradeFee_call;
        let whitelisted_call = async (param1, options) => {
            let result = await this.call('whitelisted', [this.wallet.utils.toString(param1)], options);
            return result;
        };
        this.whitelisted = whitelisted_call;
        let whitelistedInv_call = async (param1, options) => {
            let result = await this.call('whitelistedInv', [param1], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.whitelistedInv = whitelistedInv_call;
        let whitelistedLength_call = async (options) => {
            let result = await this.call('whitelistedLength', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.whitelistedLength = whitelistedLength_call;
        let addOldOracleToNewPairParams = (params) => [params.tokenA, params.tokenB, params.oracle];
        let addOldOracleToNewPair_send = async (params, options) => {
            let result = await this.send('addOldOracleToNewPair', addOldOracleToNewPairParams(params), options);
            return result;
        };
        let addOldOracleToNewPair_call = async (params, options) => {
            let result = await this.call('addOldOracleToNewPair', addOldOracleToNewPairParams(params), options);
            return;
        };
        let addOldOracleToNewPair_txData = async (params, options) => {
            let result = await this.txData('addOldOracleToNewPair', addOldOracleToNewPairParams(params), options);
            return result;
        };
        this.addOldOracleToNewPair = Object.assign(addOldOracleToNewPair_send, {
            call: addOldOracleToNewPair_call,
            txData: addOldOracleToNewPair_txData
        });
        let createPairParams = (params) => [params.tokenA, params.tokenB];
        let createPair_send = async (params, options) => {
            let result = await this.send('createPair', createPairParams(params), options);
            return result;
        };
        let createPair_call = async (params, options) => {
            let result = await this.call('createPair', createPairParams(params), options);
            return result;
        };
        let createPair_txData = async (params, options) => {
            let result = await this.txData('createPair', createPairParams(params), options);
            return result;
        };
        this.createPair = Object.assign(createPair_send, {
            call: createPair_call,
            txData: createPair_txData
        });
        let renounceOwnership_send = async (options) => {
            let result = await this.send('renounceOwnership', [], options);
            return result;
        };
        let renounceOwnership_call = async (options) => {
            let result = await this.call('renounceOwnership', [], options);
            return;
        };
        let renounceOwnership_txData = async (options) => {
            let result = await this.txData('renounceOwnership', [], options);
            return result;
        };
        this.renounceOwnership = Object.assign(renounceOwnership_send, {
            call: renounceOwnership_call,
            txData: renounceOwnership_txData
        });
        let setFeePerDelegator_send = async (feePerDelegator, options) => {
            let result = await this.send('setFeePerDelegator', [this.wallet.utils.toString(feePerDelegator)], options);
            return result;
        };
        let setFeePerDelegator_call = async (feePerDelegator, options) => {
            let result = await this.call('setFeePerDelegator', [this.wallet.utils.toString(feePerDelegator)], options);
            return;
        };
        let setFeePerDelegator_txData = async (feePerDelegator, options) => {
            let result = await this.txData('setFeePerDelegator', [this.wallet.utils.toString(feePerDelegator)], options);
            return result;
        };
        this.setFeePerDelegator = Object.assign(setFeePerDelegator_send, {
            call: setFeePerDelegator_call,
            txData: setFeePerDelegator_txData
        });
        let setLive_send = async (isLive, options) => {
            let result = await this.send('setLive', [isLive], options);
            return result;
        };
        let setLive_call = async (isLive, options) => {
            let result = await this.call('setLive', [isLive], options);
            return;
        };
        let setLive_txData = async (isLive, options) => {
            let result = await this.txData('setLive', [isLive], options);
            return result;
        };
        this.setLive = Object.assign(setLive_send, {
            call: setLive_call,
            txData: setLive_txData
        });
        let setLiveForPairParams = (params) => [params.pair, params.live];
        let setLiveForPair_send = async (params, options) => {
            let result = await this.send('setLiveForPair', setLiveForPairParams(params), options);
            return result;
        };
        let setLiveForPair_call = async (params, options) => {
            let result = await this.call('setLiveForPair', setLiveForPairParams(params), options);
            return;
        };
        let setLiveForPair_txData = async (params, options) => {
            let result = await this.txData('setLiveForPair', setLiveForPairParams(params), options);
            return result;
        };
        this.setLiveForPair = Object.assign(setLiveForPair_send, {
            call: setLiveForPair_call,
            txData: setLiveForPair_txData
        });
        let setMinLotSizeParams = (params) => [params.token, this.wallet.utils.toString(params.minLotSize)];
        let setMinLotSize_send = async (params, options) => {
            let result = await this.send('setMinLotSize', setMinLotSizeParams(params), options);
            return result;
        };
        let setMinLotSize_call = async (params, options) => {
            let result = await this.call('setMinLotSize', setMinLotSizeParams(params), options);
            return;
        };
        let setMinLotSize_txData = async (params, options) => {
            let result = await this.txData('setMinLotSize', setMinLotSizeParams(params), options);
            return result;
        };
        this.setMinLotSize = Object.assign(setMinLotSize_send, {
            call: setMinLotSize_call,
            txData: setMinLotSize_txData
        });
        let setOracleParams = (params) => [params.tokenA, params.tokenB, params.oracle];
        let setOracle_send = async (params, options) => {
            let result = await this.send('setOracle', setOracleParams(params), options);
            return result;
        };
        let setOracle_call = async (params, options) => {
            let result = await this.call('setOracle', setOracleParams(params), options);
            return;
        };
        let setOracle_txData = async (params, options) => {
            let result = await this.txData('setOracle', setOracleParams(params), options);
            return result;
        };
        this.setOracle = Object.assign(setOracle_send, {
            call: setOracle_call,
            txData: setOracle_txData
        });
        let setOracleLiquidityProviderParams = (params) => [params.oracleRouter, params.oracleLiquidityProvider];
        let setOracleLiquidityProvider_send = async (params, options) => {
            let result = await this.send('setOracleLiquidityProvider', setOracleLiquidityProviderParams(params), options);
            return result;
        };
        let setOracleLiquidityProvider_call = async (params, options) => {
            let result = await this.call('setOracleLiquidityProvider', setOracleLiquidityProviderParams(params), options);
            return;
        };
        let setOracleLiquidityProvider_txData = async (params, options) => {
            let result = await this.txData('setOracleLiquidityProvider', setOracleLiquidityProviderParams(params), options);
            return result;
        };
        this.setOracleLiquidityProvider = Object.assign(setOracleLiquidityProvider_send, {
            call: setOracleLiquidityProvider_call,
            txData: setOracleLiquidityProvider_txData
        });
        let setProtocolFee_send = async (protocolFee, options) => {
            let result = await this.send('setProtocolFee', [this.wallet.utils.toString(protocolFee)], options);
            return result;
        };
        let setProtocolFee_call = async (protocolFee, options) => {
            let result = await this.call('setProtocolFee', [this.wallet.utils.toString(protocolFee)], options);
            return;
        };
        let setProtocolFee_txData = async (protocolFee, options) => {
            let result = await this.txData('setProtocolFee', [this.wallet.utils.toString(protocolFee)], options);
            return result;
        };
        this.setProtocolFee = Object.assign(setProtocolFee_send, {
            call: setProtocolFee_call,
            txData: setProtocolFee_txData
        });
        let setProtocolFeeTo_send = async (protocolFeeTo, options) => {
            let result = await this.send('setProtocolFeeTo', [protocolFeeTo], options);
            return result;
        };
        let setProtocolFeeTo_call = async (protocolFeeTo, options) => {
            let result = await this.call('setProtocolFeeTo', [protocolFeeTo], options);
            return;
        };
        let setProtocolFeeTo_txData = async (protocolFeeTo, options) => {
            let result = await this.txData('setProtocolFeeTo', [protocolFeeTo], options);
            return result;
        };
        this.setProtocolFeeTo = Object.assign(setProtocolFeeTo_send, {
            call: setProtocolFeeTo_call,
            txData: setProtocolFeeTo_txData
        });
        let setSecurityScoreOracleParams = (params) => [params.securityScoreOracle, this.wallet.utils.toString(params.minOracleScore)];
        let setSecurityScoreOracle_send = async (params, options) => {
            let result = await this.send('setSecurityScoreOracle', setSecurityScoreOracleParams(params), options);
            return result;
        };
        let setSecurityScoreOracle_call = async (params, options) => {
            let result = await this.call('setSecurityScoreOracle', setSecurityScoreOracleParams(params), options);
            return;
        };
        let setSecurityScoreOracle_txData = async (params, options) => {
            let result = await this.txData('setSecurityScoreOracle', setSecurityScoreOracleParams(params), options);
            return result;
        };
        this.setSecurityScoreOracle = Object.assign(setSecurityScoreOracle_send, {
            call: setSecurityScoreOracle_call,
            txData: setSecurityScoreOracle_txData
        });
        let setTradeFee_send = async (tradeFee, options) => {
            let result = await this.send('setTradeFee', [this.wallet.utils.toString(tradeFee)], options);
            return result;
        };
        let setTradeFee_call = async (tradeFee, options) => {
            let result = await this.call('setTradeFee', [this.wallet.utils.toString(tradeFee)], options);
            return;
        };
        let setTradeFee_txData = async (tradeFee, options) => {
            let result = await this.txData('setTradeFee', [this.wallet.utils.toString(tradeFee)], options);
            return result;
        };
        this.setTradeFee = Object.assign(setTradeFee_send, {
            call: setTradeFee_call,
            txData: setTradeFee_txData
        });
        let setWhiteListParams = (params) => [params.who, params.allow];
        let setWhiteList_send = async (params, options) => {
            let result = await this.send('setWhiteList', setWhiteListParams(params), options);
            return result;
        };
        let setWhiteList_call = async (params, options) => {
            let result = await this.call('setWhiteList', setWhiteListParams(params), options);
            return;
        };
        let setWhiteList_txData = async (params, options) => {
            let result = await this.txData('setWhiteList', setWhiteListParams(params), options);
            return result;
        };
        this.setWhiteList = Object.assign(setWhiteList_send, {
            call: setWhiteList_call,
            txData: setWhiteList_txData
        });
        let transferOwnership_send = async (newOwner, options) => {
            let result = await this.send('transferOwnership', [newOwner], options);
            return result;
        };
        let transferOwnership_call = async (newOwner, options) => {
            let result = await this.call('transferOwnership', [newOwner], options);
            return;
        };
        let transferOwnership_txData = async (newOwner, options) => {
            let result = await this.txData('transferOwnership', [newOwner], options);
            return result;
        };
        this.transferOwnership = Object.assign(transferOwnership_send, {
            call: transferOwnership_call,
            txData: transferOwnership_txData
        });
        let updateOracleScore_send = async (oracle, options) => {
            let result = await this.send('updateOracleScore', [oracle], options);
            return result;
        };
        let updateOracleScore_call = async (oracle, options) => {
            let result = await this.call('updateOracleScore', [oracle], options);
            return;
        };
        let updateOracleScore_txData = async (oracle, options) => {
            let result = await this.txData('updateOracleScore', [oracle], options);
            return result;
        };
        this.updateOracleScore = Object.assign(updateOracleScore_send, {
            call: updateOracleScore_call,
            txData: updateOracleScore_txData
        });
    }
}
exports.OSWAP_OracleFactory = OSWAP_OracleFactory;
OSWAP_OracleFactory._abi = OSWAP_OracleFactory_json_1.default.abi;
