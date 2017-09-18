import {createAction} from 'redux-actions'
import ajax from '../../utils/ajax'

const _fetchList = createAction('FETCH_PORTFOLIO_LIST')
const _fetchCommentList = createAction('FETCH_PORTFOLIO_COMMENT_LIST')

// 获取作品列表
const fetchPortfolioList = payload => async (dispatch, getState) => {
	const res = await ajax.request({
		method: 'get',
		url: `/portfolio/list`,
	})
	dispatch(_fetchList(res.data.data))
}

// 获取作品的评论列表
const fetchPortfolioCommentList = payload => async (dispatch, getState) => {
	const res = await ajax.request({
		method: 'get',
		url: `/portfolio/comment/${payload.id}`,
	})
	dispatch(_fetchCommentList(res.data.data))
}

export default {
	fetchPortfolioList,
	fetchPortfolioCommentList,
}