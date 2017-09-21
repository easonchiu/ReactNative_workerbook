import { StyleSheet } from 'react-native'
import { px2pt, pt1 } from '../../utils/size'

const style = StyleSheet.create({
	header: {
		backgroundColor: '#7076ef'
	},
	body: {
		padding: 0,
		backgroundColor: '#7076ef'
	},
	footer: {
		backgroundColor:'#7076ef',
		alignItems: 'center',
		justifyContent: 'center'
	},
	footerAdd: {
		width: px2pt(44),
		height: px2pt(44),
		borderRadius: px2pt(22),
		overflow: 'hidden'
	}
})

export default style