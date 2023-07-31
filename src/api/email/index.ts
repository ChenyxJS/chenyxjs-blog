/*
 * @Descripttion:
 * @version:
 * @Author: Chenyx
 * @Date: 2022-10-18 00:34:30
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-07-30 15:06:52
 */
import request from "@/utils/request";
import { AxiosPromise } from "axios";
import { Email } from "./types";

export function subscribe(data: Email): AxiosPromise<BaseApiResult> {
    return request({
        url: "/web/email/subscribe",
        method: "POST",
        params: data,
    });
}
