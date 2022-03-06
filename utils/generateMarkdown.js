const fs = require('fs');
// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
    case 'Apache':
      return "![License: MIT](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
    case 'GNU':
      return "![License: MIT](https://img.shields.io/badge/License-GPLv3-blue.svg)";
    default:
      return '';
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `![${license} license](license/${license}.PNG)`
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (fileName,data1) => {
  fs.readFile('./Sample.md', 'utf8', (error, data) =>{
    error ? console.error(error) : "";

    for (const property in data1) {
        data = data.replace(`{${property}}`, `${data1[property]}`);
      }

      data = data.replace(`{Badge}`, renderLicenseBadge(data1.license));
      data = data.replace(`{licenseContent}`, renderLicenseSection(data1.license));

        fs.writeFile(`${fileName}.md`, data, (err) =>
          err ? console.log(err) : console.log(`Successfully created ${fileName}.md`)
        );
    }
  );
}

module.exports = generateMarkdown;
