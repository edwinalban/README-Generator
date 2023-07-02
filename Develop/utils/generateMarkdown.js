// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenses = require('../index.js');

function renderLicenseBadge(license) {
  let licenseChoice = license;

  for (const license of Object.entries(licenses)) {
    if (licenseChoice === 'N/A') {
      return "";
    } else if (licenseChoice === licenses.name) {
        const license = licenses[badge];
        return license;
      }
    }
};

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

${data.description} ${renderLicenseBadge()}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

## Contributing

${data.contributions}

## Tests

${data.tests}

## Questions

If you have any questions about this project, my GitHub information and Email are here:

GitHub Username: ${data.github}

[Go to my GitHub](https://github.com/${data.github})

${data.email}
`;
}

module.exports = generateMarkdown;
