//index.js
//获取应用实例

//TODO 若没有授权，加一个按钮授权

const app = getApp()
const util = require('../../utils/util');

Page({
  data: {
    //上面是授权时候用到的
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    addNewRoleStyle: "",
    rolename: "",

    roleList: [{
        checked: false,
        rolename: '东方牛仙'
      },
      {
        checked: true,
        rolename: '东方牛'
      }
    ],


  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  ToMainPage: function() {
    wx.navigateTo({
      url: '../mainpage/mainpage',
    })
  },

  removerole: function() {

  },

  addrole: function() {
    this.setData({
      addNewRoleStyle: "opacity:1;pointer-events:auto;"
    })
  },


  touchOK: function(event) {
    //toAddNewItem
    if (this.data.rolename != "") {







      
      //   var noteItems = app.globalData.noteItems;
      //   app.globalData.itemNumer++;
      //   noteItems.push({
      //     "title": this.data.itemTitle,
      //     "taskIndex": app.globalData.itemNumer,
      //     "pageIndex": app.globalData.noteItems.length,
      //     "type": config.itemType.normal,
      //     "right": 0,
      //     "startRight": 0
      //   });

      //   //here refresh the hole page
      //   this.setNoteItems(noteItems);
      //   //将计数标量写入global
      //   app.setGlobalItemNumer(app.globalData.itemNumer);

      this.hideModal();
      this.clearTitle();
    }
  },

  touchCancel: function(event) {
    this.hideModal();
    this.clearTitle();
  },

  clearTitle() {
    this.setData({
      rolename: ""
    });
  },

  hideModal() {
    this.setData({
      addNewRoleStyle: ""
    });
  },





  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})