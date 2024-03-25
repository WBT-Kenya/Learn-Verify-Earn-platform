const { ethers } = require("hardhat");

async function main() {
  // Load the contract ABI and address
  const contractAddress = "0x0E1bB946eE0E1a5CAc71beBE72Fbb1B154238013"; // Replace with the deployed contract address
  const contractAbi = [
    // Include the ABI of the contract here
    // You can copy the ABI from the Solidity contract file
  ];

  // Connect to the contract using ethers
  const provider = new ethers.providers.JsonRpcProvider("https://seopolia.arbitrum.io/rpc"); // Replace with the Arbitrum Seopolia RPC endpoint
  const signer = new ethers.Wallet('0x5e11d997859d8f2cf4c013af210812b5e5de1e7127a591e036cbeacae', provider); // Replace with your private key
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
