import React, { Component } from 'react'
import { connect } from 'react-redux'
import BasicCalcKeyPad from './BasicCalcKeyPad'
import BasicCalcLog from './BasicCalcLog'


class BasicCalc extends Component {

    onClickHandler = (button) => {
        this.props.send(button)
    }

    render () {

        return (
            <div>
                <BasicCalcLog />
                <div>Result: {this.props.result} </div>
                <BasicCalcKeyPad onClick={this.onClickHandler}/>
            </div>
        )
    }
}

const mapState = (state) => {
    return {
        result: state.calc.result
    }
} 

const mapDispatch = (dispatch) => {
    return {
        send: (button) => dispatch({type: 'INPUT', payload: {button} }),
    }
}

export default connect(mapState, mapDispatch)(BasicCalc)