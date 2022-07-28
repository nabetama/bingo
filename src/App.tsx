import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Blocks } from "./Blocks";

import { BLOCKS } from "./data/blocks";

type Block = {
  label: string;
  isOpen: boolean;
};

function App() {
  return (
    <div className="App">
      <header></header>
      <main>
        <h1>BINGO</h1>
        <Blocks data={BLOCKS} />
      </main>
    </div>
  );
}

export default App;
