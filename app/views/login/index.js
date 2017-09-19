import style from './style'
import React, { Component } from 'react'
import { NavigationActions } from 'react-navigation'

import { View, Text, Image, TextInput } from 'react-native'

import Layout from '../../auto/layout'
import Button from '../../auto/button'
import Toast from '../../auto/toast'

class Login extends Component {
	constructor(props) {
		super(props)

		this.state = {
			toast: false,
			toastMessage: '',
			username: ''
		}
	}

	submit = e => {
		if (this.state.username == '') {
			this.setState({
				toast: true,
				toastMessage: '请输入用户名',
			})
		} else {
			const { dispatch } = this.props.navigation
			const action = NavigationActions.navigate({
				routeName: 'Index',
				params: {}
			})

			dispatch(action)
		}
	}

	usernameChange = val => {
		this.setState({
			username: val
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
							<TextInput style={style.input} placeholder="请输入密码" />
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

export default Login