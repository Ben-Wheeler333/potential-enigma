// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = ["What is the name of your project?", "Write a description for your project.", "Steps required to install your project?", "Provide examples for use.", "Give credits.", "List liscense if applicable."];
const [projectName, projectDescription, installSteps, useExamples, credits, liscense ] = questions;
console.log(projectName);
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
