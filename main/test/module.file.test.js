"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const mocha_1 = require("mocha");
const chai_1 = require("chai");
const module_file_1 = __importDefault(require("../src/modules/module.file"));
(0, mocha_1.describe)('Load file', function () {
    (0, mocha_1.it)('should return file data', function () {
        const file = new module_file_1.default('.gitignore');
        const data = file.getFileData();
        assert_1.default.equal('node_modules\n', data.toString());
    });
    (0, mocha_1.it)('should return error', function () {
        const file = new module_file_1.default('not_exists');
        (0, chai_1.expect)(file.getFileData).to.throw('Read file error');
    });
});
