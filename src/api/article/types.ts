/*
 * @Author: chenyx
 * @Date: 2023-03-02 20:43:43
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-03-09 20:21:37
 * @FilePath: /chenyxjs-blog/src/api/article/types.ts
 */
export interface Article {
  articleId: number;
  articleTitle: string;
  articleContent: string;
  articleStatus: number;
  articleType: number;
  articleUrl: string;
  articleCreateTime: string;
}

export interface ArticleQuery extends PageQuery {
  keywords: string;
  articleType: number;
}
