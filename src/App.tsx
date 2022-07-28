import React from "react";
import logo from "./logo.svg";
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
      <main className="text-center">
        <h1 className="text-3xl font-bold underline">BINGO</h1>
        <div className="h-56 grid grid-cols-1 gap-1 content-around text-center">
          <Blocks data={BLOCKS} />
        </div>
      </main>
    </div>
  );
}

export default App;
