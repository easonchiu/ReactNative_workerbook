import { StyleSheet } from 'react-native'
import { px2pt, pt1 } from '../../utils/size'

const style = StyleSheet.create({
	wrapper: {
		padding: px2pt(10),
		paddingTop: px2pt(4),
		paddingBottom: px2pt(6),
		overflow: 'hidden',
	},
	border: {
		backgroundColor: '#fff',
		borderRadius: px2pt(4),
		borderWidth: pt1,
		borderColor: '#dee3e8',
		padding: pt1,
		shadowColor: '#000',
		shadowOpacity: 0.03,
		shadowOffset: {
			width: 0,
			height: px2pt(1),
		}
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
	mydate: {
		lineHeight: px2pt(20),
		fontSize: px2pt(13),
		color: '#8a929b',
	},
	progress: {
		color: '#8a929b',
		fontSize: px2pt(10),
		lineHeight: px2pt(13 * 1.5),
		position: 'relative',
		zIndex: 2,
	},
	progressBar: {
		position: 'absolute',
		left: 0,
		top: 0,
		right: 0,
		height: px2pt(2),
		backgroundColor: '#e9eff8',
	},
	records: {
		padding: px2pt(5),
		paddingLeft: px2pt(15),
		paddingRight: px2pt(15),
	},
	record: {
		backgroundColor: '#fff',
		flexDirection: 'row',
		position: 'relative',
		overflow: 'hidden',
		paddingTop: px2pt(10),
		paddingBottom: px2pt(10),
	},
	recordText: {
		flex: 1,
		color: '#586069',
		fontSize: px2pt(13),
		lineHeight: px2pt(13 * 1.5),
		marginRight: px2pt(10),
		textAlign: 'justify'
	}
})

export default style