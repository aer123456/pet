/**
* @file: description
* @author: huguantao
* @Date: 2020-05-08 23:10:19
* @LastEditors: huguantao
* @LastEditTime: 2020-05-29 00:12:27
 */
//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        try {
          wx.setStorage({
            key: "userCode",
            data: res.code
          })
        } catch (e) { console.log(e)}
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              try {
                wx.setStorage({
                  key: "userInfo",
                  data: JSON.stringify(res.userInfo)
                })
              } catch (e) { console.log(e)}

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })

    wx.getSystemInfo({
      success: res => {
        //导航高度
        this.globalData.navHeight = res.statusBarHeight;
      }, fail(err) {
        console.log(err);
      }
    })
  },
  globalData: {
    userInfo: null,
    navHeight: 0
  },
  
})