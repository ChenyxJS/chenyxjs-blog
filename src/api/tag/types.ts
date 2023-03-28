/*
 * @Author: chenyx
 * @Date: 2023-03-02 20:43:43
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-03-28 17:59:32
 * @FilePath: /chenyxjs-blog/src/api/tag/types.ts
 */
export interface Tag {
  tagId: number;
  tagName: string;
}

export interface TagQuery extends PageQuery {
}
