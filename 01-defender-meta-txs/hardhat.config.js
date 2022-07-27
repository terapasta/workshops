require('dotenv').config();

require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.0",
  networks: {
    local: {
      url: 'http://localhost:8545'
    },
    xdai: {
      url: 'https://dai.poa.network',
      accounts: [process.env.PRIVATE_KEY],
    },
    mumbai: {
      // url: 'https://polygon-mumbai.infura.io/v3/' + process.env.INFURA_API_KEY,
      // url: 'https://matic-mumbai.chainstacklabs.com',
      url: 'https://polygon-mumbai.g.alchemy.com/v2/' + process.env.ALCHEMY_API_KEY,
      accounts: [process.env.PRIVATE_KEY],
    }
  }
};
