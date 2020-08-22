import React, { useState } from "react";
import "./App.css";

const GenerateMnemonic = ({ wasm }) => (
  <button onClick={wasm.generate_mnemonic}>
    Generate BIP39 Mnemonic Phrase
  </button>
);

const App = () => {
  const [wasm, setWasm] = useState(null);

  (async () => {
    // console.log("wasm is being loaded");
    const wasm = await import("bip39-wasm-lib");
    setWasm(wasm);
  })();

  return (
    <div className="App">
      <header className="App-header">
        {wasm ? (
          <GenerateMnemonic wasm={wasm} />
        ) : (
          <p>Library not yet loaded</p>
        )}
      </header>
    </div>
  );
};

export default App;
