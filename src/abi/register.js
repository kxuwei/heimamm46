
import axios from 'axios'
export function sendsms(data) {
    return axios({
        method:'post',
        url:process.env.VUE_APP_URL + "/sendsms",
       withCredentials:true,
       data
    })
} 
export function register(data) {
    return axios({
        method:'post',
        url:process.env.VUE_APP_URL+"/register",
       withCredentials:true,
       data
    })
} 

