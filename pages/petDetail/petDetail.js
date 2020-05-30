/**
* @file: description
* @author: huguantao
* @Date: 2020-05-19 21:03:52
* @LastEditors: huguantao
* @LastEditTime: 2020-05-30 00:22:52
 */
import {doRequest} from '../../utils/util';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    colors: [
      [
        {img: 'http://stc.unipet-group.com/mini/icon/petDetail/color1.png', desc: '金色'},
        {img: 'http://stc.unipet-group.com/mini/icon/petDetail/color2.png', desc: '银色'},
        {img: 'http://stc.unipet-group.com/mini/icon/petDetail/color3.png', desc: '蓝色'},
        {img: 'http://stc.unipet-group.com/mini/icon/petDetail/color4.png', desc: '红色'},
        {img: 'http://stc.unipet-group.com/mini/icon/petDetail/color5.png', desc: '黑色'},
        {img: 'http://stc.unipet-group.com/mini/icon/petDetail/color6.png', desc: '白色'}
      ],
      [
        {img: 'http://stc.unipet-group.com/mini/icon/petDetail/color7.png', desc: '黄色'},
        {img: 'http://stc.unipet-group.com/mini/icon/petDetail/color8.png', desc: '灰色'},
        {img: 'http://stc.unipet-group.com/mini/icon/petDetail/color9.png', desc: '渐层'},
        {img: 'http://stc.unipet-group.com/mini/icon/petDetail/color10.png', desc: '斑纹'},
        {img: 'http://stc.unipet-group.com/mini/icon/petDetail/color11.png', desc: '花纹'},
        {img: 'http://stc.unipet-group.com/mini/icon/petDetail/color12.png', desc: '其他'}
      ]
    ],
    eyes: [
      {img: 'http://stc.unipet-group.com/mini/icon/petDetail/eye1.png', desc: '蓝色'},
      {img: 'http://stc.unipet-group.com/mini/icon/petDetail/eye2.png', desc: '绿色'},
      {img: 'http://stc.unipet-group.com/mini/icon/petDetail/eye3.png', desc: '琥珀色'},
      {img: 'http://stc.unipet-group.com/mini/icon/petDetail/eye4.png', desc: '浅棕色'},
      {img: 'http://stc.unipet-group.com/mini/icon/petDetail/eye5.png', desc: '紫铜色'},
      {img: 'http://stc.unipet-group.com/mini/icon/petDetail/eye6.png', desc: '鸳鸯色'},
      {img: 'http://stc.unipet-group.com/mini/icon/petDetail/eye7.png', desc: '其他'},
    ],
    furs: ['短毛', '长毛', '卷毛', '无毛', '其他'],
    ears: ['立耳', '折耳', '卷耳', '其他'],
    visible: false,
    disableInput: true,
    submitPhone: '',
    currentTab: 1,

    id: '',
    catDetail: null,
    bannerCounts: 0,   // banner总条数
    bannerCount: 1,     // 当前banner在第几条
    bannerImgs: [],
    bannerVideos: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    this.setData({id: option.id})
    const param = {
     url: `/shop/detail?id=${option.id}`,
      method: 'GET',
      data: {}
    }
    doRequest(param).then((res) => {
      console.log(res)
      this.setData({
        catDetail: res.data,
        bannerCounts: res.data.imgs.length + res.data.videos.length,
        bannerImgs: res.data.imgs,
        bannerVideos: res.data.videos
      });
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

  switchTab: function(event) {
    var index = event.currentTarget.dataset.index;
    this.setData({currentTab: index});
  },

  showModal: function() {
    this.setData({visible: true})
  },
  closeModal: function() {
    this.setData({visible: false})
  },
  switchBanner: function(event) {
    this.setData({
      bannerCount: event.detail.current + 1
    })
  },
  inputPhone: function(event) {
    this.setData({submitPhone: event.detail.value});
    var phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;
    if (phoneReg.test(event.detail.value)) {
      this.setData({disableInput: false})
    } else {
      this.setData({disableInput: true})
    }
  },
  submit: function() {
    // TODO: 提交
    wx.login({
      success (res) {
        if (res.code) {
          //发起网络请求
          const param = {
            url: `/miniMember/wxlogin`,
             method: 'post',
             data: {code: res.code}
           }
           doRequest(param).then((res) => {
            const param = {
              url: `/order/applyPay`,
               method: 'post',
               data: {token: res.data.token, sid: 17, phone: 13552235032}
             }
             doRequest(param).then((res) => {
               var prepay_id = 'prepay_id'+res.data.prepay_id
               console.log(prepay_id);

                wx.requestPayment({
                  nonceStr: res.data.nonceStr,
                  package: res.data.package,
                  paySign: res.data.paySign,
                  timeStamp: res.data.timestamp,
                  signType: res.data.signType,
                  success (res) {
                    console.log('支付成功')
                    console.log(res)
                   },
                  fail (res) {
                    console.log(res)
                   }
                })
             })
           });
          
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  },
  videometa:function (e) {
    var that = this;
    //获取系统信息
    wx.getSystemInfo({
      success (res) {
        //视频的高
        var height = e.detail.height;
        
        //视频的宽
        var width = e.detail.width;
 
        //算出视频的比例
        var proportion = height / width;
 
        //res.windowWidth为手机屏幕的宽。
        var windowWidth = res.windowWidth;
 
        //算出当前宽度下高度的数值
        height = proportion * windowWidth;
        that.setData({
          height,
          width:windowWidth
        });
      }
    })
  }
})