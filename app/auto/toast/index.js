import style from './style'
import React, { Component } from 'react'
import { Modal, View, Text } from 'react-native'

class Toast extends Component {
	constructor(props) {
		super(props)
	}

	componentWillReceiveProps(nextProps) {
		clearTimeout(this.timer)
		this.timer = setTimeout(e => {
			this.props.onHide && this.props.onHide()
		}, 2000)
	}

	render() {
		return (
			<Modal
				visible={this.props.visible}
				animationType={'none'}
				transparent={true}>
				<View style={style.wrapper}>
					<View style={style.box}>
						<View style={style.inbox}>
							<Text style={style.message}>{this.props.message}</Text>
						</View>
					</View>
				</View>
			</Modal>
		)
	}
}

export default Toast