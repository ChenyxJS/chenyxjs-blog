/*
 * @Descripttion: request工具类
 * @version: 
 * @Author: Chenyx
 * @Date: 2022-10-16 21:23:00
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-03-28 13:45:02
 */
import axios from "axios"
import Qs from "qs"
const service = axios.create({
    withCredentials: true,
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 600000,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
    transformRequest: [function (data) {
        return Qs.stringify(data)
    }]
})

service.interceptors.request.use(
    config => {
        console.log(import.meta.env.VITE_APP_BASE_API);
        config.baseURL = import.meta.env.VITE_APP_BASE_API
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    response => {
        // const res = response.data
        // if(res)
        return response
    },
    error => {
        return Promise.reject(error)

    }
)

export default service