const { ethers } = require("hardhat");
require("@nomiclabs/hardhat-etherscan");

async function main() {
  const tokenFactory = await ethers.getContractFactory("Main");
  const token = await tokenFactory.deploy();
  await token.deployed();
  console.log("Token address:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
