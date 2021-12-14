const Migrations = artifacts.require("Migrations");
const IpfsDataSaver = artifacts.require("IpfsDataSaver");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(IpfsDataSaver);
} as Truffle.Migration;

export {};

