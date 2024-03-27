const { ethers } = require("ethers");
require("dotenv").config();

const contractABI = [
  // Your contract ABI here
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "studentId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "courseId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "passed",
        type: "bool",
      },
    ],
    name: "StudentAssessmentTaken",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "studentId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "courseId",
        type: "uint256",
      },
    ],
    name: "StudentEnrolled",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "courses",
    outputs: [
      {
        internalType: "uint256",
        name: "courseId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "courseName",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "passMark",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_courseName",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_passMark",
        type: "uint256",
      },
    ],
    name: "createCourse",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
    ],
    name: "enrollStudent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_studentId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_courseId",
        type: "uint256",
      },
    ],
    name: "enrollStudentInCourse",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lastCourseId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastStudentId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "students",
    outputs: [
      {
        internalType: "uint256",
        name: "studentId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_studentId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_courseId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_assessmentId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_score",
        type: "uint256",
      },
    ],
    name: "takeAssessment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_studentId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_courseId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_assessmentId",
        type: "uint256",
      },
    ],
    name: "verifyAssessment",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const contractAddress = "0x0E1bB946eE0E1a5CAc71beBE72Fbb1B154238013";
// const privateKey = "0x5e11d997859d8f2cf4c013af210812b5e5de1e7127a591e036cbeacae2333334";

// Provider
const provider = new ethers.providers.JsonRpcProvider(
  "https://sepolia-rollup.arbitrum.io/rpc"
); // Replace with your provider endpoint

// Wallet connected to provider
const wallet = new ethers.Wallet(
  "5e11d997859d8f2cf4c013af210812b5e5de1e7127a591e036cbeacae2333334",
  provider
); // Replace <YOUR_PRIVATE_KEY> with your private key

// Contract instance
const contract = new ethers.Contract(contractAddress, contractABI, wallet);

// main();
async function main() {
  try {
    const gasLimit = 3000000;
    // Call contract functions here
    const studentName = "John Doe"; // Replace with the desired student name
    const studentId = 2;
    const courseId = 1;
    const assessmentId = 1;
    const score = 90;

    // Example calls to other functions
    const enrollStudentResult = await contract.enrollStudent(studentName, {
      gasLimit,
    });
    const createCourseResult = await contract.createCourse("Course Name", 80, {
      gasLimit,
    }); // Replace with the desired course name and pass mark
    const enrollStudentInCourseResult = await contract.enrollStudentInCourse(
      courseId,
      studentId,
      { gasLimit }
    );
    const takeAssessmentResult = await contract.takeAssessment(
      courseId,
      studentId,
      assessmentId,
      score,
      { gasLimit }
    );
    const verifyAssessmentResult = await contract.verifyAssessment(
      courseId,
      studentId,
      assessmentId,
      { gasLimit }
    );

    console.log("enrollStudent result:", enrollStudentResult);
    console.log("createCourse result:", createCourseResult);
    console.log("enrollStudentInCourse result:", enrollStudentInCourseResult);
    console.log("takeAssessment result:", takeAssessmentResult);
    console.log("verifyAssessment result:", verifyAssessmentResult);
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
