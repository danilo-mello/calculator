import React, { useState, useContext, useEffect } from "react";
import BasicCalcKeyPad from "./BasicCalcKeyPad";
import BasicCalcLog from "./BasicCalcLog";
import { CalcContext } from "../../context/CalcProvider";
import Input from "../UI/Input";

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
    <div className="h-full w-full flex flex-wrap items-center justify-center border">
      <div className="h-1/2 lg:h-full w-full lg:w-1/2 flex items-center justify-center border">
        <div className="w-3/4 lg:w-80 border">
          <BasicCalcLog calclog={calcContext.calclog} />
          {/* <input type="text" defaultValue={result} /> */}
          <div className="mt-4">
            <Input type="text" defaultValue={result} placeholder="Result" />
          </div>
          {/* <div className="h-40 w-40 bg-gray-200">
            <div className="h-20 w-20 bg-gray-200 shadow-inner"></div>
          </div> */}
        </div>
      </div>
      <div className="h-1/2 lg:h-full w-full lg:w-1/2 flex items-center justify-center border">
        <BasicCalcKeyPad onClick={onClickHandler} />
      </div>
    </div>
  );
};

export default BasicCalcHooks;
