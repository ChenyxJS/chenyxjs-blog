/*
 * @Author: chenyx
 * @Date: 2022-10-18 22:03:29
 * @LastEditors: Chenyx
 * @LastEditTime: 2022-10-27 12:26:59
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
