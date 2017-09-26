import style from './style'
import React, { Component } from 'react'
import { View, Text, Image, TextInput } from 'react-native'

import User from '../../utils/user'
import connect from '../../store/connect'

import Layout from '../../auto/layout'
import Button from '../../auto/button'
import Toast from '../../auto/toast'

class Login extends Component {
	constructor(props) {
		super(props)

		this.state = {
			toast: false,
			toastMessage: '',
			username: '',
			password: '',
		}
	}

	submit = async e => {
		if (this.state.username == '') {
			this.setState({
				toast: true,
				toastMessage: '请输入用户名',
			})
		} else if (this.state.password == '') {
			this.setState({
				toast: true,
				toastMessage: '请输入密码',
			})
		} else {
			try {
				const res = await this.props.$user.login({
					username: this.state.username,
					password: this.state.password,
				})
				User.save(res)
				this.props.onLoginSuccess && this.props.onLoginSuccess()
			} catch(e) {
				console.log(e)
			}
		}
	}

	usernameChange = val => {
		this.setState({
			username: val
		})
	}

	passwordChange = val => {
		this.setState({
			password: val
		})
	}

	onTimeout = e => {
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
							<TextInput
								value={this.state.username}
								style={style.input}
								onChangeText={this.usernameChange}
								placeholder="请输入用户名" />
						</View>
						<View style={style.inputItem}>
							<TextInput
								value={this.state.password}
								style={style.input}
								onChangeText={this.passwordChange}
								placeholder="请输入密码" />
						</View>
					</View>

					<Button onPress={this.submit}>登录</Button>

					<Toast
						onTimeout={this.onTimeout}
						message={this.state.toastMessage}
						visible={this.state.toast} />

				</Layout.Body>
			</Layout>
		)
	}
}

export default connect(Login)