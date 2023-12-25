/*
 * @Descripttion:
 * @version:
 * @Author: Chenyx
 * @Date: 2022-10-18 00:34:30
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-03-28 21:12:02
 */
import request from "@/utils/request";
import { AxiosPromise } from "axios";
import { Tag, TagQuery } from "./types";

export function getTagList(data?: TagQuery): AxiosPromise<PageResult<Tag>> {
  return request({
    url: "/web/tag/selectByExample",
    method: "GET",
    params: data,
  });
}

