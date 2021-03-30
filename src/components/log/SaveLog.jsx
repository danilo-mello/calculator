import React, { useState, useContext, useEffect } from 'react'
import { CalcContext } from "../../context/CalcProvider";

const SaveLog = () => {

    const calcContext = useContext(CalcContext)

    const onSaveLogHandler = (e) => {

        e.preventDefault()
        console.log('submited')
        
    }


    useEffect(() => {
        console.log('ho')
    }, []);

    return (
        <div>
            <form onSubmit={e => {onSaveLogHandler(e)}}>
                <button type="submit">Save Log</button>
            </form>
        </div>
    )
}

export default SaveLog