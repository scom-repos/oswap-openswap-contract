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
                    "name": "_pairCreator",
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
                    "internalType": "uint256",
                    "name": "_feePerDelegator",
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
                    "name": "oracle",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "score",
                    "type": "uint256"
                }
            ],
            "name": "OracleScores",
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
                    "internalType": "bool",
                    "name": "allow",
                    "type": "bool"
                }
            ],
            "name": "Whitelisted",
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
            "inputs": [],
            "name": "allWhiteListed",
            "outputs": [
                {
                    "internalType": "address[]",
                    "name": "list",
                    "type": "address[]"
                },
                {
                    "internalType": "bool[]",
                    "name": "allowed",
                    "type": "bool[]"
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
            "name": "feePerDelegator",
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
                },
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
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
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "isWhitelisted",
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
            "name": "minLotSize",
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
            "name": "minOracleScore",
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
            "name": "oracleLiquidityProvider",
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
            "name": "oracleScores",
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
            "name": "securityScoreOracle",
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
                    "name": "_feePerDelegator",
                    "type": "uint256"
                }
            ],
            "name": "setFeePerDelegator",
            "outputs": [],
            "stateMutability": "nonpayable",
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
                    "name": "token",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_minLotSize",
                    "type": "uint256"
                }
            ],
            "name": "setMinLotSize",
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
                    "internalType": "address",
                    "name": "_oracleRouter",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_oracleLiquidityProvider",
                    "type": "address"
                }
            ],
            "name": "setOracleLiquidityProvider",
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
                    "internalType": "address",
                    "name": "_securityScoreOracle",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_minOracleScore",
                    "type": "uint256"
                }
            ],
            "name": "setSecurityScoreOracle",
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
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_who",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "_allow",
                    "type": "bool"
                }
            ],
            "name": "setWhiteList",
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
            "inputs": [
                {
                    "internalType": "address",
                    "name": "oracle",
                    "type": "address"
                }
            ],
            "name": "updateOracleScore",
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
            "name": "whitelisted",
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
            "name": "whitelistedInv",
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
            "name": "whitelistedLength",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ],
    "bytecode": "60a06040523480156200001157600080fd5b506040516200380438038062003804833981810160405260c08110156200003757600080fd5b5080516020820151604083015160608085015160808087015160a0909701519286901b6001600160601b031916905260008054600160ff1990911617610100600160a81b0319166101006001600160a01b038716021781559495939492939092909190620000a4620002c7565b600380546001600160a01b0319166001600160a01b038316908117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350620186a08411156200013f576040805162461bcd60e51b8152602060048201526011602482015270494e56414c49445f54524144455f46454560781b604482015290519081900360640190fd5b620186a083111562000198576040805162461bcd60e51b815260206004820152601460248201527f494e56414c49445f50524f544f434f4c5f464545000000000000000000000000604482015290519081900360640190fd5b600584905560068390556007829055600880546001600160a01b0319166001600160a01b0383161790556040805167747261646546656560c01b8152602081018690528151600080516020620037e4833981519152929181900390910190a1600654604080516a70726f746f636f6c46656560a81b815260208101929092528051600080516020620037e48339815191529281900390910190a1600754604080516e3332b2a832b92232b632b3b0ba37b960891b815260208101929092528051600080516020620037e48339815191529281900390910190a1600854604080516c70726f746f636f6c466565546f60981b815260609290921b6001600160601b03191660208301528051600080516020620037e48339815191529281900390910190a1505050505050620002cb565b3390565b60805160601c6134bf6200032560003980610a785280610c705280610e7c528061154752806115af528061170852806117fb5280611ddd5280611fd55280612a5a5280612def5280612ee252806130af52506134bf6000f3fe608060405234801561001057600080fd5b50600436106102d35760003560e01c8063715018a611610186578063b8f7a665116100e3578063e6a4390511610097578063f5ee334811610071578063f5ee334814610931578063f98126f914610950578063fc9e3c1414610983576102d3565b8063e6a43905146108bb578063ef369252146108f6578063f2fde38b146108fe576102d3565b8063c9c65396116100c8578063c9c6539614610845578063ddf2d4f414610880578063e0e6799f14610888576102d3565b8063b8f7a66514610835578063c538b5d61461083d576102d3565b80638da5cb5b1161013a57806396c669491161011f57806396c66949146107f2578063a97e5c93146107fa578063b0e21e8a1461082d576102d3565b80638da5cb5b146107af57806395277f39146107b7576102d3565b806376d3d5471161016b57806376d3d5471461074f578063787dce3d146107575780638d14e12714610774576102d3565b8063715018a61461070c5780637587044a14610714576102d3565b806341f4368211610234578063574f2ba3116101e85780635aa6e675116101cd5780635aa6e675146106ac578063636b0d1a146106b45780636883618a146106d1576102d3565b8063574f2ba31461067157806358ced00414610679576102d3565b80634fe2b2b3116102195780634fe2b2b3146105fb578063506a42851461062e57806352a03c0314610636576102d3565b806341f43682146105275780634fc4cc9b146105c8576102d3565b80632288f2ff1161028b5780633997624711610270578063399762471461047e5780633af32abf146104c35780633d4efe091461050a576102d3565b80632288f2ff1461042b57806324bcdfbd14610464576102d3565b806310603023116102bc578063106030231461038f578063130a0b40146103ac5780631e3dd18b146103e5576102d3565b8063069d188f146102d85780630c14458114610348575b600080fd5b610313600480360360408110156102ee57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602001351661098b565b6040805173ffffffffffffffffffffffffffffffffffffffff9094168452602084019290925282820152519081900360600190f35b61038d6004803603606081101561035e57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602081013582169160409091013516610a22565b005b61038d600480360360208110156103a557600080fd5b5035610a32565b61038d600480360360408110156103c257600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610c2a565b610402600480360360208110156103fb57600080fd5b5035610e02565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b61038d6004803603604081101561044157600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610e36565b61046c61109a565b60408051918252519081900360200190f35b61038d6004803603606081101561049457600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020810135821691604090910135166110a0565b6104f6600480360360208110156104d957600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166111d5565b604080519115158252519081900360200190f35b6104026004803603602081101561052057600080fd5b50356111ea565b61052f6111f7565b604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b8381101561057357818101518382015260200161055b565b50505050905001838103825284818151815260200191508051906020019060200280838360005b838110156105b257818101518382015260200161059a565b5050505090500194505050505060405180910390f35b61038d600480360360208110156105de57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661132e565b61046c6004803603602081101561061157600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166114cc565b6104026114de565b6104026004803603604081101561064c57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160200135166114fa565b61046c61152d565b61046c6004803603602081101561068f57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16611533565b610402611545565b61038d600480360360208110156106ca57600080fd5b5035611569565b61038d600480360360408110156106e757600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813516906020013515156116ef565b61038d6119dc565b61038d6004803603604081101561072a57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020013516611adc565b61046c611d91565b61038d6004803603602081101561076d57600080fd5b5035611d97565b61038d6004803603604081101561078a57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001351515611f8f565b610402612228565b610402600480360360408110156107cd57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020013516612244565b61046c612420565b6104f66004803603602081101561081057600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16612426565b61046c61243b565b6104f6612441565b61040261244a565b6104026004803603604081101561085b57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602001351661246b565b61046c612a0e565b61038d6004803603602081101561089e57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16612a14565b610402600480360360408110156108d157600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020013516612bfc565b610402612c2f565b61038d6004803603602081101561091457600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16612c4b565b61038d6004803603602081101561094757600080fd5b50351515612dd6565b61046c6004803603602081101561096657600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661303b565b61040261304d565b600080548190819060ff16610a0157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f474c4f42414c4c59205041555345440000000000000000000000000000000000604482015290519081900360640190fd5b6000610a0d8686612244565b60055460065491955093509150509250925092565b610a2d838383613069565b505050565b604080517fa3818b3b000000000000000000000000000000000000000000000000000000008152336004820152905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169163a3818b3b916024808301926020929190829003018186803b158015610abe57600080fd5b505afa158015610ad2573d6000803e3d6000fd5b505050506040513d6020811015610ae857600080fd5b5051610b5557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f4e6f742066726f6d20766f74696e670000000000000000000000000000000000604482015290519081900360640190fd5b620186a0811115610bc757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f494e56414c49445f54524144455f464545000000000000000000000000000000604482015290519081900360640190fd5b6005819055604080517f747261646546656500000000000000000000000000000000000000000000000081526020810183905281517f22ea5a9dcc7fb5bc447fcb472061adc51caa147724a67a6695d49a9dff162509929181900390910190a150565b604080517fa3818b3b000000000000000000000000000000000000000000000000000000008152336004820152905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169163a3818b3b916024808301926020929190829003018186803b158015610cb657600080fd5b505afa158015610cca573d6000803e3d6000fd5b505050506040513d6020811015610ce057600080fd5b5051610d4d57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f4e6f742066726f6d20766f74696e670000000000000000000000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff82166000908152600c602090815260409182902083905581517f6d696e4c6f7453697a65000000000000000000000000000000000000000000008152606085811b7fffffffffffffffffffffffffffffffffffffffff000000000000000000000000169282019290925280830184905291517f410bdf2fedecd51e396bd4e5ca41880366c00ff01f4df34d7cc46faef60eb7069281900390910190a15050565b60028181548110610e0f57fe5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16905081565b604080517fa3818b3b000000000000000000000000000000000000000000000000000000008152336004820152905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169163a3818b3b916024808301926020929190829003018186803b158015610ec257600080fd5b505afa158015610ed6573d6000803e3d6000fd5b505050506040513d6020811015610eec57600080fd5b5051610f5957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f4e6f742066726f6d20766f74696e670000000000000000000000000000000000604482015290519081900360640190fd5b6064811115610fc957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f496e76616c69642073656375726974792073636f726500000000000000000000604482015290519081900360640190fd5b600980547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff84161790819055600a829055604080517f736563757269747953636f72654f7261636c65000000000000000000000000008152606092831b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000016602082015280820184905290517f410bdf2fedecd51e396bd4e5ca41880366c00ff01f4df34d7cc46faef60eb706929181900390910190a15050565b60055481565b73ffffffffffffffffffffffffffffffffffffffff8381166000908152600b602090815260408083208685168452909152902054161561114157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f6f7261636c6520616c7265616479207365740000000000000000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff81166000908152600d602052604090205460ff16610a2257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f6f7261636c65206e6f74207365656e0000000000000000000000000000000000604482015290519081900360640190fd5b60116020526000908152604090205460ff1681565b600f8181548110610e0f57fe5b606080600f80548060200260200160405190810160405280929190818152602001828054801561125d57602002820191906000526020600020905b815473ffffffffffffffffffffffffffffffffffffffff168152600190910190602001808311611232575b505050505091506000825190508067ffffffffffffffff8111801561128157600080fd5b506040519080825280602002602001820160405280156112ab578160200160208202803683370190505b50915060005b818110156113285760116000600f83815481106112ca57fe5b600091825260208083209091015473ffffffffffffffffffffffffffffffffffffffff168352820192909252604001902054835160ff9091169084908390811061131057fe5b911515602092830291909101909101526001016112b1565b50509091565b73ffffffffffffffffffffffffffffffffffffffff81166000908152600d602052604090205460ff166113c257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f4f7261636c652041646170746f72206e6f7420666f756e640000000000000000604482015290519081900360640190fd5b600954604080517f52d3824300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8481166004830152915160009392909216916352d3824391602480820192602092909190829003018186803b15801561143957600080fd5b505afa15801561144d573d6000803e3d6000fd5b505050506040513d602081101561146357600080fd5b505173ffffffffffffffffffffffffffffffffffffffff83166000818152600e60209081526040918290208490558151848152915193945091927f6aebc546a88b3e78f39de087a95a99cadce9673bfa36aced1a7d77d2fd3c5f53929181900390910190a25050565b60106020526000908152604090205481565b60045473ffffffffffffffffffffffffffffffffffffffff1681565b600b60209081526000928352604080842090915290825290205473ffffffffffffffffffffffffffffffffffffffff1681565b60025490565b600e6020526000908152604090205481565b7f000000000000000000000000000000000000000000000000000000000000000081565b604080517fa3818b3b000000000000000000000000000000000000000000000000000000008152336004820152905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169163a3818b3b916024808301926020929190829003018186803b1580156115f557600080fd5b505afa158015611609573d6000803e3d6000fd5b505050506040513d602081101561161f57600080fd5b505161168c57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f4e6f742066726f6d20766f74696e670000000000000000000000000000000000604482015290519081900360640190fd5b6007819055604080517f66656550657244656c656761746f72000000000000000000000000000000000081526020810183905281517f22ea5a9dcc7fb5bc447fcb472061adc51caa147724a67a6695d49a9dff162509929181900390910190a150565b3373ffffffffffffffffffffffffffffffffffffffff167f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663f851a4406040518163ffffffff1660e01b815260040160206040518083038186803b15801561176c57600080fd5b505afa158015611780573d6000803e3d6000fd5b505050506040513d602081101561179657600080fd5b505173ffffffffffffffffffffffffffffffffffffffff16148061186e5750604080517fa3818b3b000000000000000000000000000000000000000000000000000000008152336004820152905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169163a3818b3b916024808301926020929190829003018186803b15801561184157600080fd5b505afa158015611855573d6000803e3d6000fd5b505050506040513d602081101561186b57600080fd5b50515b6118c3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806134696021913960400191505060405180910390fd5b604080517ff5ee33480000000000000000000000000000000000000000000000000000000081528215156004820152905173ffffffffffffffffffffffffffffffffffffffff84169163f5ee334891602480830192600092919082900301818387803b15801561193257600080fd5b505af1158015611946573d6000803e3d6000fd5b5050505080156119965760405173ffffffffffffffffffffffffffffffffffffffff8316907fc96ebf6dcdf5c5e56ad8961009b9d49aa6f2d53d5ffe374048f1d603e3b2908a90600090a26119d8565b60405173ffffffffffffffffffffffffffffffffffffffff8316907f7dc5983a5f99179c76b5bbff56fcf9e8373f1a7078dcef4537a5176b333c2bfe90600090a25b5050565b6119e461341b565b60035473ffffffffffffffffffffffffffffffffffffffff908116911614611a6d57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b60035460405160009173ffffffffffffffffffffffffffffffffffffffff16907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600380547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b611ae461341b565b60035473ffffffffffffffffffffffffffffffffffffffff908116911614611b6d57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b60045473ffffffffffffffffffffffffffffffffffffffff1615611bdc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806134466023913960400191505060405180910390fd5b600480547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8316179055600f541580611c80575073ffffffffffffffffffffffffffffffffffffffff8216600081815260106020526040902054600f80549091908110611c5b57fe5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff1614155b15611d0757600f805473ffffffffffffffffffffffffffffffffffffffff84166000818152601060205260408120839055600183018455929092527f8d1108e10bcb7c27dddfc02ed9d693a074039d026cf4ea4240b40f7d581ac8020180547fffffffffffffffffffffffff00000000000000000000000000000000000000001690911790555b73ffffffffffffffffffffffffffffffffffffffff821660008181526011602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001908117909155825190815291517fa54714518c5d275fdcd3d2a461e4858e4e8cb04fb93cd0bca9d6d34115f264409281900390910190a25050565b600a5481565b604080517fa3818b3b000000000000000000000000000000000000000000000000000000008152336004820152905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169163a3818b3b916024808301926020929190829003018186803b158015611e2357600080fd5b505afa158015611e37573d6000803e3d6000fd5b505050506040513d6020811015611e4d57600080fd5b5051611eba57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f4e6f742066726f6d20766f74696e670000000000000000000000000000000000604482015290519081900360640190fd5b620186a0811115611f2c57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f494e56414c49445f50524f544f434f4c5f464545000000000000000000000000604482015290519081900360640190fd5b6006819055604080517f70726f746f636f6c46656500000000000000000000000000000000000000000081526020810183905281517f22ea5a9dcc7fb5bc447fcb472061adc51caa147724a67a6695d49a9dff162509929181900390910190a150565b604080517fa3818b3b000000000000000000000000000000000000000000000000000000008152336004820152905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169163a3818b3b916024808301926020929190829003018186803b15801561201b57600080fd5b505afa15801561202f573d6000803e3d6000fd5b505050506040513d602081101561204557600080fd5b50516120b257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f4e6f742066726f6d20766f74696e670000000000000000000000000000000000604482015290519081900360640190fd5b600f541580612116575073ffffffffffffffffffffffffffffffffffffffff8216600081815260106020526040902054600f805490919081106120f157fe5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff1614155b1561219d57600f805473ffffffffffffffffffffffffffffffffffffffff84166000818152601060205260408120839055600183018455929092527f8d1108e10bcb7c27dddfc02ed9d693a074039d026cf4ea4240b40f7d581ac8020180547fffffffffffffffffffffffff00000000000000000000000000000000000000001690911790555b73ffffffffffffffffffffffffffffffffffffffff821660008181526011602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016851515908117909155825190815291517fa54714518c5d275fdcd3d2a461e4858e4e8cb04fb93cd0bca9d6d34115f264409281900390910190a25050565b60035473ffffffffffffffffffffffffffffffffffffffff1690565b60008173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16106122e057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f41646472657373206d75737420626520736f7274656400000000000000000000604482015290519081900360640190fd5b5073ffffffffffffffffffffffffffffffffffffffff8083166000908152600b602090815260408083208585168452909152902054168061238257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f4e6f206f7261636c6520666f756e640000000000000000000000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff81166000908152600e6020526040902054600a5481101561241957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f4f7261636c652073636f726520746f6f206c6f77000000000000000000000000604482015290519081900360640190fd5b5092915050565b60075481565b600d6020526000908152604090205460ff1681565b60065481565b60005460ff1681565b600054610100900473ffffffffffffffffffffffffffffffffffffffff1681565b60008173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561250857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f4944454e544943414c5f41444452455353455300000000000000000000000000604482015290519081900360640190fd5b6000808373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1610612545578385612548565b84845b909250905073ffffffffffffffffffffffffffffffffffffffff82166125cf57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f5a45524f5f414444524553530000000000000000000000000000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff82811660009081526001602090815260408083208585168452909152902054161561267057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f504149525f455849535453000000000000000000000000000000000000000000604482015290519081900360640190fd5b604080517fffffffffffffffffffffffffffffffffffffffff000000000000000000000000606085811b821660208085019190915285821b90921660348401528351602881850301815260488401855280519083012060008054606c80870184905287518088039091018152608c909601875293850180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fed25a5a20000000000000000000000000000000000000000000000000000000017815295518551929691959394610100900473ffffffffffffffffffffffffffffffffffffffff169392909182918083835b6020831061279657805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101612759565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d80600081146127f6576040519150601f19603f3d011682016040523d82523d6000602084013e6127fb565b606091505b50915091508161286c57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f4661696c656420746f2063726561746520706169720000000000000000000000604482015290519081900360640190fd5b80806020019051602081101561288157600080fd5b5051604080517f485cc95500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8881166004830152878116602483015291519298509088169163485cc9559160448082019260009290919082900301818387803b1580156128ff57600080fd5b505af1158015612913573d6000803e3d6000fd5b5050505073ffffffffffffffffffffffffffffffffffffffff85811660008181526001602081815260408084208a87168086529083528185208054978e167fffffffffffffffffffffffff0000000000000000000000000000000000000000988916811790915584845282862087875284528286208054891682179055600280549586018155958690527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace90940180549097168417909655925483519283529082015281517f0d3648bd0f6ba80134a33ba9275ac585d9d315f0ad8355cddefde31afa28d0e9929181900390910190a3505050505092915050565b600f5490565b604080517fa3818b3b000000000000000000000000000000000000000000000000000000008152336004820152905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169163a3818b3b916024808301926020929190829003018186803b158015612aa057600080fd5b505afa158015612ab4573d6000803e3d6000fd5b505050506040513d6020811015612aca57600080fd5b5051612b3757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f4e6f742066726f6d20766f74696e670000000000000000000000000000000000604482015290519081900360640190fd5b600880547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83161790819055604080517f70726f746f636f6c466565546f00000000000000000000000000000000000000815260609290921b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000016602083015280517f22ea5a9dcc7fb5bc447fcb472061adc51caa147724a67a6695d49a9dff1625099281900390910190a150565b600160209081526000928352604080842090915290825290205473ffffffffffffffffffffffffffffffffffffffff1681565b60085473ffffffffffffffffffffffffffffffffffffffff1681565b612c5361341b565b60035473ffffffffffffffffffffffffffffffffffffffff908116911614612cdc57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff8116612d48576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806134206026913960400191505060405180910390fd5b60035460405173ffffffffffffffffffffffffffffffffffffffff8084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3600380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b3373ffffffffffffffffffffffffffffffffffffffff167f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663f851a4406040518163ffffffff1660e01b815260040160206040518083038186803b158015612e5357600080fd5b505afa158015612e67573d6000803e3d6000fd5b505050506040513d6020811015612e7d57600080fd5b505173ffffffffffffffffffffffffffffffffffffffff161480612f555750604080517fa3818b3b000000000000000000000000000000000000000000000000000000008152336004820152905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169163a3818b3b916024808301926020929190829003018186803b158015612f2857600080fd5b505afa158015612f3c573d6000803e3d6000fd5b505050506040513d6020811015612f5257600080fd5b50515b612faa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806134696021913960400191505060405180910390fd5b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016821515179081905560ff161561300e576040517f71d46a587e8ae446d9442949c41f57019d17b5b4f3610941960517c9c230304790600090a1613038565b6040517fb821dc27f036017c075c6746b9e8608a15f78f90a8c03acbce13e9438ca76e1b90600090a15b50565b600c6020526000908152604090205481565b60095473ffffffffffffffffffffffffffffffffffffffff1681565b604080517fa3818b3b000000000000000000000000000000000000000000000000000000008152336004820152905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169163a3818b3b916024808301926020929190829003018186803b1580156130f557600080fd5b505afa158015613109573d6000803e3d6000fd5b505050506040513d602081101561311f57600080fd5b505161318c57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f4e6f742066726f6d20766f74696e670000000000000000000000000000000000604482015290519081900360640190fd5b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161061322657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f496e76616c696420616464726573732070616972206f72646572000000000000604482015290519081900360640190fd5b604080517f88462c8d00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff858116600483015284811660248301529151918316916388462c8d91604480820192602092909190829003018186803b15801561329e57600080fd5b505afa1580156132b2573d6000803e3d6000fd5b505050506040513d60208110156132c857600080fd5b505161333557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f50616972206e6f7420737570706f72746564206279206f7261636c6500000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff8084166000818152600b6020818152604080842088871680865290835281852080549789167fffffffffffffffffffffffff00000000000000000000000000000000000000009889168117909155938352818520868652835281852080549097168417909655828452600d82529283902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055825191825291517fb4af261139740f02bdfd600c83590a7b42e71fd7798891b2b39cc7203e3de147929181900390910190a3505050565b339056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573734f7261636c654c697175696469747950726f766964657220616c7265616479207365744e6f742066726f6d2073687574646f776e2061646d696e206f7220766f74696e67a2646970667358221220b227adb53a747a3d8de1ccb172b966d0ba3a548f54d8f899a33e3107bae807be64736f6c634300060b003322ea5a9dcc7fb5bc447fcb472061adc51caa147724a67a6695d49a9dff162509"
}