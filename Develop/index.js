// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMD = require("./utils/generateMarkdown");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the project title? (Required)",
    validate: (projectTitle) => {
      if (projectTitle) {
        return true;
      } else {
        console.log(
          "What part of *Required* don't you understand?: enter project title!"
        );
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Enter project description (Required)",
    validate: (projectDescription) => {
      if (projectDescription) {
        return true;
      } else {
        console.log("REQUIRED!!!!! enter project description!");
      }
    },
  },
  {
    type: "input",
    name: "installInstructions",
    message: "Provide installation instructions:",
    validate: (installInput) => {
      if (installInput) {
        return true;
      } else {
        console.log("Enter instructions for usage!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "What is the purpose of this repository?",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("Explain how to use your code.  Or else.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "contributionGuidelines",
    message: "How can one contribute to this repository?",
    validate: (contribInput) => {
      if (contribInput) {
        return true;
      } else {
        console.log("Explain how to contribute to your code.  Do it.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "testInstructions",
    message: "What is the method for testing and sanitizing your inputs??",
    validate: (testInput) => {
      if (testInput) {
        return true;
      } else {
        console.log("Provide test instructions.  Seriously.  Sheesh.");
        return false;
      }
    },
  },
  {
    type: "list",
    name: "license",
    message: "Which license would you like to use (Choose only one)",
    choices: ["MIT", "Apache", "GPL", "BSD", "None"],
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub Username",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("I was not asking. Enter your GitHub username!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("I was not asking. Enter your email!");
        return false;
      }
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: "File created!",
      });
    });
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answer) => {
    const page = generateMD(answer);
    writeToFile("./readme.md", page);
  });
}

// Function call to initialize app
init();
