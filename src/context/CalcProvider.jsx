import React, { createContext, useState } from 'react'

export const CalcContext = createContext({

    evaluate: () => {},

})

const CalcProvider = (props) => {



    const evaluate = (input) => {

        console.log('here')

    }
    
    return (
        <CalcContext.Provider value={ { evaluate: evaluate } }>
            {props.children}
        </CalcContext.Provider>
    )
}

export default CalcProvider