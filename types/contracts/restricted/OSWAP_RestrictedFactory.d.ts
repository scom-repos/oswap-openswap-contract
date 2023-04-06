import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
export interface IDeployParams {
    governance: string;
    whitelistFactory: string;
    pairCreator: string;
    configStore: string;
    tradeFee: number | BigNumber;
    protocolFee: number | BigNumber;
    protocolFeeTo: string;
}
export interface IAddOldOracleToNewPairParams {
    tokenA: string;
    tokenB: string;
    oracle: string;
}
export interface ICheckAndGetOracleParams {
    tokenA: string;
    tokenB: string;
}
export interface ICheckAndGetOracleSwapParamsParams {
    tokenA: string;
    tokenB: string;
}
export interface ICreatePairParams {
    tokenA: string;
    tokenB: string;
}
export interface IGetPairParams {
    param1: string;
    param2: string;
    param3: number | BigNumber;
}
export interface IOraclesParams {
    param1: string;
    param2: string;
}
export interface IPairLengthParams {
    tokenA: string;
    tokenB: string;
}
export interface ISetLiveForPairParams {
    pair: string;
    live: boolean;
}
export interface ISetOracleParams {
    tokenA: string;
    tokenB: string;
    oracle: string;
}
export declare class OSWAP_RestrictedFactory extends _Contract {
    static _abi: any;
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
    parseOracleAddedEvent(receipt: TransactionReceipt): OSWAP_RestrictedFactory.OracleAddedEvent[];
    decodeOracleAddedEvent(event: Event): OSWAP_RestrictedFactory.OracleAddedEvent;
    parseOwnershipTransferredEvent(receipt: TransactionReceipt): OSWAP_RestrictedFactory.OwnershipTransferredEvent[];
    decodeOwnershipTransferredEvent(event: Event): OSWAP_RestrictedFactory.OwnershipTransferredEvent;
    parsePairCreatedEvent(receipt: TransactionReceipt): OSWAP_RestrictedFactory.PairCreatedEvent[];
    decodePairCreatedEvent(event: Event): OSWAP_RestrictedFactory.PairCreatedEvent;
    parsePairRestartedEvent(receipt: TransactionReceipt): OSWAP_RestrictedFactory.PairRestartedEvent[];
    decodePairRestartedEvent(event: Event): OSWAP_RestrictedFactory.PairRestartedEvent;
    parsePairShutdownedEvent(receipt: TransactionReceipt): OSWAP_RestrictedFactory.PairShutdownedEvent[];
    decodePairShutdownedEvent(event: Event): OSWAP_RestrictedFactory.PairShutdownedEvent;
    parseParamSetEvent(receipt: TransactionReceipt): OSWAP_RestrictedFactory.ParamSetEvent[];
    decodeParamSetEvent(event: Event): OSWAP_RestrictedFactory.ParamSetEvent;
    parseParamSet2Event(receipt: TransactionReceipt): OSWAP_RestrictedFactory.ParamSet2Event[];
    decodeParamSet2Event(event: Event): OSWAP_RestrictedFactory.ParamSet2Event;
    parseRestartedEvent(receipt: TransactionReceipt): OSWAP_RestrictedFactory.RestartedEvent[];
    decodeRestartedEvent(event: Event): OSWAP_RestrictedFactory.RestartedEvent;
    parseShutdownedEvent(receipt: TransactionReceipt): OSWAP_RestrictedFactory.ShutdownedEvent[];
    decodeShutdownedEvent(event: Event): OSWAP_RestrictedFactory.ShutdownedEvent;
    addOldOracleToNewPair: {
        (params: IAddOldOracleToNewPairParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IAddOldOracleToNewPairParams, options?: TransactionOptions) => Promise<void>;
        txData: (params: IAddOldOracleToNewPairParams, options?: TransactionOptions) => Promise<string>;
    };
    allPairs: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<string>;
    };
    allPairsLength: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    checkAndGetOracle: {
        (params: ICheckAndGetOracleParams, options?: TransactionOptions): Promise<string>;
    };
    checkAndGetOracleSwapParams: {
        (params: ICheckAndGetOracleSwapParamsParams, options?: TransactionOptions): Promise<{
            oracle: string;
            tradeFee: BigNumber;
            protocolFee: BigNumber;
        }>;
    };
    configStore: {
        (options?: TransactionOptions): Promise<string>;
    };
    createPair: {
        (params: ICreatePairParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ICreatePairParams, options?: TransactionOptions) => Promise<string>;
        txData: (params: ICreatePairParams, options?: TransactionOptions) => Promise<string>;
    };
    getCreateAddresses: {
        (options?: TransactionOptions): Promise<{
            governance: string;
            whitelistFactory: string;
            restrictedLiquidityProvider: string;
            configStore: string;
        }>;
    };
    getPair: {
        (params: IGetPairParams, options?: TransactionOptions): Promise<string>;
    };
    governance: {
        (options?: TransactionOptions): Promise<string>;
    };
    init: {
        (restrictedLiquidityProvider: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (restrictedLiquidityProvider: string, options?: TransactionOptions) => Promise<void>;
        txData: (restrictedLiquidityProvider: string, options?: TransactionOptions) => Promise<string>;
    };
    isLive: {
        (options?: TransactionOptions): Promise<boolean>;
    };
    isOracle: {
        (param1: string, options?: TransactionOptions): Promise<boolean>;
    };
    isPair: {
        (pair: string, options?: TransactionOptions): Promise<boolean>;
    };
    oracles: {
        (params: IOraclesParams, options?: TransactionOptions): Promise<string>;
    };
    owner: {
        (options?: TransactionOptions): Promise<string>;
    };
    pairCreator: {
        (options?: TransactionOptions): Promise<string>;
    };
    pairIdx: {
        (param1: string, options?: TransactionOptions): Promise<BigNumber>;
    };
    pairLength: {
        (params: IPairLengthParams, options?: TransactionOptions): Promise<BigNumber>;
    };
    protocolFee: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    protocolFeeTo: {
        (options?: TransactionOptions): Promise<string>;
    };
    renounceOwnership: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
        txData: (options?: TransactionOptions) => Promise<string>;
    };
    restrictedLiquidityProvider: {
        (options?: TransactionOptions): Promise<string>;
    };
    setLive: {
        (isLive: boolean, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (isLive: boolean, options?: TransactionOptions) => Promise<void>;
        txData: (isLive: boolean, options?: TransactionOptions) => Promise<string>;
    };
    setLiveForPair: {
        (params: ISetLiveForPairParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISetLiveForPairParams, options?: TransactionOptions) => Promise<void>;
        txData: (params: ISetLiveForPairParams, options?: TransactionOptions) => Promise<string>;
    };
    setOracle: {
        (params: ISetOracleParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISetOracleParams, options?: TransactionOptions) => Promise<void>;
        txData: (params: ISetOracleParams, options?: TransactionOptions) => Promise<string>;
    };
    setProtocolFee: {
        (protocolFee: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (protocolFee: number | BigNumber, options?: TransactionOptions) => Promise<void>;
        txData: (protocolFee: number | BigNumber, options?: TransactionOptions) => Promise<string>;
    };
    setProtocolFeeTo: {
        (protocolFeeTo: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (protocolFeeTo: string, options?: TransactionOptions) => Promise<void>;
        txData: (protocolFeeTo: string, options?: TransactionOptions) => Promise<string>;
    };
    setTradeFee: {
        (tradeFee: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (tradeFee: number | BigNumber, options?: TransactionOptions) => Promise<void>;
        txData: (tradeFee: number | BigNumber, options?: TransactionOptions) => Promise<string>;
    };
    tradeFee: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    transferOwnership: {
        (newOwner: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (newOwner: string, options?: TransactionOptions) => Promise<void>;
        txData: (newOwner: string, options?: TransactionOptions) => Promise<string>;
    };
    whitelistFactory: {
        (options?: TransactionOptions): Promise<string>;
    };
    private assign;
}
export declare module OSWAP_RestrictedFactory {
    interface OracleAddedEvent {
        token0: string;
        token1: string;
        oracle: string;
        _event: Event;
    }
    interface OwnershipTransferredEvent {
        previousOwner: string;
        newOwner: string;
        _event: Event;
    }
    interface PairCreatedEvent {
        token0: string;
        token1: string;
        pair: string;
        newPairSize: BigNumber;
        newSize: BigNumber;
        _event: Event;
    }
    interface PairRestartedEvent {
        pair: string;
        _event: Event;
    }
    interface PairShutdownedEvent {
        pair: string;
        _event: Event;
    }
    interface ParamSetEvent {
        name: string;
        value: string;
        _event: Event;
    }
    interface ParamSet2Event {
        name: string;
        value1: string;
        value2: string;
        _event: Event;
    }
    interface RestartedEvent {
        _event: Event;
    }
    interface ShutdownedEvent {
        _event: Event;
    }
}
