import { StyleSheet } from 'react-native'

const statusBarHeight = 20

const style = StyleSheet.create({
    wrapper: {
    	flex: 1,
        backgroundColor: '#fff',
        position: 'relative',
    },
    header: {
        paddingTop: statusBarHeight,
        width: '100%',
		height: 60 + statusBarHeight,
        zIndex: 99,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        position: 'relative',
    },
    headerBack: {
        width: 60,
        height: 60,
        position: 'absolute',
        left: 0,
        bottom: 0,
        overflow: 'hidden',
    },
    headerBackIcon: {
        width: 22,
        height: 22,
        position: 'absolute',
        left: 15,
        top: (60 - 22) / 2,
    },
    headerClose: {
        width: 60,
        height: 60,
        position: 'absolute',
        left: 0,
        bottom: 0,
        overflow: 'hidden',
    },
    headerCloseIcon: {
        width: 22,
        height: 22,
        position: 'absolute',
        left: 18,
        top: (60 - 22) / 2,
    },
    headerTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'rgb(51,51,51)'
    },
    headerShadow: {
        position: 'absolute',
        left: 0,
        bottom: -20,
        width: '100%',
        height: 20
    },
    body: {
		flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    scrollBody: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContainer: {
        padding: 20,
    },
    footer: {
		height: 60,
    },
    footerShadow: {
        position: 'absolute',
        left: 0,
        top: -20,
        zIndex: 99,
        width: '100%',
        height: 20
    },
})

export default style