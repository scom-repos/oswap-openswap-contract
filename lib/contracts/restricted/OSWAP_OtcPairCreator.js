"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_OtcPairCreator = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const OSWAP_OtcPairCreator_json_1 = __importDefault(require("./OSWAP_OtcPairCreator.json"));
class OSWAP_OtcPairCreator extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_OtcPairCreator_json_1.default.abi, OSWAP_OtcPairCreator_json_1.default.bytecode);
        this.assign();
    }
    deploy(options) {
        return this.__deploy([], options);
    }
    assign() {
        let createPair_send = async (salt, options) => {
            let result = await this.send('createPair', [this.wallet.utils.stringToBytes32(salt)], options);
            return result;
        };
        let createPair_call = async (salt, options) => {
            let result = await this.call('createPair', [this.wallet.utils.stringToBytes32(salt)], options);
            return result;
        };
        let createPair_txData = async (salt, options) => {
            let result = await this.txData('createPair', [this.wallet.utils.stringToBytes32(salt)], options);
            return result;
        };
        this.createPair = Object.assign(createPair_send, {
            call: createPair_call,
            txData: createPair_txData
        });
    }
}
OSWAP_OtcPairCreator._abi = OSWAP_OtcPairCreator_json_1.default.abi;
exports.OSWAP_OtcPairCreator = OSWAP_OtcPairCreator;
