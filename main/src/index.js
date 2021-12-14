"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const module_controller_1 = __importDefault(require("./modules/module.controller"));
const controller = new module_controller_1.default();
controller.run().catch(console.error);
