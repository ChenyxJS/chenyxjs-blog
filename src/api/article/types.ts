/*
 * @Author: chenyx
 * @Date: 2023-03-02 20:43:43
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-03-03 14:17:12
 * @FilePath: /chenyxjs-blog/src/api/article/types.ts
 */
export interface Article {}

export interface ArticleQuery extends PageQuery {
  article_type: number;
}
