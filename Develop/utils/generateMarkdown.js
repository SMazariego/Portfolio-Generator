// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}function generateMarkdown(data) {
  let licenseBadge = renderLicenseBadge(data.projectLicense);
  let licenseSection = renderLicenseSection(data.projectLicense);
  return `# ${data.Title}
  ${licenseBadge}
## Description
${data.Description}
## Installation
${data.installation}
## Usage
${data.Instructions}
## Testing
${data.test}
## Contribute
${data.contribution}
${licenseSection}
## Questions?
Please contact me at the links below for any inquiries.
Github: https://github.com/${data.github}
Email: ${data.email}
`;
}

module.exports = generateMarkdown;
