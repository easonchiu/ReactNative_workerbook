import {createStore, compose, applyMiddleware} from 'redux'

// 用于处理异步redux的中间件
import thunk from 'redux-thunk'

// 根reducers
import rootReducers from './reducers'

// 生成一个配置过中间件的store
const createConfStore = (initState = {}) => {

	// 中间件列表
	const middlewares = [thunk]

	// 增强器
	const enhancers = []

	// 添加中间件与增强器
	const composeStore = compose(
		applyMiddleware(...middlewares),
		...enhancers
	)

	// 拼装store
	return createStore(rootReducers, initState, composeStore)
}

export default createConfStore