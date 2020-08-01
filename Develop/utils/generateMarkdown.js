// function to generate markdown for README
function generateMarkdown(data) {
  return `
${"# " + data.title }
${"## DEVELOPED BY: " +  '\n' + "github.com/" + data.gitHubName}
${"## DESCRIPTION:"+ '\n' + data.description}
${"## LANGUAGES USED:" + '\n' + data.languages}
${"## HOW TO INSTALL THIS APP:" + '\n' + data.installation}
${"## CONTRIBUTING DEVELOPERS:" + '\n'  + data.collaborators}
${"## LICENSE(S)" + '\n'}
${'\n' + `![GitHub](https://img.shields.io/github/license/${data.gitHubName}/${data.title})`}
${'\n' + `![GitHub followers](https://img.shields.io/github/followers/${data.gitHubName}?label=GitHub%20Followers&logo=Github&?style=social)`}
${'\n' + `![GitHub language count](https://img.shields.io/github/languages/count/${data.gitHubName}/${data.title}?logo=GitHub)`}
${'\n' + `![GitHub last commit](https://img.shields.io/github/last-commit/${data.gitHubName}/${data.title})`}
`;
}
module.exports = generateMarkdown;


// ${'\n' + `![GitHub language count](https://img.shields.io/github/languages/count/${data.gitHubName}/${data.title}?logo=GitHub)`}
//couldn't get this to work
// ${'\n' + `![GitHub](https://img.shields.io/github/${data.license}/${data.gitHubName}/${data.title})`}
// ![GitHub followers](https://img.shields.io/github/followers/nosremetnarg?label=GitHub%20Followers&logo=Github&style=social)
//couldn't get this to show up
// ${'\n' + `![GitHub top language](https://img.shields.io/github/languages/top/${data.gitHubName}/${data.title})`}
// ![GitHub](https://img.shields.io/github/license/JMPerez/spotify-web-api-js)
// this one works
// ${'\n' + `![GitHub last commit](https://img.shields.io/github/last-commit/${data.gitHubName}/${data.title})`}


// ![GitHub](https://img.shields.io/github/license/nosremetnarg/readmeGenerator)
// module.exports = templateData => {
//   console.log(templateData);


//   return `
//   <!DOCTYPE html>
//   <html lang="en">

//   <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>Portfolio Demo</title>
//   </head>

//   <body>
//     <h1>${templateData.name}</h1>
//     <h2><a href="https://github.com/${templateData.github}">Github</a></h2>
//   </body>
//   </html>
//   `;
// };