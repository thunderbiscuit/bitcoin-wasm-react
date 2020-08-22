mod utils;

use wasm_bindgen::prelude::*;
use bip39::Mnemonic;
use rand::{RngCore, thread_rng};

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet() {
    alert("Hello, lib!");
}

#[wasm_bindgen]
pub fn generate_mnemonic() {
    // using the usual fill_bytes() throws an error. Not supported by wasm_bindgen, as per
    // https://docs.rs/rand/0.5.4/rand/rngs/struct.OsRng.html
    // let mut entropy = [0u8; 16];
    // thread_rng().fill_bytes(&mut entropy);

    let entropy = [42u8; 16];
    let mnemonic_phrase = Mnemonic::from_entropy(&entropy).expect("Cannot create mnemonic from bip39 crate");
    alert(&mnemonic_phrase.to_string());
}