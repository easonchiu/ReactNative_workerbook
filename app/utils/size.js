import { PixelRatio, Dimensions } from 'react-native'

const ww = Dimensions.get('window').width
const wh = Dimensions.get('window').height
const px2pt = px => PixelRatio.roundToNearestPixel(px)
const pt1 = px2pt(1 / PixelRatio.get())

export {
	px2pt,
	pt1,
	ww,
	wh,
}