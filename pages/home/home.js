// pages/home/home.js
import {doRequest, showToast} from '../../utils/util';
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
    motions1: [
      {
        image: 'http://stc.unipet-group.com/mini/home/motion1.png',
        name: '小豆丁',
        gender: 'M',
        breed: '美国短毛',
        age: '1个月',
        link: '/pages/subject/subject'
      },
      {
        image: 'http://stc.unipet-group.com/mini/home/motion1.png',
        name: '小白豆腐',
        gender: 'F',
        breed: '英国短毛',
        age: '半个月',
        link: '/pages/subject/subject'
      },
      {
        image: 'http://stc.unipet-group.com/mini/home/motion1.png',
        name: '小豆丁',
        gender: 'M',
        breed: '美国短毛',
        age: '1个月',
        link: '/pages/subject/subject'
      },
      {
        image: 'http://stc.unipet-group.com/mini/home/motion1.png',
        name: '小白豆腐',
        gender: 'F',
        breed: '英国短毛',
        age: '半个月',
        link: '/pages/subject/subject'
      }
    ],
    // 推荐列表2
    motions2: [
      {
        image: 'http://stc.unipet-group.com/mini/home/motion2.png',
        name: '小豆丁',
        price: '2,000',
        link: '/pages/subject/subject'
      },
      {
        image: 'http://stc.unipet-group.com/mini/home/motion3.png',
        name: '小豆丁',
        price: '2,000',
        link: '/pages/subject/subject'
      },
      {
        image: 'http://stc.unipet-group.com/mini/home/motion2.png',
        name: '小豆丁',
        price: '2,000',
        link: '/pages/subject/subject'
      },
      {
        image: 'http://stc.unipet-group.com/mini/home/motion3.png',
        name: '小豆丁',
        price: '2,000',
        link: '/pages/subject/subject'
      },
    ],
    // 推荐列表3
    motions3: [
      {
        image: 'http://stc.unipet-group.com/mini/home/motion4.png',
        name: '小豆丁',
        price: '2,000',
        link: '/pages/subject/subject'
      },
      {
        image: 'http://stc.unipet-group.com/mini/home/motion5.png',
        name: '小豆丁',
        price: '2,000',
        link: '/pages/subject/subject'
      },
      {
        image: 'http://stc.unipet-group.com/mini/home/motion6.png',
        name: '小豆丁',
        price: '2,000',
        link: '/pages/subject/subject'
      },
      {
        image: 'http://stc.unipet-group.com/mini/home/motion7.png',
        name: '小豆丁',
        price: '2,000',
        link: '/pages/subject/subject'
      },
    ],
    deadline: Date.now()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    const param = {
      url: '/index/index',
      method: 'GET',
      data: { a: 1}
    }
    let res;
    try {
      res = await doRequest(param);
    } catch (error) {
      showToast(error && error.msg || error || '网络错误');
      return;
    }
    const { code, msg, data } = res || {};
    if (code !== 0) {
      showToast(msg || '网络错误');
      return;
    }
    // 正常业务处理
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

  }
})
