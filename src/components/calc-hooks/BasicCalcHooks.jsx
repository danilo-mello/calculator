import React, { useState, useContext, useEffect } from "react";
import BasicCalcKeyPad from "./BasicCalcKeyPad";
import BasicCalcLog from "./BasicCalcLog";
import { CalcContext } from "../../context/CalcProvider";

const BasicCalcHooks = () => {
  const [result, setResult] = useState("");
  const calcContext = useContext(CalcContext);

  const onClickHandler = (button) => {
    calcContext.onInput(button);
  };

  useEffect(() => {
    setResult(calcContext.result);
  }, [calcContext.result]);

  return (
    <div className="h-full w-full flex items-center justify-center border-4">
      <div className="h-full w-1/2 flex items-center justify-center border">
        <div>
          <BasicCalcLog calclog={calcContext.calclog} />
          <input type="text" defaultValue={result} />
        </div>
      </div>
      <div className="h-full w-1/2 flex items-center justify-center border">
        <BasicCalcKeyPad onClick={onClickHandler} />
      </div>
    </div>
  );
};

export default BasicCalcHooks;
