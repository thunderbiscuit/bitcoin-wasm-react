const wasm = require("../bip39-wasm-lib/pkg-node/bip39_wasm_lib.js");

mnemonic = wasm.generate_mnemonic_node();

console.log(mnemonic);
