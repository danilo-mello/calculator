import React from 'react'

const BasicCalcKeyPad = (props) => {
    

    return(

            <div>

                <p>
                    <button id="7" onClick={ (e) => {props.onClick(e.target.id)}}>7</button> 
                    <button id="8" onClick={ (e) => {props.onClick(e.target.id)}}>8</button> 
                    <button id="9" onClick={ (e) => {props.onClick(e.target.id)}}>9</button> 

                    <button id="/" onClick={ (e) => {props.onClick(e.target.id)}}>/</button>
                    <button id="backspace" onClick={ (e) => {props.onClick(e.target.id)}}>←</button>
                    <button id="c" onClick={ (e) => {props.onClick(e.target.id)}}>c</button>

                </p>

                <p>
                    <button id="4" onClick={ (e) => {props.onClick(e.target.id)}}>4</button> 
                    <button id="5" onClick={ (e) => {props.onClick(e.target.id)}}>5</button> 
                    <button id="6" onClick={ (e) => {props.onClick(e.target.id)}}>6</button> 

                    <button id="*" onClick={ (e) => {props.onClick(e.target.id)}}>*</button>
                    <button id="(" onClick={ (e) => {props.onClick(e.target.id)}}>(</button>
                    <button id=")" onClick={ (e) => {props.onClick(e.target.id)}}>)</button>
                </p>

                <p>
                    <button id="1" onClick={ (e) => {props.onClick(e.target.id)}}>1</button> 
                    <button id="2" onClick={ (e) => {props.onClick(e.target.id)}}>2</button> 
                    <button id="3" onClick={ (e) => {props.onClick(e.target.id)}}>3</button> 

                    <button id="-" onClick={ (e) => {props.onClick(e.target.id)}}>-</button>
                    <button id="square" onClick={ (e) => {props.onClick(e.target.id)}}>x²</button>
                    <button id="squareroot" onClick={ (e) => {props.onClick(e.target.id)}}>√</button>
                </p>
                <p>
                    <button id="0" onClick={ (e) => {props.onClick(e.target.id)}}>0</button> 
                    <button id="." onClick={ (e) => {props.onClick(e.target.id)}}>.</button> 
                    <button id="%" onClick={ (e) => {props.onClick(e.target.id)}}>%</button>

                    <button id="+" onClick={ (e) => {props.onClick(e.target.id)}}>+</button>
                    <button id="=" onClick={ (e) => {props.onClick(e.target.id)}}>=</button>
                </p>

            </div>
    )
}

export default BasicCalcKeyPad