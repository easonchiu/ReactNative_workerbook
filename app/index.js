import React, { Component } from 'react'
import { Easing, Animated } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import createConfStore from './store/conf'

import Index from './views/index'
import Login from './views/login'
import HomePage from './views/homepage'

const App = StackNavigator({
	Index: {
		screen: Index
	},
	Login: {
		screen: Login
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

const ConfigApp = App => props => {
	return (
		<Provider store={store}>
			<App {...props} style={{backgroundColor: '#000'}} />
		</Provider>
	)
}

export default ConfigApp(App)