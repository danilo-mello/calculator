

export const createLog = (log) => {

    fetch(`https://calc-log-default-rtdb.firebaseio.com/logs/${log.meta.userId}.json`, {
        method: 'POST',
        body: JSON.stringify(log),
        headers: { 'Content-Type': 'application/json'}
    })
        .then(response => response.json())

    return log

}

export const loadingUserLogs = (userId) => {

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
         
        return loadedLogs
    })
}

export const deleteLog = (state, obj) => {

    fetch(`https://calc-log-default-rtdb.firebaseio.com/logs/${obj.userId}/${obj.logId}.json`, {
        method: 'DELETE',
    })
    .then(response => response.json())

    return {
        ...state,
        userLogs: state.userLogs.filter(l => l.id !== obj.logId)
    }
}

export const updateLog = (state, obj) => {


    fetch(`https://calc-log-default-rtdb.firebaseio.com/logs/${obj.updatedLog.meta.userId}/${obj.logId}.json`, {
        method: 'PUT',
        body: JSON.stringify(obj.updatedLog),
        headers: { 'Content-Type': 'application/json'}
    })
        .then(response => response.json())

    return {
        ...state,
        userLogs: loadingUserLogs(obj.updatedLog.meta.userId)
    }
}