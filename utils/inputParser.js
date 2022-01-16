const inquirer = require('inquirer');
const files = require('./files');
const argv = require('minimist')(process.argv.slice(2));


let a = {

checkString: (name) => {
      if (name) {
      if (typeof name === "string") {
      return name
    }
    return String(name)
    }
    return ""
},
splitString: (string) => {
  let regex = /[A-Z\xC0-\xD6\xD8-\xDE]?[a-z\xDF-\xF6\xF8-\xFF]+|[A-Z\xC0-\xD6\xD8-\xDE]+(?![a-z\xDF-\xF6\xF8-\xFF])|\d+/g
  return string.match(regex)
},
toCamelCase: (name) => {
  let inputArray = a.splitString(name)
     let result = "";

    for(let i = 0 , len = inputArray.length; i < len; i++) {

      let currentStr = inputArray[i];
  
      let tempStr = currentStr.toLowerCase();

      // if(i != 0) {
  
        // convert first letter to upper case (the word is in lowercase) 
          tempStr = tempStr.substr(0, 1).toUpperCase() + tempStr.substr(1);

       // }
      
       result +=tempStr;
      
    }
  
    return result;

},
  formatName: () => {
        // console.log( argv.stack)
    let fileName = argv._[argv._.length-1]
    fileName = a.checkString(fileName)
    fileName = a.toCamelCase(fileName)
    
      // For pascal case
      
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

module.exports = a
