"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const mocha_1 = require("mocha");
const module_ipfs_node_1 = __importDefault(require("../src/modules/module.ipfs-node"));
const module_file_1 = __importDefault(require("../src/modules/module.file"));
(0, mocha_1.describe)('Ipfs upload file', function () {
    (0, mocha_1.it)('should return cid after upload', async function () {
        const ipfs = new module_ipfs_node_1.default();
        const file = new module_file_1.default('.gitignore');
        const cid = await ipfs.uploadToIpfs(file.getFileData());
        ipfs.shutdown();
        assert_1.default.equal(typeof cid, 'string');
    });
});
