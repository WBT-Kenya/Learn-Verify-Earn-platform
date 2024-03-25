const { ethers } = require("hardhat");

async function main() {
  // Load the contract ABI and address
  const contractAddress = "0x0E1bB946eE0E1a5CAc71beBE72Fbb1B154238013"; // Replace with the deployed contract address
  const contractAbi = [ 
    // Include the ABI of the contract here
    // You can copy the ABI from the Solidity contract file
    "0x608060405234801561001057600080fd5b5060006002819055506000600381905550611313806100306000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c80635e97dc08116100665780635e97dc081461011d57806396f979d21461013b578063a1db0e271461016d578063c95a672914610189578063e0c5678d146101b957610093565b806306ead22e146100985780631dbee481146100c95780632b8d80e0146100e557806334c2d17e14610101575b600080fd5b6100b260048036038101906100ad91906108ec565b6101d7565b6040516100c09291906109b8565b60405180910390f35b6100e360048036038101906100de91906109e8565b610283565b005b6100ff60048036038101906100fa9190610a28565b6103c6565b005b61011b60048036038101906101169190610bc4565b610626565b005b610125610677565b6040516101329190610c0d565b60405180910390f35b610155600480360381019061015091906108ec565b61067d565b60405161016493929190610c28565b60405180910390f35b61018760048036038101906101829190610c66565b61072f565b005b6101a3600480360381019061019e9190610cc2565b6107ad565b6040516101b09190610d30565b60405180910390f35b6101c161089c565b6040516101ce9190610c0d565b60405180910390f35b600060205280600052604060002060009150905080600001549080600101805461020090610d7a565b80601f016020809104026020016040519081016040528092919081815260200182805461022c90610d7a565b80156102795780601f1061024e57610100808354040283529160200191610279565b820191906000526020600020905b81548152906001019060200180831161025c57829003601f168201915b5050505050905082565b600080600084815260200190815260200160002060000154036102db576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102d290610df7565b60405180910390fd5b6000600160008381526020019081526020016000206000015403610334576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161032b90610e63565b60405180910390fd5b6001600080848152602001908152602001600020600201600083815260200190815260200160002060006101000a81548160ff0219169083151502179055507f6843c090f624d3e368027de7fcb8a809c51c616f88ea24113f381e2ccb4d7f6e82600080858152602001908152602001600020600101836040516103ba93929190610f1c565b60405180910390a15050565b6000806000868152602001908152602001600020600001540361041e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161041590610df7565b60405180910390fd5b6000600160008581526020019081526020016000206000015403610477576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161046e90610e63565b60405180910390fd5b60008110158015610489575060648111155b6104c8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104bf90610fa6565b60405180910390fd5b60016000848152602001908152602001600020600201548110610565576001600080868152602001908152602001600020600301600084815260200190815260200160002060006101000a81548160ff0219169083151502179055507ff553aab771456a17634cdc9d4b811192a0b7fb2190722d40277b93d958642b7a8484600160405161055893929190610fc6565b60405180910390a16105e1565b6000806000868152602001908152602001600020600301600084815260200190815260200160002060006101000a81548160ff0219169083151502179055507ff553aab771456a17634cdc9d4b811192a0b7fb2190722d40277b93d958642b7a848460006040516105d893929190610fc6565b60405180910390a15b6001806000858152602001908152602001600020600301600084815260200190815260200160002060006101000a81548160ff02191690831515021790555050505050565b600260008154809291906106399061102c565b9190505550600080600060025481526020019081526020016000209050600254816000018190555081816001019081610672919061120b565b505050565b60025481565b60016020528060005260406000206000915090508060000154908060010180546106a690610d7a565b80601f01602080910402602001604051908101604052809291908181526020018280546106d290610d7a565b801561071f5780601f106106f45761010080835404028352916020019161071f565b820191906000526020600020905b81548152906001019060200180831161070257829003601f168201915b5050505050908060020154905083565b600360008154809291906107429061102c565b91905055506003546001600060035481526020019081526020016000206000018190555081600160006003548152602001908152602001600020600101908161078b919061120b565b5080600160006003548152602001908152602001600020600201819055505050565b6000806000808681526020019081526020016000206000015403610806576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107fd90610df7565b60405180910390fd5b600060016000858152602001908152602001600020600001540361085f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161085690610e63565b60405180910390fd5b600080858152602001908152602001600020600301600083815260200190815260200160002060009054906101000a900460ff1690509392505050565b60035481565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b6108c9816108b6565b81146108d457600080fd5b50565b6000813590506108e6816108c0565b92915050565b600060208284031215610902576109016108ac565b5b6000610910848285016108d7565b91505092915050565b610922816108b6565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610962578082015181840152602081019050610947565b60008484015250505050565b6000601f19601f8301169050919050565b600061098a82610928565b6109948185610933565b93506109a4818560208601610944565b6109ad8161096e565b840191505092915050565b60006040820190506109cd6000830185610919565b81810360208301526109df818461097f565b90509392505050565b600080604083850312156109ff576109fe6108ac565b5b6000610a0d858286016108d7565b9250506020610a1e858286016108d7565b9150509250929050565b60008060008060808587031215610a4257610a416108ac565b5b6000610a50878288016108d7565b9450506020610a61878288016108d7565b9350506040610a72878288016108d7565b9250506060610a83878288016108d7565b91505092959194509250565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610ad18261096e565b810181811067ffffffffffffffff82111715610af057610aef610a99565b5b80604052505050565b6000610b036108a2565b9050610b0f8282610ac8565b919050565b600067ffffffffffffffff821115610b2f57610b2e610a99565b5b610b388261096e565b9050602081019050919050565b82818337600083830152505050565b6000610b67610b6284610b14565b610af9565b905082815260208101848484011115610b8357610b82610a94565b5b610b8e848285610b45565b509392505050565b600082601f830112610bab57610baa610a8f565b5b8135610bbb848260208601610b54565b91505092915050565b600060208284031215610bda57610bd96108ac565b5b600082013567ffffffffffffffff811115610bf857610bf76108b1565b5b610c0484828501610b96565b91505092915050565b6000602082019050610c226000830184610919565b92915050565b6000606082019050610c3d6000830186610919565b8181036020830152610c4f818561097f565b9050610c5e6040830184610919565b949350505050565b60008060408385031215610c7d57610c7c6108ac565b5b600083013567ffffffffffffffff811115610c9b57610c9a6108b1565b5b610ca785828601610b96565b9250506020610cb8858286016108d7565b9150509250929050565b600080600060608486031215610cdb57610cda6108ac565b5b6000610ce9868287016108d7565b9350506020610cfa868287016108d7565b9250506040610d0b868287016108d7565b9150509250925092565b60008115159050919050565b610d2a81610d15565b82525050565b6000602082019050610d456000830184610d21565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610d9257607f821691505b602082108103610da557610da4610d4b565b5b50919050565b7f53747564656e7420646f6573206e6f7420657869737400000000000000000000600082015250565b6000610de1601683610933565b9150610dec82610dab565b602082019050919050565b60006020820190508181036000830152610e1081610dd4565b9050919050565b7f436f7572736520646f6573206e6f742065786973740000000000000000000000600082015250565b6000610e4d601583610933565b9150610e5882610e17565b602082019050919050565b60006020820190508181036000830152610e7c81610e40565b9050919050565b60008190508160005260206000209050919050565b60008154610ea581610d7a565b610eaf8186610933565b94506001821660008114610eca5760018114610ee057610f13565b60ff198316865281151560200286019350610f13565b610ee985610e83565b60005b83811015610f0b57815481890152600182019150602081019050610eec565b808801955050505b50505092915050565b6000606082019050610f316000830186610919565b8181036020830152610f438185610e98565b9050610f526040830184610919565b949350505050565b7f496e76616c69642073636f726500000000000000000000000000000000000000600082015250565b6000610f90600d83610933565b9150610f9b82610f5a565b602082019050919050565b60006020820190508181036000830152610fbf81610f83565b9050919050565b6000606082019050610fdb6000830186610919565b610fe86020830185610919565b610ff56040830184610d21565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611037826108b6565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361106957611068610ffd565b5b600182019050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026110c17fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82611084565b6110cb8683611084565b95508019841693508086168417925050509392505050565b6000819050919050565b60006111086111036110fe846108b6565b6110e3565b6108b6565b9050919050565b6000819050919050565b611122836110ed565b61113661112e8261110f565b848454611091565b825550505050565b600090565b61114b61113e565b611156818484611119565b505050565b5b8181101561117a5761116f600082611143565b60018101905061115c565b5050565b601f8211156111bf5761119081610e83565b61119984611074565b810160208510156111a8578190505b6111bc6111b485611074565b83018261115b565b50505b505050565b600082821c905092915050565b60006111e2600019846008026111c4565b1980831691505092915050565b60006111fb83836111d1565b9150826002028217905092915050565b61121482610928565b67ffffffffffffffff81111561122d5761122c610a99565b5b6112378254610d7a565b61124282828561117e565b600060209050601f8311600181146112755760008415611263578287015190505b61126d85826111ef565b8655506112d5565b601f19841661128386610e83565b60005b828110156112ab57848901518255600182019150602085019450602081019050611286565b868310156112c857848901516112c4601f8916826111d1565b8355505b6001600288020188555050505b50505050505056fea26469706673582212209474064d5854f1a06c91c569c52d0dc8a896e390b8e159578757b6a3535f199264736f6c63430008140033",
  ];

  // Connect to the contract using ethers
  const provider = new ethers.providers.JsonRpcProvider("https://seopolia.arbitrum.io/rpc"); // Replace with the Arbitrum Seopolia RPC endpoint
  const signer = new ethers.Wallet('0x5e11d997859d8f2cf4c013af210812b5e5de1e7127a591e036cbeacae2333334', provider); // Replace with your private key
  const contract = new ethers.Contract(contractAddress, contractAbi, signer);

  // Interact with the contract
  // Example: Enroll a student
  const studentName = "Alice";
  await contract.enrollStudent(studentName);
  console.log("Enrolled student:", studentName);

  // Example: Create a course
  const courseName = "Mathematics";
  const passMark = 70;
  await contract.createCourse(courseName, passMark);
  console.log("Created course:", courseName);

  // Example: Enroll a student in a course
  const studentId = 1; // Replace with the student ID
  const courseId = 1; // Replace with the course ID
  await contract.enrollStudentInCourse(studentId, courseId);
  console.log("Enrolled student in course:", studentId, courseId);

  // Example: Take an assessment
  const assessmentId = 1; // Replace with the assessment ID
  const score = 80; // Replace with the assessment score
  await contract.takeAssessment(studentId, courseId, assessmentId, score);
  console.log("Assessment taken for student:", studentId, courseId, score);

  // Example: Verify assessment
  const isAssessmentPassed = await contract.verifyAssessment(studentId, courseId, assessmentId);
  console.log("Assessment verified for student:", studentId, courseId, "Passed:", isAssessmentPassed);
}

main().then(() => process.exit(0)).catch((error) => {
  console.error(error);
  process.exit(1);
});
