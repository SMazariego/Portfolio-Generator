const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [];

const promptUser = () => {
    return inquirer.prompt([
      {
        type: "input",
        name: "Title",
        message: "Title?: ",
      },
      {
        type: "input",
        name: "Description",
        message: "Describe your application?: ",
      },
      {
        type: "input",
        name: "installation",
        message: "How do you install this application?:\n\n",
      },
      {
        type: "input",
        name: "Instructions",
        message: "What are the general instructions to use your application?:\n\n",
      },
      {
        type: "list",
        name: "license",
        message: "Which liscense are you using?",
        choices: ["APACHE", "BSD", "GPL", "CDL", "None"],
      },
      {
        type: "input",
        name: "contribution",
        message: "How can other contribue to this project?:\n\n",
      },
      {
        type: "input",
        name: "test",
        message: "How do you run tests for this application?:\n\n",
      },
      {
        type: "input",
        name: "github",
        message: "What is your github username?: ",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?: ",
      },
    ]);
  };

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      err ? console.error(err) : console.log("README.md created.");
    });
  }

// TODO: Create a function to initialize app
const init = async () => {
    let userInput = await promptUser();
    let markDownText = generateMarkdown(userInput);
    writeToFile("README.md", markDownText);
  };

// Function call to initialize app
init();
