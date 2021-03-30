import React, { useState } from 'react'
import { connect } from 'react-redux'
import BasicCalcKeyPad from './BasicCalcKeyPad'
import BasicCalcLog from './BasicCalcLog'
import {
    atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt
  } from 'mathjs'


const BasicCalcHooks = () => {

    const [result, setResult] = useState("")

    const onClickHandler = (button) => {
        setResult(button)
        if(button === "="){
                var checkResult = ''
    
                if(result.includes('--')){
                    checkResult = result.replace('--','+')
                }

                else {
                    checkResult = result
                }


                try {
                    checkResult = (evaluate(checkResult) || "" ) + ""

                } catch (e) {
                    checkResult =  "error"
                }

                setResult(checkResult)
            }

            else if(button === "c"){
                setResult("")
            }
            else if(button === "backspace"){
                checkResult = result.slice(0, -1)

                setResult(checkResult)
            }
            else if(button === "square"){
                setResult(result ** 2)
                
            }
            else if(button === "squareroot"){
                setResult(result ** 0.5)
            } else {
                setResult(result + button)
            }
    }

    return (
        <div>
            <h1>WITH HOOKS</h1>
            <BasicCalcLog />
            <input type="text" value={result} /> 
            <BasicCalcKeyPad onClick={onClickHandler}/>
        </div>
    )
}

export default BasicCalcHooks