import style from './style'
import React, { Component } from 'react'
import { View, Text, ListView } from 'react-native'

import connect from '../../store/connect'

import Layout from '../../auto/layout'
import DailyItem from '../../components/dailyItem'

class HomePage extends Component {
	constructor(props) {
		super(props)

		const params = props.navigation.state.params

		this.state = {
			name: params.uid.nickname,
			group: '前端开发',
		}
	}

	componentDidMount() {
		const params = this.props.navigation.state.params
		this.props.$daily.clearListWithUser()
		if (params.uid && params.uid._id) {
			this.timer = setTimeout(e => {
				this.fetch(params.uid._id)	
			}, 1000)
		}
	}

	componentWillUnmount() {
		clearTimeout(this.timer)
	}

	async fetch(uid) {
		try {
			this.props.$daily.fetchListWithUser({
				uid
			})
		} catch (e) {

		}
	}

	onBackClick = e => {
		this.props.navigation.goBack()
	}

	render() {
		const list = this.props.$$daily.listWithUser || []

		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => false
		})

		let dataSource

		if (list.length > 0) {
			dataSource = ds.cloneWithRows(list)
		}

		return (
			<Layout>

				<Layout.Header hasShadow style={style.header} onBack={this.onBackClick}>
					<View style={style.title}>
						<Text style={style.titleName}>{this.state.name}</Text>
						<Text style={style.titleGroup}>{this.state.group}</Text>
					</View>
				</Layout.Header>

				<Layout.Body style={style.wrapper} loading={!dataSource}>
					
					{
						dataSource ?
						<ListView
							style={style.list}
							removeClippedSubviews={true}
							initialListSize={5}
							dataSource={dataSource}
							renderHeader={e => <View style={style.listHeader} />}
							renderFooter={e => <View style={style.listFooter} />}
							renderRow={e => <DailyItem source={e} owner onPress={this.itemClick} />}/> :
						null
					}

				</Layout.Body>
				
			</Layout>
		)
	}
}

export default connect(HomePage)