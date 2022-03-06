// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const GenerateMd = require('./utils/generateMarkdown');
const { stringify } = require('querystring');


// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'filename',
      message: 'What is name of ReadMe file?',
    },
    {
      type: 'input',
      name: 'projectTitle',
      message: 'What is your Project Title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Where is Project Description?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are installation steps?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What is project usage?',
    },
    {
      type: 'input',
      name: 'features',
      message: 'Enter your Project Features',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How to contribute?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Enter your project license',
      choices: ['MIT', 'Apache', 'GNU']
    },
    {
      type: 'input',
      name: 'gitHubUser',
      message: 'Enter your Github User Name',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email to reach out',
    }
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data1) {
    GenerateMd(fileName,data1);
}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt(questions)
  .then((answers) => {
    writeToFile(answers['filename'],answers);
  });
}

// Function call to initialize app
init();
