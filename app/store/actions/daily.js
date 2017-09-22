import {createAction} from 'redux-actions'
import ajax from '../../utils/ajax'
import User from '../../utils/user'

// 获取列表数据
const _fetchList = createAction('DAILY_FETCH_LIST')

const fetchList = payload => async (dispatch, getState) => {
	await User.asyncGet()
	const res = await ajax.request({
		method: 'get',
        url: `/daily/list/${payload.gid}/${payload.date}`,
        params: payload
	})
	dispatch(_fetchList(res.data.data.dailyList))
}


export default {
	fetchList,
}