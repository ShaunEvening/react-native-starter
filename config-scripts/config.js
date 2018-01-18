/**
 * Config.js is a modified version of awslabs configuration scripts for aws-serverless-express
 * https://github.com/awslabs/aws-serverless-express/tree/master/example/scripts
 */

const fs = require('fs');
const exec = require('child_process').execSync;
const modifyFiles = require('./util').modifyFiles;


let minimistHasBeenInstalled = false;

/**
 * Install minimist
 */
if (!fs.existsSync('./node_modules/minimist')) {
  exec('npm install minimist --silent');
  minimistHasBeenInstalled = true;
}

const args = require('minimist')(process.argv.slice(2), {
  string: [
    'displayName',
  ],
  default: {
    displayName: 'React Native Starter',
  }
});

/**
 * Uninstall minimist
 */
if (minimistHasBeenInstalled) {
  exec('npm uninstall minimist --silent');
}

/**
 * Save the arguments
 */
const displayName = args['displayName'];

if (!displayName) {
  console.error('You did not include a --displayName');
  return;
}

const appName = displayName.replace(/\s/g, ''); // Remove spaces

/**
 * Modify the files
 */
modifyFiles(['./app.json', './package.json', './package-lock.json'], [{
  regexp: /YourDisplayName/g,
  replacement: displayName,
}, {
  regexp: /YourAppName/g,
  replacement: appName,
}]);
