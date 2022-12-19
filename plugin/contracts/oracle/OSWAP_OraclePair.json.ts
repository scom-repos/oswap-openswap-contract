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
                    "name": "expire",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "enable",
                    "type": "bool"
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
                    "name": "delegator",
                    "type": "address"
                },
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
                }
            ],
            "name": "DelegatorPauseOffer",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "delegator",
                    "type": "address"
                },
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
                }
            ],
            "name": "DelegatorResumeOffer",
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
                    "name": "expire",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "enable",
                    "type": "bool"
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
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "expire",
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
                    "name": "provider",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "delegator",
                    "type": "address"
                }
            ],
            "name": "SetDelegator",
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
                    "name": "afterIndex",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "expire",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "enable",
                    "type": "bool"
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
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "delegator",
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
            "inputs": [],
            "name": "feeBalance",
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
                    "name": "staked",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_afterIndex",
                    "type": "uint256"
                }
            ],
            "name": "findPosition",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "afterIndex",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "nextIndex",
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
                }
            ],
            "name": "first",
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
            "name": "getQueue",
            "outputs": [
                {
                    "internalType": "uint256[]",
                    "name": "index",
                    "type": "uint256[]"
                },
                {
                    "internalType": "address[]",
                    "name": "provider",
                    "type": "address[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "amount",
                    "type": "uint256[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "staked",
                    "type": "uint256[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "expire",
                    "type": "uint256[]"
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
                    "name": "from",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "count",
                    "type": "uint256"
                }
            ],
            "name": "getQueueFromIndex",
            "outputs": [
                {
                    "internalType": "uint256[]",
                    "name": "index",
                    "type": "uint256[]"
                },
                {
                    "internalType": "address[]",
                    "name": "provider",
                    "type": "address[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "amount",
                    "type": "uint256[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "staked",
                    "type": "uint256[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "expire",
                    "type": "uint256[]"
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
                    "name": "expire",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "privateReplenish",
                    "type": "bool"
                },
                {
                    "internalType": "bool",
                    "name": "isActive",
                    "type": "bool"
                },
                {
                    "internalType": "bool",
                    "name": "enabled",
                    "type": "bool"
                },
                {
                    "internalType": "uint256",
                    "name": "prev",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "next",
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
                    "name": "provider",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "direction",
                    "type": "bool"
                }
            ],
            "name": "pauseOffer",
            "outputs": [],
            "stateMutability": "nonpayable",
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
                    "internalType": "bool",
                    "name": "direction",
                    "type": "bool"
                },
                {
                    "internalType": "uint256",
                    "name": "startingIndex",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "limit",
                    "type": "uint256"
                }
            ],
            "name": "purgeExpire",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "purge",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "name": "queueSize",
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
                    "name": "afterIndex",
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
                    "name": "expire",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "enable",
                    "type": "bool"
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
                    "name": "afterIndex",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amountIn",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "expire",
                    "type": "uint256"
                }
            ],
            "name": "replenish",
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
                    "name": "afterIndex",
                    "type": "uint256"
                }
            ],
            "name": "resumeOffer",
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
                    "internalType": "address",
                    "name": "_delegator",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "fee",
                    "type": "uint256"
                }
            ],
            "name": "setDelegator",
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
                    "internalType": "bool",
                    "name": "_replenish",
                    "type": "bool"
                }
            ],
            "name": "setPrivateReplenish",
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
        }
    ],
    "bytecode": "610100604052600180553480156200001657600080fd5b5033606081901b6080526000805460ff1916600117815560408051635aa6e67560e01b81529051919291635aa6e67591600480820192602092909190829003018186803b1580156200006757600080fd5b505afa1580156200007c573d6000803e3d6000fd5b505050506040513d60208110156200009357600080fd5b50516001600160601b0319606082901b1660a0526040805163b716d46360e01b815290519192506001600160a01b0383169163b716d46391600480820192602092909190829003018186803b158015620000ec57600080fd5b505afa15801562000101573d6000803e3d6000fd5b505050506040513d60208110156200011857600080fd5b505160601b6001600160601b03191660e0526040805163506a428560e01b81529051339163506a4285916004808301926020929190829003018186803b1580156200016257600080fd5b505afa15801562000177573d6000803e3d6000fd5b505050506040513d60208110156200018e57600080fd5b50516001600160601b031960609190911b1660c0525060805160601c60a05160601c60c05160601c60e05160601c615b266200024f60003980610c8d52806113405280611d605280611dd3528061296652806131ba528061336f52806138ff525080611a8352806124ff52806125af5280613090525080612bf7525080610f71528061196e5280612035528061225c5280612cef528061328152806137de528061399e5280613a3652806141fb5280614d3552806151cb5250615b266000f3fe608060405234801561001057600080fd5b50600436106102fe5760003560e01c80636c94fb441161019c578063bd2f54d9116100ee578063db13653c11610097578063f1591f3311610071578063f1591f3314610c40578063f5ee334814610c5f578063fff6cae914610c7e576102fe565b8063db13653c14610b5a578063e4f2fd8f14610bea578063e53c5d5314610c15576102fe565b8063d21220a7116100c8578063d21220a714610aae578063d519f64d14610ab6578063da863e1214610b2f576102fe565b8063bd2f54d914610a65578063bebf7a6114610a9e578063c45a015514610aa6576102fe565b80639749d21311610150578063ae925e251161012a578063ae925e2514610a00578063b2901aa314610a41578063b8f7a66514610a49576102fe565b80639749d21314610969578063a26651e714610971578063a9b34c5e146109e1576102fe565b80637a6a5e1b116101815780637a6a5e1b14610926578063835daf6c1461095957806393bc9dfe14610961576102fe565b80636c94fb44146108d45780636d813c3c146108f3576102fe565b8063506a4285116102555780635a6b49781161020957806361bc221a116101e357806361bc221a14610832578063685639a91461083a5780636b4afee1146108cc576102fe565b80635a6b49781461068f5780635aa6e6751461082257806360b71d4e1461082a576102fe565b8063539e50821161023a578063539e50821461064c578063577e6d081461067f5780635a6af09d14610687576102fe565b8063506a4285146105e2578063517b8fc6146105ea576102fe565b8063284d8c95116102b75780633c6d5c72116102915780633c6d5c7214610531578063429922ef14610552578063485cc955146105a7576102fe565b8063284d8c951461044a5780633b19103b146104855780633c1e6ff514610529576102fe565b806305268cff116102e857806305268cff146103c45780630dfe1681146103f557806321cbf789146103fd576102fe565b8062113e0814610303578063022c0d9f14610329575b600080fd5b61030b610c86565b60408051938452602084019290925282820152519081900360600190f35b6103c26004803603608081101561033f57600080fd5b81359160208101359173ffffffffffffffffffffffffffffffffffffffff604083013516919081019060808101606082013564010000000081111561038357600080fd5b82018360208201111561039557600080fd5b803590602001918460018302840111640100000000831117156103b757600080fd5b509092509050610e9a565b005b6103cc61133e565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6103cc611362565b6103c2600480360360a081101561041357600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060208101351515906040810135906060810135906080013561137e565b6103c26004803603604081101561046057600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813516906020013515156116b0565b6105176004803603606081101561049b57600080fd5b73ffffffffffffffffffffffffffffffffffffffff823516916020810135918101906060810160408201356401000000008111156104d857600080fd5b8201836020820111156104ea57600080fd5b8035906020019184600183028401116401000000008311171561050c57600080fd5b509092509050611839565b60408051918252519081900360200190f35b6105176118e1565b6105396118e7565b6040805192835260208301919091528051918290030190f35b610517600480360360c081101561056857600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602081013515159060408101359060608101359060808101359060a0013515156118f1565b6103c2600480360360408110156105bd57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602001351661201d565b6103cc6124fd565b6103c2600480360361010081101561060157600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602081013515159060408101359060608101359060808101359060a08101359060c08101359060e001351515612521565b6103cc6004803603602081101561066257600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16612a9f565b610517612ac7565b610517612acd565b6106ba600480360360608110156106a557600080fd5b50803515159060208101359060400135612ad3565b60405180806020018060200180602001806020018060200186810386528b818151815260200191508051906020019060200280838360005b8381101561070a5781810151838201526020016106f2565b5050505090500186810385528a818151815260200191508051906020019060200280838360005b83811015610749578181015183820152602001610731565b50505050905001868103845289818151815260200191508051906020019060200280838360005b83811015610788578181015183820152602001610770565b50505050905001868103835288818151815260200191508051906020019060200280838360005b838110156107c75781810151838201526020016107af565b50505050905001868103825287818151815260200191508051906020019060200280838360005b838110156108065781810151838201526020016107ee565b505050509050019a505050505050505050505060405180910390f35b6103cc612bf5565b610517612c19565b610517612c1f565b6105176004803603606081101561085057600080fd5b73ffffffffffffffffffffffffffffffffffffffff8235169160208101359181019060608101604082013564010000000081111561088d57600080fd5b82018360208201111561089f57600080fd5b803590602001918460018302840111640100000000831117156108c157600080fd5b509092509050612c25565b610517612fd3565b610517600480360360208110156108ea57600080fd5b50351515612fd9565b6105176004803603602081101561090957600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16612feb565b61030b6004803603602081101561093c57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16612ffd565b6105176131f8565b6105176131fe565b6103c2613204565b6109ac6004803603604081101561098757600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813516906020013515156133b6565b6040805196875260208701959095528585019390935260608501919091526080840152151560a0830152519081900360c00190f35b6103c2600480360360208110156109f757600080fd5b50351515613420565b6103c260048036036060811015610a1657600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813516906020810135151590604001356135b1565b610517613776565b610a5161377c565b604080519115158252519081900360200190f35b6103c260048036036040811015610a7b57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135613785565b610a5161397b565b6103cc61399c565b6103cc6139c0565b61051760048036036040811015610acc57600080fd5b813515159190810190604081016020820135640100000000811115610af057600080fd5b820183602082011115610b0257600080fd5b80359060200191846001830284011164010000000083111715610b2457600080fd5b5090925090506139dc565b61053960048036036060811015610b4557600080fd5b50803515159060208101359060400135613c1b565b610b7f60048036036040811015610b7057600080fd5b50803515159060200135613dac565b6040805173ffffffffffffffffffffffffffffffffffffffff909b168b5260208b0199909952898901979097526060890195909552608088019390935290151560a0870152151560c0860152151560e085015261010084015261012083015251908190036101400190f35b61051760048036036060811015610c0057600080fd5b50803515159060208101359060400135613e26565b6106ba60048036036060811015610c2b57600080fd5b50803515159060208101359060400135613f32565b61051760048036036020811015610c5657600080fd5b503515156141d1565b6103c260048036036020811015610c7557600080fd5b503515156141e3565b6103c26142b8565b60008060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015610d2857600080fd5b505afa158015610d3c573d6000803e3d6000fd5b505050506040513d6020811015610d5257600080fd5b5051600854604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905173ffffffffffffffffffffffffffffffffffffffff909216916370a0823191602480820192602092909190829003018186803b158015610dc557600080fd5b505afa158015610dd9573d6000803e3d6000fd5b505050506040513d6020811015610def57600080fd5b5051600954604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905173ffffffffffffffffffffffffffffffffffffffff909216916370a0823191602480820192602092909190829003018186803b158015610e6257600080fd5b505afa158015610e76573d6000803e3d6000fd5b505050506040513d6020811015610e8c57600080fd5b505191945092509050909192565b600154600114610f0b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f4c4f434b45440000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b60006001553233148015610f255750610f233361433c565b155b80610fe65750604080517f3af32abf000000000000000000000000000000000000000000000000000000008152336004820152905173ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001691633af32abf9160248083019260209291908290030181600087803b158015610fb957600080fd5b505af1158015610fcd573d6000803e3d6000fd5b505050506040513d6020811015610fe357600080fd5b50515b61105157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f4e6f742066726f6d2075736572206f722077686974656c697374656400000000604482015290519081900360640190fd5b60005460ff166110c257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f5041555345440000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b600c54600854604080517f70a082310000000000000000000000000000000000000000000000000000000081523060048201529051600093849361117893919273ffffffffffffffffffffffffffffffffffffffff909116916370a08231916024808301926020929190829003018186803b15801561114057600080fd5b505afa158015611154573d6000803e3d6000fd5b505050506040513d602081101561116a57600080fd5b50519063ffffffff61434216565b600d54600954604080517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015290519395506111f39373ffffffffffffffffffffffffffffffffffffffff909216916370a0823191602480820192602092909190829003018186803b15801561114057600080fd5b905060008715801561120457508615155b1561125c57611218866001858a898961438d565b60095491985091506112419073ffffffffffffffffffffffffffffffffffffffff1687896147d2565b600e54611254908263ffffffff6149df16565b600e55611328565b8715801590611269575086155b156112c15761127d866000848b898961438d565b60085491995091506112a69073ffffffffffffffffffffffffffffffffffffffff16878a6147d2565b600f546112b9908263ffffffff6149df16565b600f55611328565b604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f4e6f7420737570706f7274656400000000000000000000000000000000000000604482015290519081900360640190fd5b611330614a53565b505060018055505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60085473ffffffffffffffffffffffffffffffffffffffff1681565b6001546001146113ef57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f4c4f434b45440000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6000600181905573ffffffffffffffffffffffffffffffffffffffff86168152600660205260409020548061148557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f50726f7669646572206e6f7420666f756e640000000000000000000000000000604482015290519081900360640190fd5b84151560009081526005602081815260408084208585529091529091209081015460ff1615806114ca575073ffffffffffffffffffffffffffffffffffffffff871633145b61153557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f4e6f742066726f6d2070726f7669646572000000000000000000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff8716331461158957600481015461158157851560009081526005602090815260408083208584529091529020600401549250611589565b806004015492505b4283116115f757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f416c726561647920657870697265640000000000000000000000000000000000604482015290519081900360640190fd5b600381015461160c908563ffffffff61434216565b8160030181905550611635868360008888888760050160029054906101000a900460ff16614a66565b600281015460038201546040805187815260208101939093528281019190915260608201859052518715159173ffffffffffffffffffffffffffffffffffffffff8a16917f49e6e6744d56bfe4585849d662ac11ba289d26bc6f22c021f794dd6c452f09929181900360800190a35050600180555050505050565b8173ffffffffffffffffffffffffffffffffffffffff81163314806116fb575073ffffffffffffffffffffffffffffffffffffffff8181166000908152600760205260409020541633145b61176657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f4e6f7420612064656c656761746f720000000000000000000000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff831660009081526006602090815260408083205485151584526005808452828520828652909352922090810154610100900460ff16156117c1576117bf8483614c38565b505b6005810180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ffff1690556040518415159073ffffffffffffffffffffffffffffffffffffffff87169033907f3a699c5c4258bdd17cd89244a23fbb80a6ae96fc1f9fd5ea6f7aea92b5a434cc90600090a45050505050565b60008084116118a957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f494e53554646494349454e545f494e5055545f414d4f554e5400000000000000604482015290519081900360640190fd5b6008546118d39073ffffffffffffffffffffffffffffffffffffffff878116911614858585614cd3565b509298975050505050505050565b600a5481565b600c54600d549091565b600060015460011461196457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f4c4f434b45440000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b60006001819055507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663b8f7a6656040518163ffffffff1660e01b8152600401602060405180830381600087803b1580156119d457600080fd5b505af11580156119e8573d6000803e3d6000fd5b505050506040513d60208110156119fe57600080fd5b5051611a6b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f474c4f42414c4c59205041555345440000000000000000000000000000000000604482015290519081900360640190fd5b3373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161480611ac457503373ffffffffffffffffffffffffffffffffffffffff8816145b611b2f57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f4e6f742066726f6d20726f75746572206f72206f776e65720000000000000000604482015290519081900360640190fd5b60005460ff16611ba057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f5041555345440000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff8716611c2257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f4e756c6c20616464726573730000000000000000000000000000000000000000604482015290519081900360640190fd5b428311611c9057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f416c726561647920657870697265640000000000000000000000000000000000604482015290519081900360640190fd5b6000806000611c9d610c86565b92509250925087611cb9600b548561434290919063ffffffff16565b1015611d2657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f496e76616c696420666565496e00000000000000000000000000000000000000604482015290519081900360640190fd5b601054611d39908963ffffffff6149df16565b60105560008915611db757600d54611d5890839063ffffffff61434216565b6009549091507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff90811691161415611db257611daf818a63ffffffff61434216565b90505b611e25565b600c54611dcb90849063ffffffff61434216565b6008549091507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff90811691161415611e2557611e22818a63ffffffff61434216565b90505b73ffffffffffffffffffffffffffffffffffffffff8b1660009081526006602052604090205494508415611e6757611e628a868b8b858c8c614a66565b611f65565b600280546001019081905573ffffffffffffffffffffffffffffffffffffffff8c166000908152600660205260409020819055945080611f0857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f4e6f20616d6f756e7420696e0000000000000000000000000000000000000000604482015290519081900360640190fd5b611f188b8b878c8c868d8d615036565b60408051868152905173ffffffffffffffffffffffffffffffffffffffff8d16917f39944be52180e3811405a754586ce476cd9d34d40e98835c2b4c77eb26426b5b919081900360200190a25b600b849055600c839055600d82905589151560008181526005602090815260408083208984528252918290206001810154600282015484518f8152938401879052838501919091526060830152608082018b905289151560a0830152915191929173ffffffffffffffffffffffffffffffffffffffff8f16917ff28d90091af29243a415eaca7c0fee637460bb97faf17a52f7dbe8bd13f70b55919081900360c00190a3505060018055509198975050505050505050565b3373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016146120c157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f464f5242494444454e0000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6008805473ffffffffffffffffffffffffffffffffffffffff8085167fffffffffffffffffffffffff00000000000000000000000000000000000000009283161792839055600980548583169084161790819055600080527f07f793f8fd62a1688d9e2ebd2c8b2e8ab72cd080250f71b53bf5b4113f244d5e80548416309081179091557f05b8ccbb9d4d8fb16ea74ce3c29a41f1b461fbdaff4714a0d9a8eb05499746bc6020527f45d21ede0cb86a9bc9f3a728b8ad730cd840abb3d7468e2d1713e27e21c48d2880549094161790925590811691161061220457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f496e76616c696420746f6b656e2070616972206f726465720000000000000000604482015290519081900360640190fd5b600854600954604080517f52a03c0300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff93841660048201529183166024830152516000927f000000000000000000000000000000000000000000000000000000000000000016916352a03c03916044808301926020929190829003018186803b1580156122a257600080fd5b505afa1580156122b6573d6000803e3d6000fd5b505050506040513d60208110156122cc57600080fd5b5051905073ffffffffffffffffffffffffffffffffffffffff811661235257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f4e6f206f7261636c6520666f756e640000000000000000000000000000000000604482015290519081900360640190fd5b600854604080517f313ce567000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff169163313ce567916004808301926020929190829003018186803b1580156123bd57600080fd5b505afa1580156123d1573d6000803e3d6000fd5b505050506040513d60208110156123e757600080fd5b5051600954604080517f313ce567000000000000000000000000000000000000000000000000000000008152905192935060009273ffffffffffffffffffffffffffffffffffffffff9092169163313ce56791600480820192602092909190829003018186803b15801561245a57600080fd5b505afa15801561246e573d6000803e3d6000fd5b505050506040513d602081101561248457600080fd5b5051600980547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff1660ff858116818516117401000000000000000000000000000000000000000090810292909217928390559293509004166124e8578082036124ec565b8181035b60ff16600a90810a90555050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60015460011461259257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f4c4f434b45440000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b60006001553373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614806125f057503373ffffffffffffffffffffffffffffffffffffffff8916145b61265b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f4e6f742066726f6d20726f75746572206f72206f776e65720000000000000000604482015290519081900360640190fd5b4282116126c957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f416c726561647920657870697265640000000000000000000000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff88166000908152600660205260409020548061275b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f50726f7669646572206c6971756964697479206e6f7420666f756e6400000000604482015290519081900360640190fd5b87151560009081526005602090815260408083208484529091528120600281015490919061278f908863ffffffff61434216565b90508015806127a657506127a28a6151c7565b8110155b61281157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f4d696e69756d206c6f742073697a65206e6f74206d6574000000000000000000604482015290519081900360640190fd5b6001820154600090612829908b63ffffffff61434216565b6005840180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ffff1662010000881515021790559050871561286c57600283018290555b891561287a57600183018190555b600383015461288f908863ffffffff61434216565b6003840155600483018690558415612927576005830154610100900460ff16156129145760008a1180156128f0575088841415806128f057508a15156000908152600560209081526040808320600787015484529091529020600101548111155b1561290f576128ff8b856152d4565b505061290f8b85838c868b615383565b612922565b6129228b85838c868b615383565b612945565b6005830154610100900460ff1615612945576129438b85614c38565b505b891561298c5760105461295e908b63ffffffff61434216565b60105561298c7f0000000000000000000000000000000000000000000000000000000000000000338c6147d2565b600088118061299b5750600087115b156129f6576129f68b6129c65760085473ffffffffffffffffffffffffffffffffffffffff166129e0565b60095473ffffffffffffffffffffffffffffffffffffffff165b336129f18b8b63ffffffff6149df16565b6147d2565b600183015460028401546003850154604080518e8152602081018d90528082018c90526060810194909452608084019290925260a083015260c0820188905286151560e0830152518c15159173ffffffffffffffffffffffffffffffffffffffff8f16917f3349af395fb66f8dc0da9c7cb36de02b3ba8f46b9299c8db3ffb916586432289918190036101000190a3612a8d614a53565b50506001805550505050505050505050565b60076020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b600f5481565b600c5481565b821515600090815260046020526040902054606090819081908190819080881015612bc657808710612b21578015612b1b57612b1681600163ffffffff61434216565b612b1e565b60005b96505b6000612b4489612b388a600163ffffffff6149df16565b9063ffffffff61434216565b8a15156000908152600360209081526040808320546005835281842081855290925282209293509091905b8b831015612ba757508b1515600090815260056020908152604080832060079094015480845293909152902060019092019190612b6f565b612bb28d8286613f32565b995099509950995099505050505050612bea565b50506040805160008082526020820190815281830190925294509250839150819050805b939792965093509350565b7f000000000000000000000000000000000000000000000000000000000000000081565b60115481565b60025481565b6000808411612c9557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f494e53554646494349454e545f4f55545055545f414d4f554e54000000000000604482015290519081900360640190fd5b600854600954604080517f069d188f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff938416600482015291831660248301525160009283927f00000000000000000000000000000000000000000000000000000000000000009091169163069d188f91604480820192606092909190829003018186803b158015612d3857600080fd5b505afa158015612d4c573d6000803e3d6000fd5b505050506040513d6060811015612d6257600080fd5b508051602090910151600954919350915073ffffffffffffffffffffffffffffffffffffffff888116911614600081612db35760095473ffffffffffffffffffffffffffffffffffffffff16612dcd565b60085473ffffffffffffffffffffffffffffffffffffffff165b90506000808573ffffffffffffffffffffffffffffffffffffffff1663d9da4fe6848d60008e8e8e6040518763ffffffff1660e01b8152600401808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001858152602001848152602001806020018281038252848482818152602001925080828437600081840152601f19601f820116905080830192505050975050505050505050604080518083038186803b158015612ec757600080fd5b505afa158015612edb573d6000803e3d6000fd5b505050506040513d6040811015612ef157600080fd5b5080516020909101519092509050612f0f8a8263ffffffff6154a216565b96506001600a541115612f6757600960149054906101000a900460ff1615158415151415612f5057600a54612f4b90889063ffffffff61551516565b612f64565b600a54612f6490889063ffffffff6154a216565b96505b612f886001612f7c898563ffffffff61551516565b9063ffffffff6149df16565b9650612fc46001612f7c612fa5620186a08963ffffffff61434216565b612fb88b620186a063ffffffff6154a216565b9063ffffffff61551516565b9b9a5050505050505050505050565b600d5481565b60036020526000908152604090205481565b60066020526000908152604090205481565b600080600060015460011461307357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f4c4f434b45440000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b60006001553373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614806130d157503373ffffffffffffffffffffffffffffffffffffffff8516145b61313c57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f4e6f742066726f6d20726f75746572206f72206f776e65720000000000000000604482015290519081900360640190fd5b60008060008061314d886001615557565b9097509093509050613160886000615557565b9098509094509150613178848463ffffffff6149df16565b945061318a878363ffffffff6149df16565b965061319c868263ffffffff6149df16565b6010549096506131b2908663ffffffff61434216565b6010556131e07f000000000000000000000000000000000000000000000000000000000000000033876147d2565b6131e8614a53565b5050600180555092949193509150565b600e5481565b60105481565b60015460011461327557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f4c4f434b45440000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b600060018190555060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663ef3692526040518163ffffffff1660e01b815260040160206040518083038186803b1580156132e557600080fd5b505afa1580156132f9573d6000803e3d6000fd5b505050506040513d602081101561330f57600080fd5b5051600e54600f5460115460085493945091929091906133469073ffffffffffffffffffffffffffffffffffffffff1685856147d2565b60095461336a9073ffffffffffffffffffffffffffffffffffffffff1685846147d2565b6133957f000000000000000000000000000000000000000000000000000000000000000085836147d2565b6000600e819055600f8190556011556133ac614a53565b5050600180555050565b73ffffffffffffffffffffffffffffffffffffffff82166000908152600660209081526040808320548415158452600580845282852082865290935292206001810154600282015460038301546004840154939094015491939092909160ff169295509295509295565b60015460011461349157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f4c4f434b45440000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b600060018190553380825260066020526040909120548061351357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f50726f7669646572206e6f7420666f756e640000000000000000000000000000604482015290519081900360640190fd5b60008181527f05b8ccbb9d4d8fb16ea74ce3c29a41f1b461fbdaff4714a0d9a8eb05499746bc60209081526040808320600590810180549715157fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0098891681179091559484527f1471eb6eb2c5e789fc3de43f8ce62938c7d1836ec861730447e2ada8fd81017b909252909120018054909316179091555060018055565b8273ffffffffffffffffffffffffffffffffffffffff81163314806135fc575073ffffffffffffffffffffffffffffffffffffffff8181166000908152600760205260409020541633145b61366757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f4e6f7420612064656c656761746f720000000000000000000000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff841660009081526006602090815260408083205486151584526005808452828520828652909352922090810154610100900460ff161580156136c15750428160040154115b80156136d957506136d1856151c7565b816002015410155b156136f8576136f8858383600101548785600201548660040154615383565b6005810180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ffff16620100001790556040518515159073ffffffffffffffffffffffffffffffffffffffff88169033907f0a562c834cabe3252799eb49d60bc919314ee5daaad38ad4543773bbffd9610d90600090a4505050505050565b600b5481565b60005460ff1681565b33600081815260076020526040902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8516908117909155156139285760007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166396c669496040518163ffffffff1660e01b815260040160206040518083038186803b15801561384257600080fd5b505afa158015613856573d6000803e3d6000fd5b505050506040513d602081101561386c57600080fd5b505190508015613926578083146138e457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f466565204d69736d617463680000000000000000000000000000000000000000604482015290519081900360640190fd5b6011546138f7908263ffffffff6149df16565b6011556139267f00000000000000000000000000000000000000000000000000000000000000008330846157c1565b505b6040805173ffffffffffffffffffffffffffffffffffffffff85811682529151918316917f49df09fe4d665b253962826a73af1c81a4d8389109f373416bbb0b2c18cd19af9181900360200190a2505050565b60095474010000000000000000000000000000000000000000900460ff1681565b7f000000000000000000000000000000000000000000000000000000000000000081565b60095473ffffffffffffffffffffffffffffffffffffffff1681565b600854600954604080517f069d188f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff938416600482015291831660248301525160009283927f00000000000000000000000000000000000000000000000000000000000000009091169163069d188f91604480820192606092909190829003018186803b158015613a7f57600080fd5b505afa158015613a93573d6000803e3d6000fd5b505050506040513d6060811015613aa957600080fd5b5051905060008086613ada5760095460085473ffffffffffffffffffffffffffffffffffffffff9182169116613afb565b60085460095473ffffffffffffffffffffffffffffffffffffffff91821691165b915091508273ffffffffffffffffffffffffffffffffffffffff1663495e4348838389896040518563ffffffff1660e01b8152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001806020018281038252848482818152602001925080828437600081840152601f19601f8201169050808301925050509550505050505060206040518083038186803b158015613be457600080fd5b505afa158015613bf8573d6000803e3d6000fd5b505050506040513d6020811015613c0e57600080fd5b5051979650505050505050565b80600081613c3b5750831515600090815260036020526040902054613d40565b84151560009081526005602090815260408083208584529091529020805473ffffffffffffffffffffffffffffffffffffffff16613cda57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f496e76616c696420696e64657800000000000000000000000000000000000000604482015290519081900360640190fd5b8481600101541015613d19576006810154925082613cf757613d19565b5084151560009081526005602090815260408083208584529091529020613cda565b8215613d29578060070154613d3c565b8515156000908152600360205260409020545b9150505b8015613da457841515600090815260056020908152604080832084845290915290205b80600101548511613da257600781015491925081613d8057613da2565b5084151560009081526005602090815260408083208484529091529020613d63565b505b935093915050565b600560208181526000938452604080852090915291835291208054600182015460028301546003840154600485015495850154600686015460079096015473ffffffffffffffffffffffffffffffffffffffff909516969395929491939260ff80831693610100840482169362010000900490911691908a565b6000600154600114613e9957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f4c4f434b45440000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6000600155825b8015801590613eaf5750600083115b15613f2657841515600090815260056020908152604080832084845290915290206004810154421115613ef357613ee68683614c38565b6001909301929150613efb565b806007015491505b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90920191613ea0565b50600180559392505050565b60608060608060608567ffffffffffffffff81118015613f5157600080fd5b50604051908082528060200260200182016040528015613f7b578160200160208202803683370190505b5094508567ffffffffffffffff81118015613f9557600080fd5b50604051908082528060200260200182016040528015613fbf578160200160208202803683370190505b5093508567ffffffffffffffff81118015613fd957600080fd5b50604051908082528060200260200182016040528015614003578160200160208202803683370190505b5092508567ffffffffffffffff8111801561401d57600080fd5b50604051908082528060200260200182016040528015614047578160200160208202803683370190505b5091508567ffffffffffffffff8111801561406157600080fd5b5060405190808252806020026020018201604052801561408b578160200160208202803683370190505b5088151560009081526005602090815260408083208b8452909152812091925090885b88831080156140bc57508015155b156141c357808884815181106140ce57fe5b60209081029190910101528154875173ffffffffffffffffffffffffffffffffffffffff9091169088908590811061410257fe5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050816002015486848151811061414d57fe5b602002602001018181525050816001015485848151811061416a57fe5b602002602001018181525050816004015484848151811061418757fe5b6020908102919091018101919091528b1515600090815260058252604080822060079095015480835294909252206001909301929190506140ae565b505050939792965093509350565b60046020526000908152604090205481565b3373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161461428757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f464f5242494444454e0000000000000000000000000000000000000000000000604482015290519081900360640190fd5b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016911515919091179055565b60015460011461432957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f4c4f434b45440000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6000600155614336614a53565b60018055565b3b151590565b600061438483836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525061599f565b90505b92915050565b60008060008060008060006143a48c8c8b8b614cd3565b939a509196509450925090508987101561441f57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f494e53554646494349454e545f414d4f554e5400000000000000000000000000604482015290519081900360640190fd5b8061442c578a945061446a565b6144556402540be400612fb8614448858563ffffffff6154a216565b8e9063ffffffff6154a216565b95506144678b8763ffffffff61434216565b94505b8b15158d73ffffffffffffffffffffffffffffffffffffffff167f0148b571d5049091b679cb2ccda30fb06d3aecaef641a0515a317498893d7da3868e8b888c604051808681526020018581526020018481526020018381526020018281526020019550505050505060405180910390a3505050508715156000908152600360205260408120548491805b60008411801561450457508215155b15614755578b15156000908152600560209081526040808320868452909152902060048101549092504211156145455761453e8c84614c38565b9250614750565b508a156000908152600560209081526040808320858452909152902060028201548085106146635761457d858263ffffffff61434216565b9450600061459589612fb8898563ffffffff6154a216565b60038401549091506145ad908263ffffffff6149df16565b8360030181905550600084600201819055508d15158460000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f5a4c914458527a84b907dc0c2c69173c8d117acce38a2b58e316cdad2d3c6c228484600088600301546040518085815260200184815260200183815260200182815260200194505050505060405180910390a361465b8e86614c38565b94505061474e565b600061467989612fb8898963ffffffff6154a216565b6003840154909150614691908263ffffffff6149df16565b600384015560028401546146ab908763ffffffff61434216565b84600201819055508d15158460000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f5a4c914458527a84b907dc0c2c69173c8d117acce38a2b58e316cdad2d3c6c228884886002015488600301546040518085815260200184815260200183815260200182815260200194505050505060405180910390a360009550505b505b6144f5565b83156147c257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416d6f756e74206578636565647320617661696c61626c652066756e64000000604482015290519081900360640190fd5b5050505050965096945050505050565b604080518082018252601981527f7472616e7366657228616464726573732c75696e743235362900000000000000602091820152815173ffffffffffffffffffffffffffffffffffffffff85811660248301526044808301869052845180840390910181526064909201845291810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb000000000000000000000000000000000000000000000000000000001781529251815160009460609489169392918291908083835b602083106148d857805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0909201916020918201910161489b565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d806000811461493a576040519150601f19603f3d011682016040523d82523d6000602084013e61493f565b606091505b509150915081801561496d57508051158061496d575080806020019051602081101561496a57600080fd5b50515b6149d857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f5452414e534645525f4641494c45440000000000000000000000000000000000604482015290519081900360640190fd5b5050505050565b60008282018381101561438457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b614a5b610c86565b600d55600c55600b55565b861515600090815260056020908152604080832089845290915281206002810154909190614a9a908663ffffffff6149df16565b9050614aa5896151c7565b811015614b1357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f4d696e69756d206c6f742073697a65206e6f74206d6574000000000000000000604482015290519081900360640190fd5b6001820154600090614b2b908963ffffffff6149df16565b6005840180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ffff16620100008715150217905590508515614b6e57600283018290555b8715614b7c57600183018190555b600483018590558315614c0e576005830154610100900460ff1615614bfb57600088118015614bd757508689141580614bd7575089151560009081526005602090815260408083206006870154845290915290206001015481115b15614bf657614be68a8a6152d4565b5050614bf68a8a838a868a615383565b614c09565b614c098a8a838a868a615383565b614c2c565b6005830154610100900460ff1615614c2c57614c2a8a8a614c38565b505b50505050505050505050565b6000614c4483836152d4565b84151560008181526005602081815260408084208985528252808420600681018590556007810185905592830180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff16905593835260049052919020549193509150614cb890600163ffffffff61434216565b93151560009081526004602052604090209390935592915050565b600854600954604080517f069d188f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9384166004820152918316602483015251600092839283928392839283927f00000000000000000000000000000000000000000000000000000000000000009092169163069d188f91604480820192606092909190829003018186803b158015614d7e57600080fd5b505afa158015614d92573d6000803e3d6000fd5b505050506040513d6060811015614da857600080fd5b50805160208201516040909201519194509092509050614dd5620186a0612fb88b8663ffffffff6154a216565b9350614de7898563ffffffff61434216565b98506000808273ffffffffffffffffffffffffffffffffffffffff1663d9da4fe68d614e2b5760095473ffffffffffffffffffffffffffffffffffffffff16614e45565b60085473ffffffffffffffffffffffffffffffffffffffff165b8e614e685760085473ffffffffffffffffffffffffffffffffffffffff16614e82565b60095473ffffffffffffffffffffffffffffffffffffffff165b8e60008f8f6040518763ffffffff1660e01b8152600401808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001858152602001848152602001806020018281038252848482818152602001925080828437600081840152601f19601f820116905080830192505050975050505050505050604080518083038186803b158015614f5957600080fd5b505afa158015614f6d573d6000803e3d6000fd5b505050506040513d6040811015614f8357600080fd5b5080516020909101519092509050614fa18b8363ffffffff6154a216565b97506001600a541115614ff857600960149054906101000a900460ff1615158c151514614fe157600a54614fdc90899063ffffffff61551516565b614ff5565b600a54614ff590899063ffffffff6154a216565b97505b615008888263ffffffff61551516565b975061502681612fb884670de0b6b3a764000063ffffffff6154a216565b9650505050945094509450945094565b61503f876151c7565b8310156150ad57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f4d696e69756d206c6f742073697a65206e6f74206d6574000000000000000000604482015290519081900360640190fd5b80156150c1576150c1878787878787615383565b9515801560009081526005602081815260408084208a85528252808420805473ffffffffffffffffffffffffffffffffffffffff909d167fffffffffffffffffffffffff00000000000000000000000000000000000000009d8e168117825560018083019b909b556002820198909855600481019690965594820180549a151562010000027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff009c8d168b178116821790925594845282825285842099845298905292902080549098169092178755959095018054909416909117909116909217905550565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663f98126f9836152285760085473ffffffffffffffffffffffffffffffffffffffff16615242565b60095473ffffffffffffffffffffffffffffffffffffffff165b6040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156152a257600080fd5b505afa1580156152b6573d6000803e3d6000fd5b505050506040513d60208110156152cc57600080fd5b505192915050565b811515600090815260056020908152604080832084845290915290206007810154600682015491821561532457841515600090815260056020908152604080832086845290915290206007018290555b811561534d57841515600090815260056020908152604080832085845290915290206006018390555b84151560009081526003602052604090205484141561537b5784151560009081526003602052604090208290555b509250929050565b60008211801561539257504281115b1561549a5760006153a4878686613c1b565b909450905083156153d257861515600090815260056020908152604080832087845290915290206007018690555b80156153fb57861515600090815260056020908152604080832084845290915290206006018690555b8615156000908152600560209081526040808320898452909152902060068101859055600781018290558461543f5787151560009081526003602052604090208790555b6005810154610100900460ff16615497576005810180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff166101001790558715156000908152600460205260409020805460010190555b50505b505050505050565b6000826154b157506000614387565b828202828482816154be57fe5b0414614384576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180615ad06021913960400191505060405180910390fd5b600061438483836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250615a50565b73ffffffffffffffffffffffffffffffffffffffff821660009081526006602052604081205481908190806155ed57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f50726f7669646572206c6971756964697479206e6f7420666f756e6400000000604482015290519081900360640190fd5b84151560009081526005602090815260408083208484529091529020805473ffffffffffffffffffffffffffffffffffffffff88811691161461569157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f466f7262696464656e0000000000000000000000000000000000000000000000604482015290519081900360640190fd5b60018101805460028301805460038501805460009586905592859055939093556005840154919750919550909350610100900460ff16156156d8576156d68683614c38565b505b615729866156fe5760085473ffffffffffffffffffffffffffffffffffffffff16615718565b60095473ffffffffffffffffffffffffffffffffffffffff165b336129f1878763ffffffff6149df16565b600581015460408051878152602081018790528082018690526000606082018190526080820181905260a0820181905260c08201526201000090920460ff16151560e0830152518715159173ffffffffffffffffffffffffffffffffffffffff8a16917f3349af395fb66f8dc0da9c7cb36de02b3ba8f46b9299c8db3ffb91658643228991610100908290030190a350509250925092565b6040805173ffffffffffffffffffffffffffffffffffffffff85811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd0000000000000000000000000000000000000000000000000000000017815292518251600094606094938a169392918291908083835b6020831061589f57805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101615862565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114615901576040519150601f19603f3d011682016040523d82523d6000602084013e615906565b606091505b5091509150818015615934575080511580615934575080806020019051602081101561593157600080fd5b50515b61549a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f5452414e534645525f46524f4d5f4641494c4544000000000000000000000000604482015290519081900360640190fd5b60008184841115615a48576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015615a0d5781810151838201526020016159f5565b50505050905090810190601f168015615a3a5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b60008183615ab9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201818152835160248401528351909283926044909101919085019080838360008315615a0d5781810151838201526020016159f5565b506000838581615ac557fe5b049594505050505056fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a26469706673582212200e9a3ebd32884808124049e14497a204dc55b1f8d83d8843339b00d4d6295b6364736f6c634300060b0033"
}