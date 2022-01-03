
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const argv = require('minimist')(process.argv.slice(2));
const files = require('./utils/files');
const inputParser = require('./utils/inputParser');
const Plate = require(inputParser.getBoilerPlate());


// clear();

// console.log(
//   chalk.yellow(
//     figlet.textSync('Alfonso', { horizontalLayout: 'full' })
//   )
// );

let sageMode = true

// const status = new Spinner('Initializing local repository and pushing to remote...');

if (!files.directoryExists('.alf')) {
  console.log(chalk.red('Alfonso SageMode not active'));
  console.log(chalk.yellow('Tip: use alf init to enable full support'));
  // process.exit();
}
console.log(argv)
	

const run =  () => {
  let name = inputParser.formatName()
  let output = new Plate
        output.structure()
        files.createFile(name)
        files.writeFile(name, output.structure())
};

run();