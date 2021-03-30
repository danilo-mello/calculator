import React, { createContext, useState } from 'react'
import { evaluate, pow, sqrt } from 'mathjs'
// import { atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt } from 'mathjs'


export const CalcContext = createContext({

    calclog: [],
    onInput: () => {},
    result: "",


})

const CalcProvider = (props) => {

    const [calclog, setCalclog] = useState([])
    const [result, setResult] = useState("")


    const onInput = (button) => {

        if(button === "="){

                var checkResult = ''
                checkResult = result

                try {
                    checkResult = (evaluate(checkResult) || "" ) + ""
                    

                    if (result !== checkResult) {
                        setCalclog(calclog + "\n" + result + " = " + checkResult + "\n")
                    }

                } catch (e) {
                    checkResult =  "error"
                }

                setResult(checkResult)
            }

            else if(button === "c"){
                setResult("")
            }
            else if(button === "backspace"){
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
                    setCalclog(calclog + "\n" + result + "² = " + checkResult + "\n")
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
                    setCalclog(calclog + "\n√" + result + " = " + checkResult + "\n")
                }

                } catch (e) {
                    checkResult =  "error"
                }

                setResult(checkResult)

            } else {
                if (checkResult === "error") {
                    setResult("")
                }
                setResult(result + button)
            }

    }
    
    return (
        <CalcContext.Provider value={ { result: result, calclog: calclog, onInput: onInput } }>
            {props.children}
        </CalcContext.Provider>
    )
}

export default CalcProvider