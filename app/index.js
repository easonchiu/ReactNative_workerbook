import './utils/dateFormat'

import React, { Component } from 'react'
import { Easing, Animated, Text, View, Navigator } from 'react-native'
import { StackNavigator } from './utils/react-navigation'
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
		shadowOpacity: 0.1,
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

