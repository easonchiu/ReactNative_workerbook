import {handleActions} from 'redux-actions'
import Immutable from 'seamless-immutable'

const initialState = Immutable({
	list: []
})

export default handleActions({
	DAILY_FETCH_LIST(state, action) {
		return Immutable.merge(state, {
			list: action.payload
		})
	}
}, initialState)