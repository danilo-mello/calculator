import {
    atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt
  } from 'mathjs'

const initState = {

	result: '',
    log: ''

}


const calcReducer = (state = initState, action) => {


    switch (action.type){
        case 'INPUT':

            if(action.payload.button === "="){
                var checkResult = ''
    
                if(state.result.includes('--')){
                    checkResult = state.result.replace('--','+')
                }

                else {
                    checkResult = state.result
                }

                checkResult = state.result

                try {
                    checkResult = (evaluate(checkResult) || "" ) + ""

                } catch (e) {
                    checkResult =  "error"
                }

                return {
                    ...state,
                    result: checkResult,
                    log: `${state.log} ${state.result} result: ${checkResult}`
                } 
            }

            else if(action.payload.button === "c"){
                return {
                    ...state,
                    result: ""
                }
            }
            else if(action.payload.button === "backspace"){
                checkResult = state.result.slice(0, -1)

                return {
                    ...state,
                    result: checkResult
                }
            }
            else if(action.payload.button === "square"){
                return {
                    ...state,
                    result: state.result * state.result
                }
                
            }
            else if(action.payload.button === "squareroot"){
                return {
                    ...state,
                    result: state.result ** 0.5
                }
            }

            else {
                return {
                    ...state,
                    result: state.result + action.payload.button
                }
            }

        default:
        
            return state

    }
}

export default calcReducer