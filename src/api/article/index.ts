/*
 * @Descripttion:
 * @version:
 * @Author: Chenyx
 * @Date: 2022-10-18 00:34:30
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-03-23 23:23:51
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

export function getArticleById(id:number) {
  // 去除字符串中的
  return request({
    url: "/web/article",
    method: "GET",
    params: {id: id},
  });
}
