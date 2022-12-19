export default {
    "abi": [
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_oracleAddress",
                    "type": "address"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "oracle",
                    "type": "address"
                }
            ],
            "name": "getSecurityScore",
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
            "name": "oracleAddress",
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
    "bytecode": "60a060405234801561001057600080fd5b506040516102a53803806102a58339818101604052602081101561003357600080fd5b50516001600160a01b038116610090576040805162461bcd60e51b815260206004820152601660248201527f496e76616c6964206f7261636c65206164647265737300000000000000000000604482015290519081900360640190fd5b606081901b6001600160601b0319166080526001600160a01b03166101df6100c66000398060b5528061018752506101df6000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806352d382431461003b578063a89ae4ba14610080575b600080fd5b61006e6004803603602081101561005157600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166100b1565b60408051918252519081900360200190f35b610088610185565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166352d38243836040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561015057600080fd5b505afa158015610164573d6000803e3d6000fd5b505050506040513d602081101561017a57600080fd5b505160ff1692915050565b7f00000000000000000000000000000000000000000000000000000000000000008156fea2646970667358221220ec56363e1b4a87122f062fd173fa2b6c1bc9b9dc8008a55adc026a06ec4a7f0664736f6c634300060b0033"
}