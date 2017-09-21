import axios from 'axios'

const ajax = axios.create({
	baseURL: 'https://daily.atzuche.com/api',
})

export default ajax