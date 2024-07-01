import axios from 'axios'

const axiosApi = axios.create({
    baseURL : 'https://codeit.com.np/api/'
})
export default axiosApi