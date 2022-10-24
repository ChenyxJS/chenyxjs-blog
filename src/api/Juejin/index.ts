/*
 * @Descripttion: 
 * @version: 
 * @Author: Chenyx
 * @Date: 2022-10-18 00:34:30
 * @LastEditors: Chenyx
 * @LastEditTime: 2022-10-20 20:37:58
 */
import request from '@/utils/http/request'

export function getJuejinData(data:Object){
    return request({
        url:"/juejin/getWebHotData",
        method:"GET",
        data
    })
}