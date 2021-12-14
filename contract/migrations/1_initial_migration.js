"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Migrations = artifacts.require("Migrations");
const IpfsDataSaver = artifacts.require("IpfsDataSaver");
module.exports = function (deployer) {
    deployer.deploy(Migrations);
    deployer.deploy(IpfsDataSaver);
};
