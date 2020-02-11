import axios from 'axios'

const loginRequst = axios.create({
    baseURL: process.env.VUE_APP_URL,
    withCredentials:true,
})
export function login(data) {
    return loginRequst ({
        url:'/login',
        method:'post',
        data
    })
}