/**
* @file: description
* @author: huguantao
* @Date: 2020-05-19 21:03:52
* @LastEditors: huguantao
* @LastEditTime: 2020-05-27 00:28:55
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
    catDetail: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    console.log(option.id)
    this.setData({id: option.id})
    const param = {
      url: `/shop/detail?id=${option.id}`,
      method: 'GET',
      data: {}
    }
    doRequest(param).then((res) => {
      console.log(res)
      this.setData({catDetail: res.data.data});
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
  }
})