import React, { useEffect, useReducer, useState } from "react";
import { Block } from "./Block";
import { Congratulations } from "./Congratulations";

import { LABELS } from "./data/initial";
import { isBingo } from "./logics/logics";

type BlockProps = {
  isOpen: boolean;
  label: string;
};

type State = BlockProps[][];

type ActionTypes = { type: "TOGGLE"; label: string } | { type: "CLEAR" };

const initialState: State = LABELS.map((row) => {
  return row.map((column) => {
    return { isOpen: false, label: column };
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
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isBingoSuccess, setIsBingoSuccess] = useState(false);
  useEffect(() => {
    setIsBingoSuccess(isBingo(state));
    console.log(isBingoSuccess);
  }, [state, isBingoSuccess]);

  return (
    <>
      <table className="border-separate border-spacing-2 border border-slate-500">
        <tbody>
          {state.map((blocks, idx) => {
            return (
              <tr key={idx.toString()}>
                {blocks.map((block, idx) => {
                  return (
                    <td
                      key={`${block.label}-${idx.toString()}`}
                      className="border border-slate-700 "
                    >
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
        <Congratulations isBingo={isBingoSuccess} />
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
