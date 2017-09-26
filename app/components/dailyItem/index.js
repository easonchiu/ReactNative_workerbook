import style from './style'
import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

class DailyItem extends Component {
	constructor(props) {
		super(props)
	}

	getHeaderName(name) {
		if ((/(^[a-z]+$)/gi).test(name) && name.length > 6) {
			// 全部为英文的名字，如果超过6个字母，只保留首字母，使用大号字体
			name = name.substr(0, 1).toUpperCase()
		} else if ((/\./i).test(name)) {
			// 如果有点，取点前半段，同样如果超过6个字母，保留首字母，使用大号字体
			name = name.split('.')[0]
			if (name.length > 6) {
				name = name.substr(0, 1).toUpperCase()
			}
		} else if (!(/([a-z]+)/gi).test(name)) {
			// 如果非英文名，则认为包含中文等其他，超过3个字，取名，否则取姓
			if (name.length >= 3) {
				name = name.substr(-2)
			} else if (name.length == 1) {}
		}
		return name
	}

	getHeaderBg(uid) {
		let cuid = uid ? uid.toString().replace(/\D/g, '') : 0
		cuid = cuid ? cuid : 0
		const color = cuid % 6
		return [
			'#feb5cc',
			'#c7b3ff',
			'#68e4b1',
			'#a8e26f',
			'#82c6f1',
			'#f8b981'
		][color] || '#feb5cc'
	}

	render() {
		const data = this.props.source

		if (!data) {
			return null
		}

		const time = this.props.owner || this.props.showDay ?
			new Date(data.updateTime).format('M月d hh:mm:ss') :
			new Date(data.updateTime).format('hh:mm:ss')

		// 处理头像name
		const name = !this.props.owner && this.getHeaderName(data.uid.nickname)
		
		// 处理头像颜色
		const color = !this.props.owner && this.getHeaderBg(data.uid._id)

		return (
			<View style={style.wrapper}>
				<View style={style.border}>
					{
						this.props.owner ?
						<View style={style.info}>
							<Text style={style.mydate}>{time}</Text>
						</View> :
						<View style={style.info}>
							<TouchableOpacity
								onPress={this.props.onUserPress}
								activeOpacity={0.8}
								style={[style.header, {
									backgroundColor: color
								}]}>
								<Text style={style.headerName}>{name}</Text>
							</TouchableOpacity>
							<TouchableOpacity
								onPress={this.props.onUserPress}
								activeOpacity={0.8}
								style={style.infoBd}>
								<Text style={style.name}>{data.uid.nickname}</Text>
								<Text style={style.group}>前端开发</Text>
							</TouchableOpacity>
							<Text style={style.date}>更新于 {time}</Text>
						</View>
					}
					<View style={style.records}>
					{
						data.dailyList.map((res, i) => (
							<View key={i} style={style.record}>
								<Image source={{uri: 'bg-a'}} style={[style.progressBar, {
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