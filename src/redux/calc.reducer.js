const initState = {

	result: ""

}


const calcReducer = (state = initState, action) => {


    switch (action.type){
        case 'INPUT':

            console.log(state)

            if(action.payload.button === "="){
                var checkResult = ''
                console.log(state.result)
    
                if(state.result.includes('--')){
                    checkResult = state.result.replace('--','+')
                }

                else {
                    checkResult = state.result
                }

                try {
                    checkResult = (eval(checkResult) || "" ) + ""

                } catch (e) {
                    checkResult =  "error"
                }

                return {
                    ...state,
                    result: checkResult
                } 
            }

            else if(action.payload.button === "c"){
                return {
                    ...state,
                    result: ""
                }
            }
            else if(action.payload.button === "backspace"){
                var checkResult = state.result.slice(0, -1)

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