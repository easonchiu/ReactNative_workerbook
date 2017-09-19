import { StyleSheet } from 'react-native'
import { px2pt, pt1 } from '../../utils/size'

const style = StyleSheet.create({
	wrapper: {
		flex: 1,
		alignItems: 'center',
		paddingTop: 20,
	},
	box: {
		width: '100%',
		padding: 10,
		shadowOffset: {
			width: 0,
			height: px2pt(2),
		},
		shadowColor: 'rgba(246,150,59,0.95)',
		shadowOpacity: 0.3,
		shadowRadius: px2pt(10),
	},
	inbox: {
		backgroundColor: 'rgba(246,150,59,0.95)',
		borderRadius: px2pt(4),
		overflow: 'hidden',
	},
	message: {
		color: '#fff',
		textAlign: 'center',
		padding: px2pt(10),
		paddingLeft: px2pt(30),
		paddingRight: px2pt(30),
		fontSize: px2pt(12),
		lineHeight: px2pt(20),
	}
})

export default style