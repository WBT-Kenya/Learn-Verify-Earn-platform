# Social Learn, Verify, Earn platform with Arbitrum RollUp.

This project is intended to be used with the
[Hardhat Beginners Tutorial](https://hardhat.org/tutorial), but you should be
able to follow it by yourself.

## Quick start

The first things you need to do are cloning this repository and installing its
dependencies:

```sh
git clone https://github.com/WBT-Kenya/Learn-Verify-Earn-app.git
git checkout token-create-issue
cd hardhat-boilerplate
npm install
```

Once installed, let's run Hardhat's testing network:
configure hardhat-config.ts file to work on arbitrum sepolia testnet

```sh
npx hardhat node
```

Then, on a new terminal, go to the repository's root folder and run this to compile and then
deploy your contract:

```sh
npx hardhat compile
npx hardhat run scripts/arbit-deploy.js --network testnet
```

## User Guide
- install metamask wallet as a browser extension.
- Add arbitrum sepolia testnet to metamask. Visit https://chainlist.org/
- To load testnet with funds, visit Arbitrum sepolia faucet.
- To view deployed contracts and tokens, visit : https://sepolia.arbiscan.io/


## What's Included?
### Database configurations
- Create Mongodb Cloud Atlas account . Visit https://www.mongodb.com/cloud/atlas/register
- Configure your application/project to connect with the database for user authentication storage
- Test using Postman that mongodb is connected to your project.
- Learner materials to be stored in the IPFS.


## Setting up your editor
- [Hardhat for Visual Studio Code](https://hardhat.org/hardhat-vscode) is the official Hardhat extension that adds advanced support for Solidity to VSCode. If you use Visual Studio Code, give it a try!
- install nodejs v18+.

## Get the frontend and backend running simultaneously:
  - go to WBTK-frontend and run npm run dev
  - go to the browser and run localhost:5173
  - Test the application by logging in your credentials.

**Thank you_!**

## Architecture Diagram:

![Architecture dgm to Arbitrum](https://github.com/WBT-Kenya/Learn-Verify-Earn-platform/assets/9214845/84e0138a-e11c-4e96-b86b-0312dd7f009d)

