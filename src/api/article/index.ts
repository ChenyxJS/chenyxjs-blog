/*
 * @Descripttion:
 * @version:
 * @Author: Chenyx
 * @Date: 2022-10-18 00:34:30
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-03-09 23:16:04
 */
import request from "@/utils/request";
import { ArticleQuery } from "./types";

export function getArticleList(data?: ArticleQuery) {
  return request({
    url: "/web/article/all",
    method: "GET",
    params: data,
  });
}

export function getArticleByUrl(url:string) {
  return request({
    url: url,
    method: "GET",
  });
}
