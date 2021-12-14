"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const mocha_1 = require("mocha");
const module_contract_1 = __importDefault(require("../src/modules/module.contract"));
(0, mocha_1.describe)('Check contract', function () {
    (0, mocha_1.it)('check if data saved correctly', async function () {
        const contract = new module_contract_1.default();
        const testData = 'test';
        await contract.saveData(testData);
        const dataInContract = await contract.readData();
        assert_1.default.equal(dataInContract, testData);
    });
});
