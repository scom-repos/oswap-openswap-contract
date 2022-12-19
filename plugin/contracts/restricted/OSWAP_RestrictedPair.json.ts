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
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "index",
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
                    "name": "newAmountBalance",
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
                    "internalType": "bool",
                    "name": "direction",
                    "type": "bool"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "offerIndex",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "trader",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "allocation",
                    "type": "uint256"
                }
            ],
            "name": "ApprovedTrader",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "bool",
                    "name": "direction",
                    "type": "bool"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "index",
                    "type": "uint256"
                }
            ],
            "name": "Lock",
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
                    "name": "index",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "allowAll",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "restrictedPrice",
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
            "name": "NewProviderOffer",
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
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "index",
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
                    "name": "receivingOut",
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
                    "name": "newReceivingBalance",
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
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "index",
                    "type": "uint256"
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
                    "name": "newReceivingBalance",
                    "type": "uint256"
                }
            ],
            "name": "SwappedOneOffer",
            "type": "event"
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
                    "name": "index",
                    "type": "uint256"
                }
            ],
            "name": "addLiquidity",
            "outputs": [],
            "stateMutability": "nonpayable",
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
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "approvedTrader",
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
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
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
                    "name": "provider",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "direction",
                    "type": "bool"
                },
                {
                    "internalType": "bool",
                    "name": "allowAll",
                    "type": "bool"
                },
                {
                    "internalType": "uint256",
                    "name": "restrictedPrice",
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
            "name": "createOrder",
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
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "bytes",
                    "name": "",
                    "type": "bytes"
                }
            ],
            "name": "getAmountIn",
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
                    "name": "tokenIn",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amountIn",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "trader",
                    "type": "address"
                },
                {
                    "internalType": "bytes",
                    "name": "",
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
            "inputs": [
                {
                    "internalType": "bool",
                    "name": "direction",
                    "type": "bool"
                },
                {
                    "internalType": "uint256",
                    "name": "offerIndex",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "start",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "length",
                    "type": "uint256"
                }
            ],
            "name": "getApprovedTrader",
            "outputs": [
                {
                    "internalType": "address[]",
                    "name": "trader",
                    "type": "address[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "allocation",
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
                    "name": "offerIndex",
                    "type": "uint256"
                }
            ],
            "name": "getApprovedTraderLength",
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
                    "internalType": "uint256",
                    "name": "start",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "length",
                    "type": "uint256"
                }
            ],
            "name": "getOffers",
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
                    "internalType": "bool[]",
                    "name": "lockedAndAllowAll",
                    "type": "bool[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "receiving",
                    "type": "uint256[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "amountAndPrice",
                    "type": "uint256[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "startDateAndExpire",
                    "type": "uint256[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_provider",
                    "type": "address"
                },
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
                    "name": "length",
                    "type": "uint256"
                }
            ],
            "name": "getProviderOffer",
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
                    "internalType": "bool[]",
                    "name": "lockedAndAllowAll",
                    "type": "bool[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "receiving",
                    "type": "uint256[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "amountAndPrice",
                    "type": "uint256[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "startDateAndExpire",
                    "type": "uint256[]"
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
            "name": "getProviderOfferIndexLength",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "length",
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
                    "name": "trader",
                    "type": "address"
                },
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
                    "name": "length",
                    "type": "uint256"
                }
            ],
            "name": "getTraderOffer",
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
                    "internalType": "bool[]",
                    "name": "lockedAndAllowAll",
                    "type": "bool[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "receiving",
                    "type": "uint256[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "amountAndPrice",
                    "type": "uint256[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "startDateAndExpire",
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
                },
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "isApprovedTrader",
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
                    "name": "direction",
                    "type": "bool"
                },
                {
                    "internalType": "uint256",
                    "name": "index",
                    "type": "uint256"
                }
            ],
            "name": "lockOffer",
            "outputs": [],
            "stateMutability": "nonpayable",
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
                    "internalType": "bool",
                    "name": "locked",
                    "type": "bool"
                },
                {
                    "internalType": "bool",
                    "name": "allowAll",
                    "type": "bool"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "receiving",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "restrictedPrice",
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
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
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
                }
            ],
            "name": "removeAllLiquidity1D",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "totalAmount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "totalReceiving",
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
                    "name": "index",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amountOut",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "receivingOut",
                    "type": "uint256"
                }
            ],
            "name": "removeLiquidity",
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
                    "name": "direction",
                    "type": "bool"
                },
                {
                    "internalType": "uint256",
                    "name": "offerIndex",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "trader",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "allocation",
                    "type": "uint256"
                }
            ],
            "name": "setApprovedTrader",
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
                    "name": "direction",
                    "type": "bool"
                },
                {
                    "internalType": "uint256",
                    "name": "offerIndex",
                    "type": "uint256"
                },
                {
                    "internalType": "address[]",
                    "name": "trader",
                    "type": "address[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "allocation",
                    "type": "uint256[]"
                }
            ],
            "name": "setMultipleApprovedTraders",
            "outputs": [],
            "stateMutability": "nonpayable",
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
                    "internalType": "address",
                    "name": "trader",
                    "type": "address"
                },
                {
                    "internalType": "bytes",
                    "name": "",
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
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "traderAllocation",
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
            "name": "traderOffer",
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
    "bytecode": "610140604052600180553480156200001657600080fd5b5033606081901b60809081526000805460ff191660011781556040805163ea2ed2c160e01b81529051919384938493849363ea2ed2c1926004808301939192829003018186803b1580156200006a57600080fd5b505afa1580156200007f573d6000803e3d6000fd5b505050506040513d60808110156200009657600080fd5b5080516020808301516040808501516060958601516001600160601b031986881b811660a0529684901b90961660c052815163b716d46360e01b815291519499509197509095509293506001600160a01b0387169263b716d4639260048083019392829003018186803b1580156200010d57600080fd5b505afa15801562000122573d6000803e3d6000fd5b505050506040513d60208110156200013957600080fd5b81019080805190602001909291905050506001600160a01b0316610100816001600160a01b031660601b81525050816001600160a01b031660e0816001600160a01b031660601b81525050806001600160a01b0316610120816001600160a01b031660601b81525050600360006001151515158152602001908152602001600020604051806101000160405280306001600160a01b03168152602001600115158152602001600015158152602001600081526020016000815260200160008152602001600081526020016000815250908060018154018082558091505060019003906000526020600020906006020160009091909190915060008201518160000160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060208201518160000160146101000a81548160ff02191690831515021790555060408201518160000160156101000a81548160ff021916908315150217905550606082015181600101556080820151816002015560a0820151816003015560c0820151816004015560e0820151816005015550506003600080151515158152602001908152602001600020604051806101000160405280306001600160a01b03168152602001600115158152602001600015158152602001600081526020016000815260200160008152602001600081526020016000815250908060018154018082558091505060019003906000526020600020906006020160009091909190915060008201518160000160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060208201518160000160146101000a81548160ff02191690831515021790555060408201518160000160156101000a81548160ff021916908315150217905550606082015181600101556080820151816002015560a0820151816003015560c0820151816004015560e0820151816005015550505050505060805160601c60a05160601c60c05160601c60e05160601c6101005160601c6101205160601c615e1c620004e360003980611c005280611f265280612caa52806143b0525080610e50528061105f5280612be55280613e8a5280613ee25280613f3d5280613fe152806140ff5280614149525080611a72528061246952806127cb52806133ec528061369052806141c05280614bea525080612e46528061350b525080611637525080611176528061132152806118ec528061226b528061262e5280612b475280612d335280613545528061507a5250615e1c6000f3fe608060405234801561001057600080fd5b50600436106103145760003560e01c806376701636116101a7578063d21220a7116100ee578063ea5dbbc411610097578063f5ee334811610071578063f5ee334814610dd5578063fa69ce2b14610df4578063fff6cae914610e4157610314565b8063ea5dbbc414610cf6578063ee13b84114610d92578063f060d13914610dcd57610314565b8063db13653c116100c8578063db13653c14610c2a578063db47533e14610ca7578063e5d36ff614610cee57610314565b8063d21220a714610b39578063d38550a714610b41578063d7dc4e4314610b8857610314565b80639f0a3cc111610150578063b8f7a6651161012a578063b8f7a66514610b21578063bebf7a6114610b29578063c45a015514610b3157610314565b80639f0a3cc114610ab9578063a878769314610afa578063b2901aa314610b1957610314565b80639749d213116101815780639749d21314610a625780639cac76ac14610a6a5780639d69dc4e14610ab157610314565b80637670163614610a025780637a6a5e1b14610a27578063835daf6c14610a5a57610314565b8063577e6d081161026b578063625b6ced1161021457806372ca7372116101ee57806372ca7372146108ec5780637401342414610988578063752bc9dc146109dd57610314565b8063625b6ced146107d95780636322fa32146108145780636b4afee1146108e457610314565b80635eff2d01116102455780635eff2d01146106b25780635fd5e2fc1461077c57806360b71d4e146107d157610314565b8063577e6d081461069a5780635a6af09d146106a25780635aa6e675146106aa57610314565b8063364aed84116102cd5780633d0d81d6116102a75780633d0d81d61461045a578063485cc9551461063257806348c0902f1461066f57610314565b8063364aed84146103f05780633c1e6ff5146104315780633c6d5c721461043957610314565b80630dfe1681116102fe5780630dfe1681146103705780631da9a2bd146103785780631deb4995146103af57610314565b8062113e081461031957806305268cff1461033f575b600080fd5b610321610e49565b60408051938452602084019290925282820152519081900360600190f35b61034761105d565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b610347611081565b61039d6004803603604081101561038e57600080fd5b5080351515906020013561109d565b60408051918252519081900360200190f35b61039d600480360360608110156103c557600080fd5b50803515159073ffffffffffffffffffffffffffffffffffffffff60208201351690604001356110c1565b61039d6004803603606081101561040657600080fd5b50803515159073ffffffffffffffffffffffffffffffffffffffff60208201351690604001356110fc565b61039d611121565b610441611127565b6040805192835260208301919091528051918290030190f35b6104856004803603606081101561047057600080fd5b50803515159060208101359060400135611131565b6040518080602001806020018060200180602001806020018060200187810387528d818151815260200191508051906020019060200280838360005b838110156104d95781810151838201526020016104c1565b5050505090500187810386528c818151815260200191508051906020019060200280838360005b83811015610518578181015183820152602001610500565b5050505090500187810385528b818151815260200191508051906020019060200280838360005b8381101561055757818101518382015260200161053f565b5050505090500187810384528a818151815260200191508051906020019060200280838360005b8381101561059657818101518382015260200161057e565b50505050905001878103835289818151815260200191508051906020019060200280838360005b838110156105d55781810151838201526020016105bd565b50505050905001878103825288818151815260200191508051906020019060200280838360005b838110156106145781810151838201526020016105fc565b505050509050019c5050505050505050505050505060405180910390f35b61066d6004803603604081101561064857600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602001351661115e565b005b6103476004803603606081101561068557600080fd5b508035151590602081013590604001356115da565b61039d611629565b61039d61162f565b610347611635565b6106e3600480360360808110156106c857600080fd5b50803515159060208101359060408101359060600135611659565b604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b8381101561072757818101518382015260200161070f565b50505050905001838103825284818151815260200191508051906020019060200280838360005b8381101561076657818101518382015260200161074e565b5050505090500194505050505060405180910390f35b61039d600480360360c081101561079257600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813516906020810135151590604081013515159060608101359060808101359060a0013561186f565b61039d612067565b61039d600480360360408110156107ef57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135151561206d565b61066d6004803603608081101561082a57600080fd5b813515159160208101359181019060608101604082013564010000000081111561085357600080fd5b82018360208201111561086557600080fd5b8035906020019184602083028401116401000000008311171561088757600080fd5b9193909290916020810190356401000000008111156108a557600080fd5b8201836020820111156108b757600080fd5b803590602001918460208302840111640100000000831117156108d957600080fd5b5090925090506120a3565b61039d612180565b61039d6004803603608081101561090257600080fd5b73ffffffffffffffffffffffffffffffffffffffff823581169260208101359260408201359092169181019060808101606082013564010000000081111561094957600080fd5b82018360208201111561095b57600080fd5b8035906020019184600183028401116401000000008311171561097d57600080fd5b509092509050612186565b6109c96004803603606081101561099e57600080fd5b5080351515906020810135906040013573ffffffffffffffffffffffffffffffffffffffff16612414565b604080519115158252519081900360200190f35b61066d600480360360408110156109f357600080fd5b5080351515906020013561243a565b61066d60048036036040811015610a1857600080fd5b508035151590602001356125b3565b61044160048036036020811015610a3d57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166129f5565b61039d612ac4565b61066d612aca565b61048560048036036080811015610a8057600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602081013515159060408101359060600135612c7a565b610347612ca8565b61039d60048036036060811015610acf57600080fd5b5080351515906020810135906040013573ffffffffffffffffffffffffffffffffffffffff16612ccc565b61039d60048036036020811015610b1057600080fd5b50351515612cef565b61039d612d01565b6109c9612d07565b6109c9612d10565b610347612d31565b610347612d55565b61048560048036036080811015610b5757600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602081013515159060408101359060600135612d71565b61066d600480360360a0811015610b9e57600080fd5b81359160208101359173ffffffffffffffffffffffffffffffffffffffff604083013581169260608101359091169181019060a081016080820135640100000000811115610beb57600080fd5b820183602082011115610bfd57600080fd5b80359060200191846001830284011164010000000083111715610c1f57600080fd5b509092509050612d88565b610c4f60048036036040811015610c4057600080fd5b50803515159060200135613329565b6040805173ffffffffffffffffffffffffffffffffffffffff90991689529615156020890152941515878701526060870193909352608086019190915260a085015260c084015260e083015251908190036101000190f35b61066d60048036036080811015610cbd57600080fd5b50803515159060208101359073ffffffffffffffffffffffffffffffffffffffff60408201351690606001356133cc565b6103476133ea565b61039d60048036036080811015610d0c57600080fd5b73ffffffffffffffffffffffffffffffffffffffff8235811692602081013592604082013590921691810190608081016060820135640100000000811115610d5357600080fd5b820183602082011115610d6557600080fd5b80359060200191846001830284011164010000000083111715610d8757600080fd5b50909250905061340e565b61044160048036036040811015610da857600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001351515613477565b610347613509565b61066d60048036036020811015610deb57600080fd5b5035151561352d565b61066d600480360360a0811015610e0a57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602081013515159060408101359060608101359060800135613602565b61066d6137c6565b60008060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015610eeb57600080fd5b505afa158015610eff573d6000803e3d6000fd5b505050506040513d6020811015610f1557600080fd5b5051600954604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905173ffffffffffffffffffffffffffffffffffffffff909216916370a0823191602480820192602092909190829003018186803b158015610f8857600080fd5b505afa158015610f9c573d6000803e3d6000fd5b505050506040513d6020811015610fb257600080fd5b5051600a54604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905173ffffffffffffffffffffffffffffffffffffffff909216916370a0823191602480820192602092909190829003018186803b15801561102557600080fd5b505afa158015611039573d6000803e3d6000fd5b505050506040513d602081101561104f57600080fd5b505191945092509050909192565b7f000000000000000000000000000000000000000000000000000000000000000081565b60095473ffffffffffffffffffffffffffffffffffffffff1681565b81151560009081526005602090815260408083208484529091529020545b92915050565b600460205282600052604060002060205281600052604060002081815481106110e657fe5b9060005260206000200160009250925050505481565b600860205282600052604060002060205281600052604060002081815481106110e657fe5b600b5481565b600d54600e549091565b6060806060806060806111486000808b8b8b61384a565b949e939d50919b50995097509095509350505050565b3373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161461120257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f464f5242494444454e0000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6009805473ffffffffffffffffffffffffffffffffffffffff8085167fffffffffffffffffffffffff00000000000000000000000000000000000000009283161792839055600a8054858316931692909217918290559081169116106112c957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f496e76616c696420746f6b656e2070616972206f726465720000000000000000604482015290519081900360640190fd5b600954600a54604080517f52a03c0300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff93841660048201529183166024830152516000927f000000000000000000000000000000000000000000000000000000000000000016916352a03c0391604480830192602092919082900301818787803b15801561136857600080fd5b505af115801561137c573d6000803e3d6000fd5b505050506040513d602081101561139257600080fd5b5051905073ffffffffffffffffffffffffffffffffffffffff811661141857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f4e6f206f7261636c6520666f756e640000000000000000000000000000000000604482015290519081900360640190fd5b600954604080517f313ce567000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff169163313ce567916004808301926020929190829003018186803b15801561148357600080fd5b505afa158015611497573d6000803e3d6000fd5b505050506040513d60208110156114ad57600080fd5b5051600a54604080517f313ce567000000000000000000000000000000000000000000000000000000008152905192935060009273ffffffffffffffffffffffffffffffffffffffff9092169163313ce56791600480820192602092909190829003018186803b15801561152057600080fd5b505afa158015611534573d6000803e3d6000fd5b505050506040513d602081101561154a57600080fd5b5051905060ff8281169082161415611566576001600b556115d3565b600a80547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff1660ff848116848216117401000000000000000000000000000000000000000090810292909217928390559104166115c5578082036115c9565b8181035b60ff16600a0a600b555b5050505050565b600560205282600052604060002060205281600052604060002081815481106115ff57fe5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16925083915050565b60105481565b600d5481565b7f000000000000000000000000000000000000000000000000000000000000000081565b8315156000908152600560209081526040808320868452909152902080546060918291808610156118495780611695878763ffffffff613daa16565b11156116ae576116ab818763ffffffff613e2516565b94505b8467ffffffffffffffff811180156116c557600080fd5b506040519080825280602002602001820160405280156116ef578160200160208202803683370190505b5093508467ffffffffffffffff8111801561170957600080fd5b50604051908082528060200260200182016040528015611733578160200160208202803683370190505b50925060005b858110156118435788151560009081526007602090815260408083208b84529091528120908461176f848b63ffffffff613daa16565b8154811061177957fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168784815181106117b057fe5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205484828151811061183057fe5b6020908102919091010152600101611739565b50611864565b60408051600080825260208201908152818301909252945092505b505094509492505050565b60006001546001146118e257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f4c4f434b45440000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b60006001819055507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663b8f7a6656040518163ffffffff1660e01b8152600401602060405180830381600087803b15801561195257600080fd5b505af1158015611966573d6000803e3d6000fd5b505050506040513d602081101561197c57600080fd5b50516119e957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f474c4f42414c4c59205041555345440000000000000000000000000000000000604482015290519081900360640190fd5b60005460ff16611a5a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f5041555345440000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b3373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161480611ab357503373ffffffffffffffffffffffffffffffffffffffff8816145b611b1e57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f4e6f742066726f6d20726f75746572206f72206f776e65720000000000000000604482015290519081900360640190fd5b82821015611b8d57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f416c726561647920657870697265640000000000000000000000000000000000604482015290519081900360640190fd5b42821015611bfc57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f416c726561647920657870697265640000000000000000000000000000000000604482015290519081900360640190fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663bc14128f7f52657374726963746564506169722e6d617844757200000000000000000000006040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b158015611c8f57600080fd5b505afa158015611ca3573d6000803e3d6000fd5b505050506040513d6020811015611cb957600080fd5b50519050428101831115611d2e57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f45787069726520746f6f20666172206177617900000000000000000000000000604482015290519081900360640190fd5b506002600087151515158152602001908152602001600020600081546001019190508190559050600460008715151515815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081908060018154018082558091505060019003906000526020600020016000909190919091505560036000871515151581526020019081526020016000206040518061010001604052808973ffffffffffffffffffffffffffffffffffffffff1681526020016000151581526020018715158152602001600081526020016000815260200186815260200185815260200184815250908060018154018082558091505060019003906000526020600020906006020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160000160146101000a81548160ff02191690831515021790555060408201518160000160156101000a81548160ff021916908315150217905550606082015181600101556080820151816002015560a0820151816003015560c0820151816004015560e08201518160050155505060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663bc14128f7f52657374726963746564506169722e6665655065724f726465720000000000006040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b158015611fb557600080fd5b505afa158015611fc9573d6000803e3d6000fd5b505050506040513d6020811015611fdf57600080fd5b50519050611fed8882613e67565b604080518381528715156020820152808201879052606081018690526080810185905290518815159173ffffffffffffffffffffffffffffffffffffffff8b16917f528317aa3a915641ec93963a99c0ef7d64d16e351d258904238e941a5af151da9181900360a00190a350600180559695505050505050565b60115481565b1515600090815260046020908152604080832073ffffffffffffffffffffffffffffffffffffffff949094168352929052205490565b8281811461211257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f6c656e677468206e6f74206d6174636800000000000000000000000000000000604482015290519081900360640190fd5b61211d878783614191565b60005b818110156121765761216e888888888581811061213957fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1687878681811061216257fe5b9050602002013561449f565b600101612120565b5050505050505050565b600e5481565b60008085116121f657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f494e53554646494349454e545f494e5055545f414d4f554e5400000000000000604482015290519081900360640190fd5b606080612203608461462d565b600954600a54604080517f069d188f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9384166004820181905292841660248201529051949650929450818c16149260009283927f0000000000000000000000000000000000000000000000000000000000000000169163069d188f91604480820192606092909190829003018186803b1580156122b257600080fd5b505afa1580156122c6573d6000803e3d6000fd5b505050506040513d60608110156122dc57600080fd5b50805160209091015190925090506000805b865181101561240457600087828151811061230557fe5b6020026020010151905060026000871515151581526020019081526020016000205481111561239557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f4f66666572206e6f742065786973740000000000000000000000000000000000604482015290519081900360640190fd5b6123d3670de0b6b3a76400006123c78f8a86815181106123b157fe5b602002602001015161481590919063ffffffff16565b9063ffffffff61488816565b92506123e386848e8489896148ca565b509093506123f99050898463ffffffff613daa16565b9850506001016122ee565b5050505050505095945050505050565b600660209081526000938452604080852082529284528284209052825290205460ff1681565b811515600090815260036020526040812080548390811061245757fe5b906000526020600020906006020190507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806124d75750805473ffffffffffffffffffffffffffffffffffffffff1633145b61254257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f4e6f742066726f6d20726f75746572206f72206f776e65720000000000000000604482015290519081900360640190fd5b80547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff16740100000000000000000000000000000000000000001781556040518290841515907f108c7d3c4d8ad208c92f4064bac678f032a0ac5bdbaaa1c0fdbd240b23b445ea90600090a3505050565b60015460011461262457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f4c4f434b45440000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b60006001819055507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663b8f7a6656040518163ffffffff1660e01b8152600401602060405180830381600087803b15801561269457600080fd5b505af11580156126a8573d6000803e3d6000fd5b505050506040513d60208110156126be57600080fd5b505161272b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f474c4f42414c4c59205041555345440000000000000000000000000000000000604482015290519081900360640190fd5b60005460ff1661279c57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f5041555345440000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b81151560009081526003602052604081208054839081106127b957fe5b906000526020600020906006020190507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806128395750805473ffffffffffffffffffffffffffffffffffffffff1633145b6128a457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f4e6f742066726f6d20726f75746572206f72206f776e65720000000000000000604482015290519081900360640190fd5b60008060006128b1610e49565b925092509250600086156128da57600e546128d390839063ffffffff613e2516565b90506128f1565b600d546128ee90849063ffffffff613e2516565b90505b6000811161296057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f4e6f20616d6f756e7420696e0000000000000000000000000000000000000000604482015290519081900360640190fd5b6001850154612975908263ffffffff613daa16565b60018601908155600c859055600d849055600e83905585549054604080518481526020810192909252805189938b15159373ffffffffffffffffffffffffffffffffffffffff909116927ffb32bd9fa1413efecfb3f4b7ef2a5b60f1b61b33bb3bcd74970cb23fb2762d1992918290030190a45050600180555050505050565b600080600154600114612a6957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f4c4f434b45440000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6000600181905550612a7c836000614bcf565b9092509050600080612a8f856001614bcf565b9092509050612aa4848263ffffffff613daa16565b9350612ab6838363ffffffff613daa16565b600180559395939450505050565b600f5481565b600154600114612b3b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f4c4f434b45440000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b600060018190555060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663ef3692526040518163ffffffff1660e01b8152600401602060405180830381600087803b158015612bad57600080fd5b505af1158015612bc1573d6000803e3d6000fd5b505050506040513d6020811015612bd757600080fd5b5051601154909150612c0c907f0000000000000000000000000000000000000000000000000000000000000000908390614de8565b600954600f54612c349173ffffffffffffffffffffffffffffffffffffffff16908390614de8565b600a54601054612c5c9173ffffffffffffffffffffffffffffffffffffffff16908390614de8565b60006011819055600f819055601055612c73614fee565b5060018055565b606080606080606080612c9160018b8b8b8b61384a565b949f939e50919c509a509850909650945050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b600760209081526000938452604080852082529284528284209052825290205481565b60026020526000908152604090205481565b600c5481565b60005460ff1681565b600a5474010000000000000000000000000000000000000000900460ff1681565b7f000000000000000000000000000000000000000000000000000000000000000081565b600a5473ffffffffffffffffffffffffffffffffffffffff1681565b606080606080606080612c9160028b8b8b8b61384a565b600154600114612df957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f4c4f434b45440000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b60006001819055604080517f3af32abf000000000000000000000000000000000000000000000000000000008152336004820152905173ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001692633af32abf92602480820193602093909283900390910190829087803b158015612e9057600080fd5b505af1158015612ea4573d6000803e3d6000fd5b505050506040513d6020811015612eba57600080fd5b5051612f61573233148015612ed55750612ed333615001565b155b8015612ef6575073ffffffffffffffffffffffffffffffffffffffff831633145b612f6157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f496e76616c696420747261646572000000000000000000000000000000000000604482015290519081900360640190fd5b60005460ff16612fd257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f5041555345440000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b600d54600954604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905160009361308793909273ffffffffffffffffffffffffffffffffffffffff909116916370a0823191602480820192602092909190829003018186803b15801561304f57600080fd5b505afa158015613063573d6000803e3d6000fd5b505050506040513d602081101561307957600080fd5b50519063ffffffff613e2516565b600e54600a54604080517f70a082310000000000000000000000000000000000000000000000000000000081523060048201529051939450600093613103939273ffffffffffffffffffffffffffffffffffffffff16916370a08231916024808301926020929190829003018186803b15801561304f57600080fd5b90506000808915801561311557508815155b156131d95761312660018589615007565b90925090508882101561319a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f494e53554646494349454e545f414d4f554e5400000000000000000000000000604482015290519081900360640190fd5b600a546131be9073ffffffffffffffffffffffffffffffffffffffff168984614de8565b600f546131d1908263ffffffff613daa16565b600f55613311565b89158015906131e6575088155b156132aa576131f760008489615007565b90925090508982101561326b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f494e53554646494349454e545f414d4f554e5400000000000000000000000000604482015290519081900360640190fd5b60095461328f9073ffffffffffffffffffffffffffffffffffffffff168984614de8565b6010546132a2908263ffffffff613daa16565b601055613311565b604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f4e6f7420737570706f7274656400000000000000000000000000000000000000604482015290519081900360640190fd5b613319614fee565b5050600180555050505050505050565b6003602052816000526040600020818154811061334257fe5b600091825260209091206006909102018054600182015460028301546003840154600485015460059095015473ffffffffffffffffffffffffffffffffffffffff8516975060ff7401000000000000000000000000000000000000000086048116975075010000000000000000000000000000000000000000009095049094169492939192909188565b6133d884846001614191565b6133e48484848461449f565b50505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f4e6f7420737570706f72746564000000000000000000000000000000000000006044820152905160009181900360640190fd5b6000806001546001146134eb57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f4c4f434b45440000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b60006001556134fa8484614bcf565b60018055909590945092505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b3373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016146135d157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f464f5242494444454e0000000000000000000000000000000000000000000000604482015290519081900360640190fd5b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016911515919091179055565b60015460011461367357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f4c4f434b45440000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b60006001553373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614806136d157503373ffffffffffffffffffffffffffffffffffffffff8616145b61373c57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f4e6f742066726f6d20726f75746572206f72206f776e65720000000000000000604482015290519081900360640190fd5b61374985858585856152c4565b6000808561377657600954600a5473ffffffffffffffffffffffffffffffffffffffff9182169116613797565b600a5460095473ffffffffffffffffffffffffffffffffffffffff91821691165b915091506137a6823386614de8565b6137b1813385614de8565b6137b9614fee565b5050600180555050505050565b60015460011461383757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f4c4f434b45440000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6000600155613844614fee565b60018055565b606080808080806000808c61388857505088151560008181526004602090815260408083208380528252808320938352600390915290205490613979565b8c600114156138cd575050881515600090815260086020908152604080832073ffffffffffffffffffffffffffffffffffffffff8e1684529091529020805490613979565b8c60021415613912575050881515600090815260046020908152604080832073ffffffffffffffffffffffffffffffffffffffff8e1684529091529020805490613979565b604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f556e6b6e6f776e206c6973740000000000000000000000000000000000000000604482015290519081900360640190fd5b8a151560009081526003602052604090208d90838c1015613d6d57836139a58d8d63ffffffff613daa16565b11156139be576139bb848d63ffffffff613e2516565b9a505b8a67ffffffffffffffff811180156139d557600080fd5b506040519080825280602002602001820160405280156139ff578160200160208202803683370190505b5099508a67ffffffffffffffff81118015613a1957600080fd5b50604051908082528060200260200182016040528015613a43578160200160208202803683370190505b5098508a67ffffffffffffffff81118015613a5d57600080fd5b50604051908082528060200260200182016040528015613a87578160200160208202803683370190505b5096508a60020293508367ffffffffffffffff81118015613aa757600080fd5b50604051908082528060200260200182016040528015613ad1578160200160208202803683370190505b5097508367ffffffffffffffff81118015613aeb57600080fd5b50604051908082528060200260200182016040528015613b15578160200160208202803683370190505b5095508367ffffffffffffffff81118015613b2f57600080fd5b50604051908082528060200260200182016040528015613b59578160200160208202803683370190505b50945060005b8b811015613d6757613b77818e63ffffffff613daa16565b94508215613bc05782600114613ba357838581548110613b9357fe5b9060005260206000200154613bbb565b838581548110613baf57fe5b90600052602060002001545b613bc2565b845b94506000828681548110613bd257fe5b90600052602060002090600602019050858c8381518110613bef57fe5b6020908102919091010152613c0a828e63ffffffff613daa16565b81548c5191975073ffffffffffffffffffffffffffffffffffffffff16908c9084908110613c3457fe5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508060000160149054906101000a900460ff168a8381518110613c8c57fe5b6020026020010190151590811515815250508060000160159054906101000a900460ff168a8781518110613cbc57fe5b6020026020010190151590811515815250508060020154898381518110613cdf57fe5b6020026020010181815250508060010154888381518110613cfc57fe5b6020026020010181815250508060030154888781518110613d1957fe5b6020026020010181815250508060040154878381518110613d3657fe5b6020026020010181815250508060050154878781518110613d5357fe5b602090810291909101015250600101613b5f565b50613d99565b6040805160008082526020820181815282840191825260608301909352909a5090985096508695508594505b505050509550955095509550955095565b600082820183811015613e1e57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b6000613e1e83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250615536565b3373ffffffffffffffffffffffffffffffffffffffff83161415613f9857613eb17f00000000000000000000000000000000000000000000000000000000000000008330846155e7565b601154613ec4908263ffffffff613daa16565b601155600c54613eda908263ffffffff613daa16565b600c556009547f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff90811691161415613f3857600d54613f34908263ffffffff613daa16565b600d555b600a547f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff90811691161415613f9357600e54613f8f908263ffffffff613daa16565b600e555b61418d565b604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905160009173ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016916370a0823191602480820192602092909190829003018186803b15801561402857600080fd5b505afa15801561403c573d6000803e3d6000fd5b505050506040513d602081101561405257600080fd5b5051600c5490915060009061406e90839063ffffffff613e2516565b9050828110156140df57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e6f7420656e6f75676820666565000000000000000000000000000000000000604482015290519081900360640190fd5b6011546140f2908263ffffffff613daa16565b601155600c8290556009547f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff9081169116141561414457600d8290555b600a547f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff908116911614156133e45750600e555b5050565b82151560009081526003602052604081208054849081106141ae57fe5b906000526020600020906006020190507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16148061422e5750805473ffffffffffffffffffffffffffffffffffffffff1633145b61429957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f4e6f742066726f6d20726f75746572206f72206f776e65720000000000000000604482015290519081900360640190fd5b805474010000000000000000000000000000000000000000900460ff161561432257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f4f66666572206c6f636b65640000000000000000000000000000000000000000604482015290519081900360640190fd5b80547501000000000000000000000000000000000000000000900460ff16156143ac57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f4f66666572207761732073657420746f20616c6c6f7720616c6c000000000000604482015290519081900360640190fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663bc14128f7f52657374726963746564506169722e66656550657254726164657200000000006040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b15801561443f57600080fd5b505afa158015614453573d6000803e3d6000fd5b505050506040513d602081101561446957600080fd5b505182549091506115d39073ffffffffffffffffffffffffffffffffffffffff1661449a838663ffffffff61481516565b613e67565b8315156000908152600660209081526040808320868452825280832073ffffffffffffffffffffffffffffffffffffffff8616845290915290205460ff166145b257831515600081815260056020908152604080832087845282528083208054600180820183559185528385200180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8916908117909155858552600684528285208986528452828520818652845282852080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016831790559484526008835281842094845293825282208054938401815582529020018390555b8315156000818152600760209081526040808320878452825280832073ffffffffffffffffffffffffffffffffffffffff871680855290835292819020859055805185815290519293879390927fe51457e789313604d11150ac77eade7d4c00b796eb6429e2de5bd9a6a9716a48928290030190a450505050565b6060806000614642848363ffffffff613daa16565b3610156146b057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f496e76616c6964206f66666572206c6973740000000000000000000000000000604482015290519081900360640190fd5b6020840135602081028060020260408701013610156146ce57600080fd5b60405160208201600202810160405282815281604088016020830137809550816020018101905082815281826040890101602083013793506002026020908101925036915061473390614727878563ffffffff613daa16565b9063ffffffff613daa16565b1461479f57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f496e76616c69642064617461206c656e67746800000000000000000000000000604482015290519081900360640190fd5b600083511161480f57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f496e76616c6964206f66666572206c6973740000000000000000000000000000604482015290519081900360640190fd5b50915091565b600082614824575060006110bb565b8282028284828161483157fe5b0414613e1e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180615dc66021913960400191505060405180910390fd5b6000613e1e83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f0000000000008152506157cd565b600080806148e5620186a06123c78a8763ffffffff61481516565b90506148f7888263ffffffff613e2516565b97506000808673ffffffffffffffffffffffffffffffffffffffff1663b80333ed8c61493b57600a5473ffffffffffffffffffffffffffffffffffffffff16614955565b60095473ffffffffffffffffffffffffffffffffffffffff165b8d6149785760095473ffffffffffffffffffffffffffffffffffffffff16614992565b600a5473ffffffffffffffffffffffffffffffffffffffff165b8d60008e8e604051602001808281526020019150506040516020818303038152906040526040518763ffffffff1660e01b8152600401808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b83811015614aa4578181015183820152602001614a8c565b50505050905090810190601f168015614ad15780820380516001836020036101000a031916815260200191505b50975050505050505050604080518083038186803b158015614af257600080fd5b505afa158015614b06573d6000803e3d6000fd5b505050506040513d6040811015614b1c57600080fd5b5080516020909101519092509050614b3a8a8363ffffffff61481516565b94506001600b541115614b9157600a60149054906101000a900460ff1615158b151514614b7a57600b54614b7590869063ffffffff61488816565b614b8e565b600b54614b8e90869063ffffffff61481516565b94505b614ba1858263ffffffff61488816565b9450614bbf816123c784670de0b6b3a764000063ffffffff61481516565b9350505096509650969350505050565b6000803373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161480614c2b57503373ffffffffffffffffffffffffffffffffffffffff8516145b614c9657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f4e6f742066726f6d20726f75746572206f72206f776e65720000000000000000604482015290519081900360640190fd5b821515600090815260046020908152604080832073ffffffffffffffffffffffffffffffffffffffff881684529091528120805490915b81811015614d75576000838281548110614ce357fe5b90600052602060002001549050600060036000891515151581526020019081526020016000208281548110614d1457fe5b90600052602060002090600602019050614d3b816001015488613daa90919063ffffffff16565b9650614d54816002015487613daa90919063ffffffff16565b9550614d6b898984846001015485600201546152c4565b5050600101614ccd565b5060008086614d85578585614d88565b84865b6009549193509150614db19073ffffffffffffffffffffffffffffffffffffffff163384614de8565b600a54614dd59073ffffffffffffffffffffffffffffffffffffffff163383614de8565b614ddd614fee565b505050509250929050565b604080518082018252601981527f7472616e7366657228616464726573732c75696e743235362900000000000000602091820152815173ffffffffffffffffffffffffffffffffffffffff85811660248301526044808301869052845180840390910181526064909201845291810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb000000000000000000000000000000000000000000000000000000001781529251815160009460609489169392918291908083835b60208310614eee57805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101614eb1565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114614f50576040519150601f19603f3d011682016040523d82523d6000602084013e614f55565b606091505b5091509150818015614f83575080511580614f835750808060200190516020811015614f8057600080fd5b50515b6115d357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f5452414e534645525f4641494c45440000000000000000000000000000000000604482015290519081900360640190fd5b614ff6610e49565b600e55600d55600c55565b3b151590565b60008060608061501760a461462d565b915091506000615025615d89565b600954600a54604080517f069d188f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff93841660048201529183166024830152517f00000000000000000000000000000000000000000000000000000000000000009092169163069d188f91604480820192606092909190829003018186803b1580156150c357600080fd5b505afa1580156150d7573d6000803e3d6000fd5b505050506040513d60608110156150ed57600080fd5b508051602080830151604090930151908401529082529150600080805b86518110156151dc5761513986828151811061512257fe5b602002602001015184613daa90919063ffffffff16565b9250615143615da7565b6000615161670de0b6b3a76400006123c78f8b87815181106123b157fe5b90506151848e8d8b868151811061517457fe5b6020026020010151848b8b61584c565b6040850152602084015280835261519c908c90613daa565b9a506151b68260016020020151859063ffffffff613daa16565b93506151d082600260200201518b9063ffffffff613daa16565b9950505060010161510a565b5081670de0b6b3a76400001461525357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f496e76616c696420696e70757400000000000000000000000000000000000000604482015290519081900360640190fd5b604080518b8152602081018a90528082018390526060810189905290518c15159173ffffffffffffffffffffffffffffffffffffffff8c16917fd55848f048ca7d5fd9869d414bb60a426c2b0125c8adb982fee123da3f841ed89181900360800190a3505050505050935093915050565b6000831161533357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f50726f7669646572206c6971756964697479206e6f7420666f756e6400000000604482015290519081900360640190fd5b831515600090815260036020526040812080548590811061535057fe5b60009182526020909120600690910201805490915073ffffffffffffffffffffffffffffffffffffffff8781169116146153eb57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f4e6f742066726f6d2070726f7669646572000000000000000000000000000000604482015290519081900360640190fd5b805474010000000000000000000000000000000000000000900460ff1680156154145750600083115b1561548b574281600501541061548b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f4e6f742065787069726564000000000000000000000000000000000000000000604482015290519081900360640190fd5b60018101546154a0908463ffffffff613e2516565b600182015560028101546154ba908363ffffffff613e2516565b6002820181905560018201546040805186815260208101869052808201929092526060820192909252905185918715159173ffffffffffffffffffffffffffffffffffffffff8a16917f4036cb0ba867fe695e855b2d73d97fe96c1ff8c45e6490c12181cb5650be546e919081900360800190a4505050505050565b600081848411156155df576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156155a457818101518382015260200161558c565b50505050905090810190601f1680156155d15780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6040805173ffffffffffffffffffffffffffffffffffffffff85811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd0000000000000000000000000000000000000000000000000000000017815292518251600094606094938a169392918291908083835b602083106156c557805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101615688565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114615727576040519150601f19603f3d011682016040523d82523d6000602084013e61572c565b606091505b509150915081801561575a57508051158061575a575080806020019051602081101561575757600080fd5b50515b6157c557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f5452414e534645525f46524f4d5f4641494c4544000000000000000000000000604482015290519081900360640190fd5b505050505050565b60008183615836576040517f08c379a00000000000000000000000000000000000000000000000000000000081526020600482018181528351602484015283519092839260449091019190850190808383600083156155a457818101518382015260200161558c565b50600083858161584257fe5b0495945050505050565b851515600090815260026020526040812054819081908711156158d057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f4f66666572206e6f742065786973740000000000000000000000000000000000604482015290519081900360640190fd5b88151560009081526003602052604081208054899081106158ed57fe5b6000918252602090912060069091020180549091507501000000000000000000000000000000000000000000900460ff1680615963575089151560009081526006602090815260408083208b8452825280832073ffffffffffffffffffffffffffffffffffffffff8d16845290915290205460ff165b6159ce57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f4e6f74206120617070726f766564207472616465720000000000000000000000604482015290519081900360640190fd5b8060040154421015615a4157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f4f66666572206e6f7420626567696e2079657400000000000000000000000000604482015290519081900360640190fd5b8060050154421115615ab457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f4f66666572206578706972656400000000000000000000000000000000000000604482015290519081900360640190fd5b600080615acb8c8a8d8d8c8c8760200201516148ca565b60208a015192985096509250615ae2575087615b16565b615b01620186a06123c78960016020020151889063ffffffff61481516565b9350615b13898563ffffffff613e2516565b90505b82547501000000000000000000000000000000000000000000900460ff16615c5d578b151560009081526007602090815260408083208d8452825280832073ffffffffffffffffffffffffffffffffffffffff8f16845290915290205480871115615be257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f416d6f756e7420657863656564656420616c6c6f636174696f6e000000000000604482015290519081900360640190fd5b615bf2818863ffffffff613e2516565b600760008f15151515815260200190815260200160002060008d815260200190815260200160002060008e73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b8260010154861115615cd057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416d6f756e74206578636565647320617661696c61626c652066756e64000000604482015290519081900360640190fd5b6001830154615ce5908763ffffffff613e2516565b60018401556002830154615cff908263ffffffff613daa16565b600284018190558354600185015460408051868152602081018b90528082018690526060810192909252608082019390935291518c928f15159273ffffffffffffffffffffffffffffffffffffffff16917f2f27f755766c13db5798f9a3fa7501574d60c8d73dd30849515c312b0bf9cc7e9181900360a00190a450505096509650969350505050565b60405180604001604052806002906020820280368337509192915050565b6040518060600160405280600390602082028036833750919291505056fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a2646970667358221220a75b0211d3cd8e6359610c4e0c3d1bb7940435b3dcad585bb861206c4ded06bd64736f6c634300060b0033"
}