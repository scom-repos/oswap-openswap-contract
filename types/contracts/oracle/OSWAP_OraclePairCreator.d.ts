import { IWallet, Contract as _Contract, TransactionReceipt, TransactionOptions } from "@ijstech/eth-contract";
export declare class OSWAP_OraclePairCreator extends _Contract {
    static _abi: any;
    constructor(wallet: IWallet, address?: string);
    deploy(options?: TransactionOptions): Promise<string>;
    createPair: {
        (salt: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (salt: string, options?: TransactionOptions) => Promise<string>;
        txData: (salt: string, options?: TransactionOptions) => Promise<string>;
    };
    private assign;
}
