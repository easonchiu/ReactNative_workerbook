import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
	scene: {
		flex: 1,
	},
	item: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
	},
	hiddenItem: {
		overflow: 'hidden',
		opacity: 0,
	}
})

export default style