"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_OracleLiquidityProvider = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const OSWAP_OracleLiquidityProvider_json_1 = __importDefault(require("./OSWAP_OracleLiquidityProvider.json"));
class OSWAP_OracleLiquidityProvider extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_OracleLiquidityProvider_json_1.default.abi, OSWAP_OracleLiquidityProvider_json_1.default.bytecode);
        this.assign();
    }
    deploy(params, options) {
        return this.__deploy([params.factory, params.WETH], options);
    }
    assign() {
        let WETH_call = async (options) => {
            let result = await this.call('WETH', [], options);
            return result;
        };
        this.WETH = WETH_call;
        let factory_call = async (options) => {
            let result = await this.call('factory', [], options);
            return result;
        };
        this.factory = factory_call;
        let govToken_call = async (options) => {
            let result = await this.call('govToken', [], options);
            return result;
        };
        this.govToken = govToken_call;
        let addLiquidityParams = (params) => [params.tokenA, params.tokenB, params.addingTokenA, this.wallet.utils.toString(params.staked), this.wallet.utils.toString(params.afterIndex), this.wallet.utils.toString(params.amountIn), this.wallet.utils.toString(params.expire), params.enable, this.wallet.utils.toString(params.deadline)];
        let addLiquidity_send = async (params, options) => {
            let result = await this.send('addLiquidity', addLiquidityParams(params), options);
            return result;
        };
        let addLiquidity_call = async (params, options) => {
            let result = await this.call('addLiquidity', addLiquidityParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        let addLiquidity_txData = async (params, options) => {
            let result = await this.txData('addLiquidity', addLiquidityParams(params), options);
            return result;
        };
        this.addLiquidity = Object.assign(addLiquidity_send, {
            call: addLiquidity_call,
            txData: addLiquidity_txData
        });
        let addLiquidityETHParams = (params) => [params.tokenA, params.addingTokenA, this.wallet.utils.toString(params.staked), this.wallet.utils.toString(params.afterIndex), this.wallet.utils.toString(params.amountAIn), this.wallet.utils.toString(params.expire), params.enable, this.wallet.utils.toString(params.deadline)];
        let addLiquidityETH_send = async (params, options) => {
            let result = await this.send('addLiquidityETH', addLiquidityETHParams(params), options);
            return result;
        };
        let addLiquidityETH_call = async (params, options) => {
            let result = await this.call('addLiquidityETH', addLiquidityETHParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        let addLiquidityETH_txData = async (params, options) => {
            let result = await this.txData('addLiquidityETH', addLiquidityETHParams(params), options);
            return result;
        };
        this.addLiquidityETH = Object.assign(addLiquidityETH_send, {
            call: addLiquidityETH_call,
            txData: addLiquidityETH_txData
        });
        let removeAllLiquidityParams = (params) => [params.tokenA, params.tokenB, params.to, this.wallet.utils.toString(params.deadline)];
        let removeAllLiquidity_send = async (params, options) => {
            let result = await this.send('removeAllLiquidity', removeAllLiquidityParams(params), options);
            return result;
        };
        let removeAllLiquidity_call = async (params, options) => {
            let result = await this.call('removeAllLiquidity', removeAllLiquidityParams(params), options);
            return {
                amountA: new eth_contract_1.BigNumber(result.amountA),
                amountB: new eth_contract_1.BigNumber(result.amountB)
            };
        };
        let removeAllLiquidity_txData = async (params, options) => {
            let result = await this.txData('removeAllLiquidity', removeAllLiquidityParams(params), options);
            return result;
        };
        this.removeAllLiquidity = Object.assign(removeAllLiquidity_send, {
            call: removeAllLiquidity_call,
            txData: removeAllLiquidity_txData
        });
        let removeAllLiquidityETHParams = (params) => [params.tokenA, params.to, this.wallet.utils.toString(params.deadline)];
        let removeAllLiquidityETH_send = async (params, options) => {
            let result = await this.send('removeAllLiquidityETH', removeAllLiquidityETHParams(params), options);
            return result;
        };
        let removeAllLiquidityETH_call = async (params, options) => {
            let result = await this.call('removeAllLiquidityETH', removeAllLiquidityETHParams(params), options);
            return {
                amountToken: new eth_contract_1.BigNumber(result.amountToken),
                amountETH: new eth_contract_1.BigNumber(result.amountETH)
            };
        };
        let removeAllLiquidityETH_txData = async (params, options) => {
            let result = await this.txData('removeAllLiquidityETH', removeAllLiquidityETHParams(params), options);
            return result;
        };
        this.removeAllLiquidityETH = Object.assign(removeAllLiquidityETH_send, {
            call: removeAllLiquidityETH_call,
            txData: removeAllLiquidityETH_txData
        });
        let removeLiquidityParams = (params) => [params.tokenA, params.tokenB, params.removingTokenA, params.to, this.wallet.utils.toString(params.unstake), this.wallet.utils.toString(params.afterIndex), this.wallet.utils.toString(params.amountOut), this.wallet.utils.toString(params.reserveOut), this.wallet.utils.toString(params.expire), params.enable, this.wallet.utils.toString(params.deadline)];
        let removeLiquidity_send = async (params, options) => {
            let result = await this.send('removeLiquidity', removeLiquidityParams(params), options);
            return result;
        };
        let removeLiquidity_call = async (params, options) => {
            let result = await this.call('removeLiquidity', removeLiquidityParams(params), options);
            return;
        };
        let removeLiquidity_txData = async (params, options) => {
            let result = await this.txData('removeLiquidity', removeLiquidityParams(params), options);
            return result;
        };
        this.removeLiquidity = Object.assign(removeLiquidity_send, {
            call: removeLiquidity_call,
            txData: removeLiquidity_txData
        });
        let removeLiquidityETHParams = (params) => [params.tokenA, params.removingTokenA, params.to, this.wallet.utils.toString(params.unstake), this.wallet.utils.toString(params.afterIndex), this.wallet.utils.toString(params.amountOut), this.wallet.utils.toString(params.reserveOut), this.wallet.utils.toString(params.expire), params.enable, this.wallet.utils.toString(params.deadline)];
        let removeLiquidityETH_send = async (params, options) => {
            let result = await this.send('removeLiquidityETH', removeLiquidityETHParams(params), options);
            return result;
        };
        let removeLiquidityETH_call = async (params, options) => {
            let result = await this.call('removeLiquidityETH', removeLiquidityETHParams(params), options);
            return;
        };
        let removeLiquidityETH_txData = async (params, options) => {
            let result = await this.txData('removeLiquidityETH', removeLiquidityETHParams(params), options);
            return result;
        };
        this.removeLiquidityETH = Object.assign(removeLiquidityETH_send, {
            call: removeLiquidityETH_call,
            txData: removeLiquidityETH_txData
        });
    }
}
exports.OSWAP_OracleLiquidityProvider = OSWAP_OracleLiquidityProvider;
OSWAP_OracleLiquidityProvider._abi = OSWAP_OracleLiquidityProvider_json_1.default.abi;
