import { StyleSheet, PixelRatio } from 'react-native'
import { px2pt, pt1 } from '../../utils/size'

const style = StyleSheet.create({
    wrapper: {
    	width: '100%',
        borderRadius: px2pt(4),
        backgroundColor: '#7076EF',
        overflow: 'hidden',
        height: px2pt(48),
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
    	color: '#fff',
    	fontSize: px2pt(15),
    	fontWeight: 'bold',
    }
})

const hover = '#ff0000'

export default style
export {
    hover,
}
