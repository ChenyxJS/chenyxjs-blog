/*
 * @Author: chenyx
 * @Date: 2022-10-18 22:03:29
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-10-18 22:26:23
 * @FilePath: \chenyxjs\src\config.ts
 */


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
