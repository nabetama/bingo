import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { BLOCKS } from "./data/blocks";
import { Block } from "./Block";

function App() {
  return (
    <div className="App">
      <header></header>
      <main>
        <h1>BINGO</h1>
        {BLOCKS.map((labels) => {
          return labels.map((label) => {
            return <Block label={label} />;
          });
        })}
      </main>
    </div>
  );
}

export default App;
