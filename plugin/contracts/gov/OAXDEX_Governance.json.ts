export default {
    "abi": [
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_oaxToken",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_votingToken",
                    "type": "address"
                },
                {
                    "internalType": "bytes32[]",
                    "name": "_names",
                    "type": "bytes32[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "_minExeDelay",
                    "type": "uint256[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "_minVoteDuration",
                    "type": "uint256[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "_maxVoteDuration",
                    "type": "uint256[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "_minOaxTokenToCreateVote",
                    "type": "uint256[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "_minQuorum",
                    "type": "uint256[]"
                },
                {
                    "internalType": "uint256",
                    "name": "_minStakePeriod",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "bytes32",
                    "name": "name",
                    "type": "bytes32"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "minExeDelay",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "minVoteDuration",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "maxVoteDuration",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "minOaxTokenToCreateVote",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "minQuorum",
                    "type": "uint256"
                }
            ],
            "name": "AddVotingConfig",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "vote",
                    "type": "address"
                }
            ],
            "name": "Executed",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "poll",
                    "type": "address"
                }
            ],
            "name": "NewPoll",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "vote",
                    "type": "address"
                }
            ],
            "name": "NewVote",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "previousOwner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "OwnershipTransferred",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "bytes32",
                    "name": "name",
                    "type": "bytes32"
                },
                {
                    "indexed": false,
                    "internalType": "bytes32",
                    "name": "value",
                    "type": "bytes32"
                }
            ],
            "name": "ParamSet",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "bytes32",
                    "name": "name",
                    "type": "bytes32"
                },
                {
                    "indexed": false,
                    "internalType": "bytes32",
                    "name": "value1",
                    "type": "bytes32"
                },
                {
                    "indexed": false,
                    "internalType": "bytes32",
                    "name": "value2",
                    "type": "bytes32"
                }
            ],
            "name": "ParamSet2",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "poll",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "option",
                    "type": "uint256"
                }
            ],
            "name": "Poll",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "bytes32",
                    "name": "configName",
                    "type": "bytes32"
                },
                {
                    "indexed": true,
                    "internalType": "bytes32",
                    "name": "paramName",
                    "type": "bytes32"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "minExeDelay",
                    "type": "uint256"
                }
            ],
            "name": "SetVotingConfig",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "who",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Stake",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "who",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Unstake",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "vote",
                    "type": "address"
                }
            ],
            "name": "Veto",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "vote",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "option",
                    "type": "uint256"
                }
            ],
            "name": "Vote",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "name",
                    "type": "bytes32"
                },
                {
                    "internalType": "uint256",
                    "name": "minExeDelay",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "minVoteDuration",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "maxVoteDuration",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "minOaxTokenToCreateVote",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "minQuorum",
                    "type": "uint256"
                }
            ],
            "name": "addVotingConfig",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "admin",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "allVotings",
            "outputs": [
                {
                    "internalType": "address[]",
                    "name": "",
                    "type": "address[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "vote",
                    "type": "address"
                }
            ],
            "name": "closeVote",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "executed",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "freezedStake",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getNewVoteId",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "start",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "length",
                    "type": "uint256"
                }
            ],
            "name": "getVotingConfigProfiles",
            "outputs": [
                {
                    "internalType": "bytes32[]",
                    "name": "profiles",
                    "type": "bytes32[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getVotingCount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "name",
                    "type": "bytes32"
                }
            ],
            "name": "getVotingParams",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_minExeDelay",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minVoteDuration",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_maxVoteDuration",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minOaxTokenToCreateVote",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minQuorum",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "start",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "count",
                    "type": "uint256"
                }
            ],
            "name": "getVotings",
            "outputs": [
                {
                    "internalType": "address[]",
                    "name": "_votings",
                    "type": "address[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_admin",
                    "type": "address"
                }
            ],
            "name": "initAdmin",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address[]",
                    "name": "_votingExecutor",
                    "type": "address[]"
                }
            ],
            "name": "initVotingExecutor",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "votingContract",
                    "type": "address"
                }
            ],
            "name": "isVotingContract",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "isVotingExecutor",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "minStakePeriod",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "vote",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "isExecutiveVote",
                    "type": "bool"
                }
            ],
            "name": "newVote",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "oaxToken",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_admin",
                    "type": "address"
                }
            ],
            "name": "setAdmin",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_minStakePeriod",
                    "type": "uint256"
                }
            ],
            "name": "setMinStakePeriod",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "configName",
                    "type": "bytes32"
                },
                {
                    "internalType": "bytes32",
                    "name": "paramName",
                    "type": "bytes32"
                },
                {
                    "internalType": "uint256",
                    "name": "paramValue",
                    "type": "uint256"
                }
            ],
            "name": "setVotingConfig",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_votingExecutor",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "_bool",
                    "type": "bool"
                }
            ],
            "name": "setVotingExecutor",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_votingRegister",
                    "type": "address"
                }
            ],
            "name": "setVotingRegister",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "stake",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "stakeOf",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "totalStake",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "unlockStake",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "unstake",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "voting",
                    "type": "address"
                }
            ],
            "name": "veto",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "voteCount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bool",
                    "name": "poll",
                    "type": "bool"
                },
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "option",
                    "type": "uint256"
                }
            ],
            "name": "voted",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "votingConfigProfiles",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "votingConfigProfilesLength",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "name": "votingConfigs",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "minExeDelay",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "minVoteDuration",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "maxVoteDuration",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "minOaxTokenToCreateVote",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "minQuorum",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "votingExecutor",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "votingExecutorInv",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "votingExecutorLength",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "votingIdx",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "votingRegister",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "votingToken",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "votings",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ],
    "bytecode": "60c06040523480156200001157600080fd5b50604051620046433803806200464383398181016040526101208110156200003857600080fd5b815160208301516040808501805191519395929483019291846401000000008211156200006457600080fd5b9083019060208201858111156200007a57600080fd5b82518660208202830111640100000000821117156200009857600080fd5b82525081516020918201928201910280838360005b83811015620000c7578181015183820152602001620000ad565b5050505090500160405260200180516040519392919084640100000000821115620000f157600080fd5b9083019060208201858111156200010757600080fd5b82518660208202830111640100000000821117156200012557600080fd5b82525081516020918201928201910280838360005b83811015620001545781810151838201526020016200013a565b50505050905001604052602001805160405193929190846401000000008211156200017e57600080fd5b9083019060208201858111156200019457600080fd5b8251866020820283011164010000000082111715620001b257600080fd5b82525081516020918201928201910280838360005b83811015620001e1578181015183820152602001620001c7565b50505050905001604052602001805160405193929190846401000000008211156200020b57600080fd5b9083019060208201858111156200022157600080fd5b82518660208202830111640100000000821117156200023f57600080fd5b82525081516020918201928201910280838360005b838110156200026e57818101518382015260200162000254565b50505050905001604052602001805160405193929190846401000000008211156200029857600080fd5b908301906020820185811115620002ae57600080fd5b8251866020820283011164010000000082111715620002cc57600080fd5b82525081516020918201928201910280838360005b83811015620002fb578181015183820152602001620002e1565b50505050905001604052602001805160405193929190846401000000008211156200032557600080fd5b9083019060208201858111156200033b57600080fd5b82518660208202830111640100000000821117156200035957600080fd5b82525081516020918201928201910280838360005b83811015620003885781810151838201526020016200036e565b50505050919091016040525060200151915060009050620003b16001600160e01b036200080316565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3506001600160601b031960608a811b821660805289901b1660a0528551875114801562000428575084518651145b801562000436575083518551145b801562000444575082518451145b801562000452575081518351145b6200048f5760405162461bcd60e51b81526004018080602001828103825260248152602001806200461f6024913960400191505060405180910390fd5b60005b875181101562000741576000878281518110620004ab57fe5b6020026020010151118015620004d8575062093a80878281518110620004cd57fe5b602002602001015111155b6200052a576040805162461bcd60e51b815260206004820152601b60248201527f4f41584445583a20496e76616c6964206d696e45786544656c61790000000000604482015290519081900360640190fd5b8481815181106200053757fe5b60200260200101518682815181106200054c57fe5b602002602001015110801562000579575062093a808682815181106200056e57fe5b602002602001015111155b620005cb576040805162461bcd60e51b815260206004820152601f60248201527f4f41584445583a20496e76616c6964206d696e566f74654475726174696f6e00604482015290519081900360640190fd5b6000600160008a8481518110620005de57fe5b6020026020010151815260200190815260200160002090508782815181106200060357fe5b602002602001015181600001819055508682815181106200062057fe5b602002602001015181600101819055508582815181106200063d57fe5b602002602001015181600201819055508482815181106200065a57fe5b602002602001015181600301819055508382815181106200067757fe5b6020026020010151816004018190555060028983815181106200069657fe5b6020908102919091018101518254600181018455600093845291909220015588517f4298cd6fa0bb1aeb8e309c8da40e32f5d5383c757a49341ef32bdcfe4bf09129908a9084908110620006e657fe5b602090810291909101810151835460018501546002860154600387015460048801546040805196875296860194909452848601929092526060840152608083015260a082015290519081900360c00190a15060010162000492565b5060008111801562000756575062278d008111155b620007a8576040805162461bcd60e51b815260206004820152601e60248201527f4f41584445583a20496e76616c6964206d696e5374616b65506572696f640000604482015290519081900360640190fd5b600b8190556040805182815290516d1b5a5b94dd185ad954195c9a5bd960921b917f22ea5a9dcc7fb5bc447fcb472061adc51caa147724a67a6695d49a9dff162509919081900360200190a250505050505050505062000807565b3390565b60805160601c60a05160601c613ddf6200084060003980610f445280612553528061263852806126bc5250806127415250613ddf6000f3fe608060405234801561001057600080fd5b50600436106102f45760003560e01c80638da5cb5b11610191578063b716d463116100e3578063f2486f4411610097578063f851a44011610071578063f851a44014610963578063ff2a59b01461096b578063ffccd84314610973576102f4565b8063f2486f44146108e0578063f2fde38b146108fd578063f6f04d7f14610930576102f4565b8063c6384071116100c8578063c6384071146108a7578063d84f2bc6146108af578063d9c37086146108b7576102f4565b8063b716d46314610897578063bb9fe6bf1461089f576102f4565b8063a3818b3b11610145578063a8fd327e1161011f578063a8fd327e1461083f578063b03401231461085c578063b15866e614610864576102f4565b8063a3818b3b146107be578063a598d03c14610805578063a694fc3a14610822576102f4565b80639449f013116101765780639449f0131461076057806395e5cfa2146107935780639c2aab5e146107b6576102f4565b80638da5cb5b146107125780639192705014610743576102f4565b806362072e761161024a578063715018a6116101fe57806378a1a9fa116101d857806378a1a9fa146106c757806382107751146106cf5780638b0e9f3f1461070a576102f4565b8063715018a61461063c578063718fbb7914610644578063788ddbcb1461068c576102f4565b806365eaf8bc1161022f57806365eaf8bc146105955780636a333cee146105d6578063704b6c0214610609576102f4565b806362072e761461052757806365611e431461055a576102f4565b80632e17de78116102ac5780634262336011610286578063426233601461048b578063499b86d8146104be5780635c13d4ac146104db576102f4565b80632e17de78146103f657806331a38c89146104135780633b32cf421461041b576102f4565b806326ae21a9116102dd57806326ae21a91461034857806329294e2b1461037b57806329711413146103ee576102f4565b806308c4934d146102f9578063145988981461032e575b600080fd5b61032c6004803603602081101561030f57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661097b565b005b610336610a9d565b60408051918252519081900360200190f35b61032c6004803603602081101561035e57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610b1f565b61039e6004803603604081101561039157600080fd5b5080359060200135610c52565b60408051602080825283518183015283519192839290830191858101910280838360005b838110156103da5781810151838201526020016103c2565b505050509050019250505060405180910390f35b61039e610d44565b61032c6004803603602081101561040c57600080fd5b5035610db3565b61032c610f6a565b61032c6004803603602081101561043157600080fd5b81019060208101813564010000000081111561044c57600080fd5b82018360208201111561045e57600080fd5b8035906020019184602083028401116401000000008311171561048057600080fd5b509092509050611037565b610336600480360360208110156104a157600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16611184565b61032c600480360360208110156104d457600080fd5b5035611196565b61050e600480360360208110156104f157600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166112f0565b6040805192835260208301919091528051918290030190f35b61032c6004803603602081101561053d57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16611309565b61032c600480360360c081101561057057600080fd5b5080359060208101359060408101359060608101359060808101359060a0013561158d565b61032c600480360360608110156105ab57600080fd5b50803515159073ffffffffffffffffffffffffffffffffffffffff60208201351690604001356118fc565b61032c600480360360208110156105ec57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16611a3e565b61032c6004803603602081101561061f57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16611c18565b61032c611c96565b6106616004803603602081101561065a57600080fd5b5035611d96565b6040805195865260208601949094528484019290925260608401526080830152519081900360a00190f35b61032c600480360360408110156106a257600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001351515611e29565b610336611eb5565b61032c600480360360408110156106e557600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001351515611ebb565b6103366123a4565b61071a6123aa565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b61071a6004803603602081101561075957600080fd5b50356123c6565b6103366004803603602081101561077657600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166123fa565b61039e600480360360408110156107a957600080fd5b508035906020013561240c565b6103366124e5565b6107f1600480360360208110156107d457600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166124eb565b604080519115158252519081900360200190f35b61071a6004803603602081101561081b57600080fd5b5035612500565b61032c6004803603602081101561083857600080fd5b503561250d565b6106616004803603602081101561085557600080fd5b503561268c565b61071a6126ba565b6107f16004803603602081101561087a57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166126de565b61071a61273f565b61032c612763565b610336612870565b610336612876565b61032c600480360360608110156108cd57600080fd5b508035906020810135906040013561287c565b610336600480360360208110156108f657600080fd5b5035612d47565b61032c6004803603602081101561091357600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16612d65565b6103366004803603602081101561094657600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16612eef565b61071a612f01565b610336612f1d565b61071a612f23565b610983612f3f565b60005473ffffffffffffffffffffffffffffffffffffffff908116911614610a0c57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600a5473ffffffffffffffffffffffffffffffffffffffff1615610a9157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f4f41584445583a20416c72656164792073657400000000000000000000000000604482015290519081900360640190fd5b610a9a81612f43565b50565b60065460009073ffffffffffffffffffffffffffffffffffffffff163314610b10576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526023815260200180613ccf6023913960400191505060405180910390fd5b50600c80546001019081905590565b600a5473ffffffffffffffffffffffffffffffffffffffff163314610ba557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f4f41584445583a204e6f742066726f6d2073687574646f776e2061646d696e00604482015290519081900360640190fd5b8073ffffffffffffffffffffffffffffffffffffffff1663ef9b78c66040518163ffffffff1660e01b8152600401600060405180830381600087803b158015610bed57600080fd5b505af1158015610c01573d6000803e3d6000fd5b50505050610c0e81613089565b60405173ffffffffffffffffffffffffffffffffffffffff8216907f1c24a27ac669c0278656c76cc711441c8dd32d21c32227dad2b42bf6271e8fae90600090a250565b600e54606090610c68848463ffffffff6132ff16565b1115610c7757600e5483900391505b8167ffffffffffffffff81118015610c8e57600080fd5b50604051908082528060200260200182016040528015610cb8578160200160208202803683370190505b5090508260005b83811015610d3c57600e8281548110610cd457fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16838281518110610d0b57fe5b73ffffffffffffffffffffffffffffffffffffffff9092166020928302919091019091015260019182019101610cbf565b505092915050565b6060600e805480602002602001604051908101604052809291908181526020018280548015610da957602002820191906000526020600020905b815473ffffffffffffffffffffffffffffffffffffffff168152600190910190602001808311610d7e575b5050505050905090565b33600090815260036020908152604080832054600490925290912054610dde9163ffffffff6132ff16565b811115610e36576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b815260200180613ca4602b913960400191505060405180910390fd5b336000908152600360205260409020548111610e815733600090815260036020526040902054610e6c908263ffffffff61337a16565b33600090815260036020526040902055610f3f565b33600090815260036020526040812054610ea290839063ffffffff61337a16565b3360009081526003602090815260408083208381556001018390556004909152902054909150610ed8908263ffffffff61337a16565b33600090815260046020526040902055600554610efb908263ffffffff61337a16565b600555610f07336133bc565b60408051828152905133917f85082129d87b2fe11527cb1b3b7a520aeb5aa6913f88a3d8757fe40d1db02fdd919081900360200190a2505b610a9a7f00000000000000000000000000000000000000000000000000000000000000003383613472565b336000818152600d6020526040902054600e80549091908110610f8957fe5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff1614611001576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180613cf26026913960400191505060405180910390fd5b61100a33613089565b60405133907fdf42bfa876a741bbe542cf1a563269e1390bf03901b5d433a6e8afd6ee36dbfe90600090a2565b61103f612f3f565b60005473ffffffffffffffffffffffffffffffffffffffff9081169116146110c857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6007541561113757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f4f41584445583a206578656375746f7220616c72656164792073657400000000604482015290519081900360640190fd5b8060005b8181101561117e5761117684848381811061115257fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff16600161364f565b60010161113b565b50505050565b60046020526000908152604090205481565b3360009081526009602052604090205460ff1661121457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f4f41584445583a204e6f742066726f6d20766f74696e67000000000000000000604482015290519081900360640190fd5b600081118015611227575062278d008111155b61129257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f4f41584445583a20496e76616c6964206d696e5374616b65506572696f640000604482015290519081900360640190fd5b600b8190556040805182815290517f6d696e5374616b65506572696f64000000000000000000000000000000000000917f22ea5a9dcc7fb5bc447fcb472061adc51caa147724a67a6695d49a9dff162509919081900360200190a250565b6003602052600090815260409020805460019091015482565b8073ffffffffffffffffffffffffffffffffffffffff1663b3fff9bf6040518163ffffffff1660e01b815260040160006040518083038186803b15801561134f57600080fd5b505afa158015611363573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405260208110156113aa57600080fd5b81019080805160405193929190846401000000008211156113ca57600080fd5b9083019060208201858111156113df57600080fd5b82518660208202830111640100000000821117156113fc57600080fd5b82525081516020918201928201910280838360005b83811015611429578181015183820152602001611411565b50505050905001604052505050516000146114a557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f476f7665726e616e63653a204e6f74206120506f6c6c00000000000000000000604482015290519081900360640190fd5b8073ffffffffffffffffffffffffffffffffffffffff16639e6cb42b6040518163ffffffff1660e01b815260040160206040518083038186803b1580156114eb57600080fd5b505afa1580156114ff573d6000803e3d6000fd5b505050506040513d602081101561151557600080fd5b5051421161158457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f476f7665726e616e63653a20566f74696e67206e6f7420656e64656400000000604482015290519081900360640190fd5b610a9a81613089565b3360009081526009602052604090205460ff1661160b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f4f41584445583a204e6f742066726f6d20766f74696e67000000000000000000604482015290519081900360640190fd5b60008511801561161e575062093a808511155b61168957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f4f41584445583a20496e76616c6964206d696e45786544656c61790000000000604482015290519081900360640190fd5b828410801561169b575062093a808411155b61170657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f4f41584445583a20496e76616c696420766f74654475726174696f6e00000000604482015290519081900360640190fd5b600554821115611761576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526027815260200180613d186027913960400191505060405180910390fd5b6005548111156117d257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f4f41584445583a20496e76616c6964206d696e51756f72756d00000000000000604482015290519081900360640190fd5b600086815260016020526040902080541561184e57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f4f41584445583a20436f6e66696720616c726561647920657869737473000000604482015290519081900360640190fd5b858155600180820186905560028083018690556003830185905560048301849055805491820181556000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace018790556040805188815260208101889052808201879052606081018690526080810185905260a0810184905290517f4298cd6fa0bb1aeb8e309c8da40e32f5d5383c757a49341ef32bdcfe4bf091299181900360c00190a150505050505050565b336000818152600d6020526040902054600e8054909190811061191b57fe5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff1614611993576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180613cf26026913960400191505060405180910390fd5b82156119eb57604080518281529051339173ffffffffffffffffffffffffffffffffffffffff8516917f939cecbaa6409c96475d12a0cf1c30c058192b2b51716b5591c3f659ed9354a79181900360200190a3611a39565b604080518281529051339173ffffffffffffffffffffffffffffffffffffffff8516917f66a9138482c99e9baf08860110ef332cc0c23b4a199a53593d8db0fc8f96fbfc9181900360200190a35b505050565b611a46612f3f565b60005473ffffffffffffffffffffffffffffffffffffffff908116911614611acf57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b60065473ffffffffffffffffffffffffffffffffffffffff1615611b5457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f4f41584445583a20416c72656164792073657400000000000000000000000000604482015290519081900360640190fd5b600680547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831617908190556040805160609290921b7fffffffffffffffffffffffffffffffffffffffff000000000000000000000000168252517f766f74696e675265676973746572000000000000000000000000000000000000917f22ea5a9dcc7fb5bc447fcb472061adc51caa147724a67a6695d49a9dff162509916020918190039190910190a250565b3360009081526009602052604090205460ff16610a9157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f4f41584445583a204e6f742066726f6d20766f74696e67000000000000000000604482015290519081900360640190fd5b611c9e612f3f565b60005473ffffffffffffffffffffffffffffffffffffffff908116911614611d2757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b600081815260016020526040812060038101548291829182918291611e0157507f766f74650000000000000000000000000000000000000000000000000000000060005260016020527f981ebb1b944d3b52f140c2fb331aac52efb7ba38f2e98cea5942f05b58a04f6f5b8054600182015460028301546003840154600490940154929a91995097509195509350915050565b3360009081526009602052604090205460ff16611ea757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f4f41584445583a204e6f742066726f6d20766f74696e67000000000000000000604482015290519081900360640190fd5b611eb1828261364f565b5050565b60075490565b60065473ffffffffffffffffffffffffffffffffffffffff163314611f2b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526023815260200180613ccf6023913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611f97576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180613d886022913960400191505060405180910390fd5b600e541580611ffb575073ffffffffffffffffffffffffffffffffffffffff82166000818152600d6020526040902054600e80549091908110611fd657fe5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff1614155b612050576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180613c7a602a913960400191505060405180910390fd5b60005b600e54811015612291576000600e828154811061206c57fe5b6000918252602082200154604080517fb3fff9bf000000000000000000000000000000000000000000000000000000008152905173ffffffffffffffffffffffffffffffffffffffff9092169350839263b3fff9bf92600480840193829003018186803b1580156120dc57600080fd5b505afa1580156120f0573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052602081101561213757600080fd5b810190808051604051939291908464010000000082111561215757600080fd5b90830190602082018581111561216c57600080fd5b825186602082028301116401000000008211171561218957600080fd5b82525081516020918201928201910280838360005b838110156121b657818101518382015260200161219e565b505050509050016040525050505160001480156122435750428173ffffffffffffffffffffffffffffffffffffffff16639e6cb42b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561221557600080fd5b505afa158015612229573d6000803e3d6000fd5b505050506040513d602081101561223f57600080fd5b5051105b156122845761227f600e838154811061225857fe5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16613089565b61228b565b6001909101905b50612053565b600e805473ffffffffffffffffffffffffffffffffffffffff85166000818152600d60205260408120839055600183018455929092527fbb7b4a454dc3493923482f07822329ed19e8244eff582cc204f8554c3620c3fd0180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169091179055811561235e5760405173ffffffffffffffffffffffffffffffffffffffff8416907f3b7f4bea1b2462212751e8a9d23ca2a37a1abf7ff729725e224314f1c190c99190600090a2611a39565b60405173ffffffffffffffffffffffffffffffffffffffff8416907f83f5721a5071f4aac6f77c58360d8c8618098cebdc6d3c393f1e757ef4d1082b90600090a2505050565b60055481565b60005473ffffffffffffffffffffffffffffffffffffffff1690565b600781815481106123d357fe5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16905081565b600d6020526000908152604090205481565b6002546060908310156124df5760025461242c848463ffffffff6132ff16565b111561244857600254612445908463ffffffff61337a16565b91505b8167ffffffffffffffff8111801561245f57600080fd5b50604051908082528060200260200182016040528015612489578160200160208202803683370190505b50905060005b828110156124dd5760026124a9828663ffffffff6132ff16565b815481106124b357fe5b90600052602060002001548282815181106124ca57fe5b602090810291909101015260010161248f565b505b92915050565b600e5490565b60096020526000908152604090205460ff1681565b600e81815481106123d357fe5b604080517f70a08231000000000000000000000000000000000000000000000000000000008152336004820152905173ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016916370a08231916024808301926020929190829003018186803b15801561259957600080fd5b505afa1580156125ad573d6000803e3d6000fd5b505050506040513d60208110156125c357600080fd5b505181111561263357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f476f7665726e616e63653a20696e73756666696369656e742062616c616e6365604482015290519081900360640190fd5b61265f7f0000000000000000000000000000000000000000000000000000000000000000333084613928565b3360009081526003602052604090208054612680908363ffffffff6132ff16565b81554260019091015550565b6001602081905260009182526040909120805491810154600282015460038301546004909301549192909185565b7f000000000000000000000000000000000000000000000000000000000000000081565b73ffffffffffffffffffffffffffffffffffffffff81166000818152600d6020526040812054600e8054929392909190811061271657fe5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff161492915050565b7f000000000000000000000000000000000000000000000000000000000000000081565b33600090815260036020526040902080546127df57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f476f7665726e616e63653a204e6f7468696e6720746f207374616b6500000000604482015290519081900360640190fd5b426127f9600b5483600101546132ff90919063ffffffff16565b1061284f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526025815260200180613d3f6025913960400191505060405180910390fd5b805433600090815260036020526040812081815560010155611eb181613af8565b600c5481565b600b5481565b3360009081526009602052604090205460ff166128fa57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f4f41584445583a204e6f742066726f6d20766f74696e67000000000000000000604482015290519081900360640190fd5b60008381526001602052604090205461297457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f4f41584445583a20436f6e666967206e6f742065786973747300000000000000604482015290519081900360640190fd5b817f6d696e45786544656c61790000000000000000000000000000000000000000001415612a30576000811180156129af575062093a808111155b612a1a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f4f41584445583a20496e76616c6964206d696e45786544656c61790000000000604482015290519081900360640190fd5b6000838152600160205260409020819055612d0b565b817f6d696e566f74654475726174696f6e00000000000000000000000000000000001415612b005760008381526001602052604090206002015481108015612a7b575062093a808111155b612ae657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f4f41584445583a20496e76616c696420766f74654475726174696f6e00000000604482015290519081900360640190fd5b600083815260016020819052604090912001819055612d0b565b817f6d6178566f74654475726174696f6e00000000000000000000000000000000001415612bc157600083815260016020819052604090912001548111612ba857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f4f41584445583a20496e76616c696420766f74654475726174696f6e00000000604482015290519081900360640190fd5b6000838152600160205260409020600201819055612d0b565b817f6d696e4f6178546f6b656e546f437265617465566f74650000000000000000001415612c5d57600554811115612c44576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526027815260200180613d186027913960400191505060405180910390fd5b6000838152600160205260409020600301819055612d0b565b817f6d696e51756f72756d00000000000000000000000000000000000000000000001415612d0b57600554811115612cf657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f4f41584445583a20496e76616c6964206d696e51756f72756d00000000000000604482015290519081900360640190fd5b60008381526001602052604090206004018190555b604080518281529051839185917f10eff86a4e52b12bd92a6e64442cdb5baa87a9b327114811ebfc96a7c1e002819181900360200190a3505050565b60028181548110612d5457fe5b600091825260209091200154905081565b612d6d612f3f565b60005473ffffffffffffffffffffffffffffffffffffffff908116911614612df657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff8116612e62576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180613c546026913960400191505060405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60086020526000908152604090205481565b600a5473ffffffffffffffffffffffffffffffffffffffff1681565b60025490565b60065473ffffffffffffffffffffffffffffffffffffffff1681565b3390565b73ffffffffffffffffffffffffffffffffffffffff8116612fc557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f4f41584445583a20496e76616c69642061646d696e0000000000000000000000604482015290519081900360640190fd5b600a80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831617908190556040805160609290921b7fffffffffffffffffffffffffffffffffffffffff000000000000000000000000168252517f61646d696e000000000000000000000000000000000000000000000000000000917f22ea5a9dcc7fb5bc447fcb472061adc51caa147724a67a6695d49a9dff162509916020918190039190910190a250565b73ffffffffffffffffffffffffffffffffffffffff81166000908152600d60205260409020548015158061310157508173ffffffffffffffffffffffffffffffffffffffff16600e6000815481106130dd57fe5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16145b613156576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180613cf26026913960400191505060405180910390fd5b600e547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0181101561327257600e80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81019081106131b257fe5b600091825260209091200154600e805473ffffffffffffffffffffffffffffffffffffffff90921691839081106131e557fe5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600d6000600e848154811061323f57fe5b600091825260208083209091015473ffffffffffffffffffffffffffffffffffffffff1683528201929092526040019020555b73ffffffffffffffffffffffffffffffffffffffff82166000908152600d6020526040812055600e8054806132a357fe5b60008281526020902081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90810180547fffffffffffffffffffffffff00000000000000000000000000000000000000001690550190555050565b60008282018381101561337357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b600061337383836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250613b80565b60005b600e54811015611eb157600e81815481106133d657fe5b6000918252602082200154604080517f17e42ec000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8681166004830152915191909216926317e42ec0926024808201939182900301818387803b15801561344e57600080fd5b505af1158015613462573d6000803e3d6000fd5b5050600190920191506133bf9050565b6040805173ffffffffffffffffffffffffffffffffffffffff8481166024830152604480830185905283518084039091018152606490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb00000000000000000000000000000000000000000000000000000000178152925182516000946060949389169392918291908083835b6020831061354857805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0909201916020918201910161350b565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146135aa576040519150601f19603f3d011682016040523d82523d6000602084013e6135af565b606091505b50915091508180156135dd5750805115806135dd57508080602001905160208110156135da57600080fd5b50515b61364857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5472616e7366657248656c7065723a205452414e534645525f4641494c454400604482015290519081900360640190fd5b5050505050565b73ffffffffffffffffffffffffffffffffffffffff82166136d157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f4f41584445583a20496e76616c6964206578656375746f720000000000000000604482015290519081900360640190fd5b6007541580613735575073ffffffffffffffffffffffffffffffffffffffff821660008181526008602052604090205460078054909190811061371057fe5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff1614155b156137c0576007805473ffffffffffffffffffffffffffffffffffffffff84166000818152600860205260408120839055600183018455929092527fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c6880180547fffffffffffffffffffffffff000000000000000000000000000000000000000016909117905561383b565b73ffffffffffffffffffffffffffffffffffffffff821660009081526008602052604090205461383b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180613c326022913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216600090815260096020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00168215151790557f410bdf2fedecd51e396bd4e5ca41880366c00ff01f4df34d7cc46faef60eb706606083901b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000016826138de5760006138e1565b60015b604080517f766f74696e674578656375746f720000000000000000000000000000000000008152602081019390935260ff9190911682820152519081900360600190a15050565b6040805173ffffffffffffffffffffffffffffffffffffffff85811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd0000000000000000000000000000000000000000000000000000000017815292518251600094606094938a169392918291908083835b60208310613a0657805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe090920191602091820191016139c9565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114613a68576040519150601f19603f3d011682016040523d82523d6000602084013e613a6d565b606091505b5091509150818015613a9b575080511580613a9b5750808060200190516020811015613a9857600080fd5b50515b613af0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526024815260200180613d646024913960400191505060405180910390fd5b505050505050565b33600090815260046020526040902054613b18908263ffffffff6132ff16565b33600090815260046020526040902055600554613b3b908263ffffffff6132ff16565b600555613b47336133bc565b60408051828152905133917febedb8b3c678666e7f36970bc8f57abf6d8fa2e828c0da91ea5b75bf68ed101a919081900360200190a250565b60008184841115613c29576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015613bee578181015183820152602001613bd6565b50505050905090810190601f168015613c1b5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50505090039056fe4f41584445583a2063616e6e6f74207265736574206d61696e206578656375746f724f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373476f7665726e616e63653a20566f74696e6720636f6e747261637420616c726561647920657869737473476f7665726e616e63653a20756e6c6f636b2076616c756520657863656564206c6f636b65642066756e64476f7665726e616e63653a204e6f742066726f6d20766f74696e675265676973747279476f7665726e616e63653a20566f74696e6720636f6e7472616374206e6f74206578697374734f41584445583a20496e76616c6964206d696e4f6178546f6b656e546f437265617465566f7465476f7665726e616e63653a20467265657a656420706572696f64206e6f74207061737365645472616e7366657248656c7065723a205452414e534645525f46524f4d5f4641494c4544476f7665726e616e63653a20496e76616c696420766f74696e672061646472657373a2646970667358221220295034d8b4ce70697efe61f8a05e1022a5f0df0a3bef98e44670858c7163afe764736f6c634300060b00334f41584445583a20417267756d656e74206c656e67746873206e6f74206d617463686564"
}