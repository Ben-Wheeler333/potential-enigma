// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// const renderLicenseBadge = license => {

const { title } = require("process");



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// const renderLicenseSection = license => {
  
// }

// TODO: Create a function to generate markdown for README
const generateMarkdown = (userData) => {
  return `
  # ${userData.projectTitle}

  ## Description

  ${userData.description}

  ## Installation

  * ${userData.steps}

  ## Examples For Use

  * ${userData.examples}

  ## Credits

  * ${userData.credits}

  ## Liscense

  * ${userData.liscense}

`;
}

module.exports = generateMarkdown;
