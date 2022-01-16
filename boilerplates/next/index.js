const files = require("../../utils/files");
const inputParser = require("../../utils/inputParser");
const chalk = require("chalk");
const fs = require('fs');

module.exports = {
  component: (name) => {
    name = name.trim()
    let originalName = name
    name = inputParser.formatName(name)
    const dir = "./components";
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    files.createFile(`./${dir}/${name}.jsx`);
    files.createFile(`./${dir}/${name}.module.css`);
    const componentData = `
    import ${name}Styles from ${name}.module.css
    const ${name} = () => {
      return (
          {
            <div styles={${name}Styles.container}></div>
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

    files.writeFile(`./${dir}/${name}.jsx`, componentData);
    files.writeFile(`./${dir}/${name}.module.css`, stylesData);
      console.log(chalk.blue("CSS Module created at ") + chalk.green (` ${dir}/${name}.jsx`))
    console.log(chalk.blue(`your`)+ chalk.cyanBright(` ${name} `) + chalk.blue("Component has been created at ") + chalk.green (` ${dir}/${name}.jsx`))
  },
  page: (name, addons=["none"]) => {
    const extras = {
      none: "",
      useState: `import { useState } from "react"`,
      useEffect: `import { useEffect } from "react"`
      
    }
    name = inputParser.formatName(name)
    const dir = "./pages";
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    files.createFile(`./${dir}/${name}.jsx`);
    const componentData =`
    import Head from 'next/head'
    import Link from 'next/link'
    ${addons.map(addon => {
      return extras[addon]
    })}



    const ${name} = () => {
      return (
          {
    <div>
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
          }
      );
    };
    
    export default ${name};
    
    `;
    files.writeFile(`./${dir}/${name}.jsx`, componentData);
    console.log(chalk.blue(`your`)+ chalk.cyanBright(` ${name} `) + chalk.blue("Page has been created at ") + chalk.green (` ./${dir}/${name}.jsx`))
  },
};
