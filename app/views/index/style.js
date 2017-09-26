import { StyleSheet } from 'react-native'
import { px2pt, pt1 } from '../../utils/size'

const style = StyleSheet.create({
	header: {
		alignItems: 'center'
	},
	tab: {
        height: px2pt(35),
        flexDirection: 'row',
        marginTop: px2pt(-10),
        position: 'relative',
        width: '80%'
	},
	tabItem: {
		height: px2pt(35),
		lineHeight: px2pt(30),
		width: '100%',
		flex: 1,
		textAlign: 'center',
		fontSize: px2pt(13),
		color: '#a8b0b9',
	},
	tabSelectItem: {
		flex: 1.5,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	tabIcon: {
		width: px2pt(14),
		height: px2pt(14),
		marginTop: px2pt(-2.8),
		marginRight: px2pt(5)
	},
	tabDateItem: {
		flex: 0,
		width: 'auto'
	},
	tabActiveItem: {
		color: '#6469e7',
		fontWeight: 'bold'
	},
	tabLine: {
		width: px2pt(20),
		height: px2pt(3),
		backgroundColor: '#6469e7',
		position: 'absolute',
		left: 0,
		bottom: 0,
		zIndex: 9
	},
	body: {
		padding: 0,
	},
	list: {
		width: '100%'
	},
	footer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	footerItem: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	footerHome: {
		width: px2pt(34),
		height: px2pt(34),
		borderRadius: px2pt(22),
		overflow: 'hidden'
	},
	footerAdd: {
		width: px2pt(44),
		height: px2pt(44),
		borderRadius: px2pt(22),
		overflow: 'hidden'
	},
	footerMine: {
		width: px2pt(34),
		height: px2pt(34),
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