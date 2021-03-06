import React, { useState, useContext, useEffect } from "react";
import { CalcContext } from "../../context/CalcProvider";
import BasicCalcKeyPad from "./BasicCalcKeyPad";
import Input from "../UI/Input";
import Button from "../UI/Button";
import LogCalc from "../UI/LogCalc";
import { useHistory } from "react-router-dom";

const BasicCalc = () => {
  const [result, setResult] = useState("");
  const [calclog, setCalclog] = useState([]);

  const calcContext = useContext(CalcContext);
  const history = useHistory();

  const onClickHandler = (button) => {
    calcContext.onInput(button);
  };

  const handleSaveLog = () => {
    let c = Number(calcContext.result)
    if (!Number.isNaN(c) && Number.isFinite(c)){

      history.push("/savelog");
    } else {
      console.log('dont save')
    }
  };

  const onKeyUpHandler = (e) => {
    calcContext.onInput(e.key);
    setResult(calcContext.result);
  };

  const onInputChange = () => {
    setResult(calcContext.result);
  };

  const cancelHandler = () => {
    calcContext.reset();
  };

  useEffect(() => {
    setResult(calcContext.result);
    setCalclog(calcContext.calclog);
  }, [calcContext.result, calcContext.calclog]);

  return (
    <div className="BasicCalc">
      <div className="h-3/4 lg:h-2/3 w-4/5 sm:w-2/3 flex flex-wrap">
        <div className="h-1/2 lg:h-full w-full lg:w-1/2 flex flex-wrap content-between p-2">
          <div className="h-1/3 lg:h-2/3 w-full">
            <LogCalc calclog={calclog} />
          </div>

          <Input
            type="text"
            placeholder="Result"
            value={result}
            required={true}
            onKeyUp={onKeyUpHandler}
            onChange={onInputChange}
          />
          <Button onClick={cancelHandler} button="Reset" />
          {result ? (
            <Button type="submit" button="Save" onClick={handleSaveLog} />
          ) : null}

        </div>
        <div className="h-1/2 lg:h-full w-full lg:w-1/2 flex items-center justify-center p-2">
          <BasicCalcKeyPad onClick={onClickHandler} />
        </div>
      </div>
    </div>
  );
};

export default BasicCalc;
