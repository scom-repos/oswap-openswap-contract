"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_PairCreator = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const OSWAP_PairCreator_json_1 = __importDefault(require("./OSWAP_PairCreator.json"));
class OSWAP_PairCreator extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_PairCreator_json_1.default.abi, OSWAP_PairCreator_json_1.default.bytecode);
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
exports.OSWAP_PairCreator = OSWAP_PairCreator;
OSWAP_PairCreator._abi = OSWAP_PairCreator_json_1.default.abi;
