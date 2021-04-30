import React, { createContext, useState } from 'react'
import { evaluate, pow, sqrt } from 'mathjs'
// import { atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt } from 'mathjs'


export const CalcContext = createContext({

    calclog: [],
    onInput: () => {},
    result: "",
    reset: () => {},

})

const CalcProvider = (props) => {

    const keys = ["Shift", "ArrowUp", "ArrowLeft", "ArrowRight", "ArrowDown", "Tab", "Control", "CapsLock","Alt", ~"`", "~", "?"]

    const [calclog, setCalclog] = useState([])
    const [result, setResult] = useState("")

    const reset = () => {
        setCalclog([])
        setResult("")
    }

    const onInput = (button) => {

        if(button === "=" || button === "Enter"){

            var checkResult = ''
            checkResult = result

            try {
                checkResult = (evaluate(checkResult) || 0 ) + ""    

                if (result !== checkResult) {
                    setCalclog((calclog) => [...calclog, result + " = " + checkResult])
                }

            } catch (e) {
                checkResult =  "error"
            }

            setResult(checkResult)

        }

        else if(button === "C"){
            setResult("")
        }
        else if(button === "Delete"){
            setResult("")
        }
        else if(button === "Backspace"){
            if (result === "error") {
                checkResult = ""
            } else {
                try {
                    checkResult = result.slice(0, -1)
                } catch (e) {
                    checkResult =  ""
            }
            }

            setResult(checkResult)
        }
        else if(button === "square"){
            try {
                checkResult = pow(result, 2)
            
                if (result !== checkResult) {

                setCalclog((calclog) => [...calclog, result + "² = " + checkResult])

            }

            } catch (e) {
                checkResult =  "error"
            }
            setResult(checkResult)
            
        }
        else if(button === "squareroot"){
            try {
                checkResult = sqrt(result)
            
                if (result !== checkResult) {

                setCalclog((calclog) => [...calclog, "√" + result + " = " + checkResult])

            }

            } catch (e) {
                checkResult =  "error"
            }

            setResult(checkResult)

        }else if(keys.includes(button)){
            
        
        } else {
            if (result === "error") {
                setResult(button)
            } else {
            setResult(result + button)
            }
        }

    }
    
    return (
        <CalcContext.Provider value={ { result: result, calclog: calclog, onInput: onInput, reset: reset } }>
            {props.children}
        </CalcContext.Provider>
    )
}

export default CalcProvider