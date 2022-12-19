export default {
    "abi": [
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "provider",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "bool",
                    "name": "direction",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "staked",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "newStakeBalance",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "newAmountBalance",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "lowerLimit",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "upperLimit",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "startDate",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "expire",
                    "type": "uint256"
                }
            ],
            "name": "AddLiquidity",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "provider",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "index",
                    "type": "uint256"
                }
            ],
            "name": "NewProvider",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "provider",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "unstake",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount0Out",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount1Out",
                    "type": "uint256"
                }
            ],
            "name": "RemoveAllLiquidity",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "provider",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "bool",
                    "name": "direction",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "unstake",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amountOut",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "reserveOut",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "newStakeBalance",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "newAmountBalance",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "newReserveBalance",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "lowerLimit",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "upperLimit",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "startDate",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "expire",
                    "type": "uint256"
                }
            ],
            "name": "RemoveLiquidity",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "provider",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "bool",
                    "name": "direction",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amountIn",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "newAmountBalance",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "newReserveBalance",
                    "type": "uint256"
                }
            ],
            "name": "Replenish",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "bool",
                    "name": "direction",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "price",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amountIn",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amountOut",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "tradeFee",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "protocolFee",
                    "type": "uint256"
                }
            ],
            "name": "Swap",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "provider",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "bool",
                    "name": "direction",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amountOut",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amountIn",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "newAmountBalance",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "newCounterReserveBalance",
                    "type": "uint256"
                }
            ],
            "name": "SwappedOneProvider",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "provider",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "bool",
                    "name": "direction",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "replenish",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "newAmountBalance",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "newReserveBalance",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "lowerLimit",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "upperLimit",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "startDate",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "expire",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "privateReplenish",
                    "type": "bool"
                }
            ],
            "name": "UpdateProviderOffer",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "provider",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "direction",
                    "type": "bool"
                },
                {
                    "internalType": "uint256",
                    "name": "staked",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "lowerLimit",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "upperLimit",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "startDate",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "expire",
                    "type": "uint256"
                }
            ],
            "name": "addLiquidity",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "index",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "counter",
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
            "name": "factory",
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
                    "name": "tokenOut",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amountOut",
                    "type": "uint256"
                },
                {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                }
            ],
            "name": "getAmountIn",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "amountIn",
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
                    "name": "tokenIn",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amountIn",
                    "type": "uint256"
                },
                {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                }
            ],
            "name": "getAmountOut",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "amountOut",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getBalances",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
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
            "name": "getLastBalances",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
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
                    "name": "direction",
                    "type": "bool"
                },
                {
                    "internalType": "bytes",
                    "name": "payload",
                    "type": "bytes"
                }
            ],
            "name": "getLatestPrice",
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
                    "name": "direction",
                    "type": "bool"
                },
                {
                    "internalType": "uint256",
                    "name": "start",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "end",
                    "type": "uint256"
                }
            ],
            "name": "getOffers",
            "outputs": [
                {
                    "internalType": "address[]",
                    "name": "provider",
                    "type": "address[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "amountAndReserve",
                    "type": "uint256[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "lowerLimitAndUpperLimit",
                    "type": "uint256[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "startDateAndExpire",
                    "type": "uint256[]"
                },
                {
                    "internalType": "bool[]",
                    "name": "privateReplenish",
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
                    "name": "provider",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "direction",
                    "type": "bool"
                }
            ],
            "name": "getProviderOffer",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "index",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "staked",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "reserve",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "lowerLimit",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "upperLimit",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "startDate",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "expire",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "privateReplenish",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "govToken",
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
                    "name": "_token0",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_token1",
                    "type": "address"
                }
            ],
            "name": "initialize",
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
            "inputs": [],
            "name": "lastGovBalance",
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
            "name": "lastToken0Balance",
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
            "name": "lastToken1Balance",
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
                    "name": "",
                    "type": "bool"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "offers",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "provider",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "reserve",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "lowerLimit",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "upperLimit",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "startDate",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "expire",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "privateReplenish",
                    "type": "bool"
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
            "name": "protocolFeeBalance0",
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
            "name": "protocolFeeBalance1",
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
            "name": "providerOfferIndex",
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
            "name": "providerStaking",
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
            "name": "redeemProtocolFee",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "provider",
                    "type": "address"
                }
            ],
            "name": "removeAllLiquidity",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "amount0",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amount1",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "staked",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "provider",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "direction",
                    "type": "bool"
                },
                {
                    "internalType": "uint256",
                    "name": "unstake",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amountOut",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "reserveOut",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "lowerLimit",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "upperLimit",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "startDate",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "expire",
                    "type": "uint256"
                }
            ],
            "name": "removeLiquidity",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "provider",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "direction",
                    "type": "bool"
                },
                {
                    "internalType": "uint256",
                    "name": "amountIn",
                    "type": "uint256"
                }
            ],
            "name": "replenish",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "scaleDirection",
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
            "name": "scaler",
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
            "inputs": [],
            "name": "stakeBalance",
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
                    "internalType": "uint256",
                    "name": "amount0Out",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amount1Out",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                }
            ],
            "name": "swap",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "sync",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "token0",
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
            "name": "token1",
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
                    "name": "provider",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "direction",
                    "type": "bool"
                },
                {
                    "internalType": "uint256",
                    "name": "replenishAmount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "lowerLimit",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "upperLimit",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "startDate",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "expire",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "privateReplenish",
                    "type": "bool"
                }
            ],
            "name": "updateProviderOffer",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    "bytecode": "610120604052600180553480156200001657600080fd5b5033606081811b6080526000805460ff191660011781556040805163ea2ed2c160e01b81529051919384938493919263ea2ed2c19260048083019392829003018186803b1580156200006757600080fd5b505afa1580156200007c573d6000803e3d6000fd5b505050506040513d60608110156200009357600080fd5b5080516020808301516040938401516001600160601b0319606085901b1660c052845163b716d46360e01b8152945193975090955093506001600160a01b0386169263b716d4639260048083019392829003018186803b158015620000f757600080fd5b505afa1580156200010c573d6000803e3d6000fd5b505050506040513d60208110156200012357600080fd5b81019080805190602001909291905050506001600160a01b0316610100816001600160a01b031660601b81525050816001600160a01b031660e0816001600160a01b031660601b81525050806001600160a01b031660a0816001600160a01b031660601b81525050600360006001151515158152602001908152602001600020604051806101000160405280306001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160001515815250908060018154018082558091505060019003906000526020600020906008020160009091909190915060008201518160000160006101000a8154816001600160a01b0302191690836001600160a01b031602179055506020820151816001015560408201518160020155606082015181600301556080820151816004015560a0820151816005015560c0820151816006015560e08201518160070160006101000a81548160ff02191690831515021790555050506003600080151515158152602001908152602001600020604051806101000160405280306001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160001515815250908060018154018082558091505060019003906000526020600020906008020160009091909190915060008201518160000160006101000a8154816001600160a01b0302191690836001600160a01b031602179055506020820151816001015560408201518160020155606082015181600301556080820151816004015560a0820151816005015560c0820151816006015560e08201518160070160006101000a81548160ff021916908315150217905550505050505060805160601c60a05160601c60c05160601c60e05160601c6101005160601c6153766200047f60003980610ad452806112655280612206528061321552806132885280613b6152806149595250806112a552806120c452806122b25280612e5a52806138c9525080611b87525080610db852806118c15280611c7752806138195280613dc15280614b705250806117165280611d2f52806123605280612ad55280612d4552806137f5528061403752806144065280614c2852506153766000f3fe608060405234801561001057600080fd5b50600436106102765760003560e01c80637a6a5e1b11610160578063b8f7a665116100d8578063d21220a71161008c578063db13653c11610071578063db13653c14610a27578063f5ee334814610aa6578063fff6cae914610ac557610276565b8063d21220a7146109a6578063d519f64d146109ae57610276565b8063c45a0155116100bd578063c45a01551461092f578063c7f7fb9014610937578063d1b876cb1461093f57610276565b8063b8f7a6651461090b578063bebf7a611461092757610276565b806393bc9dfe1161012f578063a26651e711610114578063a26651e714610826578063a27c17f1146108aa578063b2901aa31461090357610276565b806393bc9dfe146108165780639749d2131461081e57610276565b80637a6a5e1b1461073857806380dffd7e1461076b578063835daf6c146107cd57806388952339146107d557610276565b8063485cc955116101f357806361bc221a116101c25780636b4afee1116101a75780636b4afee1146106ca5780636d813c3c146106d25780636fec7dd71461070557610276565b806361bc221a14610630578063685639a91461063857610276565b8063485cc955146105dd578063577e6d08146106185780635a6af09d146106205780635aa6e6751461062857610276565b80632c6ced381161024a5780633c1e6ff51161022f5780633c1e6ff5146104215780633c6d5c72146104295780633d0d81d61461044a57610276565b80632c6ced38146103755780633b19103b1461037d57610276565b8062113e081461027b578063022c0d9f146102a157806305268cff1461033c5780630dfe16811461036d575b600080fd5b610283610acd565b60408051938452602084019290925282820152519081900360600190f35b61033a600480360360808110156102b757600080fd5b81359160208101359173ffffffffffffffffffffffffffffffffffffffff60408301351691908101906080810160608201356401000000008111156102fb57600080fd5b82018360208201111561030d57600080fd5b8035906020019184600183028401116401000000008311171561032f57600080fd5b509092509050610ce1565b005b610344611263565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b610344611287565b6103446112a3565b61040f6004803603606081101561039357600080fd5b73ffffffffffffffffffffffffffffffffffffffff823516916020810135918101906060810160408201356401000000008111156103d057600080fd5b8201836020820111156103e257600080fd5b8035906020019184600183028401116401000000008311171561040457600080fd5b5090925090506112c7565b60408051918252519081900360200190f35b61040f61136e565b610431611374565b6040805192835260208301919091528051918290030190f35b6104756004803603606081101561046057600080fd5b5080351515906020810135906040013561137e565b60405180806020018060200180602001806020018060200186810386528b818151815260200191508051906020019060200280838360005b838110156104c55781810151838201526020016104ad565b5050505090500186810385528a818151815260200191508051906020019060200280838360005b838110156105045781810151838201526020016104ec565b50505050905001868103845289818151815260200191508051906020019060200280838360005b8381101561054357818101518382015260200161052b565b50505050905001868103835288818151815260200191508051906020019060200280838360005b8381101561058257818101518382015260200161056a565b50505050905001868103825287818151815260200191508051906020019060200280838360005b838110156105c15781810151838201526020016105a9565b505050509050019a505050505050505050505060405180910390f35b61033a600480360360408110156105f357600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160200135166116fe565b61040f611b79565b61040f611b7f565b610344611b85565b61040f611ba9565b61040f6004803603606081101561064e57600080fd5b73ffffffffffffffffffffffffffffffffffffffff8235169160208101359181019060608101604082013564010000000081111561068b57600080fd5b82018360208201111561069d57600080fd5b803590602001918460018302840111640100000000831117156106bf57600080fd5b509092509050611baf565b61040f612007565b61040f600480360360208110156106e857600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661200d565b61040f6004803603602081101561071b57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661201f565b6102836004803603602081101561074e57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16612031565b61033a600480360361010081101561078257600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602081013515159060408101359060608101359060808101359060a08101359060c08101359060e00135151561229a565b61040f6127dd565b61033a600480360360608110156107eb57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813516906020810135151590604001356127e3565b61040f612a52565b61033a612a58565b6108616004803603604081101561083c57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001351515612bd3565b60408051998a5260208a0198909852888801969096526060880194909452608087019290925260a086015260c085015260e0840152151561010083015251908190036101200190f35b61040f600480360360e08110156108c057600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602081013515159060408101359060608101359060808101359060a08101359060c00135612cc8565b61040f6137c3565b6109136137c9565b604080519115158252519081900360200190f35b6109136137d2565b6103446137f3565b610344613817565b61033a600480360361012081101561095657600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602081013515159060408101359060608101359060808101359060a08101359060c08101359060e081013590610100013561383b565b610344613d4b565b61040f600480360360408110156109c457600080fd5b8135151591908101906040810160208201356401000000008111156109e857600080fd5b8201836020820111156109fa57600080fd5b80359060200191846001830284011164010000000083111715610a1c57600080fd5b509092509050613d67565b610a4c60048036036040811015610a3d57600080fd5b50803515159060200135613fa6565b6040805173ffffffffffffffffffffffffffffffffffffffff90991689526020890197909752878701959095526060870193909352608086019190915260a085015260c0840152151560e083015251908190036101000190f35b61033a60048036036020811015610abc57600080fd5b5035151561401f565b61033a6140f4565b60008060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015610b6f57600080fd5b505afa158015610b83573d6000803e3d6000fd5b505050506040513d6020811015610b9957600080fd5b5051600654604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905173ffffffffffffffffffffffffffffffffffffffff909216916370a0823191602480820192602092909190829003018186803b158015610c0c57600080fd5b505afa158015610c20573d6000803e3d6000fd5b505050506040513d6020811015610c3657600080fd5b5051600754604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905173ffffffffffffffffffffffffffffffffffffffff909216916370a0823191602480820192602092909190829003018186803b158015610ca957600080fd5b505afa158015610cbd573d6000803e3d6000fd5b505050506040513d6020811015610cd357600080fd5b505191945092509050909192565b600154600114610d5257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f4c4f434b45440000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b60006001553233148015610d6c5750610d6a33614178565b155b80610e2d5750604080517f3af32abf000000000000000000000000000000000000000000000000000000008152336004820152905173ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001691633af32abf9160248083019260209291908290030181600087803b158015610e0057600080fd5b505af1158015610e14573d6000803e3d6000fd5b505050506040513d6020811015610e2a57600080fd5b50515b610e9857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f4e6f742066726f6d2075736572206f722077686974656c697374656400000000604482015290519081900360640190fd5b60005460ff16610f0957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f5041555345440000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b600a54600654604080517f70a082310000000000000000000000000000000000000000000000000000000081523060048201529051600093610fbe93909273ffffffffffffffffffffffffffffffffffffffff909116916370a0823191602480820192602092909190829003018186803b158015610f8657600080fd5b505afa158015610f9a573d6000803e3d6000fd5b505050506040513d6020811015610fb057600080fd5b50519063ffffffff61417e16565b600b54600754604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905193945060009361103a939273ffffffffffffffffffffffffffffffffffffffff16916370a08231916024808301926020929190829003018186803b158015610f8657600080fd5b90506000808815801561104c57508715155b156111125761105f8760018689896141c9565b9092509050878210156110d357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f494e53554646494349454e545f414d4f554e5400000000000000000000000000604482015290519081900360640190fd5b6007546110f79073ffffffffffffffffffffffffffffffffffffffff168884614699565b600c5461110a908263ffffffff61489f16565b600c5561124c565b881580159061111f575087155b156111e5576111328760008589896141c9565b9092509050888210156111a657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f494e53554646494349454e545f414d4f554e5400000000000000000000000000604482015290519081900360640190fd5b6006546111ca9073ffffffffffffffffffffffffffffffffffffffff168884614699565b600d546111dd908263ffffffff61489f16565b600d5561124c565b604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f4e6f7420737570706f7274656400000000000000000000000000000000000000604482015290519081900360640190fd5b611254614913565b50506001805550505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60065473ffffffffffffffffffffffffffffffffffffffff1681565b7f000000000000000000000000000000000000000000000000000000000000000081565b600080841161133757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f494e53554646494349454e545f494e5055545f414d4f554e5400000000000000604482015290519081900360640190fd5b6006546113619073ffffffffffffffffffffffffffffffffffffffff878116911614858585614b10565b5091979650505050505050565b60085481565b600a54600b549091565b606080606080606060025487116116c85760025486111561139f5760025495505b60006113c2886113b689600163ffffffff61489f16565b9063ffffffff61417e16565b90508067ffffffffffffffff811180156113db57600080fd5b50604051908082528060200260200182016040528015611405578160200160208202803683370190505b5095508060020267ffffffffffffffff8111801561142257600080fd5b5060405190808252806020026020018201604052801561144c578160200160208202803683370190505b5094508060020267ffffffffffffffff8111801561146957600080fd5b50604051908082528060200260200182016040528015611493578160200160208202803683370190505b5093508060020267ffffffffffffffff811180156114b057600080fd5b506040519080825280602002602001820160405280156114da578160200160208202803683370190505b5092508067ffffffffffffffff811180156114f457600080fd5b5060405190808252806020026020018201604052801561151e578160200160208202803683370190505b50915060005b818110156116c157600061153e828463ffffffff61489f16565b8b1515600090815260036020526040812091925090611563848d63ffffffff61489f16565b8154811061156d57fe5b6000918252602090912060089091020180548a5191925073ffffffffffffffffffffffffffffffffffffffff16908a90859081106115a757fe5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505080600101548884815181106115f257fe5b602002602001018181525050806002015488838151811061160f57fe5b602002602001018181525050806003015487848151811061162c57fe5b602002602001018181525050806004015487838151811061164957fe5b602002602001018181525050806005015486848151811061166657fe5b602002602001018181525050806006015486838151811061168357fe5b60209081029190910101526007810154855160ff909116908690859081106116a757fe5b911515602092830291909101909101525050600101611524565b50506116f3565b5050604080516000808252602082018181528284019182526060830190935290945090925082915081905b939792965093509350565b3373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016146117a257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f464f5242494444454e0000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6006805473ffffffffffffffffffffffffffffffffffffffff8085167fffffffffffffffffffffffff00000000000000000000000000000000000000009283161792839055600780548583169316929092179182905590811691161061186957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f496e76616c696420746f6b656e2070616972206f726465720000000000000000604482015290519081900360640190fd5b600654600754604080517f52a03c0300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff93841660048201529183166024830152516000927f000000000000000000000000000000000000000000000000000000000000000016916352a03c03916044808301926020929190829003018186803b15801561190757600080fd5b505afa15801561191b573d6000803e3d6000fd5b505050506040513d602081101561193157600080fd5b5051905073ffffffffffffffffffffffffffffffffffffffff81166119b757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f4e6f206f7261636c6520666f756e640000000000000000000000000000000000604482015290519081900360640190fd5b600654604080517f313ce567000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff169163313ce567916004808301926020929190829003018186803b158015611a2257600080fd5b505afa158015611a36573d6000803e3d6000fd5b505050506040513d6020811015611a4c57600080fd5b5051600754604080517f313ce567000000000000000000000000000000000000000000000000000000008152905192935060009273ffffffffffffffffffffffffffffffffffffffff9092169163313ce56791600480820192602092909190829003018186803b158015611abf57600080fd5b505afa158015611ad3573d6000803e3d6000fd5b505050506040513d6020811015611ae957600080fd5b5051905060ff8281169082161415611b05576001600855611b72565b600780547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff1660ff84811684821611740100000000000000000000000000000000000000009081029290921792839055910416611b6457808203611b68565b8181035b60ff16600a0a6008555b5050505050565b600d5481565b600a5481565b7f000000000000000000000000000000000000000000000000000000000000000081565b60025481565b6000808411611c1f57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f494e53554646494349454e545f4f55545055545f414d4f554e54000000000000604482015290519081900360640190fd5b600654600754604080517f95277f3900000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff93841660048201529183166024830152516000927f000000000000000000000000000000000000000000000000000000000000000016916395277f39916044808301926020929190829003018186803b158015611cbd57600080fd5b505afa158015611cd1573d6000803e3d6000fd5b505050506040513d6020811015611ce757600080fd5b5051604080517f42032856000000000000000000000000000000000000000000000000000000008152905191925060009173ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016916342032856916004808301926020929190829003018186803b158015611d7557600080fd5b505afa158015611d89573d6000803e3d6000fd5b505050506040513d6020811015611d9f57600080fd5b505160075490915073ffffffffffffffffffffffffffffffffffffffff888116911614600081611de75760075473ffffffffffffffffffffffffffffffffffffffff16611e01565b60065473ffffffffffffffffffffffffffffffffffffffff165b90506000808573ffffffffffffffffffffffffffffffffffffffff1663d9da4fe6848d60008e8e8e6040518763ffffffff1660e01b8152600401808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001858152602001848152602001806020018281038252848482818152602001925080828437600081840152601f19601f820116905080830192505050975050505050505050604080518083038186803b158015611efb57600080fd5b505afa158015611f0f573d6000803e3d6000fd5b505050506040513d6040811015611f2557600080fd5b5080516020909101519092509050611f438a8263ffffffff614f1516565b965060016008541115611f9b57600760149054906101000a900460ff1615158415151415611f8457600854611f7f90889063ffffffff614f8816565b611f98565b600854611f9890889063ffffffff614f1516565b96505b611fbc6001611fb0898563ffffffff614f8816565b9063ffffffff61489f16565b9650611ff86001611fb0611fd9620186a08963ffffffff61417e16565b611fec8b620186a063ffffffff614f1516565b9063ffffffff614f8816565b9b9a5050505050505050505050565b600b5481565b60046020526000908152604090205481565b60056020526000908152604090205481565b60008060006001546001146120a757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f4c4f434b45440000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b60006001553373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016148061210557503373ffffffffffffffffffffffffffffffffffffffff8516145b61217057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f4e6f742066726f6d20726f75746572206f72206f776e65720000000000000000604482015290519081900360640190fd5b600061217d856000614fca565b9094509050612192848263ffffffff61489f16565b935060006121a1866001614fca565b90945090506121b6848263ffffffff61489f16565b73ffffffffffffffffffffffffffffffffffffffff8716600090815260056020526040812080549190559094509250821561222c57600e546121fe908463ffffffff61417e16565b600e5561222c7f00000000000000000000000000000000000000000000000000000000000000003385614699565b6040805184815260208101879052808201869052905173ffffffffffffffffffffffffffffffffffffffff8816917f3f9e361045fcac63ab779647d804207abc088499d6bc0e6983675cb509130647919081900360600190a261228d614913565b5050600180559193909250565b3373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614806122f357503373ffffffffffffffffffffffffffffffffffffffff8916145b61235e57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f4e6f742066726f6d20726f75746572206f72206f776e65720000000000000000604482015290519081900360640190fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663b8f7a6656040518163ffffffff1660e01b8152600401602060405180830381600087803b1580156123c657600080fd5b505af11580156123da573d6000803e3d6000fd5b505050506040513d60208110156123f057600080fd5b505161245d57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f474c4f42414c4c59205041555345440000000000000000000000000000000000604482015290519081900360640190fd5b60005460ff166124ce57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f5041555345440000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b8385111561253d57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f496e76616c6964206c696d697400000000000000000000000000000000000000604482015290519081900360640190fd5b828210156125ac57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f416c726561647920657870697265640000000000000000000000000000000000604482015290519081900360640190fd5b42821161261a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f416c726561647920657870697265640000000000000000000000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff8816600090815260046020526040902054806126ac57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f50726f7669646572206c6971756964697479206e6f7420666f756e6400000000604482015290519081900360640190fd5b87151560009081526003602052604081208054839081106126c957fe5b906000526020600020906008020190506126f088826001015461489f90919063ffffffff16565b6001820155600281015461270a908963ffffffff61417e16565b60028201819055600382018890556004820187905560058201869055600682018590556007820180548515157fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0090911681179091556001830154604080518c8152602081019290925281810193909352606081018a90526080810189905260a0810188905260c0810187905260e081019190915290518a15159133917f9766c42cdf43f771566bbf4c8146febf4292a400b0aea37b03f838f4523cc5b7918190036101000190a350505050505050505050565b600c5481565b60015460011461285457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f4c4f434b45440000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6000600181905573ffffffffffffffffffffffffffffffffffffffff8416815260046020526040902054806128ea57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f50726f7669646572206e6f7420666f756e640000000000000000000000000000604482015290519081900360640190fd5b821515600090815260036020526040812080548390811061290757fe5b60009182526020909120600890910201600781015490915060ff161580612943575073ffffffffffffffffffffffffffffffffffffffff851633145b6129ae57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f4e6f742066726f6d2070726f7669646572000000000000000000000000000000604482015290519081900360640190fd5b60018101546129c3908463ffffffff61489f16565b600182015560028101546129dd908463ffffffff61417e16565b6002820181905560018201546040805186815260208101929092528181019290925290518515159173ffffffffffffffffffffffffffffffffffffffff8816917f5d29877443ff1bf07abe0c891fe18d5ab9f14dab242f13ff6482995763473ed29181900360600190a3505060018055505050565b600e5481565b600154600114612ac957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f4c4f434b45440000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b600060018190555060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663ef3692526040518163ffffffff1660e01b815260040160206040518083038186803b158015612b3957600080fd5b505afa158015612b4d573d6000803e3d6000fd5b505050506040513d6020811015612b6357600080fd5b5051600654600c54919250612b929173ffffffffffffffffffffffffffffffffffffffff909116908390614699565b600754600d54612bba9173ffffffffffffffffffffffffffffffffffffffff16908390614699565b6000600c819055600d55612bcc614913565b5060018055565b73ffffffffffffffffffffffffffffffffffffffff82166000908152600460209081526040808320548415158452600390925282208054919291829182918291829182918291829182918b908110612c2757fe5b9060005260206000209060080201905089600560008e73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548260010154836002015484600301548560040154866005015487600601548860070160009054906101000a900460ff16995099509950995099509950995099509950509295985092959850929598565b6000600154600114612d3b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f4c4f434b45440000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b60006001819055507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663b8f7a6656040518163ffffffff1660e01b8152600401602060405180830381600087803b158015612dab57600080fd5b505af1158015612dbf573d6000803e3d6000fd5b505050506040513d6020811015612dd557600080fd5b5051612e4257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f474c4f42414c4c59205041555345440000000000000000000000000000000000604482015290519081900360640190fd5b3373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161480612e9b57503373ffffffffffffffffffffffffffffffffffffffff8916145b612f0657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f4e6f742066726f6d20726f75746572206f72206f776e65720000000000000000604482015290519081900360640190fd5b60005460ff16612f7757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f5041555345440000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff8816612ff957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f4e756c6c20616464726573730000000000000000000000000000000000000000604482015290519081900360640190fd5b8385111561306857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f496e76616c6964206c696d697400000000000000000000000000000000000000604482015290519081900360640190fd5b828210156130d757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f416c726561647920657870697265640000000000000000000000000000000000604482015290519081900360640190fd5b4282101561314657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f416c726561647920657870697265640000000000000000000000000000000000604482015290519081900360640190fd5b600080600080613154610acd565b925092509250896131706009548561417e90919063ffffffff16565b10156131dd57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f496e76616c696420666565496e00000000000000000000000000000000000000604482015290519081900360640190fd5b600e546131f0908b63ffffffff61489f16565b600e558a1561326c57600b5461320d90829063ffffffff61417e16565b6007549094507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff9081169116141561326757613264848b63ffffffff61417e16565b93505b6132da565b600a5461328090839063ffffffff61417e16565b6006549094507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff908116911614156132da576132d7848b63ffffffff61417e16565b93505b600992909255600a55600b5573ffffffffffffffffffffffffffffffffffffffff891660009081526005602052604090205461331c908863ffffffff61489f16565b73ffffffffffffffffffffffffffffffffffffffff8a1660009081526005602090815260408083208490556004909152812054935083156133c657891515600090815260036020526040812080548690811061337457fe5b9060005260206000209060080201905061339b84826001015461489f90919063ffffffff16565b60018201819055600382018a9055600482018990556005820188905560069091018690559050613731565b600280546001019081905573ffffffffffffffffffffffffffffffffffffffff8c16600090815260046020526040902081905593508261346757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f4e6f20616d6f756e7420696e0000000000000000000000000000000000000000604482015290519081900360640190fd5b600360008b1515151581526020019081526020016000206040518061010001604052808d73ffffffffffffffffffffffffffffffffffffffff168152602001858152602001600081526020018a815260200189815260200188815260200187815260200160011515815250908060018154018082558091505060019003906000526020600020906008020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001015560408201518160020155606082015181600301556080820151816004015560a0820151816005015560c0820151816006015560e08201518160070160006101000a81548160ff0219169083151502179055505050600360008b151515151581526020019081526020016000206040518061010001604052808d73ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160011515815250908060018154018082558091505060019003906000526020600020906008020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001015560408201518160020155606082015181600301556080820151816004015560a0820151816005015560c0820151816006015560e08201518160070160006101000a81548160ff02191690831515021790555050508290508a73ffffffffffffffffffffffffffffffffffffffff167f39944be52180e3811405a754586ce476cd9d34d40e98835c2b4c77eb26426b5b856040518082815260200191505060405180910390a25b604080518a81526020810185905280820184905260608101839052608081018a905260a0810189905260c0810188905260e0810187905290518b15159173ffffffffffffffffffffffffffffffffffffffff8e16917ff77a3e29f24e88e282a2943ad511115dde07d25e5bade15adde6fcbed4c1b206918190036101000190a350506001805550979650505050505050565b60095481565b60005460ff1681565b60075474010000000000000000000000000000000000000000900460ff1681565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b6001546001146138ac57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f4c4f434b45440000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b60006001553373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016148061390a57503373ffffffffffffffffffffffffffffffffffffffff8a16145b61397557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f4e6f742066726f6d20726f75746572206f72206f776e65720000000000000000604482015290519081900360640190fd5b818110156139e457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f416c726561647920657870697265640000000000000000000000000000000000604482015290519081900360640190fd5b428111613a5257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f416c726561647920657870697265640000000000000000000000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff891660009081526004602052604090205480613ae457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f50726f7669646572206c6971756964697479206e6f7420666f756e6400000000604482015290519081900360640190fd5b8715613b875773ffffffffffffffffffffffffffffffffffffffff8a16600090815260056020526040902054613b20908963ffffffff61417e16565b73ffffffffffffffffffffffffffffffffffffffff8b16600090815260056020526040902055600e54613b59908963ffffffff61417e16565b600e55613b877f0000000000000000000000000000000000000000000000000000000000000000338a614699565b73ffffffffffffffffffffffffffffffffffffffff8a166000908152600560209081526040808320548c1515845260039092528220805491929184908110613bcb57fe5b90600052602060002090600802019050613bf289826001015461417e90919063ffffffff16565b60018201556002810154613c0c908963ffffffff61417e16565b60028201556003810187905560048101869055600581018590556006810184905588151580613c3b5750600088115b15613c9657613c968b613c665760065473ffffffffffffffffffffffffffffffffffffffff16613c80565b60075473ffffffffffffffffffffffffffffffffffffffff165b33613c918c8c63ffffffff61489f16565b614699565b60018101546002820154604080518d8152602081018d90528082018c905260608101869052608081019390935260a083019190915260c0820189905260e0820188905261010082018790526101208201869052518c15159173ffffffffffffffffffffffffffffffffffffffff8f16917f1f61f8b18e403ca0f2ba9c3ff8bda4d01f0fc5d33ae806841d02dde927728132918190036101400190a3613d39614913565b50506001805550505050505050505050565b60075473ffffffffffffffffffffffffffffffffffffffff1681565b600654600754604080517f95277f3900000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff938416600482015291831660248301525160009283927f0000000000000000000000000000000000000000000000000000000000000000909116916395277f3991604480820192602092909190829003018186803b158015613e0a57600080fd5b505afa158015613e1e573d6000803e3d6000fd5b505050506040513d6020811015613e3457600080fd5b5051905060008086613e655760075460065473ffffffffffffffffffffffffffffffffffffffff9182169116613e86565b60065460075473ffffffffffffffffffffffffffffffffffffffff91821691165b915091508273ffffffffffffffffffffffffffffffffffffffff1663495e4348838389896040518563ffffffff1660e01b8152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001806020018281038252848482818152602001925080828437600081840152601f19601f8201169050808301925050509550505050505060206040518083038186803b158015613f6f57600080fd5b505afa158015613f83573d6000803e3d6000fd5b505050506040513d6020811015613f9957600080fd5b5051979650505050505050565b60036020528160005260406000208181548110613fbf57fe5b60009182526020909120600890910201805460018201546002830154600384015460048501546005860154600687015460079097015473ffffffffffffffffffffffffffffffffffffffff90961698509396509194909391929160ff1688565b3373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016146140c357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f464f5242494444454e0000000000000000000000000000000000000000000000604482015290519081900360640190fd5b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016911515919091179055565b60015460011461416557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f4c4f434b45440000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6000600155614172614913565b60018055565b3b151590565b60006141c083836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250615101565b90505b92915050565b6000806000806000606060006141df60846151b2565b90925090506141fa8b8b6141f58b85818f6152f7565b614b10565b5091985090965094508592506142189050898363ffffffff61417e16565b9250858a60005b60008311801561422f5750835181105b156145b15760025484828151811061424357fe5b602002602001015111156142b857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f4f66666572206e6f742065786973740000000000000000000000000000000000604482015290519081900360640190fd5b811515600090815260036020526040812085518690849081106142d757fe5b6020026020010151815481106142e957fe5b9060005260206000209060080201905087816003015411158015614311575080600401548811155b8061432b5750600381015415801561432b57506004810154155b801561433b575080600501544210155b801561434b575080600601544211155b156145a85760018101546000908181871061438257614370878363ffffffff61417e16565b965060008460010181905590506143a8565b600184015487925061439a908363ffffffff61417e16565b846001018190559050600096505b835473ffffffffffffffffffffffffffffffffffffffff9081166000908152600560209081526040918290205482517fed3b638c000000000000000000000000000000000000000000000000000000008152600481019190915291517f00000000000000000000000000000000000000000000000000000000000000009093169263ed3b638c926024808201939291829003018186803b15801561444b57600080fd5b505afa15801561445f573d6000803e3d6000fd5b505050506040513d602081101561447557600080fd5b505192506144af61448f8e620186a063ffffffff614f1516565b611fec856144a38d8763ffffffff614f1516565b9063ffffffff614f1516565b92506144c18c8463ffffffff61417e16565b9b506144db83611fb08f611fec8e8763ffffffff614f1516565b861560009081526003602052604090208951919450908990879081106144fd57fe5b60200260200101518154811061450f57fe5b9060005260206000209060080201935061453683856002015461489f90919063ffffffff16565b60028501819055845460408051858152602081018790528082018590526060810193909352518815159273ffffffffffffffffffffffffffffffffffffffff909216917f5a4c914458527a84b907dc0c2c69173c8d117acce38a2b58e316cdad2d3c6c22919081900360800190a35050505b5060010161421f565b5050801561462057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416d6f756e74206578636565647320617661696c61626c652066756e64000000604482015290519081900360640190fd5b60408051868152602081018c9052808201899052606081018590526080810188905290518c15159173ffffffffffffffffffffffffffffffffffffffff8f16917f0148b571d5049091b679cb2ccda30fb06d3aecaef641a0515a317498893d7da39181900360a00190a350505050509550959350505050565b604080518082018252601981527f7472616e7366657228616464726573732c75696e743235362900000000000000602091820152815173ffffffffffffffffffffffffffffffffffffffff85811660248301526044808301869052845180840390910181526064909201845291810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb000000000000000000000000000000000000000000000000000000001781529251815160009460609489169392918291908083835b6020831061479f57805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101614762565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114614801576040519150601f19603f3d011682016040523d82523d6000602084013e614806565b606091505b5091509150818015614834575080511580614834575080806020019051602081101561483157600080fd5b50515b611b7257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f5452414e534645525f4641494c45440000000000000000000000000000000000604482015290519081900360640190fd5b6000828201838110156141c057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905173ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016916370a08231916024808301926020929190829003018186803b15801561499f57600080fd5b505afa1580156149b3573d6000803e3d6000fd5b505050506040513d60208110156149c957600080fd5b5051600955600654604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905173ffffffffffffffffffffffffffffffffffffffff909216916370a0823191602480820192602092909190829003018186803b158015614a3f57600080fd5b505afa158015614a53573d6000803e3d6000fd5b505050506040513d6020811015614a6957600080fd5b5051600a55600754604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905173ffffffffffffffffffffffffffffffffffffffff909216916370a0823191602480820192602092909190829003018186803b158015614adf57600080fd5b505afa158015614af3573d6000803e3d6000fd5b505050506040513d6020811015614b0957600080fd5b5051600b55565b600654600754604080517f95277f3900000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff938416600482015291831660248301525160009283928392839283927f0000000000000000000000000000000000000000000000000000000000000000909116916395277f3991604480820192602092909190829003018186803b158015614bb957600080fd5b505afa158015614bcd573d6000803e3d6000fd5b505050506040513d6020811015614be357600080fd5b5051604080517f42032856000000000000000000000000000000000000000000000000000000008152905191925073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001691634203285691600480820192602092909190829003018186803b158015614c6f57600080fd5b505afa158015614c83573d6000803e3d6000fd5b505050506040513d6020811015614c9957600080fd5b50519150614cb4620186a0611fec8a8563ffffffff614f1516565b9250614cc6888463ffffffff61417e16565b97506000808273ffffffffffffffffffffffffffffffffffffffff1663d9da4fe68c614d0a5760075473ffffffffffffffffffffffffffffffffffffffff16614d24565b60065473ffffffffffffffffffffffffffffffffffffffff165b8d614d475760065473ffffffffffffffffffffffffffffffffffffffff16614d61565b60075473ffffffffffffffffffffffffffffffffffffffff165b8d60008e8e6040518763ffffffff1660e01b8152600401808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001858152602001848152602001806020018281038252848482818152602001925080828437600081840152601f19601f820116905080830192505050975050505050505050604080518083038186803b158015614e3857600080fd5b505afa158015614e4c573d6000803e3d6000fd5b505050506040513d6040811015614e6257600080fd5b5080516020909101519092509050614e808a8363ffffffff614f1516565b965060016008541115614ed757600760149054906101000a900460ff1615158b151514614ec057600854614ebb90889063ffffffff614f8816565b614ed4565b600854614ed490889063ffffffff614f1516565b96505b614ee7878263ffffffff614f8816565b9650614f0581611fec84670de0b6b3a764000063ffffffff614f1516565b9550505050945094509450949050565b600082614f24575060006141c3565b82820282848281614f3157fe5b04146141c0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806153206021913960400191505060405180910390fd5b60006141c083836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250615278565b73ffffffffffffffffffffffffffffffffffffffff821660009081526004602052604081205481908061505e57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f50726f7669646572206c6971756964697479206e6f7420666f756e6400000000604482015290519081900360640190fd5b831515600090815260036020526040812080548390811061507b57fe5b60009182526020822060016008909202019081018054600283018054928590559390935591955090935090506150f8856150cd5760065473ffffffffffffffffffffffffffffffffffffffff166150e7565b60075473ffffffffffffffffffffffffffffffffffffffff165b33613c91878763ffffffff61489f16565b50509250929050565b600081848411156151aa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561516f578181015183820152602001615157565b50505050905090810190601f16801561519c5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b606060006151c783604063ffffffff61489f16565b36101561523557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f496e76616c6964206f66666572206c6973740000000000000000000000000000604482015290519081900360640190fd5b60208301356020810280604086010136101561525057600080fd5b6040516020820181016040528281528160408701602083013795602091909101945092505050565b600081836152e1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181815283516024840152835190928392604490910191908501908083836000831561516f578181015183820152602001615157565b5060008385816152ed57fe5b0495945050505050565b60008085851115615306578182fd5b83861115615312578182fd5b505082019391909203915056fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a2646970667358221220f4061932b7e3613d6602cab8cb1c9cc4b93a7fd546923af771d78a7af4f5abff64736f6c634300060b0033"
}