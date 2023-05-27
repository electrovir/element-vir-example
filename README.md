# element-vir-example

An absolutely bare-bones `element-vir` example repo, including GitHub Pages.

Here's this example on GitHub Pages: https://electrovir.github.io/element-vir-example/

# Guide

Note that this repo was built using Node.js version 18. If you have a lower version it might not work.

1. clone repo
2. run `npm i`
3. run `npm start`
4. If using VS Code, open a TS file make sure to run `Select TypeScript Version...` and select "Use Workspace Version"

## To Enable GitHub pages

1. Push the repo to a fork or to a repo that you own.
2. Go to Settings, then Pages.
3. Under "Branch" change "None" to `gh-pages`. (If you don't see `gh-pages` as a branch option, wait for you GitHub Actions to finish running).
4. Go to Settings, then Actions, then General.
5. Make sure that under "Workflow permissions", the "Read and write permissions" input is checked. Then click "Save".
   1. GitHub Actions need write permission so they can write the GitHub pages output to a branch.

# File Notes

- `tsconfig.json`: Bare minimum TypeScript config. I recommend much stricter typing: see my [base TSConfig](https://github.com/electrovir/virmator/blob/main/base-configs/base-tsconfig.json) for an example.
- `public/index.css`: global styles go here. This should usually be quite empty, as most styles will be inside each element.
- `configs/vite.ts`: this file is for Vite settings. I personally prefer some other settings as well: see my [base Vite config](https://github.com/electrovir/virmator/blob/main/src/compiled-base-configs/base-vite.ts) for an example. Change `element-vir-example` in this config to the name of your repo for GitHub Pages to work properly.
