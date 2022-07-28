import React from "react";
import { Block } from "./Block";

const Blocks: React.FC<{ data: string[][] }> = (props) => {
  return (
    <>
      <table className="border-separate border-spacing-2 border border-slate-500 ">
        {props.data.map((blocks) => {
          return (
            <tr>
              {blocks.map((block) => {
                return (
                  <td className="border border-slate-700 ">
                    <Block label={block} isOpen={false} />
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
