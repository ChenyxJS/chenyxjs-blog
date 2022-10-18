/*
 * @Descripttion: request工具类
 * @version: 
 * @Author: Chenyx
 * @Date: 2022-10-16 21:23:00
 * @LastEditors: Chenyx
 * @LastEditTime: 2022-10-18 03:36:40
 */
import axios from "axios"
import { error } from "console"
import { config } from "process"
import Qs from "qs"
const service = axios.create({
    withCredentials: true,
    timeout: 600000,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
    transformRequest: [function (data) {
        return Qs.stringify(data)
    }]
})

service.interceptors.request.use(
    config => {
        // config.baseURL = "/api"
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    response => {
        const res = response.data
        return res
    },
    error => {
        return Promise.reject(error)

    }
)

export default service