import React from "react";

const Block: React.FC<{ label: string; isOpen: boolean }> = (props) => {
  return (
    <button
      className={props.isOpen ? "open" : "close"}
      onClick={() => {
        console.log("debug: ", props.label);
      }}
    >
      {props.label}
    </button>
  );
};

export { Block };
