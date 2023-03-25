/*
 * @Author: chenyx
 * @Date: 2022-10-18 22:03:29
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-03-24 18:29:44
 * @FilePath: /chenyxjs-blog/src/config.ts
 */

export const webBaseInfo = {
    title:'见万事如流',
    Author: 'Chenyx',
    // 备案信息
    ICP:'桂ICP备 2023002009号-1',
    NS:''
}


/**
 * @description: 获取我的网站地址
 * @return {*}
 */
function getMyWebSitePath(){
    const MyWebSitePath:object = {
        blog:"https://www.chenyxjs.com",
        github:"https://github.com/ChenyxJS"
    }
    return MyWebSitePath
}



export default {
    getMyWebSitePath
}
