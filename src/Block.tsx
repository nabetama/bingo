import React, { Dispatch, SetStateAction, useState } from "react";

const Block: React.FC<{
  label: string;
  isOpen: boolean;
  toggleIsOpen: (isOpen: boolean) => void;
}> = (props) => {
  return (
    <div
      className={`${
        props.isOpen ? "bg-emerald-500" : "bg-indigo-50"
      } cursor-pointer block `}
      onClick={() => props.toggleIsOpen(props.isOpen)}
    >
      {props.label}
    </div>
  );
};

export { Block };
