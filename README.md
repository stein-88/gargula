# tictactoe

Game tic-tac-toe

## Description

To build this project will be require node up to `14` and `Yarn`, one of the reason is the `node-sass version 4` that only support this version of node.

## Installation

Repository installation
- `yarn install`

Husky installation
- `yarn husky install`
- `yarn husky add .husky/pre-commit "yarn lint-staged"`
- `yarn husky add .husky/pre-push "yarn test"`

## Usage
- `yarn start` Will run the aplication in develop mode
- `yarn build` Will run the aplication in production mode and export the assets for the build folder.
- `yarn build:clean` Delete `./build` folder.
- `yarn checkstyle` It will check all `scss` syntax for errors and automatically try to correct issues.
- `yarn checkjs` It will check all `jsx` syntax for errors and automatically try to correct issues.
- `yarn test` To run all existing tests.
- `yarn testcover` Run all tests and generate a folder with statistics about the coverage test.
- `yarn myscripts` Check if the repository is mergeable.
- `yarn lint:staged` Check all `jsx` and `scss` syntax and do `git add`.

By: `Wanderson Santos`
