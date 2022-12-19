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
        }
    ],
    "bytecode": "60a060405234801561001057600080fd5b50604051610eb3380380610eb38339818101604052604081101561003357600080fd5b508051602090910151606082901b6001600160601b03191660805260008054600160ff1990911617610100600160a81b0319166101006001600160a01b0393841602178155911690610e0d906100a6903980610242528061027d52806103705280610b6a5280610c5d5250610e0d6000f3fe608060405234801561001057600080fd5b50600436106100a35760003560e01c8063b8f7a66511610076578063c9c653961161005b578063c9c6539614610171578063e6a43905146101ac578063f5ee3348146101e7576100a3565b8063b8f7a6651461014d578063c538b5d614610169576100a3565b80631e3dd18b146100a8578063574f2ba3146100ee5780635aa6e675146101085780636883618a14610110575b600080fd5b6100c5600480360360208110156100be57600080fd5b5035610206565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6100f661023a565b60408051918252519081900360200190f35b6100c5610240565b61014b6004803603604081101561012657600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001351515610264565b005b610155610551565b604080519115158252519081900360200190f35b6100c561055a565b6100c56004803603604081101561018757600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602001351661057b565b6100c5600480360360408110156101c257600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020013516610b1e565b61014b600480360360208110156101fd57600080fd5b50351515610b51565b6002818154811061021357fe5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16905081565b60025490565b7f000000000000000000000000000000000000000000000000000000000000000081565b3373ffffffffffffffffffffffffffffffffffffffff167f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663f851a4406040518163ffffffff1660e01b815260040160206040518083038186803b1580156102e157600080fd5b505afa1580156102f5573d6000803e3d6000fd5b505050506040513d602081101561030b57600080fd5b505173ffffffffffffffffffffffffffffffffffffffff1614806103e35750604080517fa3818b3b000000000000000000000000000000000000000000000000000000008152336004820152905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169163a3818b3b916024808301926020929190829003018186803b1580156103b657600080fd5b505afa1580156103ca573d6000803e3d6000fd5b505050506040513d60208110156103e057600080fd5b50515b610438576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180610db76021913960400191505060405180910390fd5b604080517ff5ee33480000000000000000000000000000000000000000000000000000000081528215156004820152905173ffffffffffffffffffffffffffffffffffffffff84169163f5ee334891602480830192600092919082900301818387803b1580156104a757600080fd5b505af11580156104bb573d6000803e3d6000fd5b50505050801561050b5760405173ffffffffffffffffffffffffffffffffffffffff8316907fc96ebf6dcdf5c5e56ad8961009b9d49aa6f2d53d5ffe374048f1d603e3b2908a90600090a261054d565b60405173ffffffffffffffffffffffffffffffffffffffff8316907f7dc5983a5f99179c76b5bbff56fcf9e8373f1a7078dcef4537a5176b333c2bfe90600090a25b5050565b60005460ff1681565b600054610100900473ffffffffffffffffffffffffffffffffffffffff1681565b60008173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561061857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f4944454e544943414c5f41444452455353455300000000000000000000000000604482015290519081900360640190fd5b6000808373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1610610655578385610658565b84845b909250905073ffffffffffffffffffffffffffffffffffffffff82166106df57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f5a45524f5f414444524553530000000000000000000000000000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff82811660009081526001602090815260408083208585168452909152902054161561078057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f504149525f455849535453000000000000000000000000000000000000000000604482015290519081900360640190fd5b604080517fffffffffffffffffffffffffffffffffffffffff000000000000000000000000606085811b821660208085019190915285821b90921660348401528351602881850301815260488401855280519083012060008054606c80870184905287518088039091018152608c909601875293850180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fed25a5a20000000000000000000000000000000000000000000000000000000017815295518551929691959394610100900473ffffffffffffffffffffffffffffffffffffffff169392909182918083835b602083106108a657805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101610869565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d8060008114610906576040519150601f19603f3d011682016040523d82523d6000602084013e61090b565b606091505b50915091508161097c57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f4661696c656420746f2063726561746520706169720000000000000000000000604482015290519081900360640190fd5b80806020019051602081101561099157600080fd5b5051604080517f485cc95500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8881166004830152878116602483015291519298509088169163485cc9559160448082019260009290919082900301818387803b158015610a0f57600080fd5b505af1158015610a23573d6000803e3d6000fd5b5050505073ffffffffffffffffffffffffffffffffffffffff85811660008181526001602081815260408084208a87168086529083528185208054978e167fffffffffffffffffffffffff0000000000000000000000000000000000000000988916811790915584845282862087875284528286208054891682179055600280549586018155958690527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace90940180549097168417909655925483519283529082015281517f0d3648bd0f6ba80134a33ba9275ac585d9d315f0ad8355cddefde31afa28d0e9929181900390910190a3505050505092915050565b600160209081526000928352604080842090915290825290205473ffffffffffffffffffffffffffffffffffffffff1681565b3373ffffffffffffffffffffffffffffffffffffffff167f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663f851a4406040518163ffffffff1660e01b815260040160206040518083038186803b158015610bce57600080fd5b505afa158015610be2573d6000803e3d6000fd5b505050506040513d6020811015610bf857600080fd5b505173ffffffffffffffffffffffffffffffffffffffff161480610cd05750604080517fa3818b3b000000000000000000000000000000000000000000000000000000008152336004820152905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169163a3818b3b916024808301926020929190829003018186803b158015610ca357600080fd5b505afa158015610cb7573d6000803e3d6000fd5b505050506040513d6020811015610ccd57600080fd5b50515b610d25576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180610db76021913960400191505060405180910390fd5b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016821515179081905560ff1615610d89576040517f71d46a587e8ae446d9442949c41f57019d17b5b4f3610941960517c9c230304790600090a1610db3565b6040517fb821dc27f036017c075c6746b9e8608a15f78f90a8c03acbce13e9438ca76e1b90600090a15b5056fe4e6f742066726f6d2073687574646f776e2061646d696e206f7220766f74696e67a26469706673582212203b5b14ec27e7936eea9859a1fa6c36be03da89d3a439079589c815a0a575964064736f6c634300060b0033"
}