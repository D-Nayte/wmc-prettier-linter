# Initialize package for usage

You have to initialize ESLint for your project just once. To do so, type

- `npm run wmcInit`

in your terminal and choose if you are using typescript or not to set up ESLint for your project.

Now, your code is automatically checked while you write and formatted after save `(recommended extensions needed)`. Upon committing the code to GitHub, all modified files are rechecked. If any issues are found during the check, the code commit is aborted, and errors are reported.

## ATTENTION!

If you still wanto to commit with errors, use

- `git commit --no-verify`

---

## Lint and Fix

You can also manually check your code by entering:

- `npm run wmcLint`

or autofix your code by typing:

- `npx eslint . --fix`

in your terminal.

## You should also install recommended VS Code extensions

- install ESLint for VS Code [here-->](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- install Prettier for VS Code [here-->](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- install Pretty Typescript Errors for VS Code [here-->](https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors)
