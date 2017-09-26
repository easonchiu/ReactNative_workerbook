import style from './style'
import React, { Component } from 'react'
import { View, Animated, Easing, ActivityIndicator } from 'react-native'


class Spin extends Component {
	constructor(props) {
		super(props)

		this.val = new Animated.Value(0)

	}

	componentDidMount() {
		this.running = true
		// this.run()
	}

	componentWillUnmount() {
		this.running = false
	}

	run() {
		if (!this.running) {
			return false
		}
		this.val.setValue(0)
		Animated.timing(
			this.val,
			{
				toValue: 1,
				duration: 600,
				easing: Easing.linear
			}
		).start(e => this.run())
	}

	render() {
		
		return <ActivityIndicator />

		return (
			<Animated.View
			style={[
				style.wrapper,
				this.props.style,
				{
					transform: [{
						rotate: this.val.interpolate({
							inputRange: [0, 1],
							outputRange: ['0deg', '360deg'],
						})
					}]
				}
			]} />
		)
	}
}

export default Spin