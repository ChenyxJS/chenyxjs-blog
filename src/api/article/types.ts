/*
 * @Author: chenyx
 * @Date: 2023-03-02 20:43:43
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-03-28 18:10:44
 * @FilePath: /chenyxjs-blog/src/api/article/types.ts
 */
export interface Article {
  articleId: number;
  articleTitle: string;
  articleDesc: string;
  articleType: string;
  articleUrl: string;
  articleCreateTime: string;
  articleTagId: number;
}

export interface ArticleQuery extends PageQuery {
  keywords: string;
  articleTagId: number;
}
