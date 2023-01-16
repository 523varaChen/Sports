<template>
	<view class="detail-page">
		<image
			src="http://contentcms-bj.cdn.bcebos.com/cmspic/e527b8f203ae454c38f978faee4b209e.jpeg?x-bce-process=image/crop,x_0,y_0,w_2067,h_1125"
			class="detail-pic"></image>
		<view class="detail-content">
			<uni-title type="h3" :title="profileInfo.title"></uni-title>
			<view class="sub-title">{{profileInfo.subTitle}}</view>
			<view class="detail-ul">
				<view class="detail-sign">{{profileInfo.raise}}</view>
				<view class="sign-li">
					<view class="sign-title">报名时间</view>
					<view class="sign-explain">{{profileInfo.signTime}}</view>
				</view>
				<view class="sign-li">
					<view class="sign-title">比赛时间</view>
					<view class="sign-explain">{{profileInfo.competeTime}}</view>
				</view>
				<view class="sign-li">
					<view class="sign-title">线路</view>
					<view class="sign-explain">{{profileInfo.line}}</view>
				</view>
				<view class="sign-li">
					<view class="sign-title">难度</view>
					<view class="sign-explain">{{profileInfo.level}}</view>
				</view>
				<!-- 	
			<view class="sign-time">报名时间</view>
			<view class="trial-time">比赛时间：</view>
			<view class="trial-time">线路：</view>
			<view class="trial-time">难度：</view> -->
			</view>
			<view class="detail-section">

				</uni-badge>
				<view class="uni-padding-wrap uni-common-mt">
					<uni-segmented-control :current="current" :values="items" style-type="text"
						:active-color="activeColor" @clickItem="onClickItem" />
				</view>
				<view class="content">
					<view v-if="current === 0"><text class="content-text">选项卡1的内容</text></view>
					<view v-if="current === 1">
						<view class="sign-roster">
							<uni-table ref="table" :loading="loading" border stripe emptyText="暂无更多数据"
								@selection-change="selectionChange">
								<uni-tr class='table-head'>
									<uni-th width="50" align="center">姓名</uni-th>
									<uni-th width="50" align="center">团队</uni-th>
									<uni-th width="60" align="center">组别</uni-th>
									<uni-th width="60" align="center">报名日期</uni-th>
								</uni-tr>
								<uni-tr v-for="(item, index) in enlistData" :key="index">
									<uni-td align="center">{{ item.name }}</uni-td>
									<uni-td>
										<view align="center" class="name">{{ item.team }}</view>
									</uni-td>
									<uni-td align="center">{{ item.signType }}</uni-td>
									<uni-td align="center">{{ item.signTime }}</uni-td>
								</uni-tr>
							</uni-table>
						</view>
					</view>
					<view v-if="current === 2"><text class="content-text">选项卡3的内容</text></view>
				</view>
			</view>
		</view>
		<view class="sign-btn">立即报名</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				items: ['详情', '报名名单', '查看成绩'],
				activeColor: '#587c16',
				current: 0,
				loading: false,
				enlistData: [],
				profileInfo: {}
			}
		},
		created() {

			this.$http.request({
				url: 'multiple/detail'
			}, 'get').then(res => {
				this.profileInfo = res
				// console.log(res)
			})
			this.init()
		},
		methods: {
			init() {

			},
			enlistList() {
				this.loading = true
				this.$http.request({
					url: 'multiple/roster/list'
				}, 'get').then(res => {
					this.loading = false
					this.enlistData = res.list;
				})
			},
			onClickItem(e) {
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex
				}
				if (this.current == 1) {
					this.enlistList()
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background: #fff;
	}

	.detail-page {
		padding-bottom: 140rpx;

		.detail-pic {
			width: 100%;
			height: 300rpx;
		}

		.detail-content {
			padding: 0 40rpx;

			.sub-title {
				color: #6c6c6c;
				font-size: 32rpx;
			}

			.detail-sign {
				width: 16%;
				margin-top: 4%;
				text-align: center;
				background: #72b522;
				color: #fff;
				font-size: 30rpx;
			}

			.detail-ul {
				width: 100%;
				border: 0;
				border-bottom: 2rpx solid #f5f5f5;

				.sign-li {
					width: 100%;
					display: flex;
					line-height: 40rpx;
					font-size: 28rpx;
					color: #6C6C6C;
					border-bottom: 2rpx solid #f5f5f5;
					padding: 30rpx 0 10rpx;

					&:last-child {
						border: 0;
					}

					.sign-title {
						width: 130rpx;
					}

					.sign-explain {
						flex: 1;
					}
				}
			}
		}

		.content {
			margin-top: 20rpx;
		}

		.table-head {
			box-shadow: 10rpx 6rpx 6rpx #ccc;
		}

		.sign-btn {
			width: 100%;
			height: 90rpx;
			position: fixed;
			bottom: 0;
			background-color: #d70a25;
			line-height: 90rpx;
			text-align: center;
			color: #fff;
			font-size: 36rpx;
		}

	}
</style>
