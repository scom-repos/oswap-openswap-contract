"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_HybridRouterRegistry = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const OSWAP_HybridRouterRegistry_json_1 = __importDefault(require("./OSWAP_HybridRouterRegistry.json"));
class OSWAP_HybridRouterRegistry extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_HybridRouterRegistry_json_1.default.abi, OSWAP_HybridRouterRegistry_json_1.default.bytecode);
        this.assign();
    }
    deploy(governance, options) {
        return this.__deploy([governance], options);
    }
    parseCustomPairRegisterEvent(receipt) {
        return this.parseEvents(receipt, "CustomPairRegister").map(e => this.decodeCustomPairRegisterEvent(e));
    }
    decodeCustomPairRegisterEvent(event) {
        let result = event.data;
        return {
            pair: result.pair,
            fee: new eth_contract_1.BigNumber(result.fee),
            feeBase: new eth_contract_1.BigNumber(result.feeBase),
            typeCode: new eth_contract_1.BigNumber(result.typeCode),
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
    parsePairRegisterEvent(receipt) {
        return this.parseEvents(receipt, "PairRegister").map(e => this.decodePairRegisterEvent(e));
    }
    decodePairRegisterEvent(event) {
        let result = event.data;
        return {
            factory: result.factory,
            pair: result.pair,
            token0: result.token0,
            token1: result.token1,
            _event: event
        };
    }
    parseProtocolRegisterEvent(receipt) {
        return this.parseEvents(receipt, "ProtocolRegister").map(e => this.decodeProtocolRegisterEvent(e));
    }
    decodeProtocolRegisterEvent(event) {
        let result = event.data;
        return {
            factory: result.factory,
            name: result.name,
            fee: new eth_contract_1.BigNumber(result.fee),
            feeBase: new eth_contract_1.BigNumber(result.feeBase),
            typeCode: new eth_contract_1.BigNumber(result.typeCode),
            _event: event
        };
    }
    assign() {
        let customPairs_call = async (param1, options) => {
            let result = await this.call('customPairs', [param1], options);
            return {
                fee: new eth_contract_1.BigNumber(result.fee),
                feeBase: new eth_contract_1.BigNumber(result.feeBase),
                typeCode: new eth_contract_1.BigNumber(result.typeCode)
            };
        };
        this.customPairs = customPairs_call;
        let getFee_call = async (pairAddress, options) => {
            let result = await this.call('getFee', [pairAddress], options);
            return {
                fee: new eth_contract_1.BigNumber(result.fee),
                feeBase: new eth_contract_1.BigNumber(result.feeBase)
            };
        };
        this.getFee = getFee_call;
        let getPairTokens_call = async (pairAddress, options) => {
            let result = await this.call('getPairTokens', [pairAddress], options);
            return {
                token0: result.token0,
                token1: result.token1
            };
        };
        this.getPairTokens = getPairTokens_call;
        let getTypeCode_call = async (pairAddress, options) => {
            let result = await this.call('getTypeCode', [pairAddress], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.getTypeCode = getTypeCode_call;
        let governance_call = async (options) => {
            let result = await this.call('governance', [], options);
            return result;
        };
        this.governance = governance_call;
        let owner_call = async (options) => {
            let result = await this.call('owner', [], options);
            return result;
        };
        this.owner = owner_call;
        let pairs_call = async (param1, options) => {
            let result = await this.call('pairs', [param1], options);
            return {
                factory: result.factory,
                token0: result.token0,
                token1: result.token1
            };
        };
        this.pairs = pairs_call;
        let protocolList_call = async (param1, options) => {
            let result = await this.call('protocolList', [this.wallet.utils.toString(param1)], options);
            return result;
        };
        this.protocolList = protocolList_call;
        let protocolListLength_call = async (options) => {
            let result = await this.call('protocolListLength', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.protocolListLength = protocolListLength_call;
        let protocols_call = async (param1, options) => {
            let result = await this.call('protocols', [param1], options);
            return {
                name: result.name,
                fee: new eth_contract_1.BigNumber(result.fee),
                feeBase: new eth_contract_1.BigNumber(result.feeBase),
                typeCode: new eth_contract_1.BigNumber(result.typeCode)
            };
        };
        this.protocols = protocols_call;
        let execute_send = async (params, options) => {
            let result = await this.send('execute', [this.wallet.utils.stringToBytes32(params)], options);
            return result;
        };
        let execute_call = async (params, options) => {
            let result = await this.call('execute', [this.wallet.utils.stringToBytes32(params)], options);
            return;
        };
        let execute_txData = async (params, options) => {
            let result = await this.txData('execute', [this.wallet.utils.stringToBytes32(params)], options);
            return result;
        };
        this.execute = Object.assign(execute_send, {
            call: execute_call,
            txData: execute_txData
        });
        let initParams = (params) => [this.wallet.utils.stringToBytes32(params.name), params.factory, this.wallet.utils.toString(params.fee), this.wallet.utils.toString(params.feeBase), this.wallet.utils.toString(params.typeCode)];
        let init_send = async (params, options) => {
            let result = await this.send('init', initParams(params), options);
            return result;
        };
        let init_call = async (params, options) => {
            let result = await this.call('init', initParams(params), options);
            return;
        };
        let init_txData = async (params, options) => {
            let result = await this.txData('init', initParams(params), options);
            return result;
        };
        this.init = Object.assign(init_send, {
            call: init_call,
            txData: init_txData
        });
        let registerPairParams = (params) => [params.token0, params.token1, params.pairAddress, this.wallet.utils.toString(params.fee), this.wallet.utils.toString(params.feeBase), this.wallet.utils.toString(params.typeCode)];
        let registerPair_send = async (params, options) => {
            let result = await this.send('registerPair', registerPairParams(params), options);
            return result;
        };
        let registerPair_call = async (params, options) => {
            let result = await this.call('registerPair', registerPairParams(params), options);
            return;
        };
        let registerPair_txData = async (params, options) => {
            let result = await this.txData('registerPair', registerPairParams(params), options);
            return result;
        };
        this.registerPair = Object.assign(registerPair_send, {
            call: registerPair_call,
            txData: registerPair_txData
        });
        let registerPairByAddressParams = (params) => [params.factory, params.pairAddress];
        let registerPairByAddress_send = async (params, options) => {
            let result = await this.send('registerPairByAddress', registerPairByAddressParams(params), options);
            return result;
        };
        let registerPairByAddress_call = async (params, options) => {
            let result = await this.call('registerPairByAddress', registerPairByAddressParams(params), options);
            return;
        };
        let registerPairByAddress_txData = async (params, options) => {
            let result = await this.txData('registerPairByAddress', registerPairByAddressParams(params), options);
            return result;
        };
        this.registerPairByAddress = Object.assign(registerPairByAddress_send, {
            call: registerPairByAddress_call,
            txData: registerPairByAddress_txData
        });
        let registerPairByIndexParams = (params) => [params.factory, this.wallet.utils.toString(params.index)];
        let registerPairByIndex_send = async (params, options) => {
            let result = await this.send('registerPairByIndex', registerPairByIndexParams(params), options);
            return result;
        };
        let registerPairByIndex_call = async (params, options) => {
            let result = await this.call('registerPairByIndex', registerPairByIndexParams(params), options);
            return;
        };
        let registerPairByIndex_txData = async (params, options) => {
            let result = await this.txData('registerPairByIndex', registerPairByIndexParams(params), options);
            return result;
        };
        this.registerPairByIndex = Object.assign(registerPairByIndex_send, {
            call: registerPairByIndex_call,
            txData: registerPairByIndex_txData
        });
        let registerPairByTokensParams = (params) => [params.factory, params.token0, params.token1];
        let registerPairByTokens_send = async (params, options) => {
            let result = await this.send('registerPairByTokens', registerPairByTokensParams(params), options);
            return result;
        };
        let registerPairByTokens_call = async (params, options) => {
            let result = await this.call('registerPairByTokens', registerPairByTokensParams(params), options);
            return;
        };
        let registerPairByTokens_txData = async (params, options) => {
            let result = await this.txData('registerPairByTokens', registerPairByTokensParams(params), options);
            return result;
        };
        this.registerPairByTokens = Object.assign(registerPairByTokens_send, {
            call: registerPairByTokens_call,
            txData: registerPairByTokens_txData
        });
        let registerPairByTokensV3Params = (params) => [params.factory, params.token0, params.token1, this.wallet.utils.toString(params.pairIndex)];
        let registerPairByTokensV3_send = async (params, options) => {
            let result = await this.send('registerPairByTokensV3', registerPairByTokensV3Params(params), options);
            return result;
        };
        let registerPairByTokensV3_call = async (params, options) => {
            let result = await this.call('registerPairByTokensV3', registerPairByTokensV3Params(params), options);
            return;
        };
        let registerPairByTokensV3_txData = async (params, options) => {
            let result = await this.txData('registerPairByTokensV3', registerPairByTokensV3Params(params), options);
            return result;
        };
        this.registerPairByTokensV3 = Object.assign(registerPairByTokensV3_send, {
            call: registerPairByTokensV3_call,
            txData: registerPairByTokensV3_txData
        });
        let registerPairsByAddressParams = (params) => [params.factory, params.pairAddress];
        let registerPairsByAddress_send = async (params, options) => {
            let result = await this.send('registerPairsByAddress', registerPairsByAddressParams(params), options);
            return result;
        };
        let registerPairsByAddress_call = async (params, options) => {
            let result = await this.call('registerPairsByAddress', registerPairsByAddressParams(params), options);
            return;
        };
        let registerPairsByAddress_txData = async (params, options) => {
            let result = await this.txData('registerPairsByAddress', registerPairsByAddressParams(params), options);
            return result;
        };
        this.registerPairsByAddress = Object.assign(registerPairsByAddress_send, {
            call: registerPairsByAddress_call,
            txData: registerPairsByAddress_txData
        });
        let registerPairsByAddress2Params = (params) => [params.factory, params.pairAddress];
        let registerPairsByAddress2_send = async (params, options) => {
            let result = await this.send('registerPairsByAddress2', registerPairsByAddress2Params(params), options);
            return result;
        };
        let registerPairsByAddress2_call = async (params, options) => {
            let result = await this.call('registerPairsByAddress2', registerPairsByAddress2Params(params), options);
            return;
        };
        let registerPairsByAddress2_txData = async (params, options) => {
            let result = await this.txData('registerPairsByAddress2', registerPairsByAddress2Params(params), options);
            return result;
        };
        this.registerPairsByAddress2 = Object.assign(registerPairsByAddress2_send, {
            call: registerPairsByAddress2_call,
            txData: registerPairsByAddress2_txData
        });
        let registerPairsByIndexParams = (params) => [params.factory, this.wallet.utils.toString(params.index)];
        let registerPairsByIndex_send = async (params, options) => {
            let result = await this.send('registerPairsByIndex', registerPairsByIndexParams(params), options);
            return result;
        };
        let registerPairsByIndex_call = async (params, options) => {
            let result = await this.call('registerPairsByIndex', registerPairsByIndexParams(params), options);
            return;
        };
        let registerPairsByIndex_txData = async (params, options) => {
            let result = await this.txData('registerPairsByIndex', registerPairsByIndexParams(params), options);
            return result;
        };
        this.registerPairsByIndex = Object.assign(registerPairsByIndex_send, {
            call: registerPairsByIndex_call,
            txData: registerPairsByIndex_txData
        });
        let registerPairsByTokensParams = (params) => [params.factory, params.token0, params.token1];
        let registerPairsByTokens_send = async (params, options) => {
            let result = await this.send('registerPairsByTokens', registerPairsByTokensParams(params), options);
            return result;
        };
        let registerPairsByTokens_call = async (params, options) => {
            let result = await this.call('registerPairsByTokens', registerPairsByTokensParams(params), options);
            return;
        };
        let registerPairsByTokens_txData = async (params, options) => {
            let result = await this.txData('registerPairsByTokens', registerPairsByTokensParams(params), options);
            return result;
        };
        this.registerPairsByTokens = Object.assign(registerPairsByTokens_send, {
            call: registerPairsByTokens_call,
            txData: registerPairsByTokens_txData
        });
        let registerPairsByTokensV3Params = (params) => [params.factory, params.token0, params.token1, this.wallet.utils.toString(params.pairIndex)];
        let registerPairsByTokensV3_send = async (params, options) => {
            let result = await this.send('registerPairsByTokensV3', registerPairsByTokensV3Params(params), options);
            return result;
        };
        let registerPairsByTokensV3_call = async (params, options) => {
            let result = await this.call('registerPairsByTokensV3', registerPairsByTokensV3Params(params), options);
            return;
        };
        let registerPairsByTokensV3_txData = async (params, options) => {
            let result = await this.txData('registerPairsByTokensV3', registerPairsByTokensV3Params(params), options);
            return result;
        };
        this.registerPairsByTokensV3 = Object.assign(registerPairsByTokensV3_send, {
            call: registerPairsByTokensV3_call,
            txData: registerPairsByTokensV3_txData
        });
        let registerProtocolParams = (params) => [this.wallet.utils.stringToBytes32(params.name), params.factory, this.wallet.utils.toString(params.fee), this.wallet.utils.toString(params.feeBase), this.wallet.utils.toString(params.typeCode)];
        let registerProtocol_send = async (params, options) => {
            let result = await this.send('registerProtocol', registerProtocolParams(params), options);
            return result;
        };
        let registerProtocol_call = async (params, options) => {
            let result = await this.call('registerProtocol', registerProtocolParams(params), options);
            return;
        };
        let registerProtocol_txData = async (params, options) => {
            let result = await this.txData('registerProtocol', registerProtocolParams(params), options);
            return result;
        };
        this.registerProtocol = Object.assign(registerProtocol_send, {
            call: registerProtocol_call,
            txData: registerProtocol_txData
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
    }
}
exports.OSWAP_HybridRouterRegistry = OSWAP_HybridRouterRegistry;
OSWAP_HybridRouterRegistry._abi = OSWAP_HybridRouterRegistry_json_1.default.abi;
