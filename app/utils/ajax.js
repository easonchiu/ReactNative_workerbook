import axios from 'axios'

const ajax = axios.create({
	baseURL: 'http://easy-mock.com/mock/59bcb5d0e0dc663341ac40f3/photo_rn',
})

export default ajax