import style from './style'
import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

class DailyItem extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<View style={style.wrapper} onPress={this.props.onPress}>
				{
					this.props.owner ?
					<View style={style.info}>
						<Text style={style.mydate}>更新于 22:31:32</Text>
					</View> :
					<View style={style.info}>
						<TouchableOpacity
							onPress={this.props.onUserPress}
							activeOpacity={0.8}
							style={style.header}>
							<Text style={style.headerName}>志达</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={this.props.onUserPress}
							activeOpacity={0.8}
							style={style.infoBd}>
							<Text style={style.name}>Eason.Chiu</Text>
							<Text style={style.group}>前端开发组</Text>
						</TouchableOpacity>
						<Text style={style.date}>更新于 22:31:32</Text>
					</View>
				}
				<View style={style.record}>
					<Text style={style.recordText}>APP首页日志解析</Text>
					<Text style={style.progress}>30%</Text>
					<View style={style.progressBar}>
						<View style={[style.progressBarContent, {
							width: '30%'
						}]} />
					</View>
				</View>
				<View style={style.record}>
					<Text style={style.recordText}>APP首页日志解析</Text>
					<Text style={style.progress}>75%</Text>
					<View style={style.progressBar}>
						<View style={[style.progressBarContent, {
							width: '75%'
						}]} />
					</View>
				</View>
				<View style={style.record}>
					<Text style={style.recordText}>APP首页日志解析</Text>
					<Text style={style.progress}>已完成</Text>
					<View style={style.progressBar}>
						<View style={[style.progressBarContent, {
							width: '100%'
						}]} />
					</View>
				</View>
			</View>
		)
	}
}

export default DailyItem