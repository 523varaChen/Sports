const baseURL = "http://10.20.66.156:8080"; //公共路径 
const userId = uni.getStorageSync("userinfo_Data").id //用户id
export default {
	get(params) {
		return this.request(params, 'GET')
	},
	post(params) { // post请求
		return this.request(params, 'POST')
	},
	request(params, method) {
		// 请求头
		let header = {
			'Accept': 'application/json',
			'Access-Control-Allow-Origin': '*',
			'Content-Type': 'application/json; charset=utf-8'
			// 'dangerToken': uni.getStorageSync('dangerToken') ? uni.getStorageSync('dangerToken').dangerToken,
		};
		return new Promise((resolve, reject) => {
			// 发起请求
			uni.request({
				url: params.url,
				method: method,
				header: params.header || header,
				data: params.data, // 请求参数
				success(res) {
					// 请求成功后的操作
					if (res.statusCode == 200) {
						resolve(res.data);
					} else if (res.statusCode == 403) {
						console.log(res.statusCode, "报错地址", baseURL + url)
						uni.clearStorageSync()
						var page = getCurrentPages()
						if (page[0].route == 'pages/mine/index') {
							page[0].onShow()
						}
						uni.showModal({
							title: '提示',
							content: '登录已过期，请重新登录',
							confirmText: '确认',
							confirmColor: '#55d88a',
							showCancel: false,
							success(res) {
								uni.switchTab({
									url: '/pages/mine/index',
								})
							}
						})
					} else {
						//其他异常
						reject('运行时错误,请稍后再试');
						uni.showToast({
							title: '服务器连接错误',
							icon: 'none',
							duration: 2000
						})
					}
				},
				fail(err) {
					reject(err)
				}
			})
		}).catch((e) => {

		})
	},
	ip: baseURL,
	userId: userId
}
