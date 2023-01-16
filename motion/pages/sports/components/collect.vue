<template>
	<view class="collect-page">
		<view class="collect-head">
			<view class="box-bg">
				<uni-nav-bar>
					<block slot="left">
						<view class="city">
							<view>
								<text class="uni-nav-bar-text">{{ city }}</text>
							</view>
							<uni-icons type="arrowdown" color="#666" size="18" />
						</view>
					</block>
					<view class="input-view">
						<uni-icons class="input-uni-icon" type="search" size="18" color="#999" />
						<input confirm-type="search" class="nav-bar-input" type="text" placeholder="输入搜索关键词"
							@confirm="confirm" />
					</view>
					<block slot="right">
						<view class="city">
							搜索
						</view>
					</block>
				</uni-nav-bar>
			</view>
		</view>

		<!-- <view class="location-map">
			<map style="width: 100%; height: 200px;" :latitude="latitude" :longitude="longitude" strokeWidth='true'
				:markers="markers">
			</map>
		</view> -->

	</view>
</template>

<script>
	export default {
		data() {
			return {
				latitude: 39.909,
				longitude: 116.39742,
				markers: [{
					id: 1, // 使用 marker点击事件 需要填写id
					title: 'map',
					latitude: 39.909,
					longitude: 116.39742,
					iconPath: '../../../static/images/location.png',
					width: 30,
					height: 30
				}],
				city: '北京'
			};
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			showMenu() {
				uni.showToast({
					title: '菜单'
				})
			},
			clickLeft() {
				uni.showToast({
					title: '左侧按钮'
				})
			},
			search() {
				uni.showToast({
					title: '搜索'
				})
			},
			showCity() {
				uni.showToast({
					title: '选择城市'
				})
			},
			scan() {
				uni.showToast({
					title: '扫码'
				})
			},
			confirm() {
				uni.showToast({
					title: '搜索'
				})
			}
		},
		onPullDownRefresh() {
			console.log('onPullDownRefresh')
			setTimeout(function() {
				uni.stopPullDownRefresh()
				console.log('stopPullDownRefresh')
			}, 1000)

		}
	}
</script>

<style lang="scss">
	$nav-height: 30px;

	.collect-page {
		.location-map {
			width: 300px;
			height: 200px;
		}

		.box-bg {
			background-color: #F5F5F5;
			padding: 5px 0;
		}

		.city {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: flex-start;
			// width: 160rpx;
			margin-left: 4px;
		}

		.input-view {
			display: flex;
			flex-direction: row;
			// width: 500rpx;
			flex: 1;
			background-color: #f8f8f8;
			height: $nav-height;
			border-radius: 15px;
			padding: 0 15px;
			flex-wrap: nowrap;
			margin: 7px 0;
			line-height: $nav-height;
		}

		.input-uni-icon {
			line-height: $nav-height;
		}

		.nav-bar-input {
			height: $nav-height;
			line-height: $nav-height;
			width: 370rpx;
			padding: 0 5px;
			font-size: 12px;
			background-color: #f8f8f8;
		}
	}
</style>
