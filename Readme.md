# Prerequisites

- Node.js >= 18.0.0
- VS Code (for all features)
- npm >= 7.0.0

Format on Save is only available with VS Code right now if the recommended extensions are installed.

# Installation

Be shure you are in the root directory of your project.

Install the package with:

`npm install wmc-eslint -D`

# Hook Installation

If you want to abort the commit if there are any errors, you can install a pre-commit hook that will run ESLint and Prettier before each commit.

- `npm run wmc-hook-install`

You can also uninstall the hook by typing:

- `npm run wmc-hook-delete`

## ATTENTION!

If you still want to commit with errors, use

- `git commit --no-verify`

# Gratulations!

Now, your code is automatically checked while you write and formatted after save `(recommended extensions needed)`. Upon committing the code to GitHub, all modified files are rechecked. If any issues are found during the check, the code commit is aborted, and errors are reported.

# Lint and Fix

You can also manually check your code by entering:

- `npm run wmc-lint`

or autofix your code by typing:

- `npm run wmc-fix`

in your terminal.

To fromat your code (if oyu are not using VS Code) type:

- `npm run wmc-format`

## Install Recommended VS Code extensions

- MAC: `CMD + Shift + p`
- WIN: `STRG + Shift + P`

and enter `"Show Recommended Extensions"` to get a list of recommended extensions

or

- install ESLint for VS Code [here-->](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

  - formatting fixable ESLint errors on file save

- install Prettier for VS Code [here-->](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - formatting code (e.g. indentation) on file save
- install Pretty Typescript Errors for VS Code [here-->](https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors)

  - if using typescript, you get more readable Errors Information inside VS Code
