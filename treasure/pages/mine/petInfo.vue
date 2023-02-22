<template>
	<view class="info">
		<!-- <view class="info-head">
			<uni-swiper-dot class="uni-swiper-dot-box" @clickItem="clickItem" :info="info" :current="current" mode="round" field="content">
				<swiper class="swiper-box" @change="changeBanner" :current="swiperDotIndex">
					<swiper-item v-for="(item, index) in info" :key="index">
						<view class="swiper-item" :class="item.colorClass">
							<text style="color: #fff; font-size: 32px;">{{ index + 1 }}</text>
						</view>
					</swiper-item>
				</swiper>
			</uni-swiper-dot>
		</view> -->
		<view class="info-head">
			<view class="tab-head">
				<view class="tab-left"><uni-segmented-control :current="headCur" :values="tabHead" style-type="text" active-color="#333" @clickItem="tabItem" /></view>
				<view class="tab-right">
					<uni-icons type="plus" size="18" color="#6a6a6a"></uni-icons>
					添加宠物
				</view>
			</view>
			<view class="content">
				<uni-card title="富贵" sub-title="英国短毛猫" extra="1岁11个月" :thumbnail="avatar" @click="onClick">
					<view class="code">No. 4113251827817281</view>
					<text class="uni-body">你的原主人很优秀，在追求知识的海洋里畅游，很快会带你享受更美好的人生。</text>
					<view class="tag">宠物待保障</view>
				</uni-card>
			</view>
		</view>
		<view class="info-nav">
			<view class="nav-head"><uni-segmented-control :current="navCur" :values="navList" style-type="text" active-color="#99ccff" @clickItem="navItem" /></view>
			<view class="content">
				<view class="" v-if="navCur == 0">
					<uni-section title="纵向排列" type="line" padding><uni-steps :options="trendList" active-color="#007AFF" :active="trendActive" direction="column" /></uni-section>
				</view>
				<view class="question" v-if="navCur == 1">
					<uni-card title="基础卡片" sub-title="副标题" :thumbnail="avatar">
						<image style="width: 100%;" :src="avatar"></image>
						<text class="uni-body uni-mt-5">
							卡片组件通用来显示完整独立的一段信息，同时让用户理解他的作用。例如一篇文章的预览图、作者信息、时间等，卡片通常是更复杂和更详细信息的入口点。
						</text>
						<view slot="actions" class="card-actions">
							<view class="card-actions-item" @click="actionsClick('0')">
								<uni-icons type="redo" size="22" color="#999"></uni-icons>
								<uni-badge v-if="shareNum > 0" class="uni-badge-left-margin" :text="shareNum" absolute="rightTop" :offset="[-1, -8]" size="small" type="success"></uni-badge>

								<text class="card-actions-item-text">分享</text>
							</view>
							<view class="card-actions-item" @click="actionsClick('1')">
								<uni-icons :type="isAssit ? 'heart-filled' : 'heart'" size="22" :color="isAssit ? '#f34145' : '#999'"></uni-icons>
								<text class="card-actions-item-text">点赞</text>
							</view>
							<view class="card-actions-item" @click="actionsClick('2')">
								<uni-icons type="chatbubble" size="22" color="#999"></uni-icons>
								<uni-badge v-if="talkNum > 0" class="uni-badge-left-margin" :text="talkNum" absolute="rightTop" :offset="[2, -8]" size="small"></uni-badge>
								<text class="card-actions-item-text">评论</text>
							</view>
						</view>
					</uni-card>
				</view>
			</view>
		</view>
		<view class="info-banner"></view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			avatar: 'https://web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
			tabHead: ['欢豆', '富贵'],
			headCur: 0,
			navCur: 1,
			navList: ['动态', '提问', '回答', '收藏'],
			questionIcon: {
				color: '#4cd964',
				size: '22',
				type: 'more-filled'
			},
			shareNum: 0,
			talkNum: 1,
			isAssit: false,
			trendActive: 1,
			trendList: [
				{
					title: '本宝宝出生啦！求祝福',
					desc: '英国短尾猫,英国短尾猫英国短尾猫英国短尾猫英国短尾猫英国短尾猫/n,<br/>,/t'
				},
				{
					title: '事件二'
				},
				{
					title: '事件三'
				},
				{
					title: '事件四'
				}
			]
		};
	},
	methods: {
		tabItem(e) {
			if (this.headCur != e.currentIndex) {
				this.headCur = e.currentIndex;
			}
		},
		navItem(e) {
			if (this.navCur != e.currentIndex) {
				this.navCur = e.currentIndex;
			}
		},
		onClick(e) {
			console.log(e);
		},
		actionsClick(id) {
			if (id == 0) {
				// uni.share({
				// 	provider: 'weixin',
				// 	scene: 'WXSceneSession',
				// 	type: 1,
				// 	summary: '我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验！',
				// 	success: function(res) {
				// 		console.log('success:' + JSON.stringify(res));
				// 	},
				// 	fail: function(err) {
				// 		console.log('fail:' + JSON.stringify(err));
				// 	}
				// });
				// this.shareNum = this.shareNum + 1;
			}
			if (id == 1) {
				this.isAssit = !this.isAssit;
			}
			if (id == 2) {
				this.talkNum = this.talkNum + 1;
			}
			uni.showToast({
				title: id,
				icon: 'none'
			});
		},
		trendChange() {
			if (this.trendActive < this.trendList.length - 1) {
				this.trendActive += 1;
			} else {
				this.trendActive = 0;
			}
		}
	}
};
</script>

<style lang="scss">
page {
	width: 100%;
	box-sizing: border-box;
	background: #f8f8f8;
}
.info-head {
	position: relative;
	.tab-head {
		width: 100%;
		padding: 0 40rpx;
		display: flex;
		justify-content: space-around;
		align-items: center;
		box-sizing: border-box;
		.tab-left {
			flex: 1;
		}
		.tab-right {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 90px;
			height: 40px;
			font-size: 12px;
			color: #6a6a6a;
		}
	}
	.code {
		color: $protocolColor;
		margin: 4px 0;
	}
	.tag {
		position: absolute;
		top: 0;
		right: 0px;
		background: #6699ff;
		color: #fff;
		padding: 0 6px;
		font-size: 10px;
		border-bottom-left-radius: 10px;
		// border-bottom-right-radius: 10px;
	}
}
.question {
	.card-actions {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		height: 45px;
		border-top: 1px #eee solid;
		.card-actions-item {
			display: flex;
			flex-direction: row;
			align-items: center;
			.card-actions-item-text {
				font-size: 12px;
				color: #666;
				margin-left: 5px;
			}
		}
	}
}
</style>
