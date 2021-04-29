import { combineReducers } from 'redux';
import logReducer from './log/log.reducer';

const rootReducer = combineReducers({
    log: logReducer,
    
})


export default rootReducer