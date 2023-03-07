/*
 * @Author: chenyx
 * @Date: 2023-03-02 20:43:43
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-03-07 19:30:58
 * @FilePath: /chenyxjs-blog/src/api/article/types.ts
 */
export interface Article {}

export interface ArticleQuery extends PageQuery {
  articleType: number;
}
