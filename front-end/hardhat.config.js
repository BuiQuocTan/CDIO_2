require("@nomicfoundation/hardhat-toolbox");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/5cKAWE6kibG3D_biHYdHE0LcmRYquT83',
      accounts: [`0xce6cebc44f254ced45ba075238f09e2c00c8d238d5c192b56b38a39b39ca888a`],
    },
  },
  etherscan: {
    apiKey: {
      goerli: 'BN1CACJ7YTUBDDPFM5GUQNH75AJ1E9QJWJ'
    }
  }
};
