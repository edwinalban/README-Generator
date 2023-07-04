// Includes packages needed for this application
const { licenses } = require("./arrays");

// Returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    for (let i = 0; i < licenses.length; i++) {
        if (licenses[i].name === "N/A") {
            return "";
        } else if (licenses[i].name === license) {
            return licenses[i].badge;
        }
    }
};

// Returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    for (let i = 0; i < licenses.length; i++) {
        if (licenses[i].name === "N/A") {
            return "";
        } else if (licenses[i].name === license) {
            return licenses[i].link;
        }
    }
};

// Returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === "N/A") {
        return "";
    } else {
        return `## License`;
    }
};

// Returns the license section link of README
// If there is no license, return an empty string
function renderLicenseSectionLink(license) {
    if (license === "N/A") {
        return "";
    } else {
        return `- [License](#license)`;
    }
};


// Generates markdown for README
function generateMarkdown(data) {
    return `# ${data.title} ${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
${renderLicenseSectionLink(data.license)}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

${renderLicenseLink(data.license)}

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
