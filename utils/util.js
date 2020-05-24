/**
* @file: description
* @author: huguantao
* @Date: 2020-05-08 23:10:19
* @LastEditors: huguantao
* @LastEditTime: 2020-05-24 21:53:25
 */
const doRequest = (PARAMS, cb) => {
  return new Promise(function(resolve, reject) {
    wx.request({
      url: PARAMS.url, //仅为示例，并非真实的接口地址
      data: PARAMS.data,
      method: PARAMS.method,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        resolve(res)
      },
      fail (err) {
        console.log(err)
        wx.showToast({
          title: err.msg,
          icon: 'none',
          duration: 1500
        });
        reject(err)
      }
    })
  })
};

module.exports = {
  doRequest
}
