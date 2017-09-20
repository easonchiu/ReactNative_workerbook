import { StyleSheet } from 'react-native'
import { px2pt, pt1 } from '../../utils/size'

const style = StyleSheet.create({
	wrapper: {
		padding: 0,
		backgroundColor: 'rgb(246,150,59)',
	},
	title: {
		alignItems: 'center'
	},
	titleName: {
		fontSize: px2pt(16),
        fontWeight: 'bold',
        color: 'rgb(246,150,59)',
        height: px2pt(20),
        marginBottom: px2pt(3),
	},
	titleGroup: {
		fontSize: px2pt(13),
        fontWeight: 'bold',
        color: '#8a929b',
        height: px2pt(20),
	}
})

export default style