// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        title: 'title',
        message: 'What is the name of your project?'
    },

    {
        type: 'input',
        description: 'description',
        message: `Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

        - What was your motivation?
        - Why did you build this project?
        - What problem does it solve?
        - What did you learn?`
    },

    {
        type: 'input',
        installation: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.'
    },

    {
        type: 'input',
        usage: 'usage',
        message: `Provide instructions and examples for use. Include screenshots as needed.

        To add a screenshot, create an 'assets/images' folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
        ![alt text](assets/images/screenshot.png)`
    },

    {
        type: 'input',
        contributions: 'contributions',
        message: `If you created an application or package and would like other developers to contribute to it, you can include guidelines for how to do so. The Contributor Covenant (https://www.contributor-covenant.org/) is an industry standard, but you can write your own here if you'd prefer.`
    },

    {
        type: 'input',
        tests: 'tests',
        message: 'Please enter instructions for how to test your project.'
    },

    {
        type: 'list',
        license: 'license',
        message: 'Which License is your project covered under? If you need help choosing a license, refer to (https://choosealicense.com/).',
        choices:
        ['Apache License 2.0', 'GNU General Publice License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 
         'BSD 3-Clause "New" or "Revised" License', 'Boose Software License 1.0', 'Creative Commons Zero v1.0 Universal', 
         'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 
         'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'
        ]
    },

    {
        type: 'input',
        github: 'github',
        message: 'Please enter your GitHub Username',
    },

    {
        type: 'input',
        email: 'email',
        message: 'Please enter your Email address.',
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const fileName = generateMarkdown(data);
    inquirer
        .createPromptModule(questions)
        .then((data) => {
            fs.writeFile("README.md", fileName, (err) => {
                err ? console.error(err) : console.log("success!");
            });
        });
};

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
