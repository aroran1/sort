# Sort

## install and running typescript globally or with npx

You can use npm to install TypeScript globally, this means you can use the tsc command anywhere in your terminal.
`npm install -g typescript` or try with `brew install typescript`

An alternative is to use npx when you have to run tsc for one-off occasions.
`npx tsc init`

Compiles TS file to a JS file
Run app with `npx tsc index.ts`

Create folder structure

- src > for typescript code
- build > compiled javascript code

## create typescript config

`tsc init` or `npx tsc init`

### tsconfig settings

- "rootDir": "./src" // path to your typecript code
- "outDir": "./build" // path to your compiled javascript code

Now if you run `tsc` will compile the code in the build folder
if you run `tsc -w` is going to continue to watch for nay changes to the ts code and will compile simultaneously

To run the compiled JS code run `node build/index.js` in another terminal

Having to run compile to JS code and running it with node in a separate process can be tedious to do it manually.
This can be done as one step with below:

- `npm init -y` - to create package.json
- `npm install nodemon concurrently`

  - `nodemon` is responsible for monitoring any changes to the files re-run node reflecting those changes inside of the project. Executing our code once it has been compiled.
  - `concurrently` - helps us run multiple scripts at once with one single command.
    In this project we want to run:

    1. running `tsc` - start up typescript compiler
    2. running `nodemon` - execute any JS file changes

    ```
    "start:build": "tsc -w", // runs typescript compiling in watch mode with -w
    "start:run": "nodemon build/index.js",  // runs node in watch mode with nodemon and execute the specified file
    "start": "concurrently npm:start:*", // tells concurrently to look for npm scripts and run all starting with start: in parallel
    ```

## run project

`npm start`
