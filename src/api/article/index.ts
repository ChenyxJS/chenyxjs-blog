/*
 * @Descripttion:
 * @version:
 * @Author: Chenyx
 * @Date: 2022-10-18 00:34:30
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-06-08 02:29:58
 */
import request from "@/utils/request";
import { AxiosPromise } from "axios";
import { Article, ArticleQuery } from "./types";

export function getArticleList(
    data?: ArticleQuery
): AxiosPromise<PageResult<Article>> {
    return request({
        url: "/web/article/all",
        method: "GET",
        params: data,
    });
}

export function getArticleById(id: number) {
    return request({
        url: "/web/article/" + id,
        method: "GET",
    });
}
