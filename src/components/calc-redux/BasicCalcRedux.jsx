import React, { Component } from 'react'
import { connect } from 'react-redux'
import BasicCalcKeyPad from './BasicCalcKeyPad'
import BasicCalcLog from './BasicCalcLog'


class BasicCalcRedux extends Component {

    onClickHandler = (button) => {
        this.props.send(button)
    }

    render () {

        return (
            <div>
                <BasicCalcLog log={this.props.log} />
                <div>Result: {this.props.result} </div>
                <BasicCalcKeyPad onClick={this.onClickHandler}/>
            </div>
        )
    }
}

const mapState = (state) => {
    return {
        result: state.calc.result,
        log: state.calc.log
    }
} 

const mapDispatch = (dispatch) => {
    return {
        send: (button) => dispatch({type: 'INPUT', payload: {button} }),
    }
}

export default connect(mapState, mapDispatch)(BasicCalcRedux)