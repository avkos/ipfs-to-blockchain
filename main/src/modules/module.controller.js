"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const module_file_1 = __importDefault(require("./module.file"));
const module_ipfs_node_1 = __importDefault(require("./module.ipfs-node"));
const module_contract_1 = __importDefault(require("./module.contract"));
const console_1 = __importDefault(require("console"));
class Controller {
    constructor() {
        this.file = new module_file_1.default();
        this.ipfs = new module_ipfs_node_1.default();
        this.contract = new module_contract_1.default();
    }
    async run() {
        try {
            console_1.default.log('Read file');
            const fileData = this.file.getFileData();
            console_1.default.log('Upload file data');
            const cid = await this.ipfs.uploadToIpfs(fileData);
            this.ipfs.shutdown();
            console_1.default.log(`Write cid ${cid} to the smart contract`);
            await this.contract.saveData(cid);
            console_1.default.log(`You have successfully saved this cid ${cid} to smart contract`);
            const readCid = await this.contract.readData();
            console_1.default.log(`You have successfully read this cid ${readCid} from smart contract`);
        }
        catch (e) {
            console_1.default.error('Error', e);
        }
    }
}
exports.default = Controller;
