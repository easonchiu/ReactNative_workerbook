import { StyleSheet } from 'react-native'
import { px2pt, pt1 } from '../../utils/size'

const style = StyleSheet.create({
	wrapper: {
		padding: 0,
	},
	header: {
		
	},
	title: {
		alignItems: 'center'
	},
	titleName: {
		fontSize: px2pt(16),
        fontWeight: 'bold',
        color: '#586069',
        height: px2pt(20),
        marginBottom: px2pt(3),
	},
	titleGroup: {
		fontSize: px2pt(13),
        color: '#a8b0b9',
        height: px2pt(20),
	},
	listHeader: {
		width: '100%',
		height: px2pt(6),
	},
	listFooter: {
		width: '100%',
		height: px2pt(4),
	}
})

export default style