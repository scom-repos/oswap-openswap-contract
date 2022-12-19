export default {
    "abi": [
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_minter",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "initSupplyTo",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "initSupply",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "totalSupply",
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
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                }
            ],
            "name": "allowance",
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
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
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
            "name": "cap",
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
            "name": "decimals",
            "outputs": [
                {
                    "internalType": "uint8",
                    "name": "",
                    "type": "uint8"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "subtractedValue",
                    "type": "uint256"
                }
            ],
            "name": "decreaseAllowance",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "addedValue",
                    "type": "uint256"
                }
            ],
            "name": "increaseAllowance",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "mint",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "minter",
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
            "name": "name",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "symbol",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "totalSupply",
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
                    "name": "recipient",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "transfer",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "sender",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "recipient",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    "bytecode": "60a06040523480156200001157600080fd5b50604051620013d4380380620013d4833981810160405260808110156200003757600080fd5b50805160208083015160408085015160609095015181518083018352600881526704f70656e537761760c41b8186019081528351808501909452600584526404f535741560dc1b958401959095528051959693959394919384939192620000a2916003919062000395565b508051620000b890600490602084019062000395565b50506005805460ff1916601217905550806200011b576040805162461bcd60e51b815260206004820152601560248201527f45524332304361707065643a2063617020697320300000000000000000000000604482015290519081900360640190fd5b6006556001600160601b0319606085901b166080526200014583836001600160e01b036200014f16565b5050505062000437565b6001600160a01b038216620001ab576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b620001c2600083836001600160e01b036200026716565b620001de816002546200032660201b620007fb1790919060201c565b6002556001600160a01b0382166000908152602081815260409091205462000211918390620007fb62000326821b17901c565b6001600160a01b0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b6200027f8383836200032160201b620008761760201c565b6001600160a01b0383166200032157620002a16001600160e01b036200038816565b620002cd82620002b96001600160e01b036200038f16565b6200032660201b620007fb1790919060201c565b111562000321576040805162461bcd60e51b815260206004820152601960248201527f45524332304361707065643a2063617020657863656564656400000000000000604482015290519081900360640190fd5b505050565b60008282018381101562000381576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b6006545b90565b60025490565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620003d857805160ff191683800117855562000408565b8280016001018555821562000408579182015b8281111562000408578251825591602001919060010190620003eb565b50620004169291506200041a565b5090565b6200038c91905b8082111562000416576000815560010162000421565b60805160601c610f7a6200045a6000398061047f52806105f35250610f7a6000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063395093511161008c57806395d89b411161006657806395d89b4114610314578063a457c2d71461031c578063a9059cbb14610355578063dd62ed3e1461038e576100ea565b8063395093511461026d57806340c10f19146102a657806370a08231146102e1576100ea565b806318160ddd116100c857806318160ddd146101ea57806323b872dd14610204578063313ce56714610247578063355274ea14610265576100ea565b806306fdde03146100ef578063075461721461016c578063095ea7b31461019d575b600080fd5b6100f76103c9565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610131578181015183820152602001610119565b50505050905090810190601f16801561015e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61017461047d565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6101d6600480360360408110156101b357600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356104a1565b604080519115158252519081900360200190f35b6101f26104be565b60408051918252519081900360200190f35b6101d66004803603606081101561021a57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602081013590911690604001356104c4565b61024f61056b565b6040805160ff9092168252519081900360200190f35b6101f2610574565b6101d66004803603604081101561028357600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813516906020013561057a565b6102df600480360360408110156102bc57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356105db565b005b6101f2600480360360208110156102f757600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661068d565b6100f76106b5565b6101d66004803603604081101561033257600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610734565b6101d66004803603604081101561036b57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356107af565b6101f2600480360360408110156103a457600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160200135166107c3565b60038054604080516020601f60027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156104735780601f1061044857610100808354040283529160200191610473565b820191906000526020600020905b81548152906001019060200180831161045657829003601f168201915b5050505050905090565b7f000000000000000000000000000000000000000000000000000000000000000081565b60006104b56104ae61087b565b848461087f565b50600192915050565b60025490565b60006104d18484846109c6565b610561846104dd61087b565b61055c85604051806060016040528060288152602001610eaf6028913973ffffffffffffffffffffffffffffffffffffffff8a1660009081526001602052604081209061052861087b565b73ffffffffffffffffffffffffffffffffffffffff168152602081019190915260400160002054919063ffffffff610ba216565b61087f565b5060019392505050565b60055460ff1690565b60065490565b60006104b561058761087b565b8461055c856001600061059861087b565b73ffffffffffffffffffffffffffffffffffffffff908116825260208083019390935260409182016000908120918c16815292529020549063ffffffff6107fb16565b3373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161461067f57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f4e6f742066726f6d206d696e7465720000000000000000000000000000000000604482015290519081900360640190fd5b6106898282610c53565b5050565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b60048054604080516020601f60027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156104735780601f1061044857610100808354040283529160200191610473565b60006104b561074161087b565b8461055c85604051806060016040528060258152602001610f20602591396001600061076b61087b565b73ffffffffffffffffffffffffffffffffffffffff908116825260208083019390935260409182016000908120918d1681529252902054919063ffffffff610ba216565b60006104b56107bc61087b565b84846109c6565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b60008282018381101561086f57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b505050565b3390565b73ffffffffffffffffffffffffffffffffffffffff83166108eb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526024815260200180610efc6024913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610957576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180610e676022913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b73ffffffffffffffffffffffffffffffffffffffff8316610a32576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526025815260200180610ed76025913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a9e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526023815260200180610e446023913960400191505060405180910390fd5b610aa9838383610d90565b610af981604051806060016040528060268152602001610e896026913973ffffffffffffffffffffffffffffffffffffffff8616600090815260208190526040902054919063ffffffff610ba216565b73ffffffffffffffffffffffffffffffffffffffff8085166000908152602081905260408082209390935590841681522054610b3b908263ffffffff6107fb16565b73ffffffffffffffffffffffffffffffffffffffff8084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b60008184841115610c4b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610c10578181015183820152602001610bf8565b50505050905090810190601f168015610c3d5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b73ffffffffffffffffffffffffffffffffffffffff8216610cd557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b610ce160008383610d90565b600254610cf4908263ffffffff6107fb16565b60025573ffffffffffffffffffffffffffffffffffffffff8216600090815260208190526040902054610d2d908263ffffffff6107fb16565b73ffffffffffffffffffffffffffffffffffffffff83166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b610d9b838383610876565b73ffffffffffffffffffffffffffffffffffffffff831661087657610dbe610574565b610dd682610dca6104be565b9063ffffffff6107fb16565b111561087657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f45524332304361707065643a2063617020657863656564656400000000000000604482015290519081900360640190fdfe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa26469706673582212205398f6780896bd95b48138c9a61315664165e499514e443dcd86ff1b379f428164736f6c634300060b0033"
}