import {createAction} from 'redux-actions'
import ajax from '../../utils/ajax'

// 用户登录
const login = payload => async (dispatch, getState) => {
	const res = await ajax.request({
		method: 'post',
        url: `/user/login`,
        data: {
        	...payload
        }
	})
	return res.data.data
}


export default {
	login,
}