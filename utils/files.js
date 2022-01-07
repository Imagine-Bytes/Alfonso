const fs = require('fs');
const path = require('path');
const touch = require("touch");
const _ = require('lodash');

module.exports = {
  getCurrentDirectoryBase: () => {
    return path.basename(process.cwd());
  },

  directoryExists: (filePath) => {
    return fs.existsSync(filePath);
  },

  createFile: (file) => {
    return touch(file);
  },

  writeFile: (file, details) => {
 		fs.writeFileSync( file, details);
 	},
  readFile: (file) => {
    fs.readFileSync( file, "utf8"); 
  },
  fileExist: (value) => {
    fs.existsSync(value)
  }
};