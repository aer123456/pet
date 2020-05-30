// pages/home/home.js
import {doRequest} from '../../utils/util';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // Banner数据
    banners:[
      "http://stc.unipet-group.com/mini/home/banner1.jpg",
      "http://stc.unipet-group.com/mini/home/banner1.jpg",
      "http://stc.unipet-group.com/mini/home/banner1.jpg",
      "http://stc.unipet-group.com/mini/home/banner1.jpg",
    ],
    // 推荐预告
    previews: [
      "http://stc.unipet-group.com/mini/home/cat1.png",
      "http://stc.unipet-group.com/mini/home/cat2.png"
    ],
    // 推荐列表1
    motions1: [],
    // 推荐列表2
    motions2: [],
    // 推荐列表3
    motions3: [],
    deadline: Date.now()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const _this = this;
    const param = {
      url: '/index/index',
      method: 'GET',
      data: { a: 1}
    }
    doRequest(param).then((res) => {
      console.log(res)
      this.setData({
        banners: res.data.banner.list,
        previews: res.data.date_limit.list,
        motions1:res.data.h_big,
        motions2:res.data.h_small,
        motions3: res.data.v_two_small,
      });
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    const _this = this;
    setTimeout(function() {
      _this.setData({deadline: 1590420600000})
    }, 1000)
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
  gotoBuy: function(event) {
    var id = event.currentTarget.dataset.id;
    wx.navigateTo({url: `/pages/petDetail/petDetail?id=${id}`})
  },
})