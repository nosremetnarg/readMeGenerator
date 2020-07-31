const inquirer = require('inquirer');
const generatePage = require('./src/page-template.js');
const { writeFile } = require('./utils/generateMarkdown.js');
const fs = require('fs');


// array of questions for user
// const promptUser = () => {
//     return inquirer.prompt([
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
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },
    // {
    //     type: 'confirm',
    //     name: 'confirmTableOfContents',
    //     message: 'Would you like to add a table of contents to this README?',
    //     default: true
    // },
    // {
    //     type: 'input',
    //     name: 'confirmAddTableOfContents',
    //     message: 'Let\'s add some features?',
    //     when: ({ confirmTableOfContents }) => confirmTableOfContents
    // },
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
        type: 'input',
        name: 'collaborators',
        message: 'Did you have any collaborators on this app?'

    }
    // {
    //     type: 'input',
    //     name: 'about',
    //     message: 'Provide some information about your collaborators:',
    //     // when: ({ confirmCollaborator }) => confirmCollaborator
    // }
]
//     ]);
// };

// const promptProject = portfolioData => {
//     if (!portfolioData) {
//         portfolioData = [];
//     }
//     console.log (`
//     =========================
//     Did you work with anyone?
//     =========================
//     `);
//     return inquirer.prompt([

//     ])

// }
// console log answers into an object
// promptUser()
//     .then(answers => console.log(answers))
// .then(promptProject)
// .then(projectAnswers => {
//     console.log(projectAnswers)
//     const pageHTML = generatePage(portfolioData);




// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((response) => {

        fs.appendFileSync("README.md", ("#" + response.title) + '\n', function (err) {
            if (err) {
                console.log(err)
            }
            else {
                console.log("Success")
            }
        })
    
    fs.appendFileSync("README.md", ("This application was developed by: " + response.gitHubName + '\n') + '\n', function(err) { 

        if (err) { 
        console.log(err)
        }
        else {
        console.log("Success")
        }
    
    })
    fs.appendFileSync("README.md", ( response.description ) + '\n', function(err) { 

        if (err) { 
        console.log(err)
        }
        else {
        console.log("Success")
        }
    
    })
    fs.appendFileSync("README.md", ("## Other Contibuting Developers:" + '\n' + response.installation)+ '\n', function(err) { 

        if (err) { 
        console.log(err)
        }
        else {
        console.log("Success")
        }
    
    })
    
    fs.appendFileSync("README.md", ("## How to use the Application" + '\n' + response.usage)+ '\n', function(err) { 

        if (err) { 
        console.log(err)
        }
        else {
        console.log("Success")
        }
    
    })
    fs.appendFileSync("README.md", ("## Other Contibuting Developers:" + '\n' + response.collaborators)+ '\n', function(err) { 

        if (err) { 
        console.log(err)
        }
        else {
        console.log("Success")
        }
    
    })
    fs.appendFileSync("README.md", ("## Licence(s)" + '\n' + response.license)+ '\n', function(err) { 

        if (err) { 
        console.log(err)
        }
        else {
        console.log("Success")
        }
    
    })
})
}


// function call to initialize program
init();

// console.log(response.title);
