
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const argv = require('minimist')(process.argv.slice(2));
const files = require('./utils/files');


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

if (argv._[0] == "gen") {
	if (argv._[1] == "component") {
		console.log( argv.stack)

	}

	// files.createFile()
}


const run =  () => {
  console.log(argv)
};

run();