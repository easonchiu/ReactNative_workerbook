import './utils/dateFormat'

import React, { Component } from 'react'
import { Easing, Animated, Text, View } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import createConfStore from './store/conf'

import User from './utils/user'

import Index from './views/index'
import HomePage from './views/homepage'

const App = StackNavigator({
	Index: {
		screen: Index
	},
	HomePage: {
		screen: HomePage
	}
}, {
	headerMode: 'none',
	initialRouteName: 'Index',
	cardStyle: {
		shadowColor: '#000',
		shadowOpacity: 0.01,
	},
	transitionConfig: e => {
		return {
	        transitionSpec: {
				duration: 600,
				easing: Easing.bezier(0.86, 0, 0.07, 1),
				timing: Animated.timing,
			}
    	}
    }
})

const store = createConfStore()

class ConfigApp extends Component {
	constructor(props) {
		super(props)

		this.state = {
			ready: false
		}
	}
	
	componentDidMount() {
		this.tokenReady()
	}

	async tokenReady() {
		try {
			await User.asyncGet()
			this.setState({
				ready: true
			})
		} catch (e) { }
	}

	render() {
		if (!this.state.ready) {
			return null
		}

		return (
			<Provider store={store}>
				<App {...this.props} style={{backgroundColor: '#000'}} />
			</Provider>
		)
	}
}

export default ConfigApp