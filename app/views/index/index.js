import style from './style'
import React, { Component } from 'react'
import { View, Text, ListView, Image, Modal } from 'react-native'

import User from '../../utils/user'
import connect from '../../store/connect'

import Layout from '../../auto/layout'
import DailyItem from '../../components/dailyItem'
import Login from '../login'

class Index extends Component {
	constructor(props) {
		super(props)

		this.state = {
			animation: 'none',
			loginVisible: !User.token,
			loading: true
		}

		console.log(props.navigation)
	}

	componentDidMount() {
		if (User.token) {
			this.fetch()
		}
	}

	itemClick = e => {
		this.props.navigation.navigate('HomePage', e)
	}

	loginSuccess = async e => {
		this.setState({
			loginVisible: false
		})
		this.fetch()
	}

	async fetch() {
		try {
			if (User.token == null) {
				this.setState({
					loginVisible: true
				})
				return false
			}
			await this.props.$daily.fetchList({
				gid: 'all',
				date: 2
			})
			this.setState({
				loading: false
			})
		} catch (e) {

		}
	}

	render() {
		const list = this.props.$$daily.list || []

		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => true
		})

		let dataSource

		if (list.length > 0) {
			dataSource = ds.cloneWithRows(list)
		}

		return (
			<Layout>

				<Layout.Header hasShadow style={style.header} title="全部" />

				<Layout.Body style={style.body} loading={this.state.loading}>
					
					{
						dataSource ?
						<ListView
							style={style.list}
							removeClippedSubviews={true}
							initialListSize={5}
							dataSource={dataSource}
							renderHeader={e => <View style={style.listHeader} />}
							renderFooter={e => <View style={style.listFooter} />}
							renderRow={e => <DailyItem source={e} onUserPress={this.itemClick.bind(this, e)} />}/> :
						null
					}
					
				</Layout.Body>

				<Layout.Footer hasShadow style={style.footer}>
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

export default connect(Index)