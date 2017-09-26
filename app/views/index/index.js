import style from './style'
import React, { Component } from 'react'
import { View, Text, ListView, Image, Modal, TouchableOpacity } from 'react-native'
import { ww, px2pt } from '../../utils/size'

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
			loading: true,
			dateActive: 0
		}
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
				date: 1
			})
			this.setState({
				loading: false
			})
		} catch (e) {

		}
	}

	render() {

		let lineX = ww * 0.8 / 4.5 * this.state.dateActive
		const itemW = ww * 0.8 / 4.5 // 每个菜单的宽度，注意最后一个是1.5倍宽
		if (this.state.dateActive < 3) {
			lineX += (itemW - 20) / 2
		} else {
			lineX += (itemW * 1.5 - 20) / 2
		}

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

				<Layout.Header hasShadow style={style.header} title="全部">
					<View style={style.tab}>
						<View style={[style.tabLine, {
							transform: [{
								translateX: lineX
							}]
						}]} />
						<Text style={[style.tabItem, style.tabActiveItem]}>今天</Text>
						<Text style={style.tabItem}>昨天</Text>
						<Text style={style.tabItem}>前天</Text>
						<View style={style.tabSelectItem}>
							<Image source={{uri: 'icon-date'}} style={style.tabIcon} />
							<Text style={[style.tabItem, style.tabDateItem]}>选择日期</Text>
						</View>
					</View>
				</Layout.Header>

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
					<TouchableOpacity activeOpacity={0.7} style={style.footerItem}>
						<Image
							style={style.footerHome}
							source={{uri: 'icon-footer-home'}} />
					</TouchableOpacity>
					<TouchableOpacity activeOpacity={0.7} style={style.footerItem}>
						<Image
							style={style.footerAdd}
							source={{uri: 'icon-footer-add'}} />
					</TouchableOpacity>
					<TouchableOpacity activeOpacity={0.7} style={style.footerItem}>
						<Image
							style={style.footerMine}
							source={{uri: 'icon-footer-mine'}} />
					</TouchableOpacity>
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