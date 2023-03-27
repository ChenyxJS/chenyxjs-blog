/*
 * @Author: chenyx
 * @Date: 2023-03-02 20:43:43
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-03-25 16:52:03
 * @FilePath: /chenyxjs-blog/src/api/article/types.ts
 */
export interface Article {
  articleId: number;
  articleTitle: string;
  articleDesc: string;
  articleType: string;
  articleUrl: string;
  articleCreateTime: string;
}

export interface ArticleQuery extends PageQuery {
  keywords: string;
  articleType: string;
}
