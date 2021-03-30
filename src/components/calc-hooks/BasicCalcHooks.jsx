import React, { useState, useContext, useEffect } from 'react'
import BasicCalcKeyPad from './BasicCalcKeyPad'
import BasicCalcLog from './BasicCalcLog'
import { CalcContext } from "../../context/CalcProvider";

const BasicCalcHooks = () => {

    const [result, setResult] = useState("")
    const calcContext = useContext(CalcContext)

    const onClickHandler = (button) => {

        calcContext.onInput(button)
        
    }


    useEffect(() => {
        setResult(calcContext.result)
    }, [calcContext.result]);

    return (
        <div>
            <BasicCalcLog calclog={calcContext.calclog} />
            <input type="text" defaultValue={result} /> 
            <BasicCalcKeyPad onClick={onClickHandler}/>
        </div>
    )
}

export default BasicCalcHooks