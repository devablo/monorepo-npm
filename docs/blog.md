# Blog

## monorepo

- The repository contains more than one logical project (e.g. an iOS client and a web-application)
- These projects are most likely unrelated, loosely connected or can be connected by other means (e.g via dependency management tools)

- The repository is large in many ways:
  - Number of commits
  - Number of branches and/or tags
  - Number of files tracked
  - Size of content tracked (as measured by looking at the .git directory of the repository)

Monorepository is architecture pattern used for managing packages in a single repository. The benefits of this pattern is to enable package versions, dependencies to be easier to maintain.

## Lerna

Setup project using `lerna init`, then add your projects to packages folder. The packages folder is default folder for lerna but through `lerna.json` config, you can specify multiple folders for lerna to work its magic, i.e. components, utils.

Lerna, through bootstrapping, links packages together.

Lerna works in 2 modes, `fixed/locked` and `independant`.

Fixed/Locked mode works from the lerna version at the root and automatically updates packages from this version.

Independant means you get to specify whether to update or not for the packages. With `lerna publish` you get to choose the semantic version and whether to update the packages.

Adding packages can be done either through `lerna add` or via adding into package.json and running `lerna bootstrap`. Both will end up linking packages.

> `lerna add sillyname@0.0.3`

Lerna hoisting improves performance of building apps by hoisting the dependencies to the root. By default module bundlers will look for node_modules in current folder and parent folders meaning there won't be duplicate node_modules across all packages.
