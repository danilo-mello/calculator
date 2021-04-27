// action types
export const CREATE_LOG = 'CREATE_LOG'
export const READ_LOGS = 'READ_LOGS'
export const UPDATE_LOG = 'UPDATE_LOG'
export const DELETE_LOG = 'DELETE_LOG'

export const FETCH_LOGS_START = 'FETCH_LOGS_START'
export const FETCH_LOGS_SUCCESS = 'FETCH_LOGS_SUCCESS'
export const FETCH_LOGS_FAILURE = 'FETCH_LOGS_FAILURE'
export const SORT_LOGS = 'SORT_LOGS'



// action creators
export const createLog = (log) => ({
    type: CREATE_LOG,
    payload: log
})

export const readLogs = (userId) => ({
    type: READ_LOGS,
    payload: userId
})

export const fetchLogsStart = () => ({
    type: FETCH_LOGS_START
})

export const fetchLogsStartAsync = (userId) => {
    return dispatch => {


        dispatch(fetchLogsStart())


        fetch(`https://calc-log-default-rtdb.firebaseio.com/logs/${userId}.json`)
        .then(response => response.json())
        .then(responseData => {
    
            const loadedLogs = []
            
            for (const key in responseData){
                
                const log = {                   
                    id: key,
                    title: responseData[key].title,
                    log: responseData[key].log,
                    result: responseData[key].result,
                    comment: responseData[key].comment,
                    dateCreated: responseData[key].meta.dateCreated,
                    dateModified: responseData[key].meta.dateModified,
                    active: responseData[key].meta.active,
    
                }
    
                loadedLogs.push(log)
    
            }
            if (loadedLogs) {
                dispatch(fetchLogSuccess(loadedLogs))
            } else {
                dispatch(fetchLogsFailure("error"))
            }
            
        })

    }
}

export const fetchLogSuccess = (logsMap) => ({
    type: FETCH_LOGS_SUCCESS,
    payload: logsMap
})

export const fetchLogsFailure = (errorMessage) => ({
    type: FETCH_LOGS_FAILURE,
    payload: errorMessage
})


export const updateLog = (log) => ({
    type: UPDATE_LOG,
    payload: log
})

export const deleteLog = (obj) => ({
    type: DELETE_LOG,
    payload: obj
})

export const sortLogs = (sortBy) => ({
    type: SORT_LOGS,
    payload: sortBy
})

