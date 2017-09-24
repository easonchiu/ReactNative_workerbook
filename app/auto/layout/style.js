import { StyleSheet } from 'react-native'
import { px2pt, pt1 } from '../../utils/size'

const statusBarHeight = px2pt(20)

const style = StyleSheet.create({
    wrapper: {
    	flex: 1,
        backgroundColor: '#fff',
        position: 'relative',
    },
    header: {
        paddingTop: statusBarHeight,
        width: '100%',
		height: px2pt(50) + statusBarHeight,
        zIndex: px2pt(99),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        position: 'relative',
    },
    headerBack: {
        width: px2pt(50),
        height: px2pt(50),
        position: 'absolute',
        left: 0,
        bottom: 0,
        overflow: 'hidden',
    },
    headerBackIcon: {
        width: px2pt(22),
        height: px2pt(22),
        position: 'absolute',
        left: px2pt(15),
        top: px2pt((50 - 22) / 2),
    },
    headerClose: {
        width: px2pt(50),
        height: px2pt(50),
        position: 'absolute',
        left: 0,
        bottom: 0,
        overflow: 'hidden',
    },
    headerCloseIcon: {
        width: px2pt(22),
        height: px2pt(22),
        position: 'absolute',
        left: px2pt(18),
        top: px2pt((50 - 22) / 2),
    },
    headerTitle: {
        fontSize: px2pt(16),
        fontWeight: 'bold',
        color: '#586069'
    },
    headerShadow: {
        position: 'absolute',
        left: 0,
        bottom: px2pt(-20),
        width: '100%',
        height: px2pt(20)
    },
    body: {
		flex: 1,
        backgroundColor: '#f7f9fc',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        position: 'relative'
    },
    loading: {
        position: 'absolute',
        left: '50%',
        top: 50,
        zIndex: 99,
        marginLeft: px2pt(-15),
    },
    footer: {
		height: px2pt(60),
    },
    footerShadow: {
        position: 'absolute',
        left: 0,
        top: px2pt(-20),
        zIndex: 99,
        width: '100%',
        height: px2pt(20)
    },
})

export default style