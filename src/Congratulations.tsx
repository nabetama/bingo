import React from "react";

const Congratulations: React.FC<{
  isBingo: boolean;
}> = (props) => {
  if (props.isBingo) {
    return (
      <div className={`${props.isBingo ? "px-8" : "hidden"}`}>
        Congratulations!!
      </div>
    );
  } else {
    return <></>;
  }
};

export { Congratulations };
