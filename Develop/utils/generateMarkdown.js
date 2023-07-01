// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${data.license}

## How to Contribute

${data.contributions}

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them here.

## Questions

If you have any questions about this project, my GitHub information and Email are here:

github.com/${data.github}

${data.email}
`;
}

module.exports = generateMarkdown;
