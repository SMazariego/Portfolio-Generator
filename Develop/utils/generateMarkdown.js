function renderLicenseBadge(license) {
  if (license === "None") {
    return "";
  } else {
    return `![badge-image](https://img.shields.io/static/v1?label=license&message=${license.replace(
      " ",
      "-"
    )}&color=green)`;
  }
}

function renderLicenseLink(license) {
  if (license === "None") {
    return "";
  } else {
    return `https://choosealicense.com/licenses/${license
      .toLowerCase()
      .replace(" ", "-")}/`;
  }
}

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
Github: https://github.com/${data.githubUsername}
Email: ${data.emailAddress}
`;
}

module.exports = generateMarkdown;
