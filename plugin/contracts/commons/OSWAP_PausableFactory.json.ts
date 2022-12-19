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
    "bytecode": "60a060405234801561001057600080fd5b506040516107553803806107558339818101604052602081101561003357600080fd5b50516001600160601b031960609190911b166080526000805460ff1916600117905560805160601c6106d06100856000398060fc5280610137528061022a528061042d528061052052506106d06000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80635aa6e675146100515780636883618a14610082578063b8f7a665146100bf578063f5ee3348146100db575b600080fd5b6100596100fa565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6100bd6004803603604081101561009857600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135151561011e565b005b6100c761040b565b604080519115158252519081900360200190f35b6100bd600480360360208110156100f157600080fd5b50351515610414565b7f000000000000000000000000000000000000000000000000000000000000000081565b3373ffffffffffffffffffffffffffffffffffffffff167f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663f851a4406040518163ffffffff1660e01b815260040160206040518083038186803b15801561019b57600080fd5b505afa1580156101af573d6000803e3d6000fd5b505050506040513d60208110156101c557600080fd5b505173ffffffffffffffffffffffffffffffffffffffff16148061029d5750604080517fa3818b3b000000000000000000000000000000000000000000000000000000008152336004820152905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169163a3818b3b916024808301926020929190829003018186803b15801561027057600080fd5b505afa158015610284573d6000803e3d6000fd5b505050506040513d602081101561029a57600080fd5b50515b6102f2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602181526020018061067a6021913960400191505060405180910390fd5b604080517ff5ee33480000000000000000000000000000000000000000000000000000000081528215156004820152905173ffffffffffffffffffffffffffffffffffffffff84169163f5ee334891602480830192600092919082900301818387803b15801561036157600080fd5b505af1158015610375573d6000803e3d6000fd5b5050505080156103c55760405173ffffffffffffffffffffffffffffffffffffffff8316907fc96ebf6dcdf5c5e56ad8961009b9d49aa6f2d53d5ffe374048f1d603e3b2908a90600090a2610407565b60405173ffffffffffffffffffffffffffffffffffffffff8316907f7dc5983a5f99179c76b5bbff56fcf9e8373f1a7078dcef4537a5176b333c2bfe90600090a25b5050565b60005460ff1681565b3373ffffffffffffffffffffffffffffffffffffffff167f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663f851a4406040518163ffffffff1660e01b815260040160206040518083038186803b15801561049157600080fd5b505afa1580156104a5573d6000803e3d6000fd5b505050506040513d60208110156104bb57600080fd5b505173ffffffffffffffffffffffffffffffffffffffff1614806105935750604080517fa3818b3b000000000000000000000000000000000000000000000000000000008152336004820152905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169163a3818b3b916024808301926020929190829003018186803b15801561056657600080fd5b505afa15801561057a573d6000803e3d6000fd5b505050506040513d602081101561059057600080fd5b50515b6105e8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602181526020018061067a6021913960400191505060405180910390fd5b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016821515179081905560ff161561064c576040517f71d46a587e8ae446d9442949c41f57019d17b5b4f3610941960517c9c230304790600090a1610676565b6040517fb821dc27f036017c075c6746b9e8608a15f78f90a8c03acbce13e9438ca76e1b90600090a15b5056fe4e6f742066726f6d2073687574646f776e2061646d696e206f7220766f74696e67a2646970667358221220db758a6afeb44194b476053a8997abea30098c0e598012ca1be6aed3c9eada1264736f6c634300060b0033"
}