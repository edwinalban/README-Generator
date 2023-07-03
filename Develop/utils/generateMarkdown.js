// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenses = [
    {
        name: 'Apache License 2.0',
        badge: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
        link: '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)'
    },
    {
        name: 'GNU General Publice License v3.0',
        badge: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
        link: '[GNU General Publice License v3.0](https://www.gnu.org/licenses/gpl-3.0)'
    },
    {
        name: 'MIT License',
        badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
        link: '[MIT License](https://opensource.org/licenses/MIT)'
    },
    {
        name: 'BSD 2-Clause "Simplified" License',
        badge: '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)',
        link: '[BSD 2-Clause "Simplified" License](https://opensource.org/licenses/BSD-2-Clause)'
    },
    {
        name: 'BSD 3-Clause "New" or "Revised" License',
        badge: '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
        link: '[BSD 3-Clause "New" or "Revised" License](https://opensource.org/licenses/BSD-3-Clause)'
    },
    {
        name: 'Boost Software License 1.0',
        badge: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
        link: '[Boost Software License 1.0](https://www.boost.org/LICENSE_1_0.txt)'
    },
    {
        name: 'Creative Commons Zero v1.0 Universal',
        badge: '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](https://creativecommons.org/publicdomain/zero/1.0/)',
        link: '[Creative Commons Zero v1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/)'
    },
    {
        name: 'Eclipse Public License 1.0',
        badge: '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)',
        link: '[Eclipse Public License 1.0](https://opensource.org/licenses/EPL-1.0)'
    },
    {
        name: 'GNU Affero General Public License v3.0',
        badge: '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)',
        link: '[GNU Affero General Public License v3.0](https://www.gnu.org/licenses/agpl-3.0)'
    },
    {
        name: 'GNU General Public License v2.0',
        badge: '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)',
        link: '[GNU General Publice License v2.0](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
    },
    {
        name: 'GNU Lesser General Public License v3.0',
        badge: '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)',
        link: '[GNU General Publice License v3.0](https://www.gnu.org/licenses/lgpl-3.0)'
    },
    {
        name: 'Mozilla Public License 2.0',
        badge: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
        link: '[Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)'
    },
    {
        name: 'The Unlicense',
        badge: '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](https://unlicense.org/)',
        link: '[The Unlicense](https://unlicense.org/)'
    },
    {
        name: 'N/A'
    },
];

function renderLicenseBadge(license) {
    for (let i = 0; i < licenses.length; i++) {
        if (licenses[i].name === "N/A") {
            return "";
        } else if (licenses[i].name === license) {
            return licenses[i].badge;
        }
    }
};

// TODO: Create a function that returns the license link
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

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
        if (license === "N/A") {
            return "";
        } else {
            return `## License`;
        }
};

function renderLicenseSectionLink(license) {
        if (license === "N/A") {
            return "";
        } else {
            return `- [License](#license)`;
        }
};
 

// TODO: Create a function to generate markdown for README
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
