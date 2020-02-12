import {getToken} from '@/untils/token.js'
import axios from 'axios'
const indexRequst = axios.create({
    baseURL: process.env.VUE_APP_URL,
    withCredentials:true,
})
export function info() {
    return indexRequst({
        url:'/info',
        methods: 'get',
        headers:{
            token:getToken()
        }
    })
}
export function logout() {
    return indexRequst({
        url:'/logout',
        methods: 'get',
        headers:{
            token:getToken()
        }
    })
}