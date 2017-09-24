import { StyleSheet, PixelRatio } from 'react-native'
import { px2pt, pt1 } from '../../utils/size'

const style = StyleSheet.create({
    wrapper: {
    	width: px2pt(30),
    	height: px2pt(10),
    	alignItems: 'center',
    	justifyContent: 'center',
    	flexDirection: 'row',
        backgroundColor: '#f0f'
    },
    wrapperHidden: {
        opacity: 0
    },
    s1: {
    	width: px2pt(10),
    	height: px2pt(10),
    	backgroundColor: '#6469e7',
    	borderRadius: px2pt(5)
    },
    s2: {
    	width: px2pt(10),
    	height: px2pt(10),
    	backgroundColor: '#f6963b',
    	borderRadius: px2pt(5),
    	marginLeft: px2pt(10)
    }
})

export default style
