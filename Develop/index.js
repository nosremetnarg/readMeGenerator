const inquirer = require('inquirer');
const generatePage = require('./src/page-template.js');
const { writeFile } = require('./utils/generateMarkdown.js');


// array of questions for user
const promptUser = () => {
    return inquirer.prompt([
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
            type: 'checkbox',
            name: 'languages',
            message: 'What did you this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
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
            message: 'Let\'s add some features?',
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

    ]);
}
// console log answers into an object
promptUser().then(answers => console.log(answers));


// const promptProject = portfolioData => {
//     // if there's no 'projects' array, create one
//     if (!portfolioData.projects) {
//         portfolioData.projects = [];
//     }
// };
// promptUser()
//     .then(promptProject)
//     .then(portfolioData => {
//         return generatePage(portfolioData);
//     })
//     .then(pageHTML => {
//         return writeFile(pageHTML);
//     })
//     .then(writeFileResponse => {
//         console.log(writeFileResponse);
//         return copyFile();
//     })
//     .then(copyFileResponse => {
//         console.log(copyFileResponse);
//     })
//     .catch(err => {
//         console.log(err);
//     });



// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
