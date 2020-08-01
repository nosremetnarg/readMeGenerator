// function to generate markdown for README
function generateMarkdown(data) {
  return `
${"###" + data.title + "hotdog"}
${"#This app was developed by: " +  '\n' + data.gitHubName + '\n'}
${data.description + '\n'}
${"## Languages used in the app:" + '\n' + data.languages}
${"## How to install this app:" + '\n' + data.installation}
${data.usage}
${"# Other Contributing Developers:" + '\n'  + data.collaborators}
${"# Licence(s)" + '\n' + data.license}
`;
}

module.exports = generateMarkdown;

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