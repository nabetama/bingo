import React, { Dispatch } from "react";

const Block: React.FC<{
  label: string;
  isOpen: boolean;
  toggleIsOpen: Dispatch<{ type: "TOGGLE"; label: string }>;
}> = (props) => {
  return (
    <div
      className={`${
        props.isOpen ? "bg-emerald-500" : "bg-indigo-50"
      } cursor-pointer border-dotted border-gray-400 border-2 text-center hover:bg-indigo-100`}
      onClick={() => props.toggleIsOpen({ type: "TOGGLE", label: props.label })}
    >
      {props.label}
    </div>
  );
};

export { Block };
