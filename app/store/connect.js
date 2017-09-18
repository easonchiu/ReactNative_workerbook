import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import allActions from './actions'

export default ComponentWithStore => {
	
	// 绑定reducers中的state到组件的props
	const mapStateToProps = state => {
		return {
			...state
		}
	}
	
	// 绑定actions到组件的props
	const mapDispatchToProps = dispatch => {
		const actions = {}
		Object.keys(allActions).forEach(res => {
			actions[res] = bindActionCreators(allActions[res], dispatch)
		})
		return actions
	}
	
	// 绑定到组件
	return connect(mapStateToProps, mapDispatchToProps)(ComponentWithStore)
}