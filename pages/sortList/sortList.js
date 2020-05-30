/**
* @file: description
* @author: huguantao
* @Date: 2020-05-19 21:02:34
* @LastEditors: huguantao
* @LastEditTime: 2020-05-28 23:27:34
 */
import {doRequest} from '../../utils/util';
const App = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    navH: App.globalData.navHeight,
    sortList: [],     // 左侧导航栏数据
    currentId: '',    // 导航栏当前选中
    currentList: [],  // 右侧列表
    pageNo: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const param = {
      url: '/shop/category',
      method: 'GET',
      data: { a: 1}
    }
    doRequest(param).then((res) => {
      this.setData({
        sortList: res.data.list,
        currentId: res.data.list[0].id
      });

      if(res.data.list.length > 0) {
        this.getPetList(res.data.list[0].id, this.data.pageNo)
      } else {
        // TODO 暂无数据
      }
    });
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

  getPetList: function(cid, page) {
    const param = {
      url: `/shop/shopList?cid=${cid}&page=${page}`,
      method: 'GET',
      data: {}
    }
    doRequest(param).then((res) => {
      this.setData({currentList: this.data.currentList.concat(res.data.list)});
    });
  },

  switchList: function(event) {
    var id = event.currentTarget.dataset.id;
    this.setData({
      currentId: id,
      pageNo: 0,
      currentList: []
    });
    this.getPetList(id, 0)
  },
  gotoBuy: function(event) {
    var id = event.currentTarget.dataset.id;
    wx.navigateTo({url: `/pages/petDetail/petDetail?id=${id}`})
  },
})