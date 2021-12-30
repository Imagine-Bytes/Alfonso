const inquirer = require('inquirer');

module.exports = {
  initialize: () => {
    const questions = [
      {
        name: 'project',
        type: 'input',
        message: 'Enter your project name ()',
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            value = "Project"
            return true;
          }
        }
      }
    ];
    return inquirer.prompt(questions);
  },
};
