import React, { useState, useContext, useEffect } from "react";

import { CalcContext } from "../../context/CalcProvider";
import BasicCalcKeyPad from "./BasicCalcKeyPad";
import BasicCalcLog from "./BasicCalcLog";
import Input from "../UI/Input";
import Button from "../UI/Button";

const BasicCalcHooks = () => {
  const [result, setResult] = useState("");
  const [calclog, setCalclog] = useState([]);

  const calcContext = useContext(CalcContext);

  const onClickHandler = (button) => {
    calcContext.onInput(button);
  };

  useEffect(() => {
    setResult(calcContext.result);
    setCalclog(calcContext.calclog);
  }, [calcContext.result, calcContext.calclog]);

  return (
    <div className="BasicCalc">
      <div className="h-3/4 lg:h-2/3 w-4/5 sm:w-2/3 flex flex-wrap border">
        <div className="h-1/2 lg:h-full w-full lg:w-1/2 flex flex-wrap content-between p-2 border">
          <div className="h-1/2 lg:h-2/3 w-full">
            <BasicCalcLog log={calcContext.calclog} />
          </div>
          <Input type="text" placeholder="Result" defaultValue={result} />
          <Button button="Next" />
        </div>
        <div className="h-1/2 lg:h-full w-full lg:w-1/2 flex items-center justify-center p-2 border">
          <BasicCalcKeyPad onClick={onClickHandler} />
        </div>
      </div>

      {/* <div className="h-1/2 lg:h-full w-full lg:w-1/2 flex items-center justify-end border">
        <div className="w-3/4 lg:w-80 border">
          <Log log={calcContext.calclog} />
          <BasicCalcLog calclog={calcContext.calclog} />
          <input type="text" defaultValue={result} />
          <div className="mt-4">
            <Input type="text" defaultValue={result} placeholder="Result" />
          </div>
        </div>
      </div>
      <div className="h-1/2 lg:h-full w-full lg:w-1/2 flex items-center justify-start border">
        <BasicCalcKeyPad onClick={onClickHandler} />
      </div> */}
    </div>
  );
};

export default BasicCalcHooks;
