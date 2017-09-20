import { StyleSheet, PixelRatio } from 'react-native'
import { px2pt, pt1 } from '../../utils/size'

const style = StyleSheet.create({
	body: {
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		padding: px2pt(40)
	},
	logo: {
		width: px2pt(220),
		height: px2pt(70),
		resizeMode: 'contain',
		marginBottom: px2pt(50),
		marginTop: px2pt(-200)
	},
	inputGroup: {
		borderWidth: pt1,
		borderColor: '#e4e8ed',
		borderRadius: px2pt(4),
		marginBottom: px2pt(20),
		width: '100%',
		backgroundColor: '#f7f9fc',
	},
	inputItem: {
		height: px2pt(50),
		borderTopWidth: pt1,
		borderColor: '#e4e8ed',
		alignItems: 'center',
		justifyContent: 'center',
		paddingLeft: px2pt(15),
		paddingRight: px2pt(15),
	},
	inputFirstItem: {
		borderTopWidth: 0,
	},
	input: {
		width: '100%',
		height: px2pt(30),
		fontSize: px2pt(13),
	}
})

export default style