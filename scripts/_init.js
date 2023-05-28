const fs = require('fs-extra');
const path = require('path');
const copyInstructions = require('./_copy-instructions');

// Path to the package.json of the Next.js project
const currentFilePath = __filename;
const currentDirectory = path.dirname(currentFilePath);
const packagePath = path.dirname(currentDirectory);
const root = path.resolve(packagePath, '..', '..');
const nextProjectPackageJsonPath = path.join(root, 'package.json');

// The name and command of the script to be added
const scripts = [
  {
    scriptName: 'wmcInit',
    scriptCommand: 'wmc-init',
  },
  {
    scriptName: 'wmcLint',
    scriptCommand: 'eslint -c ./wmc-eslint/eslint.config.js .',
  },
];

// Read the package.json of the Next.js project
const nextProjectPackageJson = JSON.parse(fs.readFileSync(nextProjectPackageJsonPath, 'utf8'));

// Add the scripts to the package.json
scripts.forEach((scripts) => {
  const { scriptName, scriptCommand } = scripts;
  nextProjectPackageJson.scripts[scriptName] = scriptCommand;
});

// Write back the modified package.json
fs.writeFileSync(nextProjectPackageJsonPath, JSON.stringify(nextProjectPackageJson, null, 2));

copyInstructions();
