const files = require("../../utils/files");
const chalk = require("chalk");
const fs = require('fs');

module.exports = {
  component: (name) => {
    const dir = "./components";
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    files.createFile(`./components/${name}.jsx`);
    const componentData = `import React from "react";

    const ${name.charAt(0).toUpperCase() + name.slice(1)} = () => {
      return (
          {/* Component Structure goes here */}
      );
    };
    
    export default ${name.charAt(0).toUpperCase() + name.slice(1)};
    
    `;
    files.writeFile(`./components/${name}.jsx`, componentData);
    console.log(chalk.blue(`your`)+ chalk.cyanBright(` ${name.charAt(0).toUpperCase() + name.slice(1)}`) + chalk.blue(" component has been created at ") + chalk.green (` ./components/${name}.jsx`))
  },
};
