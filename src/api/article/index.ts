/*
 * @Descripttion: 
 * @version: 
 * @Author: Chenyx
 * @Date: 2022-10-18 00:34:30
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-03-03 14:01:10
 */
import request from '@/utils/request'
import {  ArticleQuery} from './types'


export function getArticleList(data?:ArticleQuery){
    return request({
        url:"/web/article/all",
        method:"GET",
        params:data
    })
}



export function getArticleByUrl(){
    return request({
        url:"Vue3%E6%9E%84%E5%BB%BACesium%E5%85%A5%E9%97%A8%EF%BC%88%E4%B8%80%EF%BC%89.md",
        method:"GET"
    })
}
