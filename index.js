
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const argv = require('minimist')(process.argv.slice(2));
const files = require('./utils/files');
const plate = require('./boilerplates/boilerplate.js');


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
	if (argv._[2] == "component") {
		console.log( argv.stack)
		let fileName = argv._[argv._.length-1]
		// let fileNameLength = fileName.length-1
		if (!(fileName.substr(-3, 3) == ".js" || fileName.substr(-4, 4) == ".js/")) {
				fileName += ".js"
			}
				let output = plate().create()
				files.createFile(fileName)
				files.writeFile(fileName, output)

	} else if (argv._[1] == "pages") {
		console.log( argv._[1])

	}
	else if (argv._[1] == "services") {
		console.log( argv._[1])

	}
	else if (argv._[1] == "slices") {
		console.log( argv._[1])

	}

	// files.createFile()
}


const run =  () => {
  console.log(argv)
};

run();