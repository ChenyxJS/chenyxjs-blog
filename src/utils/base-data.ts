/*
 * @Author: chenyx
 * @Date: 2022-12-28 21:44:22
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-12-29 12:38:05
 * @FilePath: /chenyxjs-blog/src/utils/base-data.ts
 */
import { category } from "@/interface/category";

export const categories: Array<category> = [
  {
    id: 0,
    name: "全部",
    active: true,
  },
  {
    id: 1,
    name: "前端",
    active: false,
  },
  {
    id: 2,
    name: "前端资源",
    active: false,
  },
  {
    id: 3,
    name: "git",
    active: false,
  },
  {
    id: 4,
    name: "其他",
    active: false,
  },
];
