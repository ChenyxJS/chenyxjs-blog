/*
 * @Author: chenyx
 * @Date: 2023-03-02 21:24:28
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-03-02 21:24:52
 * @FilePath: /chenyxjs-blog/types/global.d.ts
 */
declare global {
  interface PageQuery {
    pageNum: number;
    pageSize: number;
  }

  interface PageResult<T> {
    list: T;
    total: number;
  }
  type DialogType = {
    title?: string;
    visible: boolean;
  };

  type OptionType = {
    value: string;
    label: string;
    checked?: boolean;
    children?: OptionType[];
  };
}
export {};
