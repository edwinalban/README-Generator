// Includes packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const { questions } = require("./utils/arrays");

// Writes README file
function writeToFile(readme, data) {
    fs.writeFile(readme, generateMarkdown(data), (err) => {
        err ? console.error(err) : console.log("success!");
    });
};

// Initializes app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            writeToFile("README.md", answers);
        });
};

// Function call to initialize app
init();
