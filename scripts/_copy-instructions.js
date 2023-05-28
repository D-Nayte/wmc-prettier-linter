const fs = require('fs-extra');
const path = require('path');

module.exports = () => {
  // Path to files to copy
  const filesToCopy = [
    'ESLint.WMC.instructions.md',
    // add more files to copy
  ];

  const currentFilePath = __filename;
  const currentDirectory = path.dirname(currentFilePath);
  const packagePath = path.dirname(currentDirectory);
  const root = path.resolve(packagePath, '..', '..');

  //Copy files into root folder of project
  filesToCopy.forEach((file) => {
    const sourcePath = path.join(packagePath, file);
    let destinationPath = path.join(root, file);

    fs.copySync(sourcePath, destinationPath);
  });
};
