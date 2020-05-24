// pages/subject/subject.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    perferList: [
      {
        image: 'http://stc.unipet-group.com/mini/home/cat4.png',
        name: '小豆丁',
        price: '2,000',
        link: '/pages/test/test'
      },
      {
        image: 'http://stc.unipet-group.com/mini/home/cat3.png',
        name: '小豆丁',
        price: '2,000',
        link: '/pages/test/test'
      },
      {
        image: 'http://stc.unipet-group.com/mini/home/cat5.png',
        name: '小豆丁',
        price: '2,000',
        link: '/pages/test/test'
      },
      {
        image: 'http://stc.unipet-group.com/mini/home/cat6.png',
        name: '小豆丁',
        price: '2,000',
        link: '/pages/test/test'
      },
      {
        image: 'http://stc.unipet-group.com/mini/home/cat5.png',
        name: '小豆丁',
        price: '2,000',
        link: '/pages/test/test'
      },
      {
        image: 'http://stc.unipet-group.com/mini/home/cat4.png',
        name: '小豆丁',
        price: '2,000',
        link: '/pages/test/test'
      },
      {
        image: 'http://stc.unipet-group.com/mini/home/cat6.png',
        name: '小豆丁',
        price: '2,000',
        link: '/pages/test/test'
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '新生萌物'
    });
    // wx.showToast({
    //   title: '网络错误，请稍后重试',
    //   icon: 'none',
    //   duration: 2000
    // });
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

  }
})