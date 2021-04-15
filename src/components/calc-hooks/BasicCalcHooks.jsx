import React, { useState, useContext, useEffect } from "react";
import { CalcContext } from "../../context/CalcProvider";
import BasicCalcKeyPad from "./BasicCalcKeyPad";
import Input from "../UI/Input";
import Button from "../UI/Button";
import Log from "../UI/Log";
import { Link, useHistory } from "react-router-dom";

const BasicCalcHooks = () => {
  const [result, setResult] = useState("");
  const [calclog, setCalclog] = useState([]);

  const calcContext = useContext(CalcContext);
  const history = useHistory();

  const onClickHandler = (button) => {
    calcContext.onInput(button);
  };
  const handleSaveLog = () => {
    history.push("/savelog");
  };

  useEffect(() => {
    setResult(calcContext.result);
    setCalclog(calcContext.calclog);
  }, [calcContext.result, calcContext.calclog]);

  return (
    <div className="BasicCalc">
      <div className="h-3/4 lg:h-2/3 w-4/5 sm:w-2/3 flex flex-wrap border">
        <div className="h-1/2 lg:h-full w-full lg:w-1/2 flex flex-wrap content-between p-2 border">
          <div className="h-1/3 lg:h-2/3 w-full">
            <Log calclog={calclog} />
          </div>
          <Input
            type="text"
            placeholder="Result"
            defaultValue={result}
            required={true}
          />
          <Button button="Cancel" />
          {result ? (
            <Button type="submit" button="Next" onClick={handleSaveLog} />
          ) : null}
        </div>
        <div className="h-1/2 lg:h-full w-full lg:w-1/2 flex items-center justify-center p-2 border">
          <BasicCalcKeyPad onClick={onClickHandler} />
        </div>
      </div>
    </div>
  );
};

export default BasicCalcHooks;
