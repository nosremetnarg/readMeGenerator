const inquirer = require('inquirer');
// const generatePage = require('./src/page-template.js');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

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
        name: 'gitHubName',
        message: 'Provide github username (Required)',
        validate: gitHubInput => {
            if (gitHubInput) {
                return true;
            } else {
                console.log('Please describe your username!');
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
        choices: ['JavaScript ' , 'HTML ' , 'CSS ' , 'ES6 ' , 'jQuery ' , 'Bootstrap ' , 'Node ']
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
    // {
    //     type: 'input',
    //     name: 'usage',
    //     message: 'What are uses for this app? (Required)',
    //     validate: usageInput => {
    //         if (usageInput) {
    //             return true;
    //         } else {
    //             console.log('Please describe uses for this app!');
    //             return false;
    //         }
    //     }
    // },
    {
        type: 'input',
        name: 'collaborators',
        message: 'Did you have any collaborators on this app? If no enter "none"'

    },
    {
        type: 'input',
        name: 'license',
        message: 'What license will you use? If you will not use a license enter "none"'

    }

]

// function to write README file
// function writeToFile(fileName, data) {
// fs.writeFile
// }


// function to initialize program
function init() {
    inquirer.prompt(questions).then((response) => {
        fs.writeFile("README.md", generateMarkdown(response), err => {
            if (err) {
                throw err;
            }
    
        })
    //     fs.appendFileSync("README.md", ("##" + response.title + '\n') + '\n', function (err) {
    //         if (err) {
    //             console.log(err)
    //         }
    //         else {
    //             console.log("Success")
    //         }
    //     })

    //     fs.appendFileSync("README.md", ("This application was developed by: " + response.gitHubName + '\n') + '\n', function (err) {

    //         if (err) {
    //             console.log(err)
    //         }
    //         else {
    //             console.log("Success")
    //         }

    //     })
    //     fs.appendFileSync("README.md", (response.description) + '\n', function (err) {

    //         if (err) {
    //             console.log(err)
    //         }
    //         else {
    //             console.log("Success")
    //         }

    //     })

    //     fs.appendFileSync("README.md", ("## How to install this app:" + '\n' + response.installation) + '\n', function (err) {

    //         if (err) {
    //             console.log(err)
    //         }
    //         else {
    //             console.log("Success")
    //         }
    //     })
    //     fs.appendFileSync("README.md", (response.languages) + '\n', function (err) {

    //         if (err) {
    //             console.log(err)
    //         }
    //         else {
    //             console.log("Success")
    //         }
    //     })
    //     fs.appendFileSync("README.md", ("## How to use the Application" + '\n' + response.usage) + '\n', function (err) {

    //         if (err) {
    //             console.log(err)
    //         }
    //         else {
    //             console.log("Success")
    //         }
    //     })
    //     fs.appendFileSync("README.md", ("## Other Contributing Developers:" + '\n' + response.collaborators) + '\n', function (err) {

    //         if (err) {
    //             console.log(err)
    //         }
    //         else {
    //             console.log("Success")
    //         }

    //     })
    //     fs.appendFileSync("README.md", ("## Licence(s)" + '\n' + response.license) + '\n', function (err) {
    //         if (err) {
    //             console.log(err)
    //         }
    //         else {
    //             console.log("Success")
    //         }
    //     })
    //     console.log("Check out your brand new README file");
    })

}


// function call to initialize program
init();

