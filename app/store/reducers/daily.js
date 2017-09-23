import {handleActions} from 'redux-actions'
import Immutable from 'seamless-immutable'

const initialState = Immutable({
	list: [],
	listWithUser: [],
})

export default handleActions({
	DAILY_FETCH_LIST(state, action) {
		return Immutable.merge(state, {
			list: action.payload
		})
	},
	DAILY_FETCH_LIST_WITH_USER(state, action) {
		return Immutable.merge(state, {
			listWithUser: action.payload
		})
	},
	DAILY_CLEAR_LIST_WITH_USER(state, action) {
		return Immutable.merge(state, {
			listWithUser: []
		})
	}
}, initialState)