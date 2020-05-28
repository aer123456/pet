/**
* @file: description
* @author: huguantao
* @Date: 2020-05-08 23:10:19
* @LastEditors: maqing03
* @LastEditTime: 2020-05-28 09:42:19
 */
const urlPrefix = 'https://test-api.unipet-group.com';

const showToast = (msg) => {
  wx.showToast({
    title: msg,
    icon: 'none',
    duration: 1500
  });
}

const doRequest = (PARAMS, cb) => {
  return new Promise(function(resolve, reject) {
    wx.request({
      url: urlPrefix + PARAMS.url, //仅为示例，并非真实的接口地址
      data: PARAMS.data || {},
      method: PARAMS.method,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        // 只要成功接收到服务器返回，无论 statusCode 是多少，都会进入 success 回调
        // 异步请求只接受 200 为成功请求
        const { statusCode, data, errMsg } = res || {};
        if(statusCode === 200) {
          resolve(data);
        } else {
          reject(errMsg);
        }
      },
      fail (err) {
        console.log(err);
        reject(err);
      }
    })
  })
};

module.exports = {
  doRequest,
  showToast
}
