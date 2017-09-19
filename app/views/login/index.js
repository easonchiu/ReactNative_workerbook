import style from './style'
import React, { Component } from 'react'
import { View, Text, Image, TextInput } from 'react-native'

import Layout from '../../auto/layout'
import Button from '../../auto/button'
import Toast from '../../auto/toast'

class Login extends Component {
	constructor(props) {
		super(props)

		this.state = {
			toast: false,
			toastMessage: ''
		}
	}

	onClick = e => {
		this.setState({
			toast: true,
			toastMessage: '请输入用户名',
		})
	}

	onHide = e => {
		this.setState({
			toast: false,
		})
	}

	render() {
		return (
			<Layout>
				
				<Layout.Body style={style.body}>

					<Image style={style.logo} source={{uri: 'logo'}} />

					<View style={style.inputGroup}>
						<View style={[style.inputItem, style.inputFirstItem]}>
							<TextInput style={style.input} placeholder="请输入用户名" />
						</View>
						<View style={style.inputItem}>
							<TextInput style={style.input} placeholder="请输入密码" />
						</View>
					</View>

					<Button onPress={this.onClick}>登录</Button>

					<Toast
						onHide={this.onHide}
						message={this.state.toastMessage}
						visible={this.state.toast} />

				</Layout.Body>

			</Layout>
		)
	}
}

export default Login