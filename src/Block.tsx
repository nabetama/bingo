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
      } cursor-pointer border-dotted border-gray-400 border-2 text-center  active:bg-emerald-200 w-full h-full max-w-sm sm:max-w-md`}
      onClick={() => props.toggleIsOpen({ type: "TOGGLE", label: props.label })}
    >
      {props.label}
    </div>
  );
};

export { Block };
