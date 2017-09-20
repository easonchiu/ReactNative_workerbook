import style from './style'
import React, { Component } from 'react'
import { View, Text, ListView } from 'react-native'
import { NavigationActions } from 'react-navigation'

import Layout from '../../auto/layout'
import DailyItem from '../../components/dailyItem'

class Index extends Component {
	constructor(props) {
		super(props)
	}

	itemClick = e => {
		const { dispatch } = this.props.navigation
		const action = NavigationActions.navigate({
			routeName: 'HomePage',
			mode: 'modal',
			params: {}
		})

		dispatch(action)
	}

	render() {
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => true
		})
		const dataSource = ds.cloneWithRows([1,2,3,4,5,6,7,8,9,0])

		return (
			<Layout>
				
				<Layout.Header hasShadow title="全部" />

				<Layout.Body style={style.body}>
					
					<ListView
						style={{padding: 10}}
						initialListSize={10}
						dataSource={dataSource}
						renderRow={e => <DailyItem onUserPress={this.itemClick} />}/>
					
				</Layout.Body>

				<Layout.Footer hasShadow />

			</Layout>
		)
	}
}

export default Index