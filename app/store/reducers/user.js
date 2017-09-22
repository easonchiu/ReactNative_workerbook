import {handleActions} from 'redux-actions'
import Immutable from 'seamless-immutable'

const initialState = Immutable({
	info: {}
})

export default handleActions({
	FETCH_USER_LOGIN (state, action) {
		return Immutable.merge(state, {
			info: action.payload
		})
	}
}, initialState)