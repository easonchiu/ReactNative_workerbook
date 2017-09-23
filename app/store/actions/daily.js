import {createAction} from 'redux-actions'
import ajax from '../../utils/ajax'
import User from '../../utils/user'


// 获取列表数据
const _fetchList = createAction('DAILY_FETCH_LIST')

const fetchList = payload => async (dispatch, getState) => {
	const res = await ajax.request({
		method: 'get',
        url: `/daily/list/${payload.gid}/${payload.date}`,
        params: payload
	})
	dispatch(_fetchList(res.data.data.dailyList))
}

// 获取某个用户的数据
const _fetchListWithUser = createAction('DAILY_FETCH_LIST_WITH_USER')

const fetchListWithUser = payload => async (dispatch, getState) => {
	const res = await ajax.request({
		method: 'get',
        url: `/daily/user/1/${payload.uid}`,
        params: payload
	})
	dispatch(_fetchListWithUser(res.data.data.dailyList))
}

// 清除用户数据
const clearListWithUser = createAction('DAILY_CLEAR_LIST_WITH_USER')


export default {
	fetchList,
	fetchListWithUser,
	clearListWithUser,
}