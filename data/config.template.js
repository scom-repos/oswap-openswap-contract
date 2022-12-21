module.exports = {
    rpcUrl: '',
    deployer: {
        address: '',
        privateKey: ''
    },
    deploymentConfig: {
        tokens: {
            weth: '',
            oswap: '',
            votingToken: ''
        },  
        governance: {
            address: '',
            protocolFeeTo: ''
        },
        amm: {
            factory: '',
            protocolFeeTo: ''
        },     
        oracle: {
            factory: '',
            protocolFeeTo: ''
        },   
        range: {
            factory: '',
            protocolFeeTo: ''
        },                      
        restricted: {
            factory: '',
            tradeFee: '',
            protocolFee: '',
            protocolFeeTo: ''
        },
        queuePairTokens: [{
            token0: '',
            token1: ''
        }],
        hybridRouterRegistry: {
            address: '',
            defaultProtocols: [
                {
                    protocolType: 'factory',
                    factory: '',
                    name: 'Amm',                    
                    fee: 998000,
                    feeBase: 1000000,
                    typeCode: 1
                },
                {
                    protocolType: 'oracleFactory',
                    factory: '',
                    name: 'Oracle',
                    fee: 999000,
                    feeBase: 1000000,
                    typeCode: 2
                },
                {
                    protocolType: 'rangeFactory',
                    factory: '',
                    name: 'Range',
                    fee: 999000,
                    feeBase: 1000000,
                    typeCode: 2
                },
                {
                    protocolType: 'restrictedFactory',
                    factory: '',
                    name: 'Restricted',
                    fee: 999000,
                    feeBase: 1000000,
                    typeCode: 3
                }
            ],
            customProtocols: [
                {
                    name: '',
                    factory: '',
                    fee: 999000,
                    feeBase: 1000000,
                    typeCode: 1
                }
            ]           
        }
    }
}