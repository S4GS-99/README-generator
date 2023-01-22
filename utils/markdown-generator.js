function generateMarkdownWith(data) {
	const draft = `
# ${data.title}

${checkLicense(data.license)}

## Description

${data.description}

## Table of contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.contributing}

${data.github}

## License

${data.license}

## Tests

${data.tests}

## Questions

In case you need to reach me or have any questions, here is my [email](mailto:${
		data.email
	})

`;

	return draft;
}

function checkLicense(data) {
	const license =
		data === 'MIT'
			? '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
			: data === 'GNU GPLv3'
			? '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-green.svg)](https://www.gnu.org/licenses/gpl-3.0)'
			: data === 'ISC'
			? '[![License: ISC](https://img.shields.io/badge/License-ISC-orange.svg)](https://opensource.org/licenses/MIT)'
			: data === 'Apache 2.0'
			? '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
			: 'No License';

	return license;
}

module.exports = {
	generateMarkdownWith,
	checkLicense,
};
