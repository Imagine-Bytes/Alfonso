const files = require("../../utils/files");
const inputParser = require("../../utils/inputParser");
const chalk = require("chalk");

let successMessage = ``
 let simpleComponent = (name) => {
    name = name.trim()
    let originalName = name
    name = inputParser.formatName(name)
    const dir = "components";
     if (!files.directoryExists(dir)) {
      files.createFolder(dir);
    }
    if (!files.directoryExists(`${dir}/${name}`)) {
      files.createFolder(`${dir}/${name}`);
    }
    if (files.fileExist(`./${dir}/${name}/index.js`)) {
      console.log("Component already exists")
      return ""
    } 

    files.createFile(`./${dir}/${name}/index.js`);
    files.createFile(`./${dir}/${name}/${name}.module.css`);
    const componentData = `
    import ${name}Styles from "./${name}.module.css"
    const ${name} = () => {
      return (
          {
            <div styles={${name}Styles.container}>
            ${name} Component
            </div>
          }
      );
    };
    
    export default ${name};
    
    `;
  const stylesData = `
    container {
      background: red;
    }
    
    `;

    files.writeFile(`./${dir}/${name}/index.js`, componentData);
    if (files.fileExist(`./${dir}/${name}/${name}.module.css`)) {
      
      files.writeFile(`./${dir}/${name}/${name}.module.css`, stylesData);
      console.log(chalk.blue("CSS Module created at ") + chalk.green (` ${dir}/${name}.module.css`))
    } else {
      console.log(chalk.blue("CSS Module ") + chalk.green (` ${dir}/${name}.module.css already exists`))
    }
    console.log(chalk.blue(`your`)+ chalk.cyanBright(` ${name} `) + chalk.blue("Component has been created at ") + chalk.green (` ${dir}/${name}.js`))
  },
module.exports = simpleComponent;
