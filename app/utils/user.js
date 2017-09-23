import { AsyncStorage } from 'react-native'


class User {
	static role = ''
	static token = ''

	static save(data) {
		this.role = data.role.toString()
		this.token = data.token

		AsyncStorage.setItem('token', data.token)
		AsyncStorage.setItem('role', data.role.toString())
	}

	static async asyncGet() {
		if (this.token && this.role) {
			return true
		}

		this.token = await AsyncStorage.getItem('token')
		this.role = await AsyncStorage.getItem('role')

		return true
	}

	static clear() {
		AsyncStorage.clear()
	}
}

export default User