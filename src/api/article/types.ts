/*
 * @Author: chenyx
 * @Date: 2023-03-02 20:43:43
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-05-05 14:09:31
 * @FilePath: /chenyxjs-blog/src/api/article/types.ts
 */
export interface Article {
  articleId: number;
  articleTitle: string;
  articleDesc: string;
  articleType: string;
  articleUrl: string;
  articleCreateTime: string;
  articleTagIds: string;
  articleLikes: number;
  articleLooks: number;

}

export interface ArticleQuery extends PageQuery {
  keywords: string;
  articleTagIds: string;
}
