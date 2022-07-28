import React, { useEffect, useReducer } from "react";
import { Block } from "./Block";

import { BLOCKS as Data } from "./data/blocks";
import { isBingo } from "./logics/logics";

type Block = {
  isOpen: boolean;
  label: string;
};

type State = Block[][];

type Action = {
  type: "TOGGLE";
  label: string;
};

type ActionTypes = { type: "TOGGLE"; label: string } | { type: "CLEAR" };

const initialState: State = Data.map((blocks) => {
  return blocks.map((block) => {
    return { isOpen: false, label: block };
  });
});

const reducer = (state: State, action: ActionTypes): State => {
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
    case "CLEAR":
      return state.map((blocks) => {
        return blocks.map((block) => {
          return { isOpen: false, label: block.label };
        });
      });
    default:
      return state;
  }
};

const Blocks: React.FC = () => {
  useEffect(() => {
    const bingo = isBingo(state);
    console.log(bingo);
  });
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <table className="border-separate border-spacing-2 border border-slate-500">
        <tbody>
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
        </tbody>
      </table>
      <div className="flex-auto">
        <button
          onClick={() => dispatch({ type: "CLEAR" })}
          className="bg-gray-400 hover:bg-gray-300 text-white rounded px-4 py-2 w-48"
        >
          さいしょにもどす
        </button>
      </div>
    </>
  );
};

export { Blocks };
