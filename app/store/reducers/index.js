import {combineReducers} from 'redux'

import $$user from './user'
import $$daily from './daily'

const reducers = {
	$$user,
	$$daily,
}

export default combineReducers({
	...reducers
})