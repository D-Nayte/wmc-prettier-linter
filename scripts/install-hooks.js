import { execSync } from 'child_process';
import path from 'path';
import { existsSync, mkdirSync } from 'fs';

const hooksDir = path.join(process.cwd(), '.githooks');
const preCommitFile = path.join(hooksDir, 'pre-commit');
const gitHooksDir = path.join(process.cwd(), '.git/hooks');
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
