import React, { createContext, useState } from 'react'

export const LogContext = createContext({

    userLogs: []

})

const LogProvider = (props) => {

    const [userLogs] = useState([])

    return (
        <LogContext.Provider value={ { userLogs: userLogs } }>
            {props.children}
        </LogContext.Provider>
    )
}

export default LogProvider