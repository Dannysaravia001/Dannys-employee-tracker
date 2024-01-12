// utils/prompt.js

const inquirer = require('inquirer');

const prompt = async (questions) => {
  return inquirer.prompt(questions);
};

module.exports = prompt;