"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_OtcLiquidityProvider = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const OSWAP_OtcLiquidityProvider_json_1 = __importDefault(require("./OSWAP_OtcLiquidityProvider.json"));
class OSWAP_OtcLiquidityProvider extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_OtcLiquidityProvider_json_1.default.abi, OSWAP_OtcLiquidityProvider_json_1.default.bytecode);
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
        let configStore_call = async (options) => {
            let result = await this.call('configStore', [], options);
            return result;
        };
        this.configStore = configStore_call;
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
        let addLiquidityParams = (params) => [params.tokenA, params.tokenB, params.addingTokenA, this.wallet.utils.toString(params.pairIndex), this.wallet.utils.toString(params.offerIndex), this.wallet.utils.toString(params.amountIn), params.allowAll, this.wallet.utils.toString(params.restrictedPrice), this.wallet.utils.toString(params.startDate), this.wallet.utils.toString(params.expire), this.wallet.utils.toString(params.deadline)];
        let addLiquidity_send = async (params, options) => {
            let result = await this.send('addLiquidity', addLiquidityParams(params), options);
            return result;
        };
        let addLiquidity_call = async (params, options) => {
            let result = await this.call('addLiquidity', addLiquidityParams(params), options);
            return {
                pair: result.pair,
                _offerIndex: new eth_contract_1.BigNumber(result._offerIndex)
            };
        };
        let addLiquidity_txData = async (params, options) => {
            let result = await this.txData('addLiquidity', addLiquidityParams(params), options);
            return result;
        };
        this.addLiquidity = Object.assign(addLiquidity_send, {
            call: addLiquidity_call,
            txData: addLiquidity_txData
        });
        let addLiquidityAndTraderParams = (params) => [this.wallet.utils.toString(params.param), params.trader, this.wallet.utils.toString(params.allocation)];
        let addLiquidityAndTrader_send = async (params, options) => {
            let result = await this.send('addLiquidityAndTrader', addLiquidityAndTraderParams(params), options);
            return result;
        };
        let addLiquidityAndTrader_call = async (params, options) => {
            let result = await this.call('addLiquidityAndTrader', addLiquidityAndTraderParams(params), options);
            return {
                pair: result.pair,
                offerIndex: new eth_contract_1.BigNumber(result.offerIndex)
            };
        };
        let addLiquidityAndTrader_txData = async (params, options) => {
            let result = await this.txData('addLiquidityAndTrader', addLiquidityAndTraderParams(params), options);
            return result;
        };
        this.addLiquidityAndTrader = Object.assign(addLiquidityAndTrader_send, {
            call: addLiquidityAndTrader_call,
            txData: addLiquidityAndTrader_txData
        });
        let addLiquidityETHParams = (params) => [params.tokenA, params.addingTokenA, this.wallet.utils.toString(params.pairIndex), this.wallet.utils.toString(params.offerIndex), this.wallet.utils.toString(params.amountAIn), params.allowAll, this.wallet.utils.toString(params.restrictedPrice), this.wallet.utils.toString(params.startDate), this.wallet.utils.toString(params.expire), this.wallet.utils.toString(params.deadline)];
        let addLiquidityETH_send = async (params, options) => {
            let result = await this.send('addLiquidityETH', addLiquidityETHParams(params), options);
            return result;
        };
        let addLiquidityETH_call = async (params, options) => {
            let result = await this.call('addLiquidityETH', addLiquidityETHParams(params), options);
            return {
                pair: result.pair,
                _offerIndex: new eth_contract_1.BigNumber(result._offerIndex)
            };
        };
        let addLiquidityETH_txData = async (params, options) => {
            let result = await this.txData('addLiquidityETH', addLiquidityETHParams(params), options);
            return result;
        };
        this.addLiquidityETH = Object.assign(addLiquidityETH_send, {
            call: addLiquidityETH_call,
            txData: addLiquidityETH_txData
        });
        let addLiquidityETHAndTraderParams = (params) => [this.wallet.utils.toString(params.param), params.trader, this.wallet.utils.toString(params.allocation)];
        let addLiquidityETHAndTrader_send = async (params, options) => {
            let result = await this.send('addLiquidityETHAndTrader', addLiquidityETHAndTraderParams(params), options);
            return result;
        };
        let addLiquidityETHAndTrader_call = async (params, options) => {
            let result = await this.call('addLiquidityETHAndTrader', addLiquidityETHAndTraderParams(params), options);
            return {
                pair: result.pair,
                offerIndex: new eth_contract_1.BigNumber(result.offerIndex)
            };
        };
        let addLiquidityETHAndTrader_txData = async (params, options) => {
            let result = await this.txData('addLiquidityETHAndTrader', addLiquidityETHAndTraderParams(params), options);
            return result;
        };
        this.addLiquidityETHAndTrader = Object.assign(addLiquidityETHAndTrader_send, {
            call: addLiquidityETHAndTrader_call,
            txData: addLiquidityETHAndTrader_txData
        });
        let removeAllLiquidityParams = (params) => [params.tokenA, params.tokenB, params.to, this.wallet.utils.toString(params.pairIndex), this.wallet.utils.toString(params.deadline)];
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
        let removeAllLiquidityETHParams = (params) => [params.tokenA, params.to, this.wallet.utils.toString(params.pairIndex), this.wallet.utils.toString(params.deadline)];
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
        let removeLiquidityParams = (params) => [params.tokenA, params.tokenB, params.removingTokenA, params.to, this.wallet.utils.toString(params.pairIndex), this.wallet.utils.toString(params.offerIndex), this.wallet.utils.toString(params.amountOut), this.wallet.utils.toString(params.receivingOut), this.wallet.utils.toString(params.deadline)];
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
        let removeLiquidityETHParams = (params) => [params.tokenA, params.removingTokenA, params.to, this.wallet.utils.toString(params.pairIndex), this.wallet.utils.toString(params.offerIndex), this.wallet.utils.toString(params.amountOut), this.wallet.utils.toString(params.receivingOut), this.wallet.utils.toString(params.deadline)];
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
exports.OSWAP_OtcLiquidityProvider = OSWAP_OtcLiquidityProvider;
OSWAP_OtcLiquidityProvider._abi = OSWAP_OtcLiquidityProvider_json_1.default.abi;