import { PixelRatio } from 'react-native'

const px2pt = px => PixelRatio.roundToNearestPixel(px)
const pt1 = px2pt(1 / PixelRatio.get())

export {
	px2pt,
	pt1,
}