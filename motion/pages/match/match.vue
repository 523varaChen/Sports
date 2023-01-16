<template>
	<view class="match-page">
		<view class="tab-header">
			<view class="head-item" :class="navIndex==index?'navActive': ''" v-for="(item,index) in navList"
				:key='index' @click="checkIndex(index)">{{item.text}}
			</view>
		</view>
		<view class="match-nav">
			<image :src="matchInfo.pic" class="match-pic"></image>
			<view class="match-explain">
				{{matchInfo.dec}}
			</view>
		</view>
		<view class="content">
			<list-bar :listInfo='contenInfo' :hasLeftTag='true' :hasRightTag='true'></list-bar>
			<uni-load-more :status="status" :content-text="contentText" />
		</view>
	</view>
</template>

<script>
	import listBar from '@/components/common/list-bar/list-bar.vue'
	export default {
		data() {
			return {
				navList: [{
						badge: '0',
						text: '自行车'
					},
					{
						badge: '1',
						text: '健步走'
					},
					{
						badge: '99',
						text: '广场舞'
					},
					{
						badge: '2',
						text: '企业排舞'
					},
				],
				old: {
					scrollTop: 0
				},
				matchInfo: {},
				contenInfo: [],
				navIndex: 0,
				headHeight: 54,
				swiperHeight: 0,
				status: 'more',
				contentText: {
					contentdown: '查看更多',
					contentrefresh: '加载中',
					contentnomore: '没有更多'
				}
			}
		},
		components: {
			listBar
		},
		created() {
			this.checkIndex(this.navIndex)
			this.init(this.navIndex)
		},
		methods: {
			init(index) {
				this.status = '加载中';
				this.$http.request({
					url: 'home/hotActivity'
				}, 'get').then(res => {
					if (res.code) {
						uni.showToast({
							icon: 'none',
							title: res.message
						})
						this.status = '暂无数据';
						return
					}
					if (res.project) {
						(res.project).forEach(item => {
							item.title = this.navList[index].text + '-' + item.title;
							item.tagRightText = item.mode ? '线上' : '线下';
							item.tagText = item.raise
							item.tagRightType = item.mode;
							return item;
						})
						this.status = '查看更多';
						this.contenInfo = res.project;
					}
					this.matchInfo = res;

				})
			},

			scroll: function(e) {
				this.old.scrollTop = e.detail.scrollTop
			},
			checkIndex(index) {
				this.navIndex = index;
				this.init(index)
			},
			tabChange(e) {
				let contentIndex = e.detail.current;
				this.navIndex = contentIndex;

				// this.contenInfo = this.navList[contentIndex].badge
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #fff;
	}

	.match-page {
		width: 100%;
		display: flex;
		flex-direction: column;

		.match-pic {
			width: 100%;
			height: 200px;
		}

		.match-explain {
			width: 100%;
			box-sizing: border-box;
			padding: 10px 20px;
			text-indent: 30px;
		}
	}

	.tab-header {
		width: 100%;
		height: 58rpx;
		line-height: 58rpx;
		display: flex;

		.head-item {
			flex: 1;
			text-align: center;
		}

		.navActive {
			border-bottom: 2px solid palegreen;
		}
	}

	.swiper {
		width: 100%;
		overflow-y: scroll;
		height: calc(100vh - 600px);
		margin-bottom: 100px;
	}

	.content {
		flex: 1;
		height: calc(100vh - 600px);
		margin-bottom: 100px;
		margin-top: 14px;
		// width: 100%;
		// height: 500px;
		// background-color: pink;

	}
</style>
