import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
	wrapper: {
		width: 20,
		height: 20,
		position: 'relative',
	},
	icon: {
		width: '100%',
		height: '100%',
		position: 'absolute',
		left: 0,
		top: 0,
	},
	iconChecked: {
		zIndex: 2,
		opacity: 1,
	}
})

export default style