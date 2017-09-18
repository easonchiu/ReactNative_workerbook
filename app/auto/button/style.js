import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
    wrapper: {
    	width: '100%',
        height: 54,
        position: 'relative',
        borderRadius: 30,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 0,
            height: 2,
        }
    },
    bg: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        backgroundColor: 'rgba(0,0,0,0)',
        overflow: 'hidden',
    },
    text: {
    	color: '#fff',
    	fontSize: 16,
    	fontWeight: 'bold',
        position: 'absolute',
        zIndex: 9,
    }
})

const hover = '#ff0000'

export default style
export {
    hover,
}
