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
	mask: {
		backgroundColor: 'rgb(246,150,59)',
		width: px2pt(40),
		height: px2pt(40),
		borderRadius: px2pt(20),
		position: 'absolute',
		overflow: 'hidden',
		left: 25,
		top: 95
	}
})

export default style