const chalk = require("chalk");
const fs = require("fs");
const clear = require("clear");
const figlet = require("figlet");
const argv = require("minimist")(process.argv.slice(2));
const { selectFramework } = require("./utils/input");
const files = require("./utils/files");
const react = require("./boilerplates/react");
// const files = require("./utils/files");
// const inputParser = require("./utils/inputParser");
// const Plate = require(inputParser.getBoilerPlate());

// when user runs "alf" during initalization (node index during development)
if (argv._[0] === undefined) {
  clear();
  console.log(
    chalk.yellow(figlet.textSync("Alfonso", { horizontalLayout: "full" }))
  );
  const run = async () => {
    const framework = await selectFramework();
    let tech = framework.framework;
    files.createFile("config.json");
    files.writeFile("config.json", JSON.stringify(framework));
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
if (argv._[0] && fs.existsSync("config.json")) {
  const config = JSON.parse(fs.readFileSync("config.json", "utf8"))
  const cName = argv._[0];
  switch (config.framework) {
    case "React":
      react.component(cName);
      break;
    case "Vue":
      // code block
      break;
    case "Angular":
      // code block
      break;
    case "Svelte":
      // code block
      break;
    default:
      console.log("Something went wrong...");
  }
}
// when usr tries to create component without initializing alfonso 
if (argv._[0] && !fs.existsSync("config.json")) {
  console.log(chalk.red("ERR") + chalk.blue(" alfonso has not been initialized"))
  console.log(chalk.blue("Run") + chalk.green(" alf ") + chalk.blue("to initialize alfonso"))
}

// let sageMode = true

// // const status = new Spinner('Initializing local repository and pushing to remote...');
// if (!files.directoryExists('.alf')) {
//   console.log(chalk.red('Alfonso SageMode not active'));
//   console.log(chalk.yellow('Tip: use alf init to enable full support'));
//   // process.exit();
// }
// console.log(argv)

// const run =  () => {
//   let name = inputParser.formatName()
//   let output = new Plate
//         output.structure()
//         files.createFile(name)
//         files.writeFile(name, output.structure())
// };

// run();
