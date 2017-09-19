import style from './style'
import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

class DailyItem extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<TouchableOpacity activeOpacity={0.8} style={style.wrapper} onPress={this.props.onPress}>
				<View style={style.info}>
					<View style={style.header}>
						<Text style={style.headerName}>志达</Text>
					</View>
					<View style={style.infoBd}>
						<Text style={style.name}>Eason.Chiu</Text>
						<Text style={style.group}>前端开发组</Text>
					</View>
					<Text style={style.date}>更新于 22:31:32</Text>
				</View>
				<View style={style.records}>
					<Text style={style.record}>APP首页日志解析</Text>
					<Text style={style.record}>销售业绩短租报表长租报表页面优化调整及权限调整</Text>
				</View>
			</TouchableOpacity>
		)
	}
}

export default DailyItem