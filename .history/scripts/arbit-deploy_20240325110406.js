const { ethers } = require("hardhat");

async function main() {
  const { ethers } = require("hardhat");
  // Get the contract factories
  const StudentManagement = await ethers.getContractFactory("StudentManagement");
  const MyToken = await ethers.getContractFactory("myToken");

  // Deploy the contracts
  const studentManagement = await StudentManagement.deploy();
  await studentManagement.deployed();
  console.log("StudentManagement contract deployed to:", studentManagement.address);

  const myToken = await MyToken.deploy(1000000); // Adjust initial supply as needed
  await myToken.deployed();
  console.log("MyToken contract deployed to:", myToken.address);
}

// Execute the main function
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });