import axios from 'axios'
import User from './user'

const ajax = axios.create({
	baseURL: 'http://daily.atzuche.com/api'
})

ajax.interceptors.request.use(config => {
	const token = User.token
	if (token) {
		config.headers.Authorization = 'Bearer ' + token
	}
	return config
}, error => {
	return Promise.reject(error)
})

export default ajax