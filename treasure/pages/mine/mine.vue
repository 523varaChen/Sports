<template>
	<view class="mine-page">
		<view class="mine-head">
			<image src="../../static/logo.png" class="mine-avatar"></image>
			<view class="head-nickname">
				<text class="nickname-grade">{{ userInfo.nickname }}</text>
				<text class="nickname-term">cvip 3天过期</text>
			</view>
			<view class="head-phone">
				<uni-icons @click="changeEye" :type="eyeType ? 'eye' : 'eye-slash'" :size="20" color="#9D9D9D" />
				{{ eyeType ? phone : phone.substr(0, 3) + '****' + phone.substr(phone.length - 4) }}
			</view>
			<view class="head-li">
				<view class="head-title">
					<uni-icons type="medal" :size="20" color="#9D9D9D" />
					<text class="text">排名 1000</text>
				</view>
				<view class="head-title">
					<uni-icons type="vip" :size="20" color="#9D9D9D" />
					<text class="text">积分 1000</text>
				</view>
				<view class="head-title"><text class="text">Lv.6</text></view>
			</view>
		</view>
		<view class="mine-nav">
			<uni-grid :column="3" :highlight="true" :show-border="false">
				<uni-grid-item v-for="(item, index) in petList" :index="index" :key="index">
					<view class="grid-item-box" style="background-color: #fff;">
						<uni-icons :type="item.icon" :size="32" color="#777" />
						<text class="text">{{ item.title }}</text>
					</view>
				</uni-grid-item>
			</uni-grid>
		</view>
		<view class="mine-section">
			<uni-list>
				<uni-list-item v-for="(item, index) in list" :key="index" :show-extra-icon="true" showArrow :extra-icon="item.extraIcon" :title="item.title" :to="item.link" />
			</uni-list>
		</view>
		<view class="mine-record"></view>
	</view>
</template>

<script>
const reg = /^(\d{3})\d{4}(\d{4})$/;
export default {
	data() {
		return {
			list: [
				{
					id: 1,
					title: '宠物登记',
					link: '/pages/mine/petInfo',
					rightText: '',
					extraIcon: {
						color: '#4cd964',
						size: '22',
						type: 'gear-filled'
					}
				},
				{
					id: 2,
					title: '我的订单',
					link: '/pages/mine/login',
					rightText: '兼职',
					extraIcon: {
						color: '#4cd964',
						size: '22',
						type: 'gear-filled'
					}
				}
			],
			phone: '18736212265',
			eyeType: false,
			userInfo: {},
			extraIcon: {
				color: '#4cd964',
				size: '22',
				type: 'gear-filled'
			},
			petList: [
				{
					title: '日历',
					icon: 'calendar'
				},
				{
					title: '健康监测',
					icon: 'upload'
				},
				{
					title: 'VR/AI',
					icon: 'tune'
				}
			]
		};
	},
	mounted() {
		this.userInfo = uni.getStorageSync('userInformation');

		console.log(123, this.userInfo);
	},
	computed: {
		// phoneTel: {
		// 	set(newValue) {
		// 		return this.userInfo;
		// 	}
		// }
	},
	created() {
		console.log();
	},

	methods: {
		init() {},
		goAuth() {
			uni.navigateTo({
				url: '/pages/mine/auth'
			});
		},
		changeEye() {
			// let reg = /^(\d{3})\d{4}(\d{4})$/;
			this.eyeType = !this.eyeType;
			console.log(this.eyeType);
			// if (this.eyeType) {
			// 	this.phone = this.phone;
			// 	//this.phone.substr(1, 3) + '****' + this.phone.substr(this.phone.length - 4)
			// 	//
			// } else {
			// 	this.phone = this.phone.replace(reg, '$1****$2')

			// }
			// console.log(this.phone, )
		}
	}
};
</script>

<style lang="scss" scoped>
.mine-page {
	width: 100%;
	padding: 40px 40rpx;
	box-sizing: border-box;
	background: #f8f8f8;
	.mine-head {
		// width: 90%;
		box-sizing: border-box;
		// margin: 60rpx auto 20rpx;
		box-shadow: 0 10rpx 25rpx 0 rgba(0, 0, 0, 0.2);
		padding: 70rpx 20rpx 40rpx;
		border-radius: 20rpx;

		.head-phone {
			display: flex;
			justify-content: center;
			text-align: center;
			margin: 10rpx 0 50rpx;
			color: #7f7f7f;
		}

		.head-nickname {
			text-align: center;

			.nickname-grade {
				font-size: 32rpx;
				font-weight: 500;
			}

			.nickname-term {
				font-size: 22rpx;
				background: #040607;
				color: #e3d8d8;
				border-radius: 30rpx;
				padding: 4rpx;
				margin-left: 10rpx;
			}
		}

		.head-li {
			display: flex;
			justify-content: space-around;
			align-items: center;

			.head-title {
				color: #9d9d9d;
				margin-left: 30rpx;

				.text {
					line-height: 32rpx;
					vertical-align: text-top;
					font-size: 24rpx;
					text-align: center;
				}
			}
		}

		.mine-avatar {
			position: absolute;
			top: 15px;
			left: 43%;
			display: block;
			width: 100rpx;
			height: 100rpx;
			border-radius: 50rpx;
		}
	}

	.mine-banner {
		height: 500rpx;
		background-color: pink;
	}

	.mine-nav {
		background: #fff;
		margin: 10px 0 20px;
		box-shadow: 0 5px 12px rgba(0, 0, 0, 0.2);
		border-radius: 6px;
		overflow: hidden;
		.grid-item-box {
			flex: 1;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;

			.text {
				font-size: 14px;
			}
		}
	}

	.mine-record {
		height: 500rpx;
		background-color: aquamarine;
	}
	.mine-section {
		background: #fff;
	}
}
</style>
