/*
 * @Descripttion: 工具类
 * @version:
 * @Author: Chenyx
 * @Date: 2022-10-16 00:50:35
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-03-28 14:38:30
 */

/**
 * @Descripttion: 格式化时间
 * @msg:
 * @param {Date} num
 * @param {String} format
 * @return {*}
 */
export function formatDate(num: string, format?: string) {
  format = format || "YYYY-mm-dd HH:MM:SS"; //第一个参数不填时，使用默认格式
  let ret, date, renum;
  // 处理时间戳，js一般获取的时间戳是13位，PHP一般是10位,根据实际情况做判断处理
  if (num.toString().length == 10) {
    date = new Date(parseInt(num) * 1000);
  } else {
    date = new Date(parseInt(num));
  }
  const opt: any = {
    Y: date.getFullYear().toString(), // 年
    m: (date.getMonth() + 1).toString(), // 月
    d: date.getDate().toString(), // 日
    H: date.getHours().toString(), // 时
    M: date.getMinutes().toString(), // 分
    S: date.getSeconds().toString(), // 秒
    // 目前用的是这六种符号,有其他格式化字符需求可以继续添加，值必须转化成字符串
  };
  for (var k in opt) {
    ret = new RegExp("(" + k + "+)").exec(format);
    if (ret) {
      renum = ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, "0"); //根据复数前面是否补零,如“mm”补零，单“m”前面不补零
      format = format.replace(ret[1], renum); //替换
    }
  }
  return format;
}

/**
 * 防抖函数
 * @param func 用户传入的防抖函数
 * @param wait 等待的时间
 * @param immediate 是否立即执行
 */
export const debounce = (func, time, immediate) => {
  let timer;
  const cxt = this;
  const rtn = (...params) => {
    clearTimeout(timer);
    if (immediate) {
      let callNow = !timer;
      timer = setTimeout(() => {
        timer = null;
      }, time);
      if (callNow) func.apply(cxt, params);
    } else {
      timer = setTimeout(() => {
        func.apply(cxt, params);
      }, time);
    }
  };
  return rtn;
};

/**
 * @description: 节流函数
 * @param {*} func
 * @param {*} wait
 * @param {*} options
 * @return {*}
 */
// export function throttle(func, wait, options) {
//   let context, args, result;
//   let timeout = null;
//   let previous = 0;
//   if (!options) options = {};
//   const later = function () {
//     previous = options.leading === false ? 0 : +new Date();
//     timeout = null;
//     result = func.apply(context, args);
//     if (!timeout) context = args = null;
//   };
// }
