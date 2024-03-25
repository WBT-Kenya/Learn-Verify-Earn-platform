const path = require("path");


async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
  
    // const TokenIncentiveReward = await ethers.getContractFactory("TokenIncentiveReward");
    const tokenincentive = await ethers.getContractFactory("TokenIncentive");
    const token = await TokenIncentiveReward.deploy(wbtk, ARBH, xyz, 1000000); // Deploy with an initial supply of 1,000,000 tokens
  
    console.log("Token deployed to:", token.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });