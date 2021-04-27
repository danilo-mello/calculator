import { 
    CREATE_LOG, 
    UPDATE_LOG, 
    DELETE_LOG, 
    FETCH_LOGS_START, 
    FETCH_LOGS_SUCCESS, 
    FETCH_LOGS_FAILURE,
    SORT_LOGS,
} from './log.actions'

import { createLog, updateLog, deleteLog, sortLogs } from './log.util'

const initState = {
    userLogs: null,
    isFetching: false,
    errorMessage: undefined,
}

const logReducer = (state = initState, action) => {

    switch (action.type){

        case CREATE_LOG:

            return {
                ...state, 
                userLogs: createLog(action.payload)
            }
            
        case UPDATE_LOG:

            return updateLog(state, action.payload)
                
        case DELETE_LOG:

            return deleteLog(state, action.payload)
        
        case FETCH_LOGS_START:

            return {
                ...state,
                isFetching: true,
            }

        case FETCH_LOGS_SUCCESS:

            return {
                ...state,
                isFetching: false,
                userLogs: action.payload,
            }
        case FETCH_LOGS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload,
            }

        case SORT_LOGS:

            return sortLogs(state, action.payload)

        default:
            
            return state
    }
}

export default logReducer