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
                    "name": "_oracleFactory",
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
                    "internalType": "uint256[]",
                    "name": "_stakeAmount",
                    "type": "uint256[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "_liquidityProviderShare",
                    "type": "uint256[]"
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
            "name": "checkAndGetSwapParams",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_tradeFee",
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
            "name": "getAllLiquidityProviderShare",
            "outputs": [
                {
                    "internalType": "uint256[]",
                    "name": "_stakeAmount",
                    "type": "uint256[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "_liquidityProviderShare",
                    "type": "uint256[]"
                }
            ],
            "stateMutability": "view",
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
                    "name": "_rangeLiquidityProvider",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_oracleFactory",
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
                    "name": "stake",
                    "type": "uint256"
                }
            ],
            "name": "getLiquidityProviderShare",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_liquidityProviderShare",
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
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "liquidityProviderShare",
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
            "name": "oracleFactory",
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
            "name": "rangeLiquidityProvider",
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
                    "internalType": "uint256[]",
                    "name": "_stakeAmount",
                    "type": "uint256[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "_liquidityProviderShare",
                    "type": "uint256[]"
                }
            ],
            "name": "setLiquidityProviderShare",
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
                    "name": "_rangeLiquidityProvider",
                    "type": "address"
                }
            ],
            "name": "setRangeLiquidityProvider",
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
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "stakeAmount",
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
        }
    ],
    "bytecode": "60c06040523480156200001157600080fd5b50604051620027b0380380620027b0833981810160405260e08110156200003757600080fd5b81516020830151604080850151606086015160808701805193519597949692959194919392820192846401000000008211156200007357600080fd5b9083019060208201858111156200008957600080fd5b8251866020820283011164010000000082111715620000a757600080fd5b82525081516020918201928201910280838360005b83811015620000d6578181015183820152602001620000bc565b50505050905001604052602001805160405193929190846401000000008211156200010057600080fd5b9083019060208201858111156200011657600080fd5b82518660208202830111640100000000821117156200013457600080fd5b82525081516020918201928201910280838360005b838110156200016357818101518382015260200162000149565b50505050919091016040525060200151606089901b6001600160601b03191660805260008054600160ff1990911617610100600160a81b0319166101006001600160a01b038a16021781559092509050620001bd62000267565b600380546001600160a01b0319166001600160a01b038316908117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3506001600160601b0319606087901b1660a05262000231846001600160e01b036200026c16565b6200024683836001600160e01b03620002f616565b6200025a816001600160e01b03620004f616565b50505050505050620005ca565b335b90565b620186a0811115620002b9576040805162461bcd60e51b8152602060048201526011602482015270494e56414c49445f54524144455f46454560781b604482015290519081900360640190fd5b60058190556040805167747261646546656560c01b815260208101839052815160008051602062002790833981519152929181900390910190a150565b81518151811462000341576040805162461bcd60e51b815260206004820152601060248201526f0988a9c8ea890409c9ea8409a82a886960831b604482015290519081900360640190fd5b8251620003569060069060208601906200055d565b5081516200036c9060079060208501906200055d565b5060005b81811015620004f057620186a08382815181106200038a57fe5b60200260200101511115620003e6576040805162461bcd60e51b815260206004820152601760248201527f494e56414c4944204c4951554944495459205348415245000000000000000000604482015290519081900360640190fd5b80156200045857838181518110620003fa57fe5b60200260200101518460018303815181106200041257fe5b602002602001015110620004585760405162461bcd60e51b81526004018080602001828103825260238152602001806200276d6023913960400191505060405180910390fd5b7f410bdf2fedecd51e396bd4e5ca41880366c00ff01f4df34d7cc46faef60eb7068482815181106200048657fe5b602002602001015160001b8483815181106200049e57fe5b602090810291909101810151604080517f6c697175696469747950726f76696465725368617265000000000000000000008152928301939093528183015290519081900360600190a160010162000370565b50505050565b600880546001600160a01b0319166001600160a01b0383161790819055604080516c70726f746f636f6c466565546f60981b815260609290921b6001600160601b03191660208301528051600080516020620027908339815191529281900390910190a150565b8280548282559060005260206000209081019282156200059b579160200282015b828111156200059b5782518255916020019190600101906200057e565b50620005a9929150620005ad565b5090565b6200026991905b80821115620005a95760008155600101620005b4565b60805160601c60a05160601c61214c6200062160003980610ecb528061177352508061063f52806108f05280610a495280610a845280610b77528061161d528061173b52806119f75280611aea525061214c6000f3fe608060405234801561001057600080fd5b50600436106101ae5760003560e01c80638da5cb5b116100ee578063e0e6799f11610097578063ed3b638c11610071578063ed3b638c14610582578063ef3692521461059f578063f2fde38b146105a7578063f5ee3348146105da576101ae565b8063e0e6799f146104d4578063e6a4390514610507578063ea2ed2c114610542576101ae565b8063c7f7fb90116100c8578063c7f7fb901461045e578063c9c6539614610466578063e0dd38d1146104a1576101ae565b80638da5cb5b14610432578063b8f7a6651461043a578063c538b5d614610456576101ae565b8063502180481161015b5780636883618a116101355780636883618a146103b55780636c57f602146103f0578063715018a61461040d5780638519573e14610415576101ae565b806350218048146102e3578063574f2ba3146103a55780635aa6e675146103ad576101ae565b80632c6ced381161018c5780632c6ced3814610232578063420328561461023a5780634af4bde814610242576101ae565b806310603023146101b35780631e3dd18b146101d257806324bcdfbd14610218575b600080fd5b6101d0600480360360208110156101c957600080fd5b50356105f9565b005b6101ef600480360360208110156101e857600080fd5b5035610728565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b61022061075c565b60408051918252519081900360200190f35b6101ef610762565b61022061077e565b61024a6107f7565b604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b8381101561028e578181015183820152602001610276565b50505050905001838103825284818151815260200191508051906020019060200280838360005b838110156102cd5781810151838201526020016102b5565b5050505090500194505050505060405180910390f35b6101d0600480360360408110156102f957600080fd5b81019060208101813564010000000081111561031457600080fd5b82018360208201111561032657600080fd5b8035906020019184602083028401116401000000008311171561034857600080fd5b91939092909160208101903564010000000081111561036657600080fd5b82018360208201111561037857600080fd5b8035906020019184602083028401116401000000008311171561039a57600080fd5b5090925090506108aa565b610220610a40565b6101ef610a47565b6101d0600480360360408110156103cb57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001351515610a6b565b6102206004803603602081101561040657600080fd5b5035610d58565b6101d0610d76565b6102206004803603602081101561042b57600080fd5b5035610e76565b6101ef610e83565b610442610e9f565b604080519115158252519081900360200190f35b6101ef610ea8565b6101ef610ec9565b6101ef6004803603604081101561047c57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020013516610eed565b6101d0600480360360208110156104b757600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16611490565b6101d0600480360360208110156104ea57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166115d7565b6101ef6004803603604081101561051d57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020013516611703565b61054a611736565b6040805173ffffffffffffffffffffffffffffffffffffffff9485168152928416602084015292168183015290519081900360600190f35b6102206004803603602081101561059857600080fd5b5035611797565b6101ef611837565b6101d0600480360360208110156105bd57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16611853565b6101d0600480360360208110156105f057600080fd5b503515156119de565b604080517fa3818b3b000000000000000000000000000000000000000000000000000000008152336004820152905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169163a3818b3b916024808301926020929190829003018186803b15801561068557600080fd5b505afa158015610699573d6000803e3d6000fd5b505050506040513d60208110156106af57600080fd5b505161071c57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f4e6f742066726f6d20766f74696e670000000000000000000000000000000000604482015290519081900360640190fd5b61072581611c42565b50565b6002818154811061073557fe5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16905081565b60055481565b60045473ffffffffffffffffffffffffffffffffffffffff1681565b6000805460ff166107f057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f474c4f42414c4c59205041555345440000000000000000000000000000000000604482015290519081900360640190fd5b5060055490565b606080600660078180548060200260200160405190810160405280929190818152602001828054801561084957602002820191906000526020600020905b815481526020019060010190808311610835575b505050505091508080548060200260200160405190810160405280929190818152602001828054801561089b57602002820191906000526020600020905b815481526020019060010190808311610887575b50505050509050915091509091565b604080517fa3818b3b000000000000000000000000000000000000000000000000000000008152336004820152905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169163a3818b3b916024808301926020929190829003018186803b15801561093657600080fd5b505afa15801561094a573d6000803e3d6000fd5b505050506040513d602081101561096057600080fd5b50516109cd57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f4e6f742066726f6d20766f74696e670000000000000000000000000000000000604482015290519081900360640190fd5b610a3a84848080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525050604080516020808802828101820190935287825290935087925086918291850190849080828437600092019190915250611d1792505050565b50505050565b6002545b90565b7f000000000000000000000000000000000000000000000000000000000000000081565b3373ffffffffffffffffffffffffffffffffffffffff167f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663f851a4406040518163ffffffff1660e01b815260040160206040518083038186803b158015610ae857600080fd5b505afa158015610afc573d6000803e3d6000fd5b505050506040513d6020811015610b1257600080fd5b505173ffffffffffffffffffffffffffffffffffffffff161480610bea5750604080517fa3818b3b000000000000000000000000000000000000000000000000000000008152336004820152905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169163a3818b3b916024808301926020929190829003018186803b158015610bbd57600080fd5b505afa158015610bd1573d6000803e3d6000fd5b505050506040513d6020811015610be757600080fd5b50515b610c3f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806120f66021913960400191505060405180910390fd5b604080517ff5ee33480000000000000000000000000000000000000000000000000000000081528215156004820152905173ffffffffffffffffffffffffffffffffffffffff84169163f5ee334891602480830192600092919082900301818387803b158015610cae57600080fd5b505af1158015610cc2573d6000803e3d6000fd5b505050508015610d125760405173ffffffffffffffffffffffffffffffffffffffff8316907fc96ebf6dcdf5c5e56ad8961009b9d49aa6f2d53d5ffe374048f1d603e3b2908a90600090a2610d54565b60405173ffffffffffffffffffffffffffffffffffffffff8316907f7dc5983a5f99179c76b5bbff56fcf9e8373f1a7078dcef4537a5176b333c2bfe90600090a25b5050565b60068181548110610d6557fe5b600091825260209091200154905081565b610d7e611f5c565b60035473ffffffffffffffffffffffffffffffffffffffff908116911614610e0757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b60035460405160009173ffffffffffffffffffffffffffffffffffffffff16907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600380547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60078181548110610d6557fe5b60035473ffffffffffffffffffffffffffffffffffffffff1690565b60005460ff1681565b600054610100900473ffffffffffffffffffffffffffffffffffffffff1681565b7f000000000000000000000000000000000000000000000000000000000000000081565b60008173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610f8a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f4944454e544943414c5f41444452455353455300000000000000000000000000604482015290519081900360640190fd5b6000808373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1610610fc7578385610fca565b84845b909250905073ffffffffffffffffffffffffffffffffffffffff821661105157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f5a45524f5f414444524553530000000000000000000000000000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff8281166000908152600160209081526040808320858516845290915290205416156110f257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f504149525f455849535453000000000000000000000000000000000000000000604482015290519081900360640190fd5b604080517fffffffffffffffffffffffffffffffffffffffff000000000000000000000000606085811b821660208085019190915285821b90921660348401528351602881850301815260488401855280519083012060008054606c80870184905287518088039091018152608c909601875293850180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fed25a5a20000000000000000000000000000000000000000000000000000000017815295518551929691959394610100900473ffffffffffffffffffffffffffffffffffffffff169392909182918083835b6020831061121857805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe090920191602091820191016111db565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d8060008114611278576040519150601f19603f3d011682016040523d82523d6000602084013e61127d565b606091505b5091509150816112ee57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f4661696c656420746f2063726561746520706169720000000000000000000000604482015290519081900360640190fd5b80806020019051602081101561130357600080fd5b5051604080517f485cc95500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8881166004830152878116602483015291519298509088169163485cc9559160448082019260009290919082900301818387803b15801561138157600080fd5b505af1158015611395573d6000803e3d6000fd5b5050505073ffffffffffffffffffffffffffffffffffffffff85811660008181526001602081815260408084208a87168086529083528185208054978e167fffffffffffffffffffffffff0000000000000000000000000000000000000000988916811790915584845282862087875284528286208054891682179055600280549586018155958690527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace90940180549097168417909655925483519283529082015281517f0d3648bd0f6ba80134a33ba9275ac585d9d315f0ad8355cddefde31afa28d0e9929181900390910190a3505050505092915050565b611498611f5c565b60035473ffffffffffffffffffffffffffffffffffffffff90811691161461152157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b60045473ffffffffffffffffffffffffffffffffffffffff1615611590576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806120ae6022913960400191505060405180910390fd5b600480547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b604080517fa3818b3b000000000000000000000000000000000000000000000000000000008152336004820152905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169163a3818b3b916024808301926020929190829003018186803b15801561166357600080fd5b505afa158015611677573d6000803e3d6000fd5b505050506040513d602081101561168d57600080fd5b50516116fa57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f4e6f742066726f6d20766f74696e670000000000000000000000000000000000604482015290519081900360640190fd5b61072581611f60565b600160209081526000928352604080842090915290825290205473ffffffffffffffffffffffffffffffffffffffff1681565b6004547f00000000000000000000000000000000000000000000000000000000000000009073ffffffffffffffffffffffffffffffffffffffff167f0000000000000000000000000000000000000000000000000000000000000000909192565b6006546000907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81015b8181101561182f5783600682815481106117d757fe5b90600052602060002001541161180857600781815481106117f457fe5b906000526020600020015492505050611832565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016117c1565b50505b919050565b60085473ffffffffffffffffffffffffffffffffffffffff1681565b61185b611f5c565b60035473ffffffffffffffffffffffffffffffffffffffff9081169116146118e457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff8116611950576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806120d06026913960400191505060405180910390fd5b60035460405173ffffffffffffffffffffffffffffffffffffffff8084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3600380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b3373ffffffffffffffffffffffffffffffffffffffff167f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663f851a4406040518163ffffffff1660e01b815260040160206040518083038186803b158015611a5b57600080fd5b505afa158015611a6f573d6000803e3d6000fd5b505050506040513d6020811015611a8557600080fd5b505173ffffffffffffffffffffffffffffffffffffffff161480611b5d5750604080517fa3818b3b000000000000000000000000000000000000000000000000000000008152336004820152905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169163a3818b3b916024808301926020929190829003018186803b158015611b3057600080fd5b505afa158015611b44573d6000803e3d6000fd5b505050506040513d6020811015611b5a57600080fd5b50515b611bb2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806120f66021913960400191505060405180910390fd5b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016821515179081905560ff1615611c16576040517f71d46a587e8ae446d9442949c41f57019d17b5b4f3610941960517c9c230304790600090a1610725565b6040517fb821dc27f036017c075c6746b9e8608a15f78f90a8c03acbce13e9438ca76e1b90600090a150565b620186a0811115611cb457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f494e56414c49445f54524144455f464545000000000000000000000000000000604482015290519081900360640190fd5b6005819055604080517f747261646546656500000000000000000000000000000000000000000000000081526020810183905281517f22ea5a9dcc7fb5bc447fcb472061adc51caa147724a67a6695d49a9dff162509929181900390910190a150565b815181518114611d8857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f4c454e475448204e4f54204d4154434800000000000000000000000000000000604482015290519081900360640190fd5b8251611d9b906006906020860190612025565b508151611daf906007906020850190612025565b5060005b81811015610a3a57620186a0838281518110611dcb57fe5b60200260200101511115611e4057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f494e56414c4944204c4951554944495459205348415245000000000000000000604482015290519081900360640190fd5b8015611ec757838181518110611e5257fe5b6020026020010151846001830381518110611e6957fe5b602002602001015110611ec7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602381526020018061208b6023913960400191505060405180910390fd5b7f410bdf2fedecd51e396bd4e5ca41880366c00ff01f4df34d7cc46faef60eb706848281518110611ef457fe5b602002602001015160001b848381518110611f0b57fe5b602090810291909101810151604080517f6c697175696469747950726f76696465725368617265000000000000000000008152928301939093528183015290519081900360600190a1600101611db3565b3390565b600880547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83161790819055604080517f70726f746f636f6c466565546f00000000000000000000000000000000000000815260609290921b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000016602083015280517f22ea5a9dcc7fb5bc447fcb472061adc51caa147724a67a6695d49a9dff1625099281900390910190a150565b828054828255906000526020600020908101928215612060579160200282015b82811115612060578251825591602001919060010190612045565b5061206c929150612070565b5090565b610a4491905b8082111561206c576000815560010161207656fe5354414b4520414d4f554e54204e4f5420494e20415343454e44494e47204f5244455252616e67654c697175696469747950726f766964657220616c7265616479207365744f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573734e6f742066726f6d2073687574646f776e2061646d696e206f7220766f74696e67a2646970667358221220fee8eb8f330447190e89ac0f89f8627fbe5b9132e20aa2f4c0e927aebdd555b264736f6c634300060b00335354414b4520414d4f554e54204e4f5420494e20415343454e44494e47204f5244455222ea5a9dcc7fb5bc447fcb472061adc51caa147724a67a6695d49a9dff162509"
}