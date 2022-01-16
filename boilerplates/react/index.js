const files = require("../../utils/files");
const inputParser = require("../../utils/inputParser");
const chalk = require("chalk");

module.exports = {
  component: (name) => {
    const dir = "./components";
   if (!files.directoryExists(dir)) {
      files.createFolder(dir);
    }
    name = inputParser.formatName(name)
    if (files.fileExist(`${dir}/${name}.js`)) {
      console.log("Component already exists")
      return ""
    } 
    const componentData = `import React from "react";

    const ${name} = () => {
      return (
          {/* Component Structure goes here */}
      );
    };
    
    export default ${name};
    
    `;

    files.writeFile(`./components/${name}.jsx`, componentData);
    console.log(chalk.blue(`your`)+ chalk.cyanBright(` ${name.charAt(0).toUpperCase() + name.slice(1)}`) + chalk.blue(" component has been created at ") + chalk.green (` ./components/${name}.jsx`))
  },
};
