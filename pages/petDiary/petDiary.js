/**
* @file: description
* @author: huguantao
* @Date: 2020-05-19 21:03:33
* @LastEditors: huguantao
* @LastEditTime: 2020-05-28 00:07:21
 */
import {doRequest} from '../../utils/util';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isEmpty: true,
    currentId: '',
    currentPet: {},
    petList: [],
    diaryList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const _this = this;
    const param = {
      url: '/miniMember/myPet',
      method: 'GET',
      data: { }
    }
    doRequest(param).then((res) => {
      this.setData({
        petList: res.data.list
      });
      if(res.data.list.length > 0) {
        this.setData({
          isEmpty: false,
          currentId: res.data.list[0].sid,
          currentPet: res.data.list[0]
        });
        this.getDiary(res.data.list[0].sid);
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
  getDiary: function(id) {
    const param = {
      url: `/shop/daily?sid=${id}`,
      method: 'GET',
      data: { }
    }
    doRequest(param).then((res) => {
      const list = res.data.list.reverse()
      this.setData({
        diaryList: list
      });
    })
  },
  switchPet: function(event) {
    var sid = event.currentTarget.dataset.sid;
    let current = null;
    for(let i=0; i<this.data.petList.length; i++) {
      if(this.data.petList[i].sid == sid) {
        current = this.data.petList[i];
      }
    }

    this.setData({
      currentId: sid,
      currentPet: current
    });
    this.getDiary(sid);
  },
})