import style from './style'
import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

class DailyItem extends Component {
	constructor(props) {
		super(props)
	}

	componentWillUnmount() {
		console.log(1)
	}

	render() {
		const data = this.props.source

		if (!data) {
			return null
		}

		return (
			<View style={style.wrapper}>
				<View style={style.border}>
					{
						this.props.owner ?
						<View style={style.info}>
							<Text style={style.mydate}>{data.updateTime}</Text>
						</View> :
						<View style={style.info}>
							<TouchableOpacity
								onPress={this.props.onUserPress}
								activeOpacity={0.8}
								style={style.header}>
								<Text style={style.headerName}>{data.uid.nickname}</Text>
							</TouchableOpacity>
							<TouchableOpacity
								onPress={this.props.onUserPress}
								activeOpacity={0.8}
								style={style.infoBd}>
								<Text style={style.name}>{data.uid.nickname}</Text>
								<Text style={style.group}>xxxx组</Text>
							</TouchableOpacity>
							<Text style={style.date}>{data.updateTime}</Text>
						</View>
					}
					<View style={style.records}>
					{
						data.dailyList.map(res => (
							<View key={res._id} style={style.record}>
								<View style={[style.progressBar, {
									width: res.progress + '%'
								}]} />
								<Text style={style.recordText}>{res.record}</Text>
								<Text style={style.progress}>{res.progress}%</Text>
							</View>
						))
					}
					</View>
				</View>
			</View>
		)
	}
}

export default DailyItem