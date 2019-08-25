import axios from "axios";

export default function ajax(url = "", params = {}, type = "get") {
  // 1. 定义Promise的对象
  let promise;
  return new Promise((resolve, reject) => {
    let promise;
    // 2.判断请求方式
    if("get" === type) {
      // 2.1拼接请求字符串串
      let paramsStr = "";
      Object.keys(params).forEach(key => {
        paramsStr += ket + "=" + params[key] + "&";
      });
      // 2.2过滤最后的&
      if (paramsStr !== "") {
        paramsStr = paramsStr.substr(0, paramsStr.lastIndexOf("&"));
      }
      // 2.3完整路径
      url += "?" + paramsStr;
      promise = axios.get(url);
    } else if("post" === type)
    promise = axios.post(url, params);
  });
  promise.then((response) => {
    resolve(response.result);
  }).catch(error => {
    reject(error);
  })
}