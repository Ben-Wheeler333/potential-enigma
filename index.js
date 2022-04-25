// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./src/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = ["What is the name of your project?", "Write a description for your project.", "Steps required to install your project", "Provide examples for use.", "Give credits.", "List liscense if applicable."];
const [projectName, projectDescription, steps, useExamples, credits, liscense ] = questions;

// TODO: Create a function to write README file
 const mdFile = generateMarkdown();

fs.writeFile('README.md', mdFile, err => {
    if (err) throw (err);

    console.log('Your professional README file has been generated!');
});

// TODO: Create a function to initialize app
const init = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: "title",
            message: projectName
        },
        {
            type: 'input',
            name: "description",
            message: projectDescription
        },
        {
            type: 'input',
            name: "steps",
            message: steps
        },
        {
            type: 'input',
            name: "examples",
            message: useExamples
        },
        {
            type: 'input',
            name: "credits",
            message: credits
        },
        {
            type: 'input',
            name: "liscense",
            message: liscense
        }
    ])
    
};

// Function call to initialize app
 init()
 .then(userData => {
    console.log(userData);
});
