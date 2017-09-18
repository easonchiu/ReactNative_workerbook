import style, { hover } from './style'
import React, { Component } from 'react'
import { View, TouchableOpacity, Text, ImageBackground } from 'react-native'


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
				activeOpacity={1}
				onPressIn={this.onPressIn}
				onPressOut={this.onPressOut}
				onPress={this.props.onClick}>
				<ImageBackground
					source={{uri: 'bg-button-primary'}}
					style={style.bg}
					resizeMode="cover">
					<Text style={style.text}>{this.props.children}</Text>
				</ImageBackground>
			</TouchableOpacity>
		)
	}
}

export default Btn