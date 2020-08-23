# Readme

Three directories: 
1. The Rust library we use to generate the WASM and JS module
2. The React app that uses the WASM library
3. A NodeJS script that uses the WASM library

## The WASM library
The WASM library is just a thin wrapper around a rust-bitcoin library called `bip39`.

We use it to generate a BIP39 mnemonic phrase (12 words).

## Integrating the library with create-react-app
I drew heavily from this [fantastic blog post] by Preston Richey for the starting setup and integration of WASM libraries with React apps.


## Steps

#### Part 1: Rust library with WASM target

```sh
wasm-pack new lib

# bundler target (used in the React app)
wasm-pack build --target bundler --out-dir pkg-js
cd pkg-js
yarn link
```

#### Part 2: React app

```sh
# from root of repository
yarn create react-app bip39-react-app
cd bip39-react-app
yarn link bip39-wasm-lib
yarn add --dev react-app-rewired wasm-loader

# add config-overrides.js

# the react app cannot be fired up using the usual commands (i.e. "react-scripts start", etc.)
# note that the scripts have been changed to "react-app-rewired start"
yarn start
```

#### Part 3: NodeJS

```sh
cd bip39-wasm-lib
wasm-pack build --target nodejs --out-dir pkg-node
```
