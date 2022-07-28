import React from "react";

const Blocks: React.FC<{ data: string[][] }> = (props) => {
  return (
    <>
      <table>
        {props.data.map((blocks) => {
          return (
            <tr>
              {blocks.map((block) => {
                return <td>{block}</td>;
              })}
            </tr>
          );
        })}
      </table>
    </>
  );
};

export { Blocks };
