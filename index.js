const fs = require('fs');
const util = require('util');
const path = require('path');
const writeFileAsync = util.promisify(fs.writeFile);
const inquirer = require('inquirer');
const markdown_generator = require('./utils/markdown-generator.js');
const generateMarkdownWith = markdown_generator.generateMarkdownWith;

const README_file = path.normalize('./assets/markdown/generatedREADME.md');

// array of questions for user
const questions = [
  {
    type: 'input',
    name: 'github',
    message: `what's your GitHub user name?`,
    default: '[S4GS-99](https://github.com/S4GS-99)',
  },
  {
    type: 'input',
    name: 'repo',
    message: `What's the name of your repo?`,
    default: 'README-generator',
  },
  {
    type: 'input',
    name: 'title',
    message: `What's the title of your project?`,
    default: 'Project Title',
  },
  {
    type: 'input',
    name: 'description',
    message: `Please, give a short description of your program`,
    default: 'Project Description',
  },
  {
    type: 'input',
    name: 'installation',
    message: `How can others install your program?`,
    default: 'Do not apply for installation',
  },
  {
    type: 'input',
    name: 'usage',
    message: `How can others use yor program? `,
  },
  {
    type: 'list',
    name: 'license',
    message: `What license you want to register?`,
    choices: ['MIT', 'GNU GPLv3', 'ISC', 'Apache 2.0'],
    default: 'MIT',
  },
  {
    type: 'input',
    name: 'contributing',
    message: `Please, list your collaborators (GitHub profiles), third-party assets, and or tutorials`,
  },
  {
    type: 'input',
    name: 'tests',
    message: `Do you want to add any test?`,
    default: 'Do not apply for tests',
  },
  {
    type: 'input',
    name: 'email',
    message: `What email can the users use to contact you?`,
    default: 'random@gmail.com',
  },
];

const prompt = inquirer.createPromptModule();

// function to initialize program
async function init() {
  try {
    const prompts = await prompt(questions);
    const generateREADME = generateMarkdownWith(prompts);

    writeFileAsync(README_file, generateREADME);
    console.log('Successfully wrote to README.md');
  } catch (err) {
    console.error(err);
  }
}

init();
