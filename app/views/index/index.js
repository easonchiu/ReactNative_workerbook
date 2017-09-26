import style from './style'
import React, { Component } from 'react'
import { View, Text, ListView, Image, Modal, TouchableOpacity, Animated, Easing } from 'react-native'
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

		this.dateActive = new Animated.Value(0)
	}

	componentDidMount() {
		if (User.token) {
			this.fetch()
		}
	}

	itemClick = e => {
		this.props.navigation.navigate('HomePage', e)
	}

	tabClick = id => {
		if (this.state.dateActive !== id && User.token) {
			this.setState({
				dateActive: id,
				loading: true
			})

			Animated.timing(
				this.dateActive,
				{
					toValue: id,
					duration: 400,
					easing: Easing.bezier(0.15, 0.73, 0.37, 1.2)
				}
			).start(res => this.fetch(id))
		}
	}

	loginSuccess = async e => {
		this.setState({
			loginVisible: false
		})
		this.fetch()
	}

	async fetch(date = 0) {
		try {
			if (User.token == null) {
				this.setState({
					loginVisible: true
				})
				return false
			}
			await this.props.$daily.fetchList({
				gid: 'all',
				date: date
			})
			this.setState({
				loading: false
			})
		} catch (e) {

		}
	}

	getTabLineXArr() {
		const itemW = ww * 0.8 / 4.5 // 每个菜单的宽度，注意最后一个是1.5倍宽
		const lineW = 20 // 菜单线的宽度
		const arr = []
		for (let i = 0; i < 4; i++) {
			if (i !== 3) {
				let w = itemW * i + (itemW - lineW) / 2
				arr.push(px2pt(w))
			} else {
				let w = itemW * i + (itemW * 1.5 - lineW) / 2
				arr.push(px2pt(w))
			}
		}
		return arr
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

				<Layout.Header hasShadow style={style.header} title="全部">
					<View style={style.tab}>
						<Animated.View style={[style.tabLine, {
							transform: [{
								translateX: this.dateActive.interpolate({
									inputRange: [0, 1, 2, 3],
									outputRange: this.getTabLineXArr(),
								})
							}]
						}]} />

						{
							['今天', '昨天', '前天'].map((res, i) => (
								<TouchableOpacity
									activeOpacity={0.7}
									key={i}
									style={style.tabItem}
									onPress={this.tabClick.bind(this, i)}>
									<Text style={[
										style.tabItemText,
										this.state.dateActive == i ?
										style.tabActiveItemText :
										null
									]}>
										{res}
									</Text>
								</TouchableOpacity>
							))
						}
						
						<TouchableOpacity
							activeOpacity={0.7}
							style={style.tabSelectItem}
							onPress={this.tabClick.bind(this, 3)}>
							<Image source={{uri: 'icon-date'}} style={style.tabIcon} />
							<Text style={[style.tabItemText, style.tabDateItemText]}>
								选择日期
							</Text>
						</TouchableOpacity>
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
							renderRow={e => (
								<DailyItem
									showDay={this.state.dateActive !== 0}
									source={e}
									onUserPress={this.itemClick.bind(this, e)} />
								)}/> :
						<Text style={style.empty}>还没有人提交日报哦~</Text>
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