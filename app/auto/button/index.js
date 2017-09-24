import style, { hover } from './style'
import React, { Component } from 'react'
import { TouchableOpacity, Text } from 'react-native'


class Btn extends Component {
	constructor(props) {
		super(props)

		this.state = {
			active: false
		}
	}

	onPressIn = e => {
		this.setState({
			active: true
		})
	}

	onPressOut = e => {
		this.setState({
			active: false
		})
	}

	render() {
		return (
			<TouchableOpacity
				style={[style.wrapper, this.props.style]}
				activeOpacity={0.9}
				onPressIn={this.onPressIn}
				onPressOut={this.onPressOut}
				onPress={this.props.onPress}>
				<Text style={style.text}>{this.props.children}</Text>
			</TouchableOpacity>
		)
	}
}

export default Btn