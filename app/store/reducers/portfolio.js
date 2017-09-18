import {handleActions} from 'redux-actions'

const initialState = {
	list: [],
	comment: []
}

export default handleActions({
	FETCH_PORTFOLIO_LIST (store, action) {
		return Object.assign({}, store, {
			list: action.payload
		})
	},

	FETCH_PORTFOLIO_COMMENT_LIST (store, action) {
		return Object.assign({}, store, {
			comment: action.payload
		})
	}
}, initialState)