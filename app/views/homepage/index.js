import style from './style'
import React, { Component } from 'react'
import { View, Text, ListView } from 'react-native'
import { ww } from '../../utils/size'

import Layout from '../../auto/layout'
import DailyItem from '../../components/dailyItem'

class HomePage extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => true
		})
		const dataSource = ds.cloneWithRows([1,2,3,4,5,6,7,8,9,0])

		return (
			<Layout>

				<Layout.Header style={style.header} onBack={e => {}}>
					<View style={style.title}>
						<Text style={style.titleName}>Eason.Chiu</Text>
						<Text style={style.titleGroup}>前端开发</Text>
					</View>
				</Layout.Header>

				<Layout.Body style={style.wrapper}>

					<ListView
						style={{padding: 10}}
						initialListSize={10}
						dataSource={dataSource}
						renderRow={e => <DailyItem owner onPress={this.itemClick} />}/>

				</Layout.Body>
				
			</Layout>
		)
	}
}

export default HomePage