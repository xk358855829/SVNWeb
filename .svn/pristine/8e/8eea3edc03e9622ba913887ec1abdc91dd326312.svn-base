import axios from 'axios'
import Qs from 'qs'
const service =axios.create({
    // baseURL:process.env.API_ROOT,
    baseURL:'http://39.104.113.112:2088',
    // baseURL:'http://114.55.168.103:2088',
    timeout:5000
})
service.interceptors.request.use(config=>{
    config.method==='post'?config.data=Qs.stringify({...config.data}):config.params={...config.params};
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    return config
},error=>{

})
service.interceptors.response.use(response=>{
    return response
},error=>{
    
})
export default service;