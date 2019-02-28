# Shareable monorepo NPM

## Lerna

Using a lerna for xxxx

monorepo approach & Lerna, we can manage packages and dependencies for sub packages in 1 repository in 1 update

* Single lint, build, test and release process.
* Easy to coordinate changes across modules.
* Single place to report issues.
* Easier to setup a development environment.
* Tests across modules are ran together which finds bugs that touch multiple modules easier.

`npx lerna init` - creates structure & json file
`npx lerna bootstrap` - links the packages together (needs to run when adding packages in)
`npx lerna create <package>` - to create and link new package with default structure

## Directory Structure

Put each package under the `packages` directory.

``` markdown
├── README.md
├── lerna.json
├── package.json
├── packages
│   ├── x-cli
│   │   ├── lib
│   │   │   ├── main.d.ts
│   │   │   ├── main.js
│   │   │   └── main.js.map
│   │   ├── package.json
│   │   ├── src
│   │   │   └── main.ts
│   │   └── tsconfig.json
│   └── x-core
│       ├── lib
│       │   ├── index.d.ts
│       │   ├── index.js
│       │   └── index.js.map
│       ├── package.json
│       ├── src
│       │   └── index.ts
│       └── tsconfig.json
├── tsconfig.json
```

## Lerna & TypeScript

> Note that Lerna works for JavaScript & doesn't understand TypeScript so needs to run TypeScript to generate transpiled JS.

### lerna run build

This will run all package.json script build commands