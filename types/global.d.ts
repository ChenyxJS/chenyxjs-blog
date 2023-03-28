/*
 * @Author: chenyx
 * @Date: 2023-03-02 21:24:28
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-03-28 13:08:35
 * @FilePath: /chenyxjs-blog/types/global.d.ts
 */
declare global {
  interface BaseApiResult {
    // 请求是否成功
    success: boolean;
    // 错误码
    tip: string;
    // 维护人员看到的错误原因
    failReason: string;
    // 客户显示的错误原因
    failReasonShow: string;
    // 对象
    object?: any;
  }

  
  interface PageQuery {
    page: number;
    limit: number;
  }

  interface PageResult<T> extends BaseApiResult {
    root: Array<T>;
    totalSize: number;
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
