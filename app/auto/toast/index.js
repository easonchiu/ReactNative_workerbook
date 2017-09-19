import style from './style'
import React, { Component } from 'react'
import { Modal, View, Text, Animated, Easing } from 'react-native'

class Toast extends Component {
	constructor(props) {
		super(props)

		this.state = {
			y: new Animated.Value(0)
		}
	}

	componentWillReceiveProps(nextProps) {
		clearTimeout(this.timer)
		if (nextProps.visible) {
			Animated.timing(
				this.state.y,
				{
					toValue: 1,
					duration: 300,
					easing: Easing.bezier(0.15, 0.73, 0.37, 1.2)
				}
			).start()

			this.timer = setTimeout(e => {
				Animated.timing(
					this.state.y,
					{
						toValue: 0,
						duration: 300,
						easing: Easing.ease
					}
				).start(e => {
					this.props.onTimeout && this.props.onTimeout()
				})
			}, 2000)
		}
	}

	render() {
		return (
			<Modal
				visible={this.props.visible}
				animationType={'none'}
				transparent={true}>
				<Animated.View style={[style.wrapper, {
					transform: [{
						translateY: this.state.y.interpolate({
							inputRange: [0, 1],
							outputRange: [-100, 0],
						})
					}],
					opacity: this.state.y
				}]}>
					<View style={style.box}>
						<View style={style.inbox}>
							<Text style={style.message}>{this.props.message}</Text>
						</View>
					</View>
				</Animated.View>
			</Modal>
		)
	}
}

export default Toast