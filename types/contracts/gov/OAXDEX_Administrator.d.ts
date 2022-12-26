import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
export interface IExecutePairRestartParams {
    factory: string;
    pair: string;
}
export interface IExecutePairShutdownParams {
    factory: string;
    pair: string;
}
export interface IFactoryRestartParams {
    factory: string;
    YorN: boolean;
}
export interface IFactoryRestartVoteParams {
    param1: string;
    param2: string;
}
export interface IFactoryShutdownParams {
    factory: string;
    YorN: boolean;
}
export interface IFactoryShutdownVoteParams {
    param1: string;
    param2: string;
}
export interface IPairRestartParams {
    pair: string;
    YorN: boolean;
}
export interface IPairRestartVoteParams {
    param1: string;
    param2: string;
}
export interface IPairShutdownParams {
    pair: string;
    YorN: boolean;
}
export interface IPairShutdownVoteParams {
    param1: string;
    param2: string;
}
export interface IVetoVotingParams {
    votingContract: string;
    YorN: boolean;
}
export interface IVetoVotingVoteParams {
    param1: string;
    param2: string;
}
export declare class OAXDEX_Administrator extends _Contract {
    static _abi: any;
    constructor(wallet: IWallet, address?: string);
    deploy(governance: string, options?: TransactionOptions): Promise<string>;
    parseAddAdminEvent(receipt: TransactionReceipt): OAXDEX_Administrator.AddAdminEvent[];
    decodeAddAdminEvent(event: Event): OAXDEX_Administrator.AddAdminEvent;
    parseRemoveAdminEvent(receipt: TransactionReceipt): OAXDEX_Administrator.RemoveAdminEvent[];
    decodeRemoveAdminEvent(event: Event): OAXDEX_Administrator.RemoveAdminEvent;
    parseSetMaxAdminEvent(receipt: TransactionReceipt): OAXDEX_Administrator.SetMaxAdminEvent[];
    decodeSetMaxAdminEvent(event: Event): OAXDEX_Administrator.SetMaxAdminEvent;
    parseVotedFactoryRestartEvent(receipt: TransactionReceipt): OAXDEX_Administrator.VotedFactoryRestartEvent[];
    decodeVotedFactoryRestartEvent(event: Event): OAXDEX_Administrator.VotedFactoryRestartEvent;
    parseVotedFactoryShutdownEvent(receipt: TransactionReceipt): OAXDEX_Administrator.VotedFactoryShutdownEvent[];
    decodeVotedFactoryShutdownEvent(event: Event): OAXDEX_Administrator.VotedFactoryShutdownEvent;
    parseVotedPairRestartEvent(receipt: TransactionReceipt): OAXDEX_Administrator.VotedPairRestartEvent[];
    decodeVotedPairRestartEvent(event: Event): OAXDEX_Administrator.VotedPairRestartEvent;
    parseVotedPairShutdownEvent(receipt: TransactionReceipt): OAXDEX_Administrator.VotedPairShutdownEvent[];
    decodeVotedPairShutdownEvent(event: Event): OAXDEX_Administrator.VotedPairShutdownEvent;
    parseVotedVetoEvent(receipt: TransactionReceipt): OAXDEX_Administrator.VotedVetoEvent[];
    decodeVotedVetoEvent(event: Event): OAXDEX_Administrator.VotedVetoEvent;
    addAdmin: {
        (admin: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (admin: string, options?: TransactionOptions) => Promise<void>;
        txData: (admin: string, options?: TransactionOptions) => Promise<string>;
    };
    admins: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<string>;
    };
    adminsIdx: {
        (param1: string, options?: TransactionOptions): Promise<BigNumber>;
    };
    allAdmins: {
        (options?: TransactionOptions): Promise<string[]>;
    };
    executeFactoryRestart: {
        (factory: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (factory: string, options?: TransactionOptions) => Promise<void>;
        txData: (factory: string, options?: TransactionOptions) => Promise<string>;
    };
    executeFactoryShutdown: {
        (factory: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (factory: string, options?: TransactionOptions) => Promise<void>;
        txData: (factory: string, options?: TransactionOptions) => Promise<string>;
    };
    executePairRestart: {
        (params: IExecutePairRestartParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IExecutePairRestartParams, options?: TransactionOptions) => Promise<void>;
        txData: (params: IExecutePairRestartParams, options?: TransactionOptions) => Promise<string>;
    };
    executePairShutdown: {
        (params: IExecutePairShutdownParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IExecutePairShutdownParams, options?: TransactionOptions) => Promise<void>;
        txData: (params: IExecutePairShutdownParams, options?: TransactionOptions) => Promise<string>;
    };
    executeVetoVoting: {
        (votingContract: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (votingContract: string, options?: TransactionOptions) => Promise<void>;
        txData: (votingContract: string, options?: TransactionOptions) => Promise<string>;
    };
    factoryRestart: {
        (params: IFactoryRestartParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IFactoryRestartParams, options?: TransactionOptions) => Promise<void>;
        txData: (params: IFactoryRestartParams, options?: TransactionOptions) => Promise<string>;
    };
    factoryRestartVote: {
        (params: IFactoryRestartVoteParams, options?: TransactionOptions): Promise<boolean>;
    };
    factoryShutdown: {
        (params: IFactoryShutdownParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IFactoryShutdownParams, options?: TransactionOptions) => Promise<void>;
        txData: (params: IFactoryShutdownParams, options?: TransactionOptions) => Promise<string>;
    };
    factoryShutdownVote: {
        (params: IFactoryShutdownVoteParams, options?: TransactionOptions): Promise<boolean>;
    };
    getFactoryRestartVote: {
        (factory: string, options?: TransactionOptions): Promise<boolean[]>;
    };
    getFactoryShutdownVote: {
        (factory: string, options?: TransactionOptions): Promise<boolean[]>;
    };
    getPairRestartVote: {
        (pair: string, options?: TransactionOptions): Promise<boolean[]>;
    };
    getPairShutdownVote: {
        (pair: string, options?: TransactionOptions): Promise<boolean[]>;
    };
    getVetoVotingVote: {
        (votingContract: string, options?: TransactionOptions): Promise<boolean[]>;
    };
    governance: {
        (options?: TransactionOptions): Promise<string>;
    };
    maxAdmin: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    pairRestart: {
        (params: IPairRestartParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IPairRestartParams, options?: TransactionOptions) => Promise<void>;
        txData: (params: IPairRestartParams, options?: TransactionOptions) => Promise<string>;
    };
    pairRestartVote: {
        (params: IPairRestartVoteParams, options?: TransactionOptions): Promise<boolean>;
    };
    pairShutdown: {
        (params: IPairShutdownParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IPairShutdownParams, options?: TransactionOptions) => Promise<void>;
        txData: (params: IPairShutdownParams, options?: TransactionOptions) => Promise<string>;
    };
    pairShutdownVote: {
        (params: IPairShutdownVoteParams, options?: TransactionOptions): Promise<boolean>;
    };
    removeAdmin: {
        (admin: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (admin: string, options?: TransactionOptions) => Promise<void>;
        txData: (admin: string, options?: TransactionOptions) => Promise<string>;
    };
    setMaxAdmin: {
        (maxAdmin: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (maxAdmin: number | BigNumber, options?: TransactionOptions) => Promise<void>;
        txData: (maxAdmin: number | BigNumber, options?: TransactionOptions) => Promise<string>;
    };
    vetoVoting: {
        (params: IVetoVotingParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IVetoVotingParams, options?: TransactionOptions) => Promise<void>;
        txData: (params: IVetoVotingParams, options?: TransactionOptions) => Promise<string>;
    };
    vetoVotingVote: {
        (params: IVetoVotingVoteParams, options?: TransactionOptions): Promise<boolean>;
    };
    private assign;
}
export declare module OAXDEX_Administrator {
    interface AddAdminEvent {
        admin: string;
        _event: Event;
    }
    interface RemoveAdminEvent {
        admin: string;
        _event: Event;
    }
    interface SetMaxAdminEvent {
        maxAdmin: BigNumber;
        _event: Event;
    }
    interface VotedFactoryRestartEvent {
        admin: string;
        factory: string;
        YorN: boolean;
        _event: Event;
    }
    interface VotedFactoryShutdownEvent {
        admin: string;
        factory: string;
        YorN: boolean;
        _event: Event;
    }
    interface VotedPairRestartEvent {
        admin: string;
        pair: string;
        YorN: boolean;
        _event: Event;
    }
    interface VotedPairShutdownEvent {
        admin: string;
        pair: string;
        YorN: boolean;
        _event: Event;
    }
    interface VotedVetoEvent {
        admin: string;
        votingContract: string;
        YorN: boolean;
        _event: Event;
    }
}
