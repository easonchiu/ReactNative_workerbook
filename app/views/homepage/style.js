import { StyleSheet } from 'react-native'
import { px2pt, pt1 } from '../../utils/size'

const style = StyleSheet.create({
	wrapper: {
		padding: 0,
		paddingTop: 100
	},
	grid: {
		flexDirection: 'row'
	},
	gridCol: {

	},
	gridItem: {
		borderWidth: pt1,
		borderColor: '#fff'
	}
})

export default style