import pkg from "../bip39-wasm-lib/pkg-node/bip39_wasm_lib.js";

const mnemonic = pkg.generate_mnemonic_node();
console.log(mnemonic);
