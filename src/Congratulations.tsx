import React from "react";

const Congratulations: React.FC<{
  isBingo: boolean;
}> = (props) => {
  if (props.isBingo) {
    return (
      <div
        className={
          "col-start-3 col-end-3 text-center font-serif text-3xl font-black text-red-600"
        }
      >
        BINGO!!
      </div>
    );
  } else {
    return <></>;
  }
};

export { Congratulations };
