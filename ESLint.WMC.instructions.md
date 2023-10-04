# Install git pre-commit hook for ESLint and Prettier

If you want to abort the commit if there are any errors, you can install a pre-commit hook that will run ESLint and Prettier before each commit.

- `npm run wmc-hook-install`

You can also uninstall the hook by typing:

- `npm run wmc-hook-delete`

## ATTENTION!

If you still wanto to commit with errors, use

- `git commit --no-verify`

---

Now, your code is automatically checked while you write and formatted after save `(recommended extensions needed)`. Upon committing the code to GitHub, all modified files are rechecked. If any issues are found during the check, the code commit is aborted, and errors are reported.

## Lint and Fix

You can also manually check your code by entering:

- `npm run wmc-lint`

or autofix your code by typing:

- `npm run wmc-fix`

in your terminal.

## You should also install recommended VS Code extensions

- install ESLint for VS Code [here-->](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- install Prettier for VS Code [here-->](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- install Pretty Typescript Errors for VS Code [here-->](https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors)
