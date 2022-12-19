export default {
    "abi": [
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_governance",
                    "type": "address"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "pair",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "fee",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "feeBase",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "typeCode",
                    "type": "uint256"
                }
            ],
            "name": "CustomPairRegister",
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
                    "internalType": "address",
                    "name": "factory",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "pair",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "token0",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "token1",
                    "type": "address"
                }
            ],
            "name": "PairRegister",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "factory",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "bytes32",
                    "name": "name",
                    "type": "bytes32"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "fee",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "feeBase",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "typeCode",
                    "type": "uint256"
                }
            ],
            "name": "ProtocolRegister",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "customPairs",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "fee",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "feeBase",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "typeCode",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32[]",
                    "name": "params",
                    "type": "bytes32[]"
                }
            ],
            "name": "execute",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "pairAddress",
                    "type": "address"
                }
            ],
            "name": "getFee",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "fee",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "feeBase",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address[]",
                    "name": "pairAddress",
                    "type": "address[]"
                }
            ],
            "name": "getPairTokens",
            "outputs": [
                {
                    "internalType": "address[]",
                    "name": "token0",
                    "type": "address[]"
                },
                {
                    "internalType": "address[]",
                    "name": "token1",
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
                    "name": "pairAddress",
                    "type": "address"
                }
            ],
            "name": "getTypeCode",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "typeCode",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "governance",
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
                    "internalType": "bytes32[]",
                    "name": "_name",
                    "type": "bytes32[]"
                },
                {
                    "internalType": "address[]",
                    "name": "_factory",
                    "type": "address[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "_fee",
                    "type": "uint256[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "_feeBase",
                    "type": "uint256[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "_typeCode",
                    "type": "uint256[]"
                }
            ],
            "name": "init",
            "outputs": [],
            "stateMutability": "nonpayable",
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
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "pairs",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "factory",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "token0",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "token1",
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
            "name": "protocolList",
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
            "name": "protocolListLength",
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
            "name": "protocols",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "name",
                    "type": "bytes32"
                },
                {
                    "internalType": "uint256",
                    "name": "fee",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "feeBase",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "typeCode",
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
                    "name": "token0",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "token1",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "pairAddress",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "fee",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "feeBase",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "typeCode",
                    "type": "uint256"
                }
            ],
            "name": "registerPair",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_factory",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "pairAddress",
                    "type": "address"
                }
            ],
            "name": "registerPairByAddress",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_factory",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "index",
                    "type": "uint256"
                }
            ],
            "name": "registerPairByIndex",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_factory",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_token0",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_token1",
                    "type": "address"
                }
            ],
            "name": "registerPairByTokens",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_factory",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_token0",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_token1",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "pairIndex",
                    "type": "uint256"
                }
            ],
            "name": "registerPairByTokensV3",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_factory",
                    "type": "address"
                },
                {
                    "internalType": "address[]",
                    "name": "pairAddress",
                    "type": "address[]"
                }
            ],
            "name": "registerPairsByAddress",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address[]",
                    "name": "_factory",
                    "type": "address[]"
                },
                {
                    "internalType": "address[]",
                    "name": "pairAddress",
                    "type": "address[]"
                }
            ],
            "name": "registerPairsByAddress2",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_factory",
                    "type": "address"
                },
                {
                    "internalType": "uint256[]",
                    "name": "index",
                    "type": "uint256[]"
                }
            ],
            "name": "registerPairsByIndex",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_factory",
                    "type": "address"
                },
                {
                    "internalType": "address[]",
                    "name": "_token0",
                    "type": "address[]"
                },
                {
                    "internalType": "address[]",
                    "name": "_token1",
                    "type": "address[]"
                }
            ],
            "name": "registerPairsByTokens",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_factory",
                    "type": "address"
                },
                {
                    "internalType": "address[]",
                    "name": "_token0",
                    "type": "address[]"
                },
                {
                    "internalType": "address[]",
                    "name": "_token1",
                    "type": "address[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "_pairIndex",
                    "type": "uint256[]"
                }
            ],
            "name": "registerPairsByTokensV3",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_name",
                    "type": "bytes32"
                },
                {
                    "internalType": "address",
                    "name": "_factory",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_fee",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_feeBase",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_typeCode",
                    "type": "uint256"
                }
            ],
            "name": "registerProtocol",
            "outputs": [],
            "stateMutability": "nonpayable",
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
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    "bytecode": "60806040523480156200001157600080fd5b50604051620032b0380380620032b0833981810160405260208110156200003757600080fd5b505160006200004e6001600160e01b03620000be16565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350600580546001600160a01b0319166001600160a01b0392909216919091179055620000c2565b3390565b6131de80620000d26000396000f3fe608060405234801561001057600080fd5b50600436106101a35760003560e01c8063715018a6116100ee5780639c5eda8411610097578063ed706dbd11610071578063ed706dbd14610ba7578063edf30da914610c67578063f2fde38b14610ca2578063fe33b30214610cd5576101a3565b80639c5eda8414610ad7578063b88c914814610b22578063d52f6d0214610b6e576101a3565b80638d8a7c8a116100c85780638d8a7c8a14610a0f5780638da5cb5b14610a425780639179f07814610a4a576101a3565b8063715018a61461097d578063837cd3fa146109855780638af7c6491461099f576101a3565b806326638a0a1161015057806346079b881161012a57806346079b881461085157806353ec54ae146108965780635aa6e67514610975576101a3565b806326638a0a146105eb5780632dc014b31461064457806330f802e5146107fc576101a3565b80630d36c409116101815780630d36c4091461028a57806314406f66146103b15780631f2a1a2b146104e2576101a3565b806307742f44146101a857806307b1d728146101f357806307c28c2614610244575b600080fd5b6101f1600480360360808110156101be57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160208101358216916040820135169060600135610d40565b005b6102266004803603602081101561020957600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610e96565b60408051938452602084019290925282820152519081900360600190f35b6102616004803603602081101561025a57600080fd5b5035610eb6565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6101f1600480360360408110156102a057600080fd5b8101906020810181356401000000008111156102bb57600080fd5b8201836020820111156102cd57600080fd5b803590602001918460208302840111640100000000831117156102ef57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929594936020810193503591505064010000000081111561033f57600080fd5b82018360208201111561035157600080fd5b8035906020019184602083028401116401000000008311171561037357600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550610eea945050505050565b6101f1600480360360808110156103c757600080fd5b73ffffffffffffffffffffffffffffffffffffffff82351691908101906040810160208201356401000000008111156103ff57600080fd5b82018360208201111561041157600080fd5b8035906020019184602083028401116401000000008311171561043357600080fd5b91939092909160208101903564010000000081111561045157600080fd5b82018360208201111561046357600080fd5b8035906020019184602083028401116401000000008311171561048557600080fd5b9193909290916020810190356401000000008111156104a357600080fd5b8201836020820111156104b557600080fd5b803590602001918460208302840111640100000000831117156104d757600080fd5b509092509050611069565b610552600480360360208110156104f857600080fd5b81019060208101813564010000000081111561051357600080fd5b82018360208201111561052557600080fd5b8035906020019184602083028401116401000000008311171561054757600080fd5b5090925090506112e3565b604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b8381101561059657818101518382015260200161057e565b50505050905001838103825284818151815260200191508051906020019060200280838360005b838110156105d55781810151838201526020016105bd565b5050505090500194505050505060405180910390f35b61061e6004803603602081101561060157600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16611486565b604080519485526020850193909352838301919091526060830152519081900360800190f35b6101f1600480360360a081101561065a57600080fd5b81019060208101813564010000000081111561067557600080fd5b82018360208201111561068757600080fd5b803590602001918460208302840111640100000000831117156106a957600080fd5b9193909290916020810190356401000000008111156106c757600080fd5b8201836020820111156106d957600080fd5b803590602001918460208302840111640100000000831117156106fb57600080fd5b91939092909160208101903564010000000081111561071957600080fd5b82018360208201111561072b57600080fd5b8035906020019184602083028401116401000000008311171561074d57600080fd5b91939092909160208101903564010000000081111561076b57600080fd5b82018360208201111561077d57600080fd5b8035906020019184602083028401116401000000008311171561079f57600080fd5b9193909290916020810190356401000000008111156107bd57600080fd5b8201836020820111156107cf57600080fd5b803590602001918460208302840111640100000000831117156107f157600080fd5b5090925090506114af565b6101f1600480360360c081101561081257600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160208101358216916040820135169060608101359060808101359060a001356116d2565b6101f16004803603606081101561086757600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020810135821691604090910135166117f0565b6101f1600480360360608110156108ac57600080fd5b73ffffffffffffffffffffffffffffffffffffffff82351691908101906040810160208201356401000000008111156108e457600080fd5b8201836020820111156108f657600080fd5b8035906020019184602083028401116401000000008311171561091857600080fd5b91939092909160208101903564010000000081111561093657600080fd5b82018360208201111561094857600080fd5b8035906020019184602083028401116401000000008311171561096a57600080fd5b50909250905061196c565b610261611bfe565b6101f1611c1a565b61098d611d1a565b60408051918252519081900360200190f35b6101f1600480360360208110156109b557600080fd5b8101906020810181356401000000008111156109d057600080fd5b8201836020820111156109e257600080fd5b80359060200191846020830284011164010000000083111715610a0457600080fd5b509092509050611d20565b61098d60048036036020811015610a2557600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16612093565b610261612127565b6101f160048036036040811015610a6057600080fd5b73ffffffffffffffffffffffffffffffffffffffff8235169190810190604081016020820135640100000000811115610a9857600080fd5b820183602082011115610aaa57600080fd5b80359060200191846020830284011164010000000083111715610acc57600080fd5b509092509050612143565b6101f1600480360360a0811015610aed57600080fd5b5080359073ffffffffffffffffffffffffffffffffffffffff602082013516906040810135906060810135906080013561228a565b610b5560048036036020811015610b3857600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661239f565b6040805192835260208301919091528051918290030190f35b6101f160048036036040811015610b8457600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135612442565b6101f160048036036040811015610bbd57600080fd5b73ffffffffffffffffffffffffffffffffffffffff8235169190810190604081016020820135640100000000811115610bf557600080fd5b820183602082011115610c0757600080fd5b80359060200191846020830284011164010000000083111715610c2957600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550612567945050505050565b6101f160048036036040811015610c7d57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020013516612624565b6101f160048036036020811015610cb857600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166126c6565b610d0860048036036020811015610ceb57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16612850565b6040805173ffffffffffffffffffffffffffffffffffffffff9485168152928416602084015292168183015290519081900360600190f35b73ffffffffffffffffffffffffffffffffffffffff8416600090815260036020819052604090912081015414610dd757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f496e76616c696420747970650000000000000000000000000000000000000000604482015290519081900360640190fd5b604080517f5eced48000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85811660048301528481166024830152604482018490529151600092871691635eced480916064808301926020929190829003018186803b158015610e5757600080fd5b505afa158015610e6b573d6000803e3d6000fd5b505050506040513d6020811015610e8157600080fd5b50519050610e8f858261288e565b5050505050565b600260208190526000918252604090912080546001820154919092015483565b60048181548110610ec357fe5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16905081565b805182518114610f5b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f6172726179206c656e677468206e6f74206d6174636800000000000000000000604482015290519081900360640190fd5b60005b818110156110635760036000858381518110610f7657fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301546003141561102b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f50726f746f636f6c206e6f7420726567636f6e697a6564000000000000000000604482015290519081900360640190fd5b61105b84828151811061103a57fe5b602002602001015184838151811061104e57fe5b602002602001015161288e565b600101610f5e565b50505050565b73ffffffffffffffffffffffffffffffffffffffff871660009081526003602081905260409091208101541461110057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f496e76616c696420747970650000000000000000000000000000000000000000604482015290519081900360640190fd5b8483811461116f57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f6172726179206c656e677468206e6f74206d6174636800000000000000000000604482015290519081900360640190fd5b60005b818110156112d85760008973ffffffffffffffffffffffffffffffffffffffff16635eced4808a8a858181106111a457fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff168989868181106111cd57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff168888878181106111f657fe5b905060200201356040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001935050505060206040518083038186803b15801561129757600080fd5b505afa1580156112ab573d6000803e3d6000fd5b505050506040513d60208110156112c157600080fd5b505190506112cf8a8261288e565b50600101611172565b505050505050505050565b606080828067ffffffffffffffff811180156112fe57600080fd5b50604051908082528060200260200182016040528015611328578160200160208202803683370190505b5092508067ffffffffffffffff8111801561134257600080fd5b5060405190808252806020026020018201604052801561136c578160200160208202803683370190505b50915060005b8181101561147d5760006001600088888581811061138c57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090508060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1685838151811061141657fe5b73ffffffffffffffffffffffffffffffffffffffff92831660209182029290920101526002820154855191169085908490811061144f57fe5b73ffffffffffffffffffffffffffffffffffffffff9092166020928302919091019091015250600101611372565b50509250929050565b600360208190526000918252604090912080546001820154600283015492909301549092919084565b6114b7612b4e565b60005473ffffffffffffffffffffffffffffffffffffffff90811691161461154057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600454156115af57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f416c726561647920696e69740000000000000000000000000000000000000000604482015290519081900360640190fd5b8887811480156115be57508786145b80156115c957508582145b61163457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f6c656e677468206e6f74206d6174636800000000000000000000000000000000604482015290519081900360640190fd5b60005b818110156116c4576116bc8c8c8381811061164e57fe5b905060200201358b8b8481811061166157fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff168a8a8581811061168a57fe5b9050602002013589898681811061169d57fe5b905060200201358888878181106116b057fe5b90506020020135612b52565b600101611637565b505050505050505050505050565b600554604080517fa3818b3b000000000000000000000000000000000000000000000000000000008152336004820152905173ffffffffffffffffffffffffffffffffffffffff9092169163a3818b3b91602480820192602092909190829003018186803b15801561174357600080fd5b505afa158015611757573d6000803e3d6000fd5b505050506040513d602081101561176d57600080fd5b50516117da57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f4e6f742066726f6d20766f74696e670000000000000000000000000000000000604482015290519081900360640190fd5b6117e8868686868686612dbd565b505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166000908152600360208190526040909120015415801590611850575073ffffffffffffffffffffffffffffffffffffffff83166000908152600360208190526040909120810154105b6118bb57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f496e76616c696420747970650000000000000000000000000000000000000000604482015290519081900360640190fd5b604080517fe6a4390500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84811660048301528381166024830152915160009286169163e6a43905916044808301926020929190829003018186803b15801561193457600080fd5b505afa158015611948573d6000803e3d6000fd5b505050506040513d602081101561195e57600080fd5b50519050611063848261288e565b73ffffffffffffffffffffffffffffffffffffffff851660009081526003602081905260409091200154158015906119cc575073ffffffffffffffffffffffffffffffffffffffff85166000908152600360208190526040909120810154105b611a3757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f496e76616c696420747970650000000000000000000000000000000000000000604482015290519081900360640190fd5b82818114611aa657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f6172726179206c656e677468206e6f74206d6174636800000000000000000000604482015290519081900360640190fd5b60005b81811015611bf55760008773ffffffffffffffffffffffffffffffffffffffff1663e6a43905888885818110611adb57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff16878786818110611b0457fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff166040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060206040518083038186803b158015611bb457600080fd5b505afa158015611bc8573d6000803e3d6000fd5b505050506040513d6020811015611bde57600080fd5b50519050611bec888261288e565b50600101611aa9565b50505050505050565b60055473ffffffffffffffffffffffffffffffffffffffff1681565b611c22612b4e565b60005473ffffffffffffffffffffffffffffffffffffffff908116911614611cab57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60045490565b600554604080517fb15866e6000000000000000000000000000000000000000000000000000000008152336004820152905173ffffffffffffffffffffffffffffffffffffffff9092169163b15866e691602480820192602092909190829003018186803b158015611d9157600080fd5b505afa158015611da5573d6000803e3d6000fd5b505050506040513d6020811015611dbb57600080fd5b5051611e2857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f4e6f742066726f6d20766f74696e670000000000000000000000000000000000604482015290519081900360640190fd5b60018111611e9757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f496e76616c6964206c656e677468000000000000000000000000000000000000604482015290519081900360640190fd5b600082826000818110611ea657fe5b60200291909101359150506006821415611f6557807f726567697374657250726f746f636f6c000000000000000000000000000000001415611f6057611f5a83836001818110611ef257fe5b9050602002013584846002818110611f0657fe5b9050602002013560601c85856003818110611f1d57fe5b9050602002013560001c86866004818110611f3457fe5b9050602002013560001c87876005818110611f4b57fe5b9050602002013560001c612b52565b5061208f565b612028565b600782141561202857807f7265676973746572506169720000000000000000000000000000000000000000141561202857611f5a83836001818110611fa657fe5b9050602002013560601c84846002818110611fbd57fe5b9050602002013560601c85856003818110611fd457fe5b9050602002013560601c86866004818110611feb57fe5b9050602002013560001c8787600581811061200257fe5b9050602002013560001c8888600681811061201957fe5b9050602002013560001c612dbd565b604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f496e76616c696420706172616d65746572730000000000000000000000000000604482015290519081900360640190fd5b5050565b73ffffffffffffffffffffffffffffffffffffffff80821660009081526001602052604081205490911680156120f45773ffffffffffffffffffffffffffffffffffffffff8116600090815260036020819052604090912001549150612121565b73ffffffffffffffffffffffffffffffffffffffff83166000908152600260208190526040909120015491505b50919050565b60005473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260036020819052604090912001546121d857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f50726f746f636f6c206e6f7420726567636f6e697a6564000000000000000000604482015290519081900360640190fd5b8060005b81811015610e8f5760008573ffffffffffffffffffffffffffffffffffffffff16631e3dd18b86868581811061220e57fe5b905060200201356040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b15801561224957600080fd5b505afa15801561225d573d6000803e3d6000fd5b505050506040513d602081101561227357600080fd5b50519050612281868261288e565b506001016121dc565b600554604080517fa3818b3b000000000000000000000000000000000000000000000000000000008152336004820152905173ffffffffffffffffffffffffffffffffffffffff9092169163a3818b3b91602480820192602092909190829003018186803b1580156122fb57600080fd5b505afa15801561230f573d6000803e3d6000fd5b505050506040513d602081101561232557600080fd5b505161239257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f4e6f742066726f6d20766f74696e670000000000000000000000000000000000604482015290519081900360640190fd5b610e8f8585858585612b52565b73ffffffffffffffffffffffffffffffffffffffff8082166000908152600160205260408120549091829116801561240b5773ffffffffffffffffffffffffffffffffffffffff811660009081526003602052604090206001810154600290910154909350915061243c565b73ffffffffffffffffffffffffffffffffffffffff8416600090815260026020526040902060018101549054935091505b50915091565b73ffffffffffffffffffffffffffffffffffffffff8216600090815260036020819052604090912001546124d757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f50726f746f636f6c206e6f7420726567636f6e697a6564000000000000000000604482015290519081900360640190fd5b60008273ffffffffffffffffffffffffffffffffffffffff16631e3dd18b836040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b15801561252a57600080fd5b505afa15801561253e573d6000803e3d6000fd5b505050506040513d602081101561255457600080fd5b50519050612562838261288e565b505050565b73ffffffffffffffffffffffffffffffffffffffff8216600090815260036020819052604090912081015414156125ff57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f50726f746f636f6c206e6f7420726567636f6e697a6564000000000000000000604482015290519081900360640190fd5b805160005b818110156110635761261c8484838151811061104e57fe5b600101612604565b73ffffffffffffffffffffffffffffffffffffffff8216600090815260036020819052604090912081015414156126bc57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f50726f746f636f6c206e6f7420726567636f6e697a6564000000000000000000604482015290519081900360640190fd5b61208f828261288e565b6126ce612b4e565b60005473ffffffffffffffffffffffffffffffffffffffff90811691161461275757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff81166127c3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806131606026913960400191505060405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b600160208190526000918252604090912080549181015460029091015473ffffffffffffffffffffffffffffffffffffffff92831692918216911683565b73ffffffffffffffffffffffffffffffffffffffff81166128fa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806131866023913960400191505060405180910390fd5b60008173ffffffffffffffffffffffffffffffffffffffff16630dfe16816040518163ffffffff1660e01b8152600401602060405180830381600087803b15801561294457600080fd5b505af1158015612958573d6000803e3d6000fd5b505050506040513d602081101561296e57600080fd5b5051604080517fd21220a7000000000000000000000000000000000000000000000000000000008152905191925060009173ffffffffffffffffffffffffffffffffffffffff85169163d21220a791600480830192602092919082900301818787803b1580156129dd57600080fd5b505af11580156129f1573d6000803e3d6000fd5b505050506040513d6020811015612a0757600080fd5b5051905073ffffffffffffffffffffffffffffffffffffffff80821690831610612a9257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f496e76616c696420746f6b656e73206f72646572000000000000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff8084166000818152600160208181526040928390208054868b167fffffffffffffffffffffffff00000000000000000000000000000000000000009182168117835593820180548a891690831681179091556002909201805497891697909116871790558351908152908101949094528151929390927f07860c96452446c5761a5adeb8371913b7cdcadcae0b6de6a2185692d0abcd19929181900390910190a350505050565b3390565b73ffffffffffffffffffffffffffffffffffffffff8416612bd457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f496e76616c69642070726f746f636f6c20616464726573730000000000000000604482015290519081900360640190fd5b81831115612c4357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f46656520746f6f206c6172676500000000000000000000000000000000000000604482015290519081900360640190fd5b60008211612cb257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f50726f746f636f6c206e6f7420726567636f6e697a6564000000000000000000604482015290519081900360640190fd5b60408051608080820183528782526020808301878152838501878152606080860188815273ffffffffffffffffffffffffffffffffffffffff8c16600081815260038088528a822099518a5595516001808b0191909155945160028a0155915197909401969096556004805492830181559095527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b0180547fffffffffffffffffffffffff0000000000000000000000000000000000000000168217905584518a8152918201889052818501879052928101859052925191927f4647302d46fbbda75aa1966c4e2d24de38981639223ee539cc8409190780c192929081900390910190a25050505050565b73ffffffffffffffffffffffffffffffffffffffff8616612e3f57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f496e76616c696420746f6b656e20616464726573730000000000000000000000604482015290519081900360640190fd5b8473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1610612ed957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f496e76616c696420746f6b656e206f7264657200000000000000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff8416612f5b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f496e76616c696420706169722061646472657373000000000000000000000000604482015290519081900360640190fd5b81831115612fca57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f46656520746f6f206c6172676500000000000000000000000000000000000000604482015290519081900360640190fd5b6000821161303957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f50726f746f636f6c206e6f7420726567636f6e697a6564000000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff808516600081815260016020818152604080842080547fffffffffffffffffffffffff0000000000000000000000000000000000000000908116825581850180548f8a16908316811790915560029283018054998f169990921689179091558184528286208b81559485018a905593018790558051928352908201949094528351929391927f07860c96452446c5761a5adeb8371913b7cdcadcae0b6de6a2185692d0abcd19929181900390910190a36040805184815260208101849052808201839052905173ffffffffffffffffffffffffffffffffffffffff8616917f468d5e8323e9769eda1c0370b2f3c84ea8e2424256a85fd5fb8cf06653c5ad75919081900360600190a250505050505056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373496e76616c6964207061697220616464726573732f50616972206e6f7420666f756e64a2646970667358221220c709ae555ea3319e68c4055cfbbc9dcf3ad934e37b6c456114ba7dfe20c5182a64736f6c634300060b0033"
}