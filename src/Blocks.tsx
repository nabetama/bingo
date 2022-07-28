import React from "react";
import { Block } from "./Block";

const Blocks: React.FC<{ data: string[][] }> = (props) => {
  return (
    <>
      <table>
        {props.data.map((blocks) => {
          return (
            <tr>
              {blocks.map((block) => {
                return (
                  <td>
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
