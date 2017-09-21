import {createAction} from 'redux-actions'
import ajax from '../../utils/ajax'

const _fetchLogin = createAction('FETCH_USER_LOGIN')

// 用户登录
const fetchLogin = payload => async (dispatch, getState) => {
	const res = await ajax.request({
		method: 'post',
        url: `/user/login`,
        data: {
        	...payload
        }
	})
	return res
}

export default {
	fetchLogin,
}