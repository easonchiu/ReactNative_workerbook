import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
	wrapper: {
		backgroundColor: '#fff',
		marginLeft: -20,
		marginRight: -20,
		borderTopWidth: 1,
		borderTopColor: 'rgb(242, 242, 242)',
		borderBottomWidth: 1,
		borderBottomColor: 'rgb(242, 242, 242)',
		overflow: 'hidden',
	},
	row: {
		paddingLeft: 20,
		paddingRight: 20,
		minHeight: 50,
		justifyContent: 'center',
		overflow: 'hidden',
	},
	line: {
		width: '100%',
		marginLeft: 20,
		height: 1,
		backgroundColor: 'rgb(242, 242, 242)',
	}
})

export default style