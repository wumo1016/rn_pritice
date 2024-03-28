/*
 * @Description: 请求
 * @Author: wyb
 * @LastEditors: wyb
 * @LastEditTime: 2024-03-27 11:26:43
 */

export interface IReqestOptions {
  url: string;
  methods?: 'get' | 'post';
}

export function request(options: IReqestOptions) {
  return new Promise(async (resolve, reject) => {
    const { url, methods = 'get' } = options;
    const data = await fetch(url);
  });
}
