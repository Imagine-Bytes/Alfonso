#! /usr/bin/env node

const chalk = require("chalk");
const fs = require("fs");
const clear = require("clear");
const figlet = require("figlet");
const argv = require("minimist")(process.argv.slice(2));
const { selectFramework } = require("./utils/input");
const files = require("./utils/files");
const react = require("./boilerplates/react");
const next = require("./boilerplates/next");
const commands = [
`init\t\tInitialize Alfonse in your Project`, 
`-g\t\tGenerate a Component, Page (or Service soon)`,
`help, -h\tShow this help section`
]

if ((argv._[0] === undefined && argv.g === undefined) || (argv._[0] === "help" || argv.h !== undefined)) {
    console.log(
    chalk.yellow(figlet.textSync("Alfonse...", { horizontalLayout: "full" }))
  );
    console.log(
    chalk.hex('#83aaff')("Usage: alf -g component Component"))
      console.log(
    chalk.white("COMMANDS:"))
    commands.forEach(command => {
      console.log(
    chalk.yellow(command))
    })
  
}

// when user runs "alf" during initalization (node index during development)
if (argv._[0] === "init" && argv.g === undefined) {
  clear();
  console.log(
    chalk.yellow(figlet.textSync("alfonse", { horizontalLayout: "full" }))
  );
  const run = async () => {
    const framework = await selectFramework();
    let tech = framework.framework;
    files.createFile("alfConfig.json");
    files.writeFile("alfConfig.json", JSON.stringify(framework));
    console.log(
      chalk.blue(`${tech} component generator has been setup for your project`)
    );
    console.log(
      chalk.blue("Run") +
        chalk.green(" alf component_name ") +
        chalk.blue("to create a component... Happy Hacking!")
    );
  };
  run();
}
// when user runs "alf component_name" to create component 
if (argv._[0] && fs.existsSync("alfConfig.json")) {
  const config = JSON.parse(fs.readFileSync("alfConfig.json", "utf8"))
  const cName = argv._[0];
  switch (config.framework) {
    case "React":
      react.component(cName);
      break;
      case "Next":
      if (argv.g === "page") {
        next.page(cName);
        break
      }
      next.component(cName);
      break;
    case "Vue":
      // code block
      break;
    case "Svelte":
      // code block
      break;
    default:
      console.log("Something went wrong...");
  }
}
// when usr tries to create component without initializing alfonse 
if (argv._[0] && !fs.existsSync("alfConfig.json")) {
  console.log(chalk.red("ERR") + chalk.blue(" alfonse has not been initialized"))
  console.log(chalk.blue("Run") + chalk.green(" alf init ") + chalk.blue("to initialize alfonse"))
}


// When user uses the -g flag to create a component without initializing AFTER WRITING... I FIGURED IT MAKES NOT MUCH SENSE
// if (argv.g && !fs.existsSync("config.json")) {
//   console.log(chalk.red("NOTICE") + chalk.blue(" alfonse has not been initialized"))
//   console.log(chalk.blue("Run") + chalk.green(" alf ") + chalk.blue("to initialize alfonse"))
//   // console.log(argv.g)
//   const cName = argv._[0];
//    switch (argv.g.toLowerCase()) {
//     case "react":
//       react.component(cName);
//       break;
//     case "vue":
//       // code block
//       break;
//     case "svelte":
//       // code block
//       break;
//     default:
//       console.log("Something went wrong...");
//   }
// }
