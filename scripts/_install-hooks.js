const { execSync } = require('child_process');
const path = require('path');
const { existsSync, mkdirSync } = require('fs');

const copyFiles = () => {
  const currentFilePath = __filename;
  const currentDirectory = path.dirname(currentFilePath);
  const packagePath = path.dirname(currentDirectory);
  const root = path.resolve(packagePath, '..', '..');

  const hooksDir = path.join(packagePath, '.githooks');
  const preCommitFile = path.join(hooksDir, 'pre-commit');
  const gitHooksDir = path.join(root, '.git/hooks');
  const gitPreCommitFile = path.join(gitHooksDir, 'pre-commit');

  // Copying "pre-commit" file to .git/hooks with linux or windows command
  if (!existsSync(gitHooksDir)) {
    mkdirSync(gitHooksDir, { recursive: true });
  }

  const copyCommand = `${
    process.platform === 'win32' ? 'copy' : 'cp'
  } "${preCommitFile}" "${gitPreCommitFile}"`;

  try {
    execSync(copyCommand);
    console.log('Hooks installed successfully!');
  } catch (error) {
    console.error('Failed to install hooks:', error);
  }
};

module.exports = copyFiles;
