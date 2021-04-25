const initState = {
    userLogs: [],
}

const logReducer = (state = initState, action) => {
    switch (action.type){
        case 'ACTION_TYPE_1':
            return {
                ...state
            }
          case 'ACTION_TYPE_2':

              /// logic goes here

            return {
                ...state
            }
        default:
            return state

    }
}

export default logReducer