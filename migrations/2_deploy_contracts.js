var SupplyChainContract = artifacts.require("./SupplyChain.sol");
var RolesContract = artifacts.require("./rolesUtils/Roles.sol");

var CustomerContract = artifacts.require("./rolesUtils/Customer.sol")
var DeliveryHubContract = artifacts.require("./rolesUtils/DeliveryHub.sol")
var SortationHubContract = artifacts.require("./rolesUtils/SortationHub.sol")
var ThirdpartyContract = artifacts.require("./rolesUtils/Thirdparty.sol")
var StructureContract = artifacts.require("./Structure.sol")

var ManufacturerContract = artifacts.require("./rolesUtils/Manufacturer.sol");

module.exports = function(deployer) {
  deployer.deploy(ManufacturerContract);
  deployer.deploy(RolesContract);

  deployer.deploy(CustomerContract);
  deployer.deploy(DeliveryHubContract);
  deployer.deploy(SortationHubContract);
  deployer.deploy(ThirdpartyContract);
  deployer.deploy(StructureContract);


  // deployer.deploy(SupplyChainContract);
  deployer.deploy(SupplyChainContract, {gas: 6721960});
  // deployer.deploy(FetchContract, {gas: 15555555});
};
