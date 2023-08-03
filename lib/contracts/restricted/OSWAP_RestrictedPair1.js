"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_RestrictedPair1 = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const OSWAP_RestrictedPair1_json_1 = __importDefault(require("./OSWAP_RestrictedPair1.json"));
class OSWAP_RestrictedPair1 extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_RestrictedPair1_json_1.default.abi, OSWAP_RestrictedPair1_json_1.default.bytecode);
        this.assign();
    }
    deploy(options) {
        return this.__deploy([], options);
    }
    parseAddLiquidityEvent(receipt) {
        return this.parseEvents(receipt, "AddLiquidity").map(e => this.decodeAddLiquidityEvent(e));
    }
    decodeAddLiquidityEvent(event) {
        let result = event.data;
        return {
            provider: result.provider,
            direction: result.direction,
            index: new eth_contract_1.BigNumber(result.index),
            amount: new eth_contract_1.BigNumber(result.amount),
            newAmountBalance: new eth_contract_1.BigNumber(result.newAmountBalance),
            _event: event
        };
    }
    parseApprovedTraderEvent(receipt) {
        return this.parseEvents(receipt, "ApprovedTrader").map(e => this.decodeApprovedTraderEvent(e));
    }
    decodeApprovedTraderEvent(event) {
        let result = event.data;
        return {
            direction: result.direction,
            offerIndex: new eth_contract_1.BigNumber(result.offerIndex),
            trader: result.trader,
            allocation: new eth_contract_1.BigNumber(result.allocation),
            _event: event
        };
    }
    parseLockEvent(receipt) {
        return this.parseEvents(receipt, "Lock").map(e => this.decodeLockEvent(e));
    }
    decodeLockEvent(event) {
        let result = event.data;
        return {
            direction: result.direction,
            index: new eth_contract_1.BigNumber(result.index),
            _event: event
        };
    }
    parseNewProviderOfferEvent(receipt) {
        return this.parseEvents(receipt, "NewProviderOffer").map(e => this.decodeNewProviderOfferEvent(e));
    }
    decodeNewProviderOfferEvent(event) {
        let result = event.data;
        return {
            provider: result.provider,
            direction: result.direction,
            index: new eth_contract_1.BigNumber(result.index),
            allowAll: result.allowAll,
            restrictedPrice: new eth_contract_1.BigNumber(result.restrictedPrice),
            startDate: new eth_contract_1.BigNumber(result.startDate),
            expire: new eth_contract_1.BigNumber(result.expire),
            _event: event
        };
    }
    parseRemoveLiquidityEvent(receipt) {
        return this.parseEvents(receipt, "RemoveLiquidity").map(e => this.decodeRemoveLiquidityEvent(e));
    }
    decodeRemoveLiquidityEvent(event) {
        let result = event.data;
        return {
            provider: result.provider,
            direction: result.direction,
            index: new eth_contract_1.BigNumber(result.index),
            amountOut: new eth_contract_1.BigNumber(result.amountOut),
            receivingOut: new eth_contract_1.BigNumber(result.receivingOut),
            newAmountBalance: new eth_contract_1.BigNumber(result.newAmountBalance),
            newReceivingBalance: new eth_contract_1.BigNumber(result.newReceivingBalance),
            _event: event
        };
    }
    parseSwapEvent(receipt) {
        return this.parseEvents(receipt, "Swap").map(e => this.decodeSwapEvent(e));
    }
    decodeSwapEvent(event) {
        let result = event.data;
        return {
            to: result.to,
            direction: result.direction,
            amountIn: new eth_contract_1.BigNumber(result.amountIn),
            amountOut: new eth_contract_1.BigNumber(result.amountOut),
            tradeFee: new eth_contract_1.BigNumber(result.tradeFee),
            protocolFee: new eth_contract_1.BigNumber(result.protocolFee),
            _event: event
        };
    }
    parseSwappedOneOfferEvent(receipt) {
        return this.parseEvents(receipt, "SwappedOneOffer").map(e => this.decodeSwappedOneOfferEvent(e));
    }
    decodeSwappedOneOfferEvent(event) {
        let result = event.data;
        return {
            provider: result.provider,
            direction: result.direction,
            index: new eth_contract_1.BigNumber(result.index),
            price: new eth_contract_1.BigNumber(result.price),
            amountOut: new eth_contract_1.BigNumber(result.amountOut),
            amountIn: new eth_contract_1.BigNumber(result.amountIn),
            newAmountBalance: new eth_contract_1.BigNumber(result.newAmountBalance),
            newReceivingBalance: new eth_contract_1.BigNumber(result.newReceivingBalance),
            _event: event
        };
    }
    assign() {
        let approvedTraderParams = (params) => [params.param1, this.wallet.utils.toString(params.param2), this.wallet.utils.toString(params.param3)];
        let approvedTrader_call = async (params, options) => {
            let result = await this.call('approvedTrader', approvedTraderParams(params), options);
            return result;
        };
        this.approvedTrader = approvedTrader_call;
        let configStore_call = async (options) => {
            let result = await this.call('configStore', [], options);
            return result;
        };
        this.configStore = configStore_call;
        let counter_call = async (param1, options) => {
            let result = await this.call('counter', [param1], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.counter = counter_call;
        let factory_call = async (options) => {
            let result = await this.call('factory', [], options);
            return result;
        };
        this.factory = factory_call;
        let feeBalance_call = async (options) => {
            let result = await this.call('feeBalance', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.feeBalance = feeBalance_call;
        let getAmountInParams = (params) => [params.param1, this.wallet.utils.toString(params.param2), params.param3, this.wallet.utils.stringToBytes(params.param4)];
        let getAmountIn_call = async (params, options) => {
            let result = await this.call('getAmountIn', getAmountInParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        this.getAmountIn = getAmountIn_call;
        let getAmountOutParams = (params) => [params.tokenIn, this.wallet.utils.toString(params.amountIn), params.trader, this.wallet.utils.stringToBytes(params.param4)];
        let getAmountOut_call = async (params, options) => {
            let result = await this.call('getAmountOut', getAmountOutParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        this.getAmountOut = getAmountOut_call;
        let getApprovedTraderParams = (params) => [params.direction, this.wallet.utils.toString(params.offerIndex), this.wallet.utils.toString(params.start), this.wallet.utils.toString(params.length)];
        let getApprovedTrader_call = async (params, options) => {
            let result = await this.call('getApprovedTrader', getApprovedTraderParams(params), options);
            return {
                trader: result.trader,
                allocation: result.allocation.map(e => new eth_contract_1.BigNumber(e))
            };
        };
        this.getApprovedTrader = getApprovedTrader_call;
        let getApprovedTraderLengthParams = (params) => [params.direction, this.wallet.utils.toString(params.offerIndex)];
        let getApprovedTraderLength_call = async (params, options) => {
            let result = await this.call('getApprovedTraderLength', getApprovedTraderLengthParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        this.getApprovedTraderLength = getApprovedTraderLength_call;
        let getBalances_call = async (options) => {
            let result = await this.call('getBalances', [], options);
            return {
                param1: new eth_contract_1.BigNumber(result[0]),
                param2: new eth_contract_1.BigNumber(result[1]),
                param3: new eth_contract_1.BigNumber(result[2])
            };
        };
        this.getBalances = getBalances_call;
        let getLastBalances_call = async (options) => {
            let result = await this.call('getLastBalances', [], options);
            return {
                param1: new eth_contract_1.BigNumber(result[0]),
                param2: new eth_contract_1.BigNumber(result[1])
            };
        };
        this.getLastBalances = getLastBalances_call;
        let getOffersParams = (params) => [params.direction, this.wallet.utils.toString(params.start), this.wallet.utils.toString(params.length)];
        let getOffers_call = async (params, options) => {
            let result = await this.call('getOffers', getOffersParams(params), options);
            return {
                index: result.index.map(e => new eth_contract_1.BigNumber(e)),
                provider: result.provider,
                lockedAndAllowAll: result.lockedAndAllowAll,
                receiving: result.receiving.map(e => new eth_contract_1.BigNumber(e)),
                amountAndPrice: result.amountAndPrice.map(e => new eth_contract_1.BigNumber(e)),
                startDateAndExpire: result.startDateAndExpire.map(e => new eth_contract_1.BigNumber(e))
            };
        };
        this.getOffers = getOffers_call;
        let getProviderOfferParams = (params) => [params.provider, params.direction, this.wallet.utils.toString(params.start), this.wallet.utils.toString(params.length)];
        let getProviderOffer_call = async (params, options) => {
            let result = await this.call('getProviderOffer', getProviderOfferParams(params), options);
            return {
                index: result.index.map(e => new eth_contract_1.BigNumber(e)),
                provider: result.provider,
                lockedAndAllowAll: result.lockedAndAllowAll,
                receiving: result.receiving.map(e => new eth_contract_1.BigNumber(e)),
                amountAndPrice: result.amountAndPrice.map(e => new eth_contract_1.BigNumber(e)),
                startDateAndExpire: result.startDateAndExpire.map(e => new eth_contract_1.BigNumber(e))
            };
        };
        this.getProviderOffer = getProviderOffer_call;
        let getProviderOfferIndexLengthParams = (params) => [params.provider, params.direction];
        let getProviderOfferIndexLength_call = async (params, options) => {
            let result = await this.call('getProviderOfferIndexLength', getProviderOfferIndexLengthParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        this.getProviderOfferIndexLength = getProviderOfferIndexLength_call;
        let getTraderOfferParams = (params) => [params.trader, params.direction, this.wallet.utils.toString(params.start), this.wallet.utils.toString(params.length)];
        let getTraderOffer_call = async (params, options) => {
            let result = await this.call('getTraderOffer', getTraderOfferParams(params), options);
            return {
                index: result.index.map(e => new eth_contract_1.BigNumber(e)),
                provider: result.provider,
                lockedAndAllowAll: result.lockedAndAllowAll,
                receiving: result.receiving.map(e => new eth_contract_1.BigNumber(e)),
                amountAndPrice: result.amountAndPrice.map(e => new eth_contract_1.BigNumber(e)),
                startDateAndExpire: result.startDateAndExpire.map(e => new eth_contract_1.BigNumber(e))
            };
        };
        this.getTraderOffer = getTraderOffer_call;
        let govToken_call = async (options) => {
            let result = await this.call('govToken', [], options);
            return result;
        };
        this.govToken = govToken_call;
        let governance_call = async (options) => {
            let result = await this.call('governance', [], options);
            return result;
        };
        this.governance = governance_call;
        let isApprovedTraderParams = (params) => [params.param1, this.wallet.utils.toString(params.param2), params.param3];
        let isApprovedTrader_call = async (params, options) => {
            let result = await this.call('isApprovedTrader', isApprovedTraderParams(params), options);
            return result;
        };
        this.isApprovedTrader = isApprovedTrader_call;
        let isLive_call = async (options) => {
            let result = await this.call('isLive', [], options);
            return result;
        };
        this.isLive = isLive_call;
        let lastGovBalance_call = async (options) => {
            let result = await this.call('lastGovBalance', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.lastGovBalance = lastGovBalance_call;
        let lastToken0Balance_call = async (options) => {
            let result = await this.call('lastToken0Balance', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.lastToken0Balance = lastToken0Balance_call;
        let lastToken1Balance_call = async (options) => {
            let result = await this.call('lastToken1Balance', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.lastToken1Balance = lastToken1Balance_call;
        let offersParams = (params) => [params.param1, this.wallet.utils.toString(params.param2)];
        let offers_call = async (params, options) => {
            let result = await this.call('offers', offersParams(params), options);
            return {
                provider: result.provider,
                locked: result.locked,
                allowAll: result.allowAll,
                amount: new eth_contract_1.BigNumber(result.amount),
                receiving: new eth_contract_1.BigNumber(result.receiving),
                restrictedPrice: new eth_contract_1.BigNumber(result.restrictedPrice),
                startDate: new eth_contract_1.BigNumber(result.startDate),
                expire: new eth_contract_1.BigNumber(result.expire)
            };
        };
        this.offers = offers_call;
        let protocolFeeBalance0_call = async (options) => {
            let result = await this.call('protocolFeeBalance0', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.protocolFeeBalance0 = protocolFeeBalance0_call;
        let protocolFeeBalance1_call = async (options) => {
            let result = await this.call('protocolFeeBalance1', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.protocolFeeBalance1 = protocolFeeBalance1_call;
        let providerOfferIndexParams = (params) => [params.param1, params.param2, this.wallet.utils.toString(params.param3)];
        let providerOfferIndex_call = async (params, options) => {
            let result = await this.call('providerOfferIndex', providerOfferIndexParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        this.providerOfferIndex = providerOfferIndex_call;
        let restrictedLiquidityProvider_call = async (options) => {
            let result = await this.call('restrictedLiquidityProvider', [], options);
            return result;
        };
        this.restrictedLiquidityProvider = restrictedLiquidityProvider_call;
        let scaleDirection_call = async (options) => {
            let result = await this.call('scaleDirection', [], options);
            return result;
        };
        this.scaleDirection = scaleDirection_call;
        let scaler_call = async (options) => {
            let result = await this.call('scaler', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.scaler = scaler_call;
        let token0_call = async (options) => {
            let result = await this.call('token0', [], options);
            return result;
        };
        this.token0 = token0_call;
        let token1_call = async (options) => {
            let result = await this.call('token1', [], options);
            return result;
        };
        this.token1 = token1_call;
        let traderAllocationParams = (params) => [params.param1, this.wallet.utils.toString(params.param2), params.param3];
        let traderAllocation_call = async (params, options) => {
            let result = await this.call('traderAllocation', traderAllocationParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        this.traderAllocation = traderAllocation_call;
        let traderOfferParams = (params) => [params.param1, params.param2, this.wallet.utils.toString(params.param3)];
        let traderOffer_call = async (params, options) => {
            let result = await this.call('traderOffer', traderOfferParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        this.traderOffer = traderOffer_call;
        let whitelistFactory_call = async (options) => {
            let result = await this.call('whitelistFactory', [], options);
            return result;
        };
        this.whitelistFactory = whitelistFactory_call;
        let addLiquidityParams = (params) => [params.direction, this.wallet.utils.toString(params.index)];
        let addLiquidity_send = async (params, options) => {
            let result = await this.send('addLiquidity', addLiquidityParams(params), options);
            return result;
        };
        let addLiquidity_call = async (params, options) => {
            let result = await this.call('addLiquidity', addLiquidityParams(params), options);
            return;
        };
        let addLiquidity_txData = async (params, options) => {
            let result = await this.txData('addLiquidity', addLiquidityParams(params), options);
            return result;
        };
        this.addLiquidity = Object.assign(addLiquidity_send, {
            call: addLiquidity_call,
            txData: addLiquidity_txData
        });
        let createOrderParams = (params) => [params.provider, params.direction, params.allowAll, this.wallet.utils.toString(params.restrictedPrice), this.wallet.utils.toString(params.startDate), this.wallet.utils.toString(params.expire)];
        let createOrder_send = async (params, options) => {
            let result = await this.send('createOrder', createOrderParams(params), options);
            return result;
        };
        let createOrder_call = async (params, options) => {
            let result = await this.call('createOrder', createOrderParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        let createOrder_txData = async (params, options) => {
            let result = await this.txData('createOrder', createOrderParams(params), options);
            return result;
        };
        this.createOrder = Object.assign(createOrder_send, {
            call: createOrder_call,
            txData: createOrder_txData
        });
        let initializeParams = (params) => [params.token0, params.token1];
        let initialize_send = async (params, options) => {
            let result = await this.send('initialize', initializeParams(params), options);
            return result;
        };
        let initialize_call = async (params, options) => {
            let result = await this.call('initialize', initializeParams(params), options);
            return;
        };
        let initialize_txData = async (params, options) => {
            let result = await this.txData('initialize', initializeParams(params), options);
            return result;
        };
        this.initialize = Object.assign(initialize_send, {
            call: initialize_call,
            txData: initialize_txData
        });
        let lockOfferParams = (params) => [params.direction, this.wallet.utils.toString(params.index)];
        let lockOffer_send = async (params, options) => {
            let result = await this.send('lockOffer', lockOfferParams(params), options);
            return result;
        };
        let lockOffer_call = async (params, options) => {
            let result = await this.call('lockOffer', lockOfferParams(params), options);
            return;
        };
        let lockOffer_txData = async (params, options) => {
            let result = await this.txData('lockOffer', lockOfferParams(params), options);
            return result;
        };
        this.lockOffer = Object.assign(lockOffer_send, {
            call: lockOffer_call,
            txData: lockOffer_txData
        });
        let redeemProtocolFee_send = async (options) => {
            let result = await this.send('redeemProtocolFee', [], options);
            return result;
        };
        let redeemProtocolFee_call = async (options) => {
            let result = await this.call('redeemProtocolFee', [], options);
            return;
        };
        let redeemProtocolFee_txData = async (options) => {
            let result = await this.txData('redeemProtocolFee', [], options);
            return result;
        };
        this.redeemProtocolFee = Object.assign(redeemProtocolFee_send, {
            call: redeemProtocolFee_call,
            txData: redeemProtocolFee_txData
        });
        let removeAllLiquidity_send = async (provider, options) => {
            let result = await this.send('removeAllLiquidity', [provider], options);
            return result;
        };
        let removeAllLiquidity_call = async (provider, options) => {
            let result = await this.call('removeAllLiquidity', [provider], options);
            return {
                amount0: new eth_contract_1.BigNumber(result.amount0),
                amount1: new eth_contract_1.BigNumber(result.amount1)
            };
        };
        let removeAllLiquidity_txData = async (provider, options) => {
            let result = await this.txData('removeAllLiquidity', [provider], options);
            return result;
        };
        this.removeAllLiquidity = Object.assign(removeAllLiquidity_send, {
            call: removeAllLiquidity_call,
            txData: removeAllLiquidity_txData
        });
        let removeAllLiquidity1DParams = (params) => [params.provider, params.direction];
        let removeAllLiquidity1D_send = async (params, options) => {
            let result = await this.send('removeAllLiquidity1D', removeAllLiquidity1DParams(params), options);
            return result;
        };
        let removeAllLiquidity1D_call = async (params, options) => {
            let result = await this.call('removeAllLiquidity1D', removeAllLiquidity1DParams(params), options);
            return {
                totalAmount: new eth_contract_1.BigNumber(result.totalAmount),
                totalReceiving: new eth_contract_1.BigNumber(result.totalReceiving)
            };
        };
        let removeAllLiquidity1D_txData = async (params, options) => {
            let result = await this.txData('removeAllLiquidity1D', removeAllLiquidity1DParams(params), options);
            return result;
        };
        this.removeAllLiquidity1D = Object.assign(removeAllLiquidity1D_send, {
            call: removeAllLiquidity1D_call,
            txData: removeAllLiquidity1D_txData
        });
        let removeLiquidityParams = (params) => [params.provider, params.direction, this.wallet.utils.toString(params.index), this.wallet.utils.toString(params.amountOut), this.wallet.utils.toString(params.receivingOut)];
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
        let setApprovedTraderParams = (params) => [params.direction, this.wallet.utils.toString(params.offerIndex), params.trader, this.wallet.utils.toString(params.allocation)];
        let setApprovedTrader_send = async (params, options) => {
            let result = await this.send('setApprovedTrader', setApprovedTraderParams(params), options);
            return result;
        };
        let setApprovedTrader_call = async (params, options) => {
            let result = await this.call('setApprovedTrader', setApprovedTraderParams(params), options);
            return;
        };
        let setApprovedTrader_txData = async (params, options) => {
            let result = await this.txData('setApprovedTrader', setApprovedTraderParams(params), options);
            return result;
        };
        this.setApprovedTrader = Object.assign(setApprovedTrader_send, {
            call: setApprovedTrader_call,
            txData: setApprovedTrader_txData
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
        let setMultipleApprovedTradersParams = (params) => [params.direction, this.wallet.utils.toString(params.offerIndex), params.trader, this.wallet.utils.toString(params.allocation)];
        let setMultipleApprovedTraders_send = async (params, options) => {
            let result = await this.send('setMultipleApprovedTraders', setMultipleApprovedTradersParams(params), options);
            return result;
        };
        let setMultipleApprovedTraders_call = async (params, options) => {
            let result = await this.call('setMultipleApprovedTraders', setMultipleApprovedTradersParams(params), options);
            return;
        };
        let setMultipleApprovedTraders_txData = async (params, options) => {
            let result = await this.txData('setMultipleApprovedTraders', setMultipleApprovedTradersParams(params), options);
            return result;
        };
        this.setMultipleApprovedTraders = Object.assign(setMultipleApprovedTraders_send, {
            call: setMultipleApprovedTraders_call,
            txData: setMultipleApprovedTraders_txData
        });
        let swapParams = (params) => [this.wallet.utils.toString(params.amount0Out), this.wallet.utils.toString(params.amount1Out), params.to, params.trader, this.wallet.utils.stringToBytes(params.param5)];
        let swap_send = async (params, options) => {
            let result = await this.send('swap', swapParams(params), options);
            return result;
        };
        let swap_call = async (params, options) => {
            let result = await this.call('swap', swapParams(params), options);
            return;
        };
        let swap_txData = async (params, options) => {
            let result = await this.txData('swap', swapParams(params), options);
            return result;
        };
        this.swap = Object.assign(swap_send, {
            call: swap_call,
            txData: swap_txData
        });
        let sync_send = async (options) => {
            let result = await this.send('sync', [], options);
            return result;
        };
        let sync_call = async (options) => {
            let result = await this.call('sync', [], options);
            return;
        };
        let sync_txData = async (options) => {
            let result = await this.txData('sync', [], options);
            return result;
        };
        this.sync = Object.assign(sync_send, {
            call: sync_call,
            txData: sync_txData
        });
    }
}
OSWAP_RestrictedPair1._abi = OSWAP_RestrictedPair1_json_1.default.abi;
exports.OSWAP_RestrictedPair1 = OSWAP_RestrictedPair1;
