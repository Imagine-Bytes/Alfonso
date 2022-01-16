const files = require("../../utils/files");
const inputParser = require("../../utils/inputParser");
const chalk = require("chalk");

let successMessage = ``

module.exports = {
  component: (name) => {
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
      return <div styles={${name}Styles.container}>
            ${name} Component
            </div>
        
    };
    
    export default ${name};
    
    `;
  const stylesData = `
    .container {
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
  page: (name, addons=["none"]) => {
    const extras = {
      none: "",
      useState: `import { useState } from "react"`,
      useEffect: `import { useEffect } from "react"`
      
    }
    name = inputParser.formatName(name)
    const dir = "./pages";
      if (files.fileExist(`${dir}/${name}`)) {
      console.log("Page already exists")
      return ""
    } 
    if (!files.directoryExists(dir)) {
      files.mkdirSync(dir);
    }
    files.createFile(`./${dir}/${name}.js`);
    const componentData =`
    import Head from 'next/head'
    import Link from 'next/link'
    ${addons.map(addon => {
      return extras[addon]
    })}



    const ${name} = () => {
      return <div>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>${name}</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </div>
         
    };
    
    export default ${name};
    
    `;
    files.writeFile(`./${dir}/${name}.js`, componentData);
    console.log(chalk.blue(`your`)+ chalk.cyanBright(` ${name} `) + chalk.blue("Page has been created at ") + chalk.green (` ${dir}/${name}.js`))
  },
};
