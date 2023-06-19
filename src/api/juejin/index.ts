/*
 * @Descripttion:
 * @version:
 * @Author: Chenyx
 * @Date: 2022-10-18 00:34:30
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-06-19 02:43:21
 */
import request from "@/utils/request";
import { AxiosPromise } from "axios";

export function getJueJinData(
): AxiosPromise<BaseApiResult> {
    return request({
        url: "/web/juejin/getJueJinData",
        method: "GET",
    });
}

