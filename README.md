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
