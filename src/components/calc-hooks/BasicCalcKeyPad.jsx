import React from "react";
import Keyboard from "./Keyboard";
import Key from "./Key";

const BasicCalcKeyPad = (props) => {
  return (
    <div className="w-3/4 lg:w-80 flex flex-wrap justify-center border-4">
      {Keyboard.map((keyboard, index) => (
        <div key={index}>
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
