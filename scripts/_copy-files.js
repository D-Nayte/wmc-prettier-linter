const fs = require('fs-extra');
const path = require('path');
const install_hooks = require('./_install-hooks.js');

// Path to files to copy
const filesToCopy = [
  '.vscode',
  '.prettierrc.json',
  'config.json',
  'eslint.config.js',
  'react.settings.js',
  'tsconfig.ts.json',
  'tsconfig.tsx.json',
  "ESLint.WMC.readme.md"
  // add more files to copy
];

const currentFilePath = __filename;
const currentDirectory = path.dirname(currentFilePath);
const packagePath = path.dirname(currentDirectory);
const root = path.resolve(packagePath, '..', '..');

//Copy files into root of project
filesToCopy.forEach((file) => {
  const sourcePath = path.join(packagePath, file);
  const destinationPath = path.join(root, file);
  fs.copySync(sourcePath, destinationPath);
});
install_hooks();
console.log('Assets successfully copy to root.');
