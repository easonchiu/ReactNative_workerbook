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
			group: '前端开发'
		}
	}

	componentDidMount() {
		const params = this.props.navigation.state.params
		if (params.uid && params.uid._id) {
			this.fetch(params.uid._id)
		}
	}

	async fetch(uid) {
		try {
			await this.props.$daily.fetchListWithUser({
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
			rowHasChanged: (r1, r2) => true
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

				<Layout.Body style={style.wrapper}>
					
					{
						dataSource ?
						<ListView
							removeClippedSubviews={true}
							initialListSize={10}
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