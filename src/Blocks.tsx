import React, { useEffect, useReducer, useState } from "react";
import { Block } from "./Block";
import { Congratulations } from "./Congratulations";

import { LABELS } from "./data/initial";
import { makeLabels } from "./logics/shuffle";
import { isBingo } from "./logics/logics";

type BlockProps = {
  isOpen: boolean;
  label: string;
};

type State = BlockProps[][];

type ActionTypes = { type: "TOGGLE"; label: string } | { type: "CLEAR" };

const initialState: State = makeLabels(LABELS, 5, 5).map((row) => {
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
      <div className="grid grid-cols-5 items-center">
        {state.map((blocks, idx) =>
          blocks.map((block, idx) => {
            return (
              <Block
                label={block.label}
                isOpen={block.isOpen}
                toggleIsOpen={dispatch}
                key={block.label + idx.toString()}
              />
            );
          })
        )}
        <Congratulations isBingo={isBingoSuccess} />
        <button
          onClick={() => dispatch({ type: "CLEAR" })}
          className="col-span-5"
        >
          さいしょにもどす
        </button>
      </div>
    </>
  );
};

export { Blocks };
