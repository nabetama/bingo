import React, { useState, useReducer } from "react";
import { Block } from "./Block";

import { BLOCKS as Data } from "./data/blocks";

type Block = {
  isOpen: boolean;
  label: string;
};

type State = Block[][];

type Action = {
  type: "TOGGLE";
  label: string;
};

const initialState: State = Data.map((blocks) => {
  return blocks.map((block) => {
    return { isOpen: false, label: block };
  });
});

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "TOGGLE":
      return state.map((blocks) => {
        return blocks.map((block) => {
          if (block.label === action.label) {
            return { isOpen: !block.isOpen, label: action.label };
          }
          return block;
        });
      });
    default:
      return state;
  }
};

const Blocks: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <table className="border-separate border-spacing-2 border border-slate-500 ">
        {state.map((blocks) => {
          return (
            <tr>
              {blocks.map((block) => {
                return (
                  <td className="border border-slate-700 ">
                    <Block
                      label={block.label}
                      isOpen={block.isOpen}
                      toggleIsOpen={dispatch}
                    />
                  </td>
                );
              })}
            </tr>
          );
        })}
      </table>
    </>
  );
};

export { Blocks };
