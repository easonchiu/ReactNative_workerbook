import style from './style'
import React, { Component } from 'react'
import { View, Text, ListView, StatusBar, Image, Modal } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { px2pt, ww, wh } from '../../utils/size'

import Layout from '../../auto/layout'
import DailyItem from '../../components/dailyItem'
import Login from '../login'

class Index extends Component {
	constructor(props) {
		super(props)

		this.state = {
			animation: 'none',
			loginVisible: true
		}
	}

	itemClick = e => {
		this.props.navigation.navigate('HomePage')
	}

	loginSuccess = e => {
		this.setState({
			animation: 'slide'
		}, e => {
			this.setState({
				loginVisible: false
			})
		})
	}

	render() {
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => true
		})
		const dataSource = ds.cloneWithRows([0])

		return (
			<Layout>

				<StatusBar barStyle="light-content" />
				
				<Layout.Header style={style.header} title="全部" />

				<Layout.Body style={style.body}>
					
					<ListView
						style={{padding: 10}}
						initialListSize={10}
						dataSource={dataSource}
						renderRow={e => <DailyItem onUserPress={this.itemClick} />}/>
					
				</Layout.Body>

				<Layout.Footer style={style.footer}>
					<Image style={style.footerAdd} source={{uri: 'icon-footer-add'}} />
				</Layout.Footer>

				<Modal
					animationType={this.state.animation}
					visible={this.state.loginVisible}>
					<Login onLoginSuccess={this.loginSuccess} />
				</Modal>

			</Layout>
		)
	}
}

export default Index