import React from "react";

const Block: React.FC<{ label: string; isOpen: boolean }> = (props) => {
  return (
    <button
      className="Block"
      onClick={() => {
        console.log("debug: ", props.label);
      }}
    >
      {props.label}
    </button>
  );
};

export { Block };
