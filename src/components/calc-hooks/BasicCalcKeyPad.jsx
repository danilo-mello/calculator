import React from "react";
import Keyboard from "./Keyboard";
import Key from "./Key";

const BasicCalcKeyPad = (props) => {
  return (
    <div className="h-full w-3/4 flex flex-wrap justify-center border">
      {/* <div className="w-80 flex flex-wrap justify-center border"> */}
      {Keyboard.map((keyboard, index) => (
        <div
          key={index}
          className="h-auto w-1/4 flex items-center justify-center border"
        >
          <Key
            id={keyboard.id}
            onClick={(e) => {
              props.onClick(e.target.id);
            }}
            keyboard={keyboard.keyboard}
          />
        </div>
      ))}
    </div>
  );
};

export default BasicCalcKeyPad;
