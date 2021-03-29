		import { combineReducers } from 'redux';
		import calcReducer from './calc.reducer';

		const rootReducer = combineReducers({
		    calc: calcReducer,
		})

		export default rootReducer