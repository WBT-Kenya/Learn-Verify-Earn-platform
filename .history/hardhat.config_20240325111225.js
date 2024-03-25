require("@nomicfoundation/hardhat-toolbox");


// The next line is part of the sample project, you don't need it in your
// project. It imports a Hardhat task definition, that can be used for
// testing the frontend.
require("./tasks/faucet");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
};
require('@nomicfoundation/hardhat-ethers');
module.exports = {
  solidity: {
    version: '0.8.20',
  },
  networks: {
    // mainnet: {
    //   url: 'https://1rpc.io/arb',
    //   accounts: ['0xYOUR_PRIVATE_KEY'],
    //   gasPrice: 20000000000, // 20 Gwei
    // },
    testnet: {
      url: 'https://sepolia-rollup.arbitrum.io/rpc',
      accounts: ['0x5e11d997859d8f2cf4c013af210812b5e5de1e7127a591e036cbeacae2333334'],
      gasPrice: 20000000000, // 20 Gwei
    },
  },
};