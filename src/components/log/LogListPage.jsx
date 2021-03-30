import React, { useContext } from 'react'
import { LogContext } from "../../context/LogProvider";

const LogListPage = () => {

    const logContext = useContext(LogContext)

    return (

        <div>

            {logContext.userLogs}

        </div>
        
            
    )
}

export default LogListPage