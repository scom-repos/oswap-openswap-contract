"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_HybridRouter2 = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const OSWAP_HybridRouter2_json_1 = __importDefault(require("./OSWAP_HybridRouter2.json"));
class OSWAP_HybridRouter2 extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_HybridRouter2_json_1.default.abi, OSWAP_HybridRouter2_json_1.default.bytecode);
        this.assign();
    }
    deploy(params, options) {
        return this.__deploy([params.registry, params.WETH], options);
    }
    assign() {
        let WETH_call = async (options) => {
            let result = await this.call('WETH', [], options);
            return result;
        };
        this.WETH = WETH_call;
        let getAmountsInEndsWithParams = (params) => [this.wallet.utils.toString(params.amountOut), params.pair, params.tokenOut, this.wallet.utils.stringToBytes(params.data)];
        let getAmountsInEndsWith_call = async (params, options) => {
            let result = await this.call('getAmountsInEndsWith', getAmountsInEndsWithParams(params), options);
            return result.map(e => new eth_contract_1.BigNumber(e));
        };
        this.getAmountsInEndsWith = getAmountsInEndsWith_call;
        let getAmountsInStartsWithParams = (params) => [this.wallet.utils.toString(params.amountOut), params.pair, params.tokenIn, this.wallet.utils.stringToBytes(params.data)];
        let getAmountsInStartsWith_call = async (params, options) => {
            let result = await this.call('getAmountsInStartsWith', getAmountsInStartsWithParams(params), options);
            return result.map(e => new eth_contract_1.BigNumber(e));
        };
        this.getAmountsInStartsWith = getAmountsInStartsWith_call;
        let getAmountsOutEndsWithParams = (params) => [this.wallet.utils.toString(params.amountIn), params.pair, params.tokenOut, this.wallet.utils.stringToBytes(params.data)];
        let getAmountsOutEndsWith_call = async (params, options) => {
            let result = await this.call('getAmountsOutEndsWith', getAmountsOutEndsWithParams(params), options);
            return result.map(e => new eth_contract_1.BigNumber(e));
        };
        this.getAmountsOutEndsWith = getAmountsOutEndsWith_call;
        let getAmountsOutStartsWithParams = (params) => [this.wallet.utils.toString(params.amountIn), params.pair, params.tokenIn, this.wallet.utils.stringToBytes(params.data)];
        let getAmountsOutStartsWith_call = async (params, options) => {
            let result = await this.call('getAmountsOutStartsWith', getAmountsOutStartsWithParams(params), options);
            return result.map(e => new eth_contract_1.BigNumber(e));
        };
        this.getAmountsOutStartsWith = getAmountsOutStartsWith_call;
        let getPathInParams = (params) => [params.pair, params.tokenIn];
        let getPathIn_call = async (params, options) => {
            let result = await this.call('getPathIn', getPathInParams(params), options);
            return result;
        };
        this.getPathIn = getPathIn_call;
        let getPathOutParams = (params) => [params.pair, params.tokenOut];
        let getPathOut_call = async (params, options) => {
            let result = await this.call('getPathOut', getPathOutParams(params), options);
            return result;
        };
        this.getPathOut = getPathOut_call;
        let registry_call = async (options) => {
            let result = await this.call('registry', [], options);
            return result;
        };
        this.registry = registry_call;
        let swapETHForExactTokensParams = (params) => [this.wallet.utils.toString(params.amountOut), params.pair, params.to, this.wallet.utils.toString(params.deadline), this.wallet.utils.stringToBytes(params.data)];
        let swapETHForExactTokens_send = async (params, options) => {
            let result = await this.send('swapETHForExactTokens', swapETHForExactTokensParams(params), options);
            return result;
        };
        let swapETHForExactTokens_call = async (params, options) => {
            let result = await this.call('swapETHForExactTokens', swapETHForExactTokensParams(params), options);
            return {
                path: result.path,
                amounts: result.amounts.map(e => new eth_contract_1.BigNumber(e))
            };
        };
        let swapETHForExactTokens_txData = async (params, options) => {
            let result = await this.txData('swapETHForExactTokens', swapETHForExactTokensParams(params), options);
            return result;
        };
        this.swapETHForExactTokens = Object.assign(swapETHForExactTokens_send, {
            call: swapETHForExactTokens_call,
            txData: swapETHForExactTokens_txData
        });
        let swapExactETHForTokensParams = (params) => [this.wallet.utils.toString(params.amountOutMin), params.pair, params.to, this.wallet.utils.toString(params.deadline), this.wallet.utils.stringToBytes(params.data)];
        let swapExactETHForTokens_send = async (params, options) => {
            let result = await this.send('swapExactETHForTokens', swapExactETHForTokensParams(params), options);
            return result;
        };
        let swapExactETHForTokens_call = async (params, options) => {
            let result = await this.call('swapExactETHForTokens', swapExactETHForTokensParams(params), options);
            return {
                path: result.path,
                amounts: result.amounts.map(e => new eth_contract_1.BigNumber(e))
            };
        };
        let swapExactETHForTokens_txData = async (params, options) => {
            let result = await this.txData('swapExactETHForTokens', swapExactETHForTokensParams(params), options);
            return result;
        };
        this.swapExactETHForTokens = Object.assign(swapExactETHForTokens_send, {
            call: swapExactETHForTokens_call,
            txData: swapExactETHForTokens_txData
        });
        let swapExactETHForTokensSupportingFeeOnTransferTokensParams = (params) => [this.wallet.utils.toString(params.amountOutMin), params.pair, params.to, this.wallet.utils.toString(params.deadline), this.wallet.utils.stringToBytes(params.data)];
        let swapExactETHForTokensSupportingFeeOnTransferTokens_send = async (params, options) => {
            let result = await this.send('swapExactETHForTokensSupportingFeeOnTransferTokens', swapExactETHForTokensSupportingFeeOnTransferTokensParams(params), options);
            return result;
        };
        let swapExactETHForTokensSupportingFeeOnTransferTokens_call = async (params, options) => {
            let result = await this.call('swapExactETHForTokensSupportingFeeOnTransferTokens', swapExactETHForTokensSupportingFeeOnTransferTokensParams(params), options);
            return;
        };
        let swapExactETHForTokensSupportingFeeOnTransferTokens_txData = async (params, options) => {
            let result = await this.txData('swapExactETHForTokensSupportingFeeOnTransferTokens', swapExactETHForTokensSupportingFeeOnTransferTokensParams(params), options);
            return result;
        };
        this.swapExactETHForTokensSupportingFeeOnTransferTokens = Object.assign(swapExactETHForTokensSupportingFeeOnTransferTokens_send, {
            call: swapExactETHForTokensSupportingFeeOnTransferTokens_call,
            txData: swapExactETHForTokensSupportingFeeOnTransferTokens_txData
        });
        let swapExactTokensForETHParams = (params) => [this.wallet.utils.toString(params.amountIn), this.wallet.utils.toString(params.amountOutMin), params.pair, params.to, this.wallet.utils.toString(params.deadline), this.wallet.utils.stringToBytes(params.data)];
        let swapExactTokensForETH_send = async (params, options) => {
            let result = await this.send('swapExactTokensForETH', swapExactTokensForETHParams(params), options);
            return result;
        };
        let swapExactTokensForETH_call = async (params, options) => {
            let result = await this.call('swapExactTokensForETH', swapExactTokensForETHParams(params), options);
            return {
                path: result.path,
                amounts: result.amounts.map(e => new eth_contract_1.BigNumber(e))
            };
        };
        let swapExactTokensForETH_txData = async (params, options) => {
            let result = await this.txData('swapExactTokensForETH', swapExactTokensForETHParams(params), options);
            return result;
        };
        this.swapExactTokensForETH = Object.assign(swapExactTokensForETH_send, {
            call: swapExactTokensForETH_call,
            txData: swapExactTokensForETH_txData
        });
        let swapExactTokensForETHSupportingFeeOnTransferTokensParams = (params) => [this.wallet.utils.toString(params.amountIn), this.wallet.utils.toString(params.amountOutMin), params.pair, params.to, this.wallet.utils.toString(params.deadline), this.wallet.utils.stringToBytes(params.data)];
        let swapExactTokensForETHSupportingFeeOnTransferTokens_send = async (params, options) => {
            let result = await this.send('swapExactTokensForETHSupportingFeeOnTransferTokens', swapExactTokensForETHSupportingFeeOnTransferTokensParams(params), options);
            return result;
        };
        let swapExactTokensForETHSupportingFeeOnTransferTokens_call = async (params, options) => {
            let result = await this.call('swapExactTokensForETHSupportingFeeOnTransferTokens', swapExactTokensForETHSupportingFeeOnTransferTokensParams(params), options);
            return;
        };
        let swapExactTokensForETHSupportingFeeOnTransferTokens_txData = async (params, options) => {
            let result = await this.txData('swapExactTokensForETHSupportingFeeOnTransferTokens', swapExactTokensForETHSupportingFeeOnTransferTokensParams(params), options);
            return result;
        };
        this.swapExactTokensForETHSupportingFeeOnTransferTokens = Object.assign(swapExactTokensForETHSupportingFeeOnTransferTokens_send, {
            call: swapExactTokensForETHSupportingFeeOnTransferTokens_call,
            txData: swapExactTokensForETHSupportingFeeOnTransferTokens_txData
        });
        let swapExactTokensForTokensParams = (params) => [this.wallet.utils.toString(params.amountIn), this.wallet.utils.toString(params.amountOutMin), params.pair, params.tokenIn, params.to, this.wallet.utils.toString(params.deadline), this.wallet.utils.stringToBytes(params.data)];
        let swapExactTokensForTokens_send = async (params, options) => {
            let result = await this.send('swapExactTokensForTokens', swapExactTokensForTokensParams(params), options);
            return result;
        };
        let swapExactTokensForTokens_call = async (params, options) => {
            let result = await this.call('swapExactTokensForTokens', swapExactTokensForTokensParams(params), options);
            return {
                path: result.path,
                amounts: result.amounts.map(e => new eth_contract_1.BigNumber(e))
            };
        };
        let swapExactTokensForTokens_txData = async (params, options) => {
            let result = await this.txData('swapExactTokensForTokens', swapExactTokensForTokensParams(params), options);
            return result;
        };
        this.swapExactTokensForTokens = Object.assign(swapExactTokensForTokens_send, {
            call: swapExactTokensForTokens_call,
            txData: swapExactTokensForTokens_txData
        });
        let swapExactTokensForTokensSupportingFeeOnTransferTokensParams = (params) => [this.wallet.utils.toString(params.amountIn), this.wallet.utils.toString(params.amountOutMin), params.pair, params.tokenIn, params.to, this.wallet.utils.toString(params.deadline), this.wallet.utils.stringToBytes(params.data)];
        let swapExactTokensForTokensSupportingFeeOnTransferTokens_send = async (params, options) => {
            let result = await this.send('swapExactTokensForTokensSupportingFeeOnTransferTokens', swapExactTokensForTokensSupportingFeeOnTransferTokensParams(params), options);
            return result;
        };
        let swapExactTokensForTokensSupportingFeeOnTransferTokens_call = async (params, options) => {
            let result = await this.call('swapExactTokensForTokensSupportingFeeOnTransferTokens', swapExactTokensForTokensSupportingFeeOnTransferTokensParams(params), options);
            return;
        };
        let swapExactTokensForTokensSupportingFeeOnTransferTokens_txData = async (params, options) => {
            let result = await this.txData('swapExactTokensForTokensSupportingFeeOnTransferTokens', swapExactTokensForTokensSupportingFeeOnTransferTokensParams(params), options);
            return result;
        };
        this.swapExactTokensForTokensSupportingFeeOnTransferTokens = Object.assign(swapExactTokensForTokensSupportingFeeOnTransferTokens_send, {
            call: swapExactTokensForTokensSupportingFeeOnTransferTokens_call,
            txData: swapExactTokensForTokensSupportingFeeOnTransferTokens_txData
        });
        let swapTokensForExactETHParams = (params) => [this.wallet.utils.toString(params.amountOut), this.wallet.utils.toString(params.amountInMax), params.pair, params.to, this.wallet.utils.toString(params.deadline), this.wallet.utils.stringToBytes(params.data)];
        let swapTokensForExactETH_send = async (params, options) => {
            let result = await this.send('swapTokensForExactETH', swapTokensForExactETHParams(params), options);
            return result;
        };
        let swapTokensForExactETH_call = async (params, options) => {
            let result = await this.call('swapTokensForExactETH', swapTokensForExactETHParams(params), options);
            return {
                path: result.path,
                amounts: result.amounts.map(e => new eth_contract_1.BigNumber(e))
            };
        };
        let swapTokensForExactETH_txData = async (params, options) => {
            let result = await this.txData('swapTokensForExactETH', swapTokensForExactETHParams(params), options);
            return result;
        };
        this.swapTokensForExactETH = Object.assign(swapTokensForExactETH_send, {
            call: swapTokensForExactETH_call,
            txData: swapTokensForExactETH_txData
        });
        let swapTokensForExactTokensParams = (params) => [this.wallet.utils.toString(params.amountOut), this.wallet.utils.toString(params.amountInMax), params.pair, params.tokenOut, params.to, this.wallet.utils.toString(params.deadline), this.wallet.utils.stringToBytes(params.data)];
        let swapTokensForExactTokens_send = async (params, options) => {
            let result = await this.send('swapTokensForExactTokens', swapTokensForExactTokensParams(params), options);
            return result;
        };
        let swapTokensForExactTokens_call = async (params, options) => {
            let result = await this.call('swapTokensForExactTokens', swapTokensForExactTokensParams(params), options);
            return {
                path: result.path,
                amounts: result.amounts.map(e => new eth_contract_1.BigNumber(e))
            };
        };
        let swapTokensForExactTokens_txData = async (params, options) => {
            let result = await this.txData('swapTokensForExactTokens', swapTokensForExactTokensParams(params), options);
            return result;
        };
        this.swapTokensForExactTokens = Object.assign(swapTokensForExactTokens_send, {
            call: swapTokensForExactTokens_call,
            txData: swapTokensForExactTokens_txData
        });
    }
}
exports.OSWAP_HybridRouter2 = OSWAP_HybridRouter2;
OSWAP_HybridRouter2._abi = OSWAP_HybridRouter2_json_1.default.abi;
