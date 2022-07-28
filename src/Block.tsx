import React from "react";

const Block: React.FC<{ label: string }> = (props) => {
  return <div className="Block">{props.label}</div>;
};

export { Block };
