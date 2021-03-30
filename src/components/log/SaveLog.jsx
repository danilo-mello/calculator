import React, { useState } from 'react'
import LogForm from './LogForm'
import LogListPage from './LogListPage'


const SaveLog = () => {

    const [saving, setSaving] = useState(false)

    const onSaveLogHandler = () => {
        if (saving) {
            setSaving(false)
        } else {
            setSaving(true)
        }
    }

    return (
        saving  ?
            <>
                <LogForm />
                <div>
                    <button onClick={() => {onSaveLogHandler()}}>Cancel</button>
                </div>

                <LogListPage />

            </>
                
            
        :
            <>
                <div>
                    <button onClick={() => {onSaveLogHandler()}}>Save Log</button>
                </div>

                <LogListPage />


            </>

    )
}

export default SaveLog