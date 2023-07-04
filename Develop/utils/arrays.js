const questions = [
    {
        type: 'input',
        name: 'title',
        message: `What is the name of your project?
        `
    },
    {
        type: 'input',
        name: 'description',
        message: `Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

        - What was your motivation?
        - Why did you build this project?
        - What problem does it solve?
        - What did you learn?
        `
    },
    {
        type: 'input',
        name: 'installation',
        message: `What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
        `
    },
    {
        type: 'input',
        name: 'usage',
        message: `Provide instructions and examples for use. Include screenshots as needed.

        To add a screenshot, create an 'assets/images' folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
        ![alt text](assets/images/screenshot.png)
        `
    },
    {
        type: 'input',
        name: 'contributions',
        message: `If you created an application or package and would like other developers to contribute to it, you can include guidelines for how to do so. The Contributor Covenant (https://www.contributor-covenant.org/) is an industry standard, but you can write your own here if you'd prefer.
        `
    },
    {
        type: 'input',
        name: 'tests',
        message: `Please enter instructions for how to test your project.
        `
    },
    {
        type: 'list',
        name: 'license',
        message: `Which License is your project covered under? If you need help choosing a license, refer to (https://choosealicense.com/).
        `,
        choices:
            ['Apache License 2.0', 'GNU General Publice License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License',
                'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal',
                'Eclipse Public License 1.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0',
                'GNU Lesser General Public License v3.0', 'Mozilla Public License 2.0', 'The Unlicense', 'N/A'
            ]
    },
    {
        type: 'input',
        name: 'github',
        message: `Please enter your GitHub Username
        `
    },
    {
        type: 'input',
        name: 'email',
        message: `Please enter your Email address.
        `
    },
];

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

module.exports = {questions, licenses};