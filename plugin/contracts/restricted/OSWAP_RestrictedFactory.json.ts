export default {
    "abi": [
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_governance",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_whitelistFactory",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_pairCreator",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_configStore",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_tradeFee",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_protocolFee",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_protocolFeeTo",
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
                    "name": "token0",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "token1",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "oracle",
                    "type": "address"
                }
            ],
            "name": "OracleAdded",
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
                    "name": "token0",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "token1",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "pair",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "newPairSize",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "newSize",
                    "type": "uint256"
                }
            ],
            "name": "PairCreated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "pair",
                    "type": "address"
                }
            ],
            "name": "PairRestarted",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "pair",
                    "type": "address"
                }
            ],
            "name": "PairShutdowned",
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
            "inputs": [],
            "name": "Restarted",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [],
            "name": "Shutdowned",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "tokenA",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "tokenB",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "oracle",
                    "type": "address"
                }
            ],
            "name": "addOldOracleToNewPair",
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
            "name": "allPairs",
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
            "name": "allPairsLength",
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
                    "name": "tokenA",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "tokenB",
                    "type": "address"
                }
            ],
            "name": "checkAndGetOracle",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "oracle",
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
                    "name": "tokenA",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "tokenB",
                    "type": "address"
                }
            ],
            "name": "checkAndGetOracleSwapParams",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "oracle_",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tradeFee_",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "protocolFee_",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "configStore",
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
                    "name": "tokenA",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "tokenB",
                    "type": "address"
                }
            ],
            "name": "createPair",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "pair",
                    "type": "address"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getCreateAddresses",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "_governance",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_whitelistFactory",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_restrictedLiquidityProvider",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_configStore",
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
                },
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "getPair",
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
                    "internalType": "address",
                    "name": "_restrictedLiquidityProvider",
                    "type": "address"
                }
            ],
            "name": "init",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "isLive",
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
            "name": "isOracle",
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
                    "name": "pair",
                    "type": "address"
                }
            ],
            "name": "isPair",
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
                },
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "oracles",
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
            "name": "pairCreator",
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
            "name": "pairIdx",
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
                    "name": "tokenA",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "tokenB",
                    "type": "address"
                }
            ],
            "name": "pairLength",
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
            "name": "protocolFee",
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
            "name": "protocolFeeTo",
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
            "inputs": [],
            "name": "restrictedLiquidityProvider",
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
                    "internalType": "bool",
                    "name": "_isLive",
                    "type": "bool"
                }
            ],
            "name": "setLive",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "pair",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "live",
                    "type": "bool"
                }
            ],
            "name": "setLiveForPair",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "tokenA",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "tokenB",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "oracle",
                    "type": "address"
                }
            ],
            "name": "setOracle",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_protocolFee",
                    "type": "uint256"
                }
            ],
            "name": "setProtocolFee",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_protocolFeeTo",
                    "type": "address"
                }
            ],
            "name": "setProtocolFeeTo",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_tradeFee",
                    "type": "uint256"
                }
            ],
            "name": "setTradeFee",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "tradeFee",
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
            "name": "whitelistFactory",
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
    "bytecode": "61010060405234801561001157600080fd5b5060405162002a2b38038062002a2b833981810160405260e081101561003657600080fd5b5080516020820151604083015160608085015160808087015160a088015160c0909801519387901b6001600160601b03191690915260008054600160ff19909116178155959694959394919390929061008d610136565b60008054610100600160a81b0319166101006001600160a01b038416908102919091178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350606095861b6001600160601b031990811660a05294861b851660c0529290941b90921660e052600191909155600291909155600380546001600160a01b0319166001600160a01b039092169190911790555061013a565b3390565b60805160601c60a05160601c60c05160601c60e05160601c612873620001b8600039806114685280611f815250806114b0528061172f525080611f485280611fc15250806107e85280610ca25280610d2c5280610e1f528061114f5280611cf65280611f2652806121955280612288528061245f52506128736000f3fe608060405234801561001057600080fd5b50600436106101f05760003560e01c806395277f391161010f578063e5d36ff6116100a2578063f060d13911610071578063f060d13914610666578063f2fde38b1461066e578063f5ee3348146106a1578063fd3206d2146106c0576101f0565b8063e5d36ff6146105da578063e5e31b13146105e2578063ea2ed2c114610615578063ef3692521461065e576101f0565b8063b8f7a665116100de578063b8f7a6651461055c578063c538b5d614610564578063c9c653961461056c578063e0e6799f146105a7576101f0565b806395277f39146104ca5780639d69dc4e14610505578063a97e5c931461050d578063b0e21e8a14610554576101f0565b806352a03c03116101875780636883618a116101565780636883618a14610462578063715018a61461049d578063787dce3d146104a55780638da5cb5b146104c2576101f0565b806352a03c03146103d4578063574f2ba31461040f5780635aa6e675146104175780635eced4801461041f576101f0565b80631e3dd18b116101c35780631e3dd18b146102fc5780631ee85fd21461034257806324bcdfbd14610387578063399762471461038f576101f0565b8063069d188f146101f55780630c1445811461026557806310603023146102ac57806319ab453c146102c9575b600080fd5b6102306004803603604081101561020b57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160200135166106fb565b6040805173ffffffffffffffffffffffffffffffffffffffff9094168452602084019290925282820152519081900360600190f35b6102aa6004803603606081101561027b57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602081013582169160409091013516610792565b005b6102aa600480360360208110156102c257600080fd5b50356107a2565b6102aa600480360360208110156102df57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661099a565b6103196004803603602081101561031257600080fd5b5035610ae6565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6103756004803603602081101561035857600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610b1a565b60408051918252519081900360200190f35b610375610b2c565b6102aa600480360360608110156103a557600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602081013582169160409091013516610b32565b610319600480360360408110156103ea57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020013516610c67565b610375610c9a565b610319610ca0565b6103196004803603606081101561043557600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160208101359091169060400135610cc4565b6102aa6004803603604081101561047857600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001351515610d13565b6102aa611000565b6102aa600480360360208110156104bb57600080fd5b5035611109565b610319611301565b610319600480360360408110156104e057600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020013516611322565b610319611466565b6105406004803603602081101561052357600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661148a565b604080519115158252519081900360200190f35b61037561149f565b6105406114a5565b6103196114ae565b6103196004803603604081101561058257600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160200135166114d2565b6102aa600480360360208110156105bd57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16611cb0565b610319611e98565b610540600480360360208110156105f857600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16611eb4565b61061d611f21565b6040805173ffffffffffffffffffffffffffffffffffffffff9586168152938516602085015291841683830152909216606082015290519081900360800190f35b610319611fa3565b610319611fbf565b6102aa6004803603602081101561068457600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16611fe3565b6102aa600480360360208110156106b757600080fd5b5035151561217c565b610375600480360360408110156106d657600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160200135166123e1565b600080548190819060ff1661077157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f474c4f42414c4c59205041555345440000000000000000000000000000000000604482015290519081900360640190fd5b600061077d8686611322565b60015460025491955093509150509250925092565b61079d838383612419565b505050565b604080517fa3818b3b000000000000000000000000000000000000000000000000000000008152336004820152905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169163a3818b3b916024808301926020929190829003018186803b15801561082e57600080fd5b505afa158015610842573d6000803e3d6000fd5b505050506040513d602081101561085857600080fd5b50516108c557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f4e6f742066726f6d20766f74696e670000000000000000000000000000000000604482015290519081900360640190fd5b620186a081111561093757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f494e56414c49445f54524144455f464545000000000000000000000000000000604482015290519081900360640190fd5b6001819055604080517f747261646546656500000000000000000000000000000000000000000000000081526020810183905281517f22ea5a9dcc7fb5bc447fcb472061adc51caa147724a67a6695d49a9dff162509929181900390910190a150565b6109a26127cb565b600054610100900473ffffffffffffffffffffffffffffffffffffffff908116911614610a3057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b60075473ffffffffffffffffffffffffffffffffffffffff1615610a9f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260278152602001806128176027913960400191505060405180910390fd5b600780547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60068181548110610af357fe5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16905081565b60056020526000908152604090205481565b60015481565b73ffffffffffffffffffffffffffffffffffffffff838116600090815260086020908152604080832086851684529091529020541615610bd357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f6f7261636c6520616c7265616479207365740000000000000000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff811660009081526009602052604090205460ff1661079257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f6f7261636c65206e6f74207365656e0000000000000000000000000000000000604482015290519081900360640190fd5b600860209081526000928352604080842090915290825290205473ffffffffffffffffffffffffffffffffffffffff1681565b60065490565b7f000000000000000000000000000000000000000000000000000000000000000081565b60046020528260005260406000206020528160005260406000208181548110610ce957fe5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16925083915050565b3373ffffffffffffffffffffffffffffffffffffffff167f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663f851a4406040518163ffffffff1660e01b815260040160206040518083038186803b158015610d9057600080fd5b505afa158015610da4573d6000803e3d6000fd5b505050506040513d6020811015610dba57600080fd5b505173ffffffffffffffffffffffffffffffffffffffff161480610e925750604080517fa3818b3b000000000000000000000000000000000000000000000000000000008152336004820152905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169163a3818b3b916024808301926020929190829003018186803b158015610e6557600080fd5b505afa158015610e79573d6000803e3d6000fd5b505050506040513d6020811015610e8f57600080fd5b50515b610ee7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806127f66021913960400191505060405180910390fd5b604080517ff5ee33480000000000000000000000000000000000000000000000000000000081528215156004820152905173ffffffffffffffffffffffffffffffffffffffff84169163f5ee334891602480830192600092919082900301818387803b158015610f5657600080fd5b505af1158015610f6a573d6000803e3d6000fd5b505050508015610fba5760405173ffffffffffffffffffffffffffffffffffffffff8316907fc96ebf6dcdf5c5e56ad8961009b9d49aa6f2d53d5ffe374048f1d603e3b2908a90600090a2610ffc565b60405173ffffffffffffffffffffffffffffffffffffffff8316907f7dc5983a5f99179c76b5bbff56fcf9e8373f1a7078dcef4537a5176b333c2bfe90600090a25b5050565b6110086127cb565b600054610100900473ffffffffffffffffffffffffffffffffffffffff90811691161461109657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6000805460405161010090910473ffffffffffffffffffffffffffffffffffffffff16907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080547fffffffffffffffffffffff0000000000000000000000000000000000000000ff169055565b604080517fa3818b3b000000000000000000000000000000000000000000000000000000008152336004820152905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169163a3818b3b916024808301926020929190829003018186803b15801561119557600080fd5b505afa1580156111a9573d6000803e3d6000fd5b505050506040513d60208110156111bf57600080fd5b505161122c57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f4e6f742066726f6d20766f74696e670000000000000000000000000000000000604482015290519081900360640190fd5b620186a081111561129e57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f494e56414c49445f50524f544f434f4c5f464545000000000000000000000000604482015290519081900360640190fd5b6002819055604080517f70726f746f636f6c46656500000000000000000000000000000000000000000081526020810183905281517f22ea5a9dcc7fb5bc447fcb472061adc51caa147724a67a6695d49a9dff162509929181900390910190a150565b600054610100900473ffffffffffffffffffffffffffffffffffffffff1690565b60008173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16106113be57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f41646472657373206d75737420626520736f7274656400000000000000000000604482015290519081900360640190fd5b5073ffffffffffffffffffffffffffffffffffffffff80831660009081526008602090815260408083208585168452909152902054168061146057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f4e6f206f7261636c6520666f756e640000000000000000000000000000000000604482015290519081900360640190fd5b92915050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60096020526000908152604090205460ff1681565b60025481565b60005460ff1681565b7f000000000000000000000000000000000000000000000000000000000000000081565b60008173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561156f57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f4944454e544943414c5f41444452455353455300000000000000000000000000604482015290519081900360640190fd5b6000808373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16106115ac5783856115af565b84845b909250905073ffffffffffffffffffffffffffffffffffffffff821661163657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f5a45524f5f414444524553530000000000000000000000000000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff8083166000908152600460209081526040808320848616845282528083205481517fffffffffffffffffffffffffffffffffffffffff000000000000000000000000606089811b82168387015288811b909116603483015260488083019390935283518083039093018352606882018452825192850192909220608c8083018290528451808403909101815260ac909201845293810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fed25a5a20000000000000000000000000000000000000000000000000000000017815292518151949692947f0000000000000000000000000000000000000000000000000000000000000000909316939192909182918083835b6020831061179957805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0909201916020918201910161175c565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d80600081146117f9576040519150601f19603f3d011682016040523d82523d6000602084013e6117fe565b606091505b50915091508161186f57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f4661696c656420746f2063726561746520706169720000000000000000000000604482015290519081900360640190fd5b80806020019051602081101561188457600080fd5b5051604080517f485cc95500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8881166004830152878116602483015291519298509088169163485cc9559160448082019260009290919082900301818387803b15801561190257600080fd5b505af1158015611916573d6000803e3d6000fd5b50505050600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020869080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020869080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600680549050600560008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506006869080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167f02a388add05de2fde7b4703b9f0156d3da7cb4628368d9f98e0c1671698bbfa688600460008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050600680549050604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001838152602001828152602001935050505060405180910390a3505050505092915050565b604080517fa3818b3b000000000000000000000000000000000000000000000000000000008152336004820152905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169163a3818b3b916024808301926020929190829003018186803b158015611d3c57600080fd5b505afa158015611d50573d6000803e3d6000fd5b505050506040513d6020811015611d6657600080fd5b5051611dd357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f4e6f742066726f6d20766f74696e670000000000000000000000000000000000604482015290519081900360640190fd5b600380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83161790819055604080517f70726f746f636f6c466565546f00000000000000000000000000000000000000815260609290921b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000016602083015280517f22ea5a9dcc7fb5bc447fcb472061adc51caa147724a67a6695d49a9dff1625099281900390910190a150565b60075473ffffffffffffffffffffffffffffffffffffffff1681565b60065460009015801590611460575073ffffffffffffffffffffffffffffffffffffffff8216600081815260056020526040902054600680549091908110611ef857fe5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff161492915050565b6007547f0000000000000000000000000000000000000000000000000000000000000000917f00000000000000000000000000000000000000000000000000000000000000009173ffffffffffffffffffffffffffffffffffffffff16907f000000000000000000000000000000000000000000000000000000000000000090565b60035473ffffffffffffffffffffffffffffffffffffffff1681565b7f000000000000000000000000000000000000000000000000000000000000000081565b611feb6127cb565b600054610100900473ffffffffffffffffffffffffffffffffffffffff90811691161461207957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff81166120e5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806127d06026913960400191505060405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff8085169361010090930416917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff909216610100027fffffffffffffffffffffff0000000000000000000000000000000000000000ff909216919091179055565b3373ffffffffffffffffffffffffffffffffffffffff167f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663f851a4406040518163ffffffff1660e01b815260040160206040518083038186803b1580156121f957600080fd5b505afa15801561220d573d6000803e3d6000fd5b505050506040513d602081101561222357600080fd5b505173ffffffffffffffffffffffffffffffffffffffff1614806122fb5750604080517fa3818b3b000000000000000000000000000000000000000000000000000000008152336004820152905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169163a3818b3b916024808301926020929190829003018186803b1580156122ce57600080fd5b505afa1580156122e2573d6000803e3d6000fd5b505050506040513d60208110156122f857600080fd5b50515b612350576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806127f66021913960400191505060405180910390fd5b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016821515179081905560ff16156123b4576040517f71d46a587e8ae446d9442949c41f57019d17b5b4f3610941960517c9c230304790600090a16123de565b6040517fb821dc27f036017c075c6746b9e8608a15f78f90a8c03acbce13e9438ca76e1b90600090a15b50565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260046020908152604080832093909416825291909152205490565b604080517fa3818b3b000000000000000000000000000000000000000000000000000000008152336004820152905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169163a3818b3b916024808301926020929190829003018186803b1580156124a557600080fd5b505afa1580156124b9573d6000803e3d6000fd5b505050506040513d60208110156124cf57600080fd5b505161253c57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f4e6f742066726f6d20766f74696e670000000000000000000000000000000000604482015290519081900360640190fd5b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16106125d657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f496e76616c696420616464726573732070616972206f72646572000000000000604482015290519081900360640190fd5b604080517f88462c8d00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff858116600483015284811660248301529151918316916388462c8d91604480820192602092909190829003018186803b15801561264e57600080fd5b505afa158015612662573d6000803e3d6000fd5b505050506040513d602081101561267857600080fd5b50516126e557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f50616972206e6f7420737570706f72746564206279206f7261636c6500000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff808416600081815260086020818152604080842088871680865290835281852080549789167fffffffffffffffffffffffff00000000000000000000000000000000000000009889168117909155938352818520868652835281852080549097168417909655828452600982529283902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055825191825291517fb4af261139740f02bdfd600c83590a7b42e71fd7798891b2b39cc7203e3de147929181900390910190a3505050565b339056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573734e6f742066726f6d2073687574646f776e2061646d696e206f7220766f74696e67526573747269637465644c697175696469747950726f766964657220616c726561647920736574a264697066735822122075fde2906b94e9e1a2bf4b458cb2d776205aed14d0d2c2d9b2a55e16f59af00e64736f6c634300060b0033"
}