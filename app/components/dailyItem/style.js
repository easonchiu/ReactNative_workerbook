import { StyleSheet } from 'react-native'
import { px2pt, pt1 } from '../../utils/size'

const style = StyleSheet.create({
	wrapper: {
		borderBottomWidth: pt1,
		backgroundColor: '#fff',
		borderBottomColor: 'rgb(240,240,240)',
		marginBottom: px2pt(10),
		borderRadius: px2pt(4),
		overflow: 'hidden',
	},
	info: {
		flexDirection: 'row',
		padding: px2pt(15),
	},
	header: {
		width: px2pt(40),
		height: px2pt(40),
		backgroundColor: 'rgb(246,150,59)',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: px2pt(20),
		overflow: 'hidden',
		marginRight: px2pt(10),
	},
	headerName: {
		color: '#fff',
		fontSize: px2pt(12),
	},
	infoBd: {
		flex: 1,
	},
	name: {
		lineHeight: px2pt(20),
		fontSize: px2pt(14),
		color: '#586069',
	},
	group: {
		lineHeight: px2pt(20),
		fontSize: px2pt(12),
		color: '#8a929b',
	},
	date: {
		lineHeight: px2pt(20),
		fontSize: px2pt(12),
		color: '#8a929b',
	},
	records: {
		padding: px2pt(15),
		backgroundColor: '#f7f9fc',
	},
	record: {
		color: '#586069',
		fontSize: px2pt(13),
		lineHeight: px2pt(13 * 1.5),
	}
})

export default style