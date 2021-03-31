import React, { useState, useContext, useEffect } from 'react'
import { CalcContext } from "../../context/CalcProvider";
import { LogContext } from "../../context/LogProvider";
import { UserContext } from "../../context/UserProvider";


const LogForm = () => {

    const calcContext = useContext(CalcContext)
    const logContext = useContext(LogContext)
    const userContext = useContext(UserContext)

    const [title, setTitle] = useState("")
    const [log, setLog] = useState(calcContext.calclog)
    const [comment, setComment] = useState("")
    const [result, setResult] = useState(calcContext.result)
    const [dateCreated, setDateCreated] = useState("")
    const [dateModified, setDateModified] = useState("")
    const [userId, setUserId] = useState("")


    useEffect(() => {
        const dateUser = () => {
            var date = new Date();
            setDateCreated(date.getTime())
            setDateModified(date.getTime())
            setUserId(userContext.uid)
        }
        dateUser();
    }, [calcContext, userContext.uid])

    const onSaveLogHandler = (e) => {

        e.preventDefault()

        logContext.onSaveLog({
            title: title,
            log: log,
            result: result,
            comment: comment,
            meta: {
                dateCreated: dateCreated,
                dateModified: dateModified,
                active: "true",
                userId: userId
            }
        })
        
    }


    return (

        <div>
            <form onSubmit={e => {onSaveLogHandler(e)}}>
                <label>Title: </label>
                <input type="text" id="title" onChange={(e) => {setTitle(e.target.value)}} />

                <label>Log: </label>
                <input type="text-area" id="log" defaultValue={calcContext.calclog} onChange={(e) => {setLog(e.target.value)}} />

                <label>Result: </label>
                <input type="text" id="result" defaultValue={calcContext.result} onChange={(e) => {setResult(e.target.value)}} />

                <label>Comment: </label>
                <input type="text-area" id="comment" onChange={(e) => {setComment(e.target.value)}} />

                <button type="submit">Confirm Save Log</button>
            </form>

        </div>
        
            
    )
}

export default LogForm