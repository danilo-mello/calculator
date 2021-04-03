import React, { useContext, useEffect, useState } from 'react'
import { LogContext } from "../../context/LogProvider";
import { UserContext } from "../../context/UserProvider";


const LogListPage = () => {

    const logContext = useContext(LogContext)
    const userContext = useContext(UserContext)

    const [userLogs, setUserLogs] = useState([])


    useEffect(() => {
        logContext.loadingUserLogs(userContext.uid)
        setUserLogs(logContext.userLogs)

    }, [logContext.userLogs, logContext, userContext.uid])

    return (

        <div>

            {
            userLogs.map(({id, title, log, result, comment, dateCreated, dateModified, active }) => (
                <div key={id}> 
                    <p>id: {id}, title: {title}, log: {log}, result: {result}, comment: {comment}, date created: {dateCreated}, date modified: {dateModified}, active: {active} </p>
                </div>
            ))
            }

            

        </div>
        
            
    )
}

export default LogListPage