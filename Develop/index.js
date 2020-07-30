const inquirer = require('inquirer');
const { writeFile } = require('./utils/generateMarkdown.js');


// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your app? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter your app name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the app (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please describe your app!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the app (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please describe your app!');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmTableOfContents',
        message: 'Would you like to add a table of contents to this README?',
        default: true
    },
    {
        type: 'input',
        name: 'confirmAddTableOfContents',
        message: 'Would you like to enter another project?',
        when: ({ confirmTableOfContents }) => confirmTableOfContents
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install this app (Required)',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('Please describe installation steps!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What are uses for this app? (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please describe uses for this app!');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmCollaborators',
        message: 'Did you have any collaborators on this app?',
        default: true
    },
    {
        type: 'input',
        name: 'about',
        message: 'Provide some information about yourself:',
        when: ({ confirmCollaborator }) => confirmCollaborator
    }

];


// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
