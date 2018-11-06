# purescript-runnable-node-script-template

A simple Purescript project template using webpack and yargs for creating one-file exectuble node scripts with CLI.

### Usage

1. Install NPM's dependencies with yarn or npm:

```bash
    $ yarn install
```

2. Then bower's:

```bash
    $ bower install
```

3. Build the project

```bash
    $ pulp build
```

4. Make sure you have `sed` and `node` installed and they are available in $PATH.

5. Track changes to your project and have it automatically recompiled into an bundled executable node scripts:

```bash
    $ ./node_modules/webpack/bin/webpack.js --watch
```

Webpack will bundle the script only when ./entry.js deps are changed.

Note: It works great with psc-ide.

6. Your script is in under: `./dist/node.js`. It is already standalone & executable:

```bash
    $ ./dist/node.js
```

### Credits

Library is co-created and funded by [`λ-terms`](https://github.com/lambdaterms/)

### License & copyrights

See LICENSE file.
