const inquirer = require('inquirer');
const files = require('./files');
const argv = require('minimist')(process.argv.slice(2));

module.exports = {
  formatName: () => {
        // console.log( argv.stack)
    let fileName = argv._[argv._.length-1]
    // let fileNameLength = fileName.length-1
    if (!(fileName.substr(-3, 3) == ".js" || fileName.substr(-4, 4) == ".js/")) {
        fileName += ".js"
      }
      // For pascal case
      // let [first, ...rest] = file
      return fileName
  },
  getBoilerPlate: () => {
    let plateFiles = []
    if (argv._[0] == "react") {
      if (argv.g == "component") {
      return "./boilerplates/boilerplate.js"
    }
      return "./boilerplates/boilerplate.js"
    }
  }

};
