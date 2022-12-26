import { IWallet, Contract as _Contract, TransactionReceipt, TransactionOptions } from "@ijstech/eth-contract";
export interface IDeployParams {
    governance: string;
    factory: string;
    hybridRegistry: string;
}
export declare class OSWAP_VotingExecutor3 extends _Contract {
    static _abi: any;
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
    execute: {
        (params: string[], options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: string[], options?: TransactionOptions) => Promise<void>;
        txData: (params: string[], options?: TransactionOptions) => Promise<string>;
    };
    factory: {
        (options?: TransactionOptions): Promise<string>;
    };
    governance: {
        (options?: TransactionOptions): Promise<string>;
    };
    hybridRegistry: {
        (options?: TransactionOptions): Promise<string>;
    };
    private assign;
}
