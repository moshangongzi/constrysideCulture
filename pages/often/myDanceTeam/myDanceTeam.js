Page({
    data: {
        state: '',
        isShow: true,
        dance: [{
            id: 1,
            dname: '857舞团',
            imgSrc: 'https://img.yzcdn.cn/vant/cat.jpeg'
        }, {
            id: 2,
            dname: '123舞团',
            imgSrc: 'https://img.yzcdn.cn/vant/cat.jpeg'
        }]
    },
    onLoad() {
        this.setData({
            state: wx.getStorageSync('userinfo') == '',
        })
    }

})