import React from "react";

const Congratulations: React.FC<{ isBingo: boolean }> = (props) => {
  return (
    <div className={`${props.isBingo ? "px-8" : "hidden"}`}>
      Congratulations!
    </div>
  );
};

export { Congratulations };
