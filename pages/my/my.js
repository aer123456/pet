/**
* @file: description
* @author: huguantao
* @Date: 2020-05-28 23:09:54
* @LastEditors: huguantao
* @LastEditTime: 2020-05-30 00:42:33
 */
// pages/my/my.js
import {doRequest} from '../../utils/util';

const App = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userCode: '',
    userInfo: App.globalData.userInfo,
    allUserInfo: '',
    logined: false,
    userOrders: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const _this = this;
    wx.getStorage({
      key: 'allUserInfo',
      success (res) {
        // console.log(JSON.parse(res.data))
        if(res.data.length > 0) {
          _this.setData({
            userInfo: JSON.parse(res.data).userInfo,
            allUserInfo: JSON.parse(res.data),
            logined: true
          })
        }
      }
    })
    
    // 获取用户code，用来换取token
    wx.getStorage({
      key: 'userCode',
      success (res) {
        if(res.data.length > 0) {
          _this.setData({
            userCode: res.data
          });
          _this.getUserOrder(res.data);
        } else {
          wx.login({
            success (res) {
              if (res.code) {
                _this.setData({
                  userCode: res.code
                });
                _this.getUserOrder(res.code);
              }
            }
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  getUserInfo: function(){
    const _this = this;
    wx.getUserInfo({
      withCredentials: true,
      success: function(res) {
        // console.log(res)
        var userInfo = res.userInfo;
        _this.setData({
          userInfo: userInfo,
          allUserInfo: res,
          logined: true
        });
        wx.setStorage({
          key: "allUserInfo",
          data: JSON.stringify(res)
        });
        _this.getUserOrder();
      }
    })
  },
  getUserOrder: function(code) {
    const _this = this;
    const param = {
      url: `/miniMember/wxlogin`,
       method: 'post',
       data: {code: code || _this.data.userCode}
     }
     doRequest(param).then((res) => {
      const param = {
        url: `/shop/shopList?token=${res.data.token}`,
        method: 'GET',
        data: {}
      }
      doRequest(param).then((resp) => {
        _this.setData({
          userOrders: resp.data.list
        });
      });
    })
  },
  gotoDetail: function(event) {
    var id = event.currentTarget.dataset.id;
    wx.navigateTo({url: `/pages/orderDetail/orderDetail?id=${id}`})
  }
})