/**
* @file: description
* @author: huguantao
* @Date: 2020-05-24 16:39:18
* @LastEditors: huguantao
* @LastEditTime: 2020-05-24 21:07:07
 */
const App = getApp();

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    text: String,
    border: Boolean,
    goBackIcon: Boolean,
    goBackPath: String,
    needHolder: Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    navH: App.globalData.navHeight
  },

  /**
   * 组件的方法列表
   */
  methods: {
    goBack: function() {
      if(this.properties.goBackPath) {
        wx.reLaunch({url:this.properties.goBackPath})
      } else {
        wx.switchTab({url:'/pages/home/home'})
      }
    }
  }
})
