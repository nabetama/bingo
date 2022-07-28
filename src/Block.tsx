import React from "react";

const Block: React.FC<{ label: string; isOpen: boolean }> = (props) => {
  return (
    <div
      className={`${
        props.isOpen ? "bg-indigo-50" : "bg-cyan-600"
      } cursor-pointer block `}
      onClick={() => {
        console.log("debug: ", props.label);
      }}
    >
      {props.label}
    </div>
  );
};

export { Block };
