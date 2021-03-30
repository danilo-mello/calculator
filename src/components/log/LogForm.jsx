import React, { useState, useContext } from 'react'
import { CalcContext } from "../../context/CalcProvider";

const LogForm = () => {

    const calcContext = useContext(CalcContext)
    const [title, setTitle] = useState("")
    const [log, setLog] = useState(calcContext.calclog)
    const [comment, setComment] = useState("")
    const [result, setResult] = useState(calcContext.result)
    const [dateCreated, setDateCreated] = useState("")

    const onSaveLogHandler = (e) => {

        e.preventDefault()

        var date = new Date();

        setDateCreated(date.getTime())

        calcContext.onSaveLog({
            title: title,
            log: log,
            result: result,
            comment: comment,
            dateCreated: dateCreated,

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