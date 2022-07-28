import React, { useState } from "react";
import { Block } from "./Block";

const Blocks: React.FC<{ data: string[][] }> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => setIsOpen((isOpen) => !isOpen);

  return (
    <>
      <table className="border-separate border-spacing-2 border border-slate-500 ">
        {props.data.map((blocks) => {
          return (
            <tr>
              {blocks.map((block) => {
                return (
                  <td className="border border-slate-700 ">
                    <Block
                      label={block}
                      isOpen={isOpen}
                      toggleIsOpen={toggleIsOpen}
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
