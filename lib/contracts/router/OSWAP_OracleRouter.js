"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_OracleRouter = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const OSWAP_OracleRouter_json_1 = __importDefault(require("./OSWAP_OracleRouter.json"));
class OSWAP_OracleRouter extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_OracleRouter_json_1.default.abi, OSWAP_OracleRouter_json_1.default.bytecode);
        this.assign();
    }
    deploy(params, options) {
        return this.__deploy([params.ammFactory, params.oracleFactory, params.WETH], options);
    }
    assign() {
        let WETH_call = async (options) => {
            let result = await this.call('WETH', [], options);
            return result;
        };
        this.WETH = WETH_call;
        let ammFactory_call = async (options) => {
            let result = await this.call('ammFactory', [], options);
            return result;
        };
        this.ammFactory = ammFactory_call;
        let getAmountInParams = (params) => [this.wallet.utils.toString(params.amountOut), params.tokenIn, params.tokenOut, this.wallet.utils.stringToBytes(params.data)];
        let getAmountIn_call = async (params, options) => {
            let result = await this.call('getAmountIn', getAmountInParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        this.getAmountIn = getAmountIn_call;
        let getAmountOutParams = (params) => [this.wallet.utils.toString(params.amountIn), params.tokenIn, params.tokenOut, this.wallet.utils.stringToBytes(params.data)];
        let getAmountOut_call = async (params, options) => {
            let result = await this.call('getAmountOut', getAmountOutParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        this.getAmountOut = getAmountOut_call;
        let getAmountsInParams = (params) => [this.wallet.utils.toString(params.amountOut), params.path, params.useOracle, this.wallet.utils.stringToBytes(params.data)];
        let getAmountsIn_call = async (params, options) => {
            let result = await this.call('getAmountsIn', getAmountsInParams(params), options);
            return result.map(e => new eth_contract_1.BigNumber(e));
        };
        this.getAmountsIn = getAmountsIn_call;
        let getAmountsOutParams = (params) => [this.wallet.utils.toString(params.amountIn), params.path, params.useOracle, this.wallet.utils.stringToBytes(params.data)];
        let getAmountsOut_call = async (params, options) => {
            let result = await this.call('getAmountsOut', getAmountsOutParams(params), options);
            return result.map(e => new eth_contract_1.BigNumber(e));
        };
        this.getAmountsOut = getAmountsOut_call;
        let getLatestPriceParams = (params) => [params.tokenIn, params.tokenOut, this.wallet.utils.stringToBytes(params.data)];
        let getLatestPrice_call = async (params, options) => {
            let result = await this.call('getLatestPrice', getLatestPriceParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        this.getLatestPrice = getLatestPrice_call;
        let oracleFactory_call = async (options) => {
            let result = await this.call('oracleFactory', [], options);
            return result;
        };
        this.oracleFactory = oracleFactory_call;
        let swapETHForExactTokensParams = (params) => [this.wallet.utils.toString(params.amountOut), params.path, params.to, this.wallet.utils.toString(params.deadline), params.useOracle, this.wallet.utils.stringToBytes(params.data)];
        let swapETHForExactTokens_send = async (params, options) => {
            let result = await this.send('swapETHForExactTokens', swapETHForExactTokensParams(params), options);
            return result;
        };
        let swapETHForExactTokens_call = async (params, options) => {
            let result = await this.call('swapETHForExactTokens', swapETHForExactTokensParams(params), options);
            return result.map(e => new eth_contract_1.BigNumber(e));
        };
        let swapETHForExactTokens_txData = async (params, options) => {
            let result = await this.txData('swapETHForExactTokens', swapETHForExactTokensParams(params), options);
            return result;
        };
        this.swapETHForExactTokens = Object.assign(swapETHForExactTokens_send, {
            call: swapETHForExactTokens_call,
            txData: swapETHForExactTokens_txData
        });
        let swapExactETHForTokensParams = (params) => [this.wallet.utils.toString(params.amountOutMin), params.path, params.to, this.wallet.utils.toString(params.deadline), params.useOracle, this.wallet.utils.stringToBytes(params.data)];
        let swapExactETHForTokens_send = async (params, options) => {
            let result = await this.send('swapExactETHForTokens', swapExactETHForTokensParams(params), options);
            return result;
        };
        let swapExactETHForTokens_call = async (params, options) => {
            let result = await this.call('swapExactETHForTokens', swapExactETHForTokensParams(params), options);
            return result.map(e => new eth_contract_1.BigNumber(e));
        };
        let swapExactETHForTokens_txData = async (params, options) => {
            let result = await this.txData('swapExactETHForTokens', swapExactETHForTokensParams(params), options);
            return result;
        };
        this.swapExactETHForTokens = Object.assign(swapExactETHForTokens_send, {
            call: swapExactETHForTokens_call,
            txData: swapExactETHForTokens_txData
        });
        let swapExactETHForTokensSupportingFeeOnTransferTokensParams = (params) => [this.wallet.utils.toString(params.amountOutMin), params.path, params.to, this.wallet.utils.toString(params.deadline), params.useOracle, this.wallet.utils.stringToBytes(params.data)];
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
        let swapExactTokensForETHParams = (params) => [this.wallet.utils.toString(params.amountIn), this.wallet.utils.toString(params.amountOutMin), params.path, params.to, this.wallet.utils.toString(params.deadline), params.useOracle, this.wallet.utils.stringToBytes(params.data)];
        let swapExactTokensForETH_send = async (params, options) => {
            let result = await this.send('swapExactTokensForETH', swapExactTokensForETHParams(params), options);
            return result;
        };
        let swapExactTokensForETH_call = async (params, options) => {
            let result = await this.call('swapExactTokensForETH', swapExactTokensForETHParams(params), options);
            return result.map(e => new eth_contract_1.BigNumber(e));
        };
        let swapExactTokensForETH_txData = async (params, options) => {
            let result = await this.txData('swapExactTokensForETH', swapExactTokensForETHParams(params), options);
            return result;
        };
        this.swapExactTokensForETH = Object.assign(swapExactTokensForETH_send, {
            call: swapExactTokensForETH_call,
            txData: swapExactTokensForETH_txData
        });
        let swapExactTokensForETHSupportingFeeOnTransferTokensParams = (params) => [this.wallet.utils.toString(params.amountIn), this.wallet.utils.toString(params.amountOutMin), params.path, params.to, this.wallet.utils.toString(params.deadline), params.useOracle, this.wallet.utils.stringToBytes(params.data)];
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
        let swapExactTokensForTokensParams = (params) => [this.wallet.utils.toString(params.amountIn), this.wallet.utils.toString(params.amountOutMin), params.path, params.to, this.wallet.utils.toString(params.deadline), params.useOracle, this.wallet.utils.stringToBytes(params.data)];
        let swapExactTokensForTokens_send = async (params, options) => {
            let result = await this.send('swapExactTokensForTokens', swapExactTokensForTokensParams(params), options);
            return result;
        };
        let swapExactTokensForTokens_call = async (params, options) => {
            let result = await this.call('swapExactTokensForTokens', swapExactTokensForTokensParams(params), options);
            return result.map(e => new eth_contract_1.BigNumber(e));
        };
        let swapExactTokensForTokens_txData = async (params, options) => {
            let result = await this.txData('swapExactTokensForTokens', swapExactTokensForTokensParams(params), options);
            return result;
        };
        this.swapExactTokensForTokens = Object.assign(swapExactTokensForTokens_send, {
            call: swapExactTokensForTokens_call,
            txData: swapExactTokensForTokens_txData
        });
        let swapExactTokensForTokensSupportingFeeOnTransferTokensParams = (params) => [this.wallet.utils.toString(params.amountIn), this.wallet.utils.toString(params.amountOutMin), params.path, params.to, this.wallet.utils.toString(params.deadline), params.useOracle, this.wallet.utils.stringToBytes(params.data)];
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
        let swapTokensForExactETHParams = (params) => [this.wallet.utils.toString(params.amountOut), this.wallet.utils.toString(params.amountInMax), params.path, params.to, this.wallet.utils.toString(params.deadline), params.useOracle, this.wallet.utils.stringToBytes(params.data)];
        let swapTokensForExactETH_send = async (params, options) => {
            let result = await this.send('swapTokensForExactETH', swapTokensForExactETHParams(params), options);
            return result;
        };
        let swapTokensForExactETH_call = async (params, options) => {
            let result = await this.call('swapTokensForExactETH', swapTokensForExactETHParams(params), options);
            return result.map(e => new eth_contract_1.BigNumber(e));
        };
        let swapTokensForExactETH_txData = async (params, options) => {
            let result = await this.txData('swapTokensForExactETH', swapTokensForExactETHParams(params), options);
            return result;
        };
        this.swapTokensForExactETH = Object.assign(swapTokensForExactETH_send, {
            call: swapTokensForExactETH_call,
            txData: swapTokensForExactETH_txData
        });
        let swapTokensForExactTokensParams = (params) => [this.wallet.utils.toString(params.amountOut), this.wallet.utils.toString(params.amountInMax), params.path, params.to, this.wallet.utils.toString(params.deadline), params.useOracle, this.wallet.utils.stringToBytes(params.data)];
        let swapTokensForExactTokens_send = async (params, options) => {
            let result = await this.send('swapTokensForExactTokens', swapTokensForExactTokensParams(params), options);
            return result;
        };
        let swapTokensForExactTokens_call = async (params, options) => {
            let result = await this.call('swapTokensForExactTokens', swapTokensForExactTokensParams(params), options);
            return result.map(e => new eth_contract_1.BigNumber(e));
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
OSWAP_OracleRouter._abi = OSWAP_OracleRouter_json_1.default.abi;
exports.OSWAP_OracleRouter = OSWAP_OracleRouter;
