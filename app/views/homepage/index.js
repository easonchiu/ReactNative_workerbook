import style from './style'
import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { ww } from '../../utils/size'

import Layout from '../../auto/layout'

class HomePage extends Component {
	constructor(props) {
		super(props)
	}

	renderGrid() {
		return null
		const list = []
		for (let i = 0; i < 40; i++) {
			list.push(i)
		}
		const size = ww / 40
		return (
			<View style={style.grid}>
				{
					list.map(res => (
						<View key={res} style={[style.gridCol, {
							width: size
						}]}>
							{
								[1,2,3,4,5,6,7].map(res => (
									<View key={res} style={[style.gridItem, {
										width: size,
										height: size,
										backgroundColor: 'rgba(36,183,15,.7)'
									}]} />
								))
							}
						</View>
					))
				}
			</View>
		)
	}

	render() {
		return (
			<Layout>
				<Layout.Body style={style.wrapper}>

					{this.renderGrid()}

				</Layout.Body>

				<Layout.Footer hasShadow>
					
				</Layout.Footer>
			</Layout>
		)
	}
}

export default HomePage