/*
 * @Descripttion: 
 * @version: 
 * @Author: Chenyx
 * @Date: 2022-10-18 00:34:30
 * @LastEditors: Chenyx
 * @LastEditTime: 2022-10-18 03:02:49
 */
import request from '@/utils/http/request'

export function getJuejinData(data:Object){
    return request({
        url:"/junjin/getWebHotData",
        method:"POST",
        data
    })
}