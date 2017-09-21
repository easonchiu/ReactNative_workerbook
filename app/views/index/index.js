import style from './style'
import React, { Component } from 'react'
import { View, Text, ListView, StatusBar } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { px2pt, ww, wh } from '../../utils/size'

import Layout from '../../auto/layout'
import DailyItem from '../../components/dailyItem'

class Index extends Component {
	constructor(props) {
		super(props)

		this.state = {
			
		}
	}

	itemClick = e => {
		this.props.navigation.navigate('HomePage')
	}

	render() {
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => true
		})
		const dataSource = ds.cloneWithRows([1,2,3,4,5,6,7,8,9,0])

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

			</Layout>
		)
	}
}

export default Index