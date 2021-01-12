const Migrations = artifacts.require("Migrations");
//const ParabellumSwap = artifacts.require("ParabellumSwap");
//const Address = artifacts.require("../build/contracts/Address.json")
//const Context = artifacts.require('../build/contracts/Context.json')
//const Ownable = artifacts.require('../build/contracts/Ownable')
const ParabellumAudit = artifacts.require('../build/contracts/ParabellumAudit')
const IParabellum = artifacts.require('../build/contracts/IParabellum')
//const SafeERC20 = artifacts.require('../build/contracts/SafeERC20')
//const SafeMath = artifacts.require('../build/contracts/SafeMath')
//const UniversaIERC20 = artifacts.require('../build/contracts/UniversalIERC20')


module.exports = function (deployer) {
    deployer.deploy(ParabellumAudit, IParabellum);
};
