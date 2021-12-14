"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const web3_1 = __importDefault(require("web3"));
const constants_1 = require("../constants");
const IpfsDataSaver_json_1 = __importDefault(require("../../../contract/build/contracts/IpfsDataSaver.json"));
class SmartContract {
    constructor() {
        this.web3 = new web3_1.default(web3_1.default.givenProvider || "ws://localhost:8545");
        this.instance = new this.web3.eth.Contract(IpfsDataSaver_json_1.default.abi, IpfsDataSaver_json_1.default.networks['4447'].address, { from: constants_1.ACCOUNT_ADDRESS });
    }
    async saveData(data) {
        return this.instance.methods.saveData(data).send();
    }
    readData() {
        return this.instance.methods.ipfsData().call();
    }
}
exports.default = SmartContract;
