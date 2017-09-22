import { StyleSheet } from 'react-native'
import { px2pt, pt1 } from '../../utils/size'

const style = StyleSheet.create({
	header: {
		
	},
	body: {
		padding: 0,
	},
	footer: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	footerAdd: {
		width: px2pt(44),
		height: px2pt(44),
		borderRadius: px2pt(22),
		overflow: 'hidden'
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