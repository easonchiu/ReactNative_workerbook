import axios from 'axios'

const ajax = axios.create({
	baseURL: 'http://daily.atzuche.com/api',
})

export default ajax