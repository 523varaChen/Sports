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
		<span class="iconfont icon-dingwei"></span>
		<!-- <view class="mine-nav"><button size="mini" @click="goAuth">认证</button></view> -->
		<view class="mine-section">
			<uni-list><uni-list-item :show-extra-icon="true" showArrow :extra-icon="extraIcon" title="列表左侧带扩展图标" rightText="兼职" /></uni-list>
		</view>
		<view class="mine-record"></view>
	</view>
</template>

<script>
const reg = /^(\d{3})\d{4}(\d{4})$/;
export default {
	data() {
		return {
			phone: '18736212265',
			eyeType: false,
			userInfo: {},
			extraIcon: {
				color: '#4cd964',
				size: '22',
				type: 'gear-filled'
			}
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
	padding: 0 40rpx;
	box-sizing: border-box;

	.mine-head {
		// width: 90%;
		box-sizing: border-box;
		margin: 60rpx auto 20rpx;
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
			top: -50rpx;
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
		height: 500rpx;
		background-color: aqua;
	}

	.mine-record {
		height: 500rpx;
		background-color: aquamarine;
	}
}
</style>
