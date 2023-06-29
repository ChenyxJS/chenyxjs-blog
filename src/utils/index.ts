/*
 * @Descripttion: 工具类
 * @version:
 * @Author: Chenyx
 * @Date: 2022-10-16 00:50:35
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-06-27 10:29:39
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
            renum =
                ret[1].length == 1
                    ? opt[k]
                    : opt[k].padStart(ret[1].length, "0"); //根据复数前面是否补零,如“mm”补零，单“m”前面不补零
            format = format.replace(ret[1], renum); //替换
        }
    }
    return format;
}

/**
 * @description: 防抖函数
 * @param {Function} callback
 * @param {number} wait
 * @return {*}
 */
export function debounce(callback: Function, wait: number = 400) {
    let timer: NodeJS.Timeout | null = null;
    return function (...args: Array<any>) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            callback(...args);
        }, wait);
    };
}

/**
 * @description: 节流函数
 * @param {Function} callback
 * @param {number} wait
 * @return {*}
 */
export function throttle(callback: Function, wait: number) {
    let flag = false;
    return function () {
        const args = arguments;
        if (flag) return;
        flag = true;
        setTimeout(() => {
            callback(...args);
            flag = false;
        }, wait);
    };
}

// 格式化歌曲播放时间
export function handleFormatDuration(duration: number): string {
    const mins =
        Math.floor(duration / 60) < 10
            ? `0${Math.floor(duration / 60)}`
            : Math.floor(duration / 60);
    const sec =
        Math.floor(duration % 60) < 10
            ? `0${Math.floor(duration % 60)}`
            : Math.floor(duration % 60);
    return `${mins}:${sec}`;
}

export function loading(apiFun: Function, args: any, loadingRef: any): void {
    const rejectPromise = (rejectTime: number): Promise<unknown> => {
        // 指定时间后返回状态失败的promise
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(new Error(`在${rejectTime}ms后返回失败Promise`));
            }, rejectTime);
        });
    };

    const reolvePromise = (reolveTime: number): Promise<unknown> => {
        // 指定时间后返回状态成功的promise
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(`在${reolveTime}ms后返回成功Promise`);
            }, reolveTime);
        });
    };

    const axiosRequest = apiFun(args); // 记录请求的状态

    Promise.race([axiosRequest, rejectPromise(300)])
        .then((res) => {
            // 成功意味着请求在固定时间内返回
            console.log(res);
        })
        .catch((err) => {
            // 超时，整体变成onrejected，展示loading
            loadingRef = true;
            console.log(err.message);
            Promise.all([axiosRequest, reolvePromise(1500)])
                .then((res) => {
                    // Promise.all执行结果返回的数组顺序是按传入顺序决定的
                    console.log(res[0]);
                })
                .catch((err) => {
                    console.log(err);
                })
                .finally(() => {
                    loadingRef = false;
                });
        });
}
