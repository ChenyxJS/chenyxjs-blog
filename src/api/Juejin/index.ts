/*
 * @Descripttion: 
 * @version: 
 * @Author: Chenyx
 * @Date: 2022-10-18 00:34:30
 * @LastEditors: Chenyx
 * @LastEditTime: 2022-10-28 21:16:22
 */
import request from '@/utils/http/request'

export function getJuejinData(data:Object){
    return request({
        url:"/juejin/getWebHotData",
        method:"GET",
        data
    })
}
