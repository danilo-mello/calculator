import React, { createContext, useState } from 'react'

export const LogContext = createContext({

    userLogs: [],
    onSaveLog: () => {},
    loadingUserLogs: () => {}

})

const LogProvider = (props) => {

    const [userLogs, setUserLogs] = useState([])



    const onSaveLog = (logInfo) => {
    
        fetch(`https://calc-log-default-rtdb.firebaseio.com/logs/${logInfo.meta.userId}.json`, {
          method: 'POST',
          body: JSON.stringify(logInfo),
          headers: { 'Content-Type': 'application/json'}
        })
          .then(response => response.json())

    }

    const loadingUserLogs = (userId) => {

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

            setUserLogs(loadedLogs)

        })
    }

    return (
        <LogContext.Provider value={ { userLogs: userLogs, onSaveLog: onSaveLog, loadingUserLogs: loadingUserLogs } }>
            {props.children}
        </LogContext.Provider>
    )
}

export default LogProvider