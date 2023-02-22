<template>
	<view class="container">
		<uni-notice-bar show-icon single text="点击右上角···收藏Team运动小程序,参赛更快捷" />
		<uni-swiper-dot class="uni-swiper-dot-box" @clickItem="clickItem" :info="info" :current="current" mode="round" field="content">
			<swiper class="swiper-box" @change="changeBanner" :current="swiperDotIndex">
				<swiper-item v-for="(item, index) in info" :key="index">
					<view class="swiper-item" :class="item.colorClass">
						<text style="color: #fff; font-size: 32px;">{{ index + 1 }}</text>
					</view>
				</swiper-item>
			</swiper>
		</uni-swiper-dot>
		<view class="nav">
			<uni-grid :show-border="false" :column="5" :highlight="true" @change="changeNav">
				<uni-grid-item v-for="(item, index) in navList" :index="index" :key="index">
					<view class="grid-item-box" style="background-color: #fff;">
						<uni-icons :type="item.icon" :size="30" color="#777" />
						<text class="text">{{ item.text }}</text>
					</view>
				</uni-grid-item>
			</uni-grid>
		</view>

		<uni-section title="热门推荐"><list-bar :listInfo="hotProject" :hasLeftTag="true" :hasRightTag="false"></list-bar></uni-section>
		<button type="default" @click="getuserinfo()">登录</button>
	</view>
</template>

<script>
import listBar from '@/components/common/list-bar/list-bar.vue';
export default {
	data() {
		return {
			href: 'https://uniapp.dcloud.io/component/README?id=uniui',
			current: 0,
			swiperDotIndex: 0,
			modeIndex: -1,
			styleIndex: -1,
			info: [
				{
					colorClass: 'uni-bg-red',
					url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/094a9dc0-50c0-11eb-b680-7980c8a877b8.jpg',
					content: '内容 A'
				},
				{
					colorClass: 'uni-bg-green',
					url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/094a9dc0-50c0-11eb-b680-7980c8a877b8.jpg',
					content: '内容 B'
				},
				{
					colorClass: 'uni-bg-blue',
					url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/094a9dc0-50c0-11eb-b680-7980c8a877b8.jpg',
					content: '内容 C'
				}
			],
			navList: [
				{
					text: '运动项目',
					badge: '0',
					link: '/pages/match/match',
					tabBar: true,
					icon: 'medal-filled'
					//'/pages/sportEvent/sportEvent'
				},
				{
					text: '赛事报名',
					badge: '1',
					icon: 'flag-filled'
				},
				{
					text: '平台活动',
					badge: '99',
					link: '/pages/mine/auth',
					icon: 'fire-filled'
				},
				{
					text: '通知公告',
					badge: '2',
					link: '',
					icon: 'notification-filled'
				},
				{
					text: '体育商城',
					link: '',
					icon: 'cart-filled'
				},
				{
					url: '/static/c6.png',
					text: '冠军榜',
					icon: 'medal-filled'
				},
				{
					text: '积分榜',
					link: '',
					icon: 'vip-filled'
				},
				{
					text: '勋章墙',
					badge: '8',
					link: '/pages/match/medalWall',
					icon: 'map-filled'
				},
				{
					text: '等级榜',
					link: '',
					icon: 'medal-filled'
				},
				{
					text: '玩法攻略',
					link: '',
					icon: 'wallet-filled'
				}
			],
			hotProject: [],
			query: {
				code: '',
				encryptedData: '',
				iv: '',
				signature: ''
			},
			userInfo: {}
		};
	},
	components: {
		listBar
	},
	created() {
		// 登录
		// this.getuserinfo()
		// this.init()
	},
	methods: {
		init() {
			this.$http
				.request(
					{
						url: 'home/hotActivity'
					},
					'get'
				)
				.then(res => {
					if (res.project) {
						res.project.forEach(item => {
							// item.tagText = item.mode ? '线上赛' : '线下赛';
							item.tagRightType = item.mode;
							return item;
						});
						this.hotProject = res.project;
					}
				});
		},
		getuserinfo() {
			let that = this;
			uni.getUserProfile({
				desc: '用户完善个人信息',
				success: res => {
					console.log(res);
					let userInformation = res.userInfo;
					that.query = {
						...res
					};
					that.userInfo = res.userInfo;
					wx.setStorageSync('userInformation', userInformation);
					// this.userInformation=userInformation
					// wx.reLaunch({
					// 	url: '/pages/mine/login'
					// })
					// that.get().then(res => {
					// 	console.log('query', res)
					// })
				},
				fail: () => {
					wx.showToast({
						title: '您取消了登录授权失败',
						icon: 'error',
						duration: 2000
					});
				}
			});
		},
		async get() {
			const [err, res] = await uni.login().catch(err => err);
			if (err || res.errMsg !== 'login:ok') {
				return uni.showToast({
					title: '登录失败！'
				});
			}
			console.log('login:', res.code);
			this.query.code = res.code;
		},
		changeBanner(e) {
			this.current = e.detail.current;
		},
		changeNav(e) {
			let { index } = e.detail;
			// this.list[index].badge && this.list[index].badge++
			if (this.navList[index].tabBar) {
				uni.switchTab({
					url: this.navList[index].link
				});
			} else {
				uni.navigateTo({
					url: this.navList[index].link
				});
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.container {
	// font-size: 14px;
	// line-height: 24px;
}

.swiper-item,
.uni-swiper-dot-box {
	width: 100%;
	height: 100%;
}

.grid-image {
	width: 50rpx;
	height: 50rpx;
}

.uni-bg-red {
	background-color: #ff5a5f;
}

.uni-bg-green {
	background-color: #09bb07;
}

.uni-bg-blue {
	background-color: #007aff;
}

.nav {
	width: 100%;
	box-sizing: border-box;
	background: #fff;
	font-size: 30rpx;
}

.grid-item-box {
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 15px 0;
}

.grid-item-box-row {
	flex: 1;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	padding: 15px 0;
}

// 列表
.chat-custom-right {
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-end;
}

.list-item {
	width: 94%;
	margin: 0 auto;
	display: flex;
	padding: 20rpx 0;
	box-sizing: border-box;
	border-bottom: 1rpx solid #ccc;

	.list-pic {
		width: 260rpx;
		height: 200rpx;
		margin-right: 20rpx;
		position: relative;

		.item-tag {
			position: absolute;
			left: 0;
			top: 0;
			z-index: 10;
		}

		.list-avatar {
			width: 240rpx;
			height: 200rpx;
		}
	}

	.list-content {
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		.content-bottom {
			display: flex;
			line-height: 40rpx;
			justify-content: space-between;
			align-items: center;

			.chat-custom-text {
				font-size: 28rpx;
				color: #999;
			}
		}
	}
}
</style>
