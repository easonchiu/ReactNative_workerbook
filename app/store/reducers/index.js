import {combineReducers} from 'redux'

import $$portfolio from './portfolio'

const reducers = {
	$$portfolio,
}

export default combineReducers({
	...reducers
})