<template>
	<view class="wraper">
		<view class="head">
			<uni-nav-bar @clickRight="showMenu" @clickLeft="locationCity">
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
					<input confirm-type="search" class="nav-bar-input" type="text" placeholder="输入搜索关键词" @confirm="confirm" />
				</view>
				<block slot="right"><view class="city">搜索</view></block>
			</uni-nav-bar>
		</view>

		<view class="banner">
			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" easing-function="linear" mode="round">
				<swiper-item><view class="swiper-item uni-bg-red">A</view></swiper-item>
				<swiper-item><view class="swiper-item uni-bg-green">B</view></swiper-item>
				<swiper-item><view class="swiper-item uni-bg-blue">C</view></swiper-item>
			</swiper>
		</view>
		<view class="nav">
			<uni-grid :column="3" :show-border="false" :square="false" :highlight="true" @change="navChange">
				<uni-grid-item v-for="(item, index) in navList" :index="index" :key="index">
					<view class="grid-item-box" style="background-color: #fff;">
						<!-- <uni-icons type="image" :size="30" color="#777" /> -->
						<span :class="'iconfont icon-' + item.url" style="font-size:20px"></span>
						<text class="text">{{ item.text }}</text>
					</view>
				</uni-grid-item>
			</uni-grid>
		</view>
		<view class="section">
			<uni-section class="mb-10" title="热榜" sub-title="最新丢失">
				<template v-slot:decoration>
					<view class="titleLine hot"></view>
				</template>
			</uni-section>
			<uni-list :border="true">
				<uni-list-chat
					title="uni-app"
					avatar="https://web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
					note="您收到一条新的消息"
					time="2020-02-02 20:20"
					badge-positon="left"
					badge-text="dot"
				>
					<view class="chat-custom-right">
						<text class="chat-custom-text">刚刚</text>
						<!-- 需要使用 uni-icons 请自行引入 -->
						<uni-icons type="star-filled" :color="isFav ? '#007aff' : '#999'" size="18" @click="favSave()"></uni-icons>
					</view>
				</uni-list-chat>
			</uni-list>

			<uni-section class="mb-10" title="丢失宠物" sub-title="历史丢失">
				<template v-slot:decoration>
					<view class="titleLine history"></view>
				</template>
			</uni-section>
			<uni-list :border="true">
				<uni-list-chat
					:style="[{ background: `${activeClass}` }]"
					title="uni-app"
					avatar="https://web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
					note="您收到一条新的消息"
					time="2020-02-02 20:20"
					badge-positon="left"
					badge-text="dot"
				>
					<view class="chat-custom-right">
						<text class="chat-custom-text">2020-02-02 20:20</text>
						<!-- 需要使用 uni-icons 请自行引入 -->
						<uni-icons type="star-filled" :color="isFav ? '#f8c555' : '#909eb0'" size="18" @click="favSave()"></uni-icons>
					</view>
				</uni-list-chat>
			</uni-list>
			<uni-section class="mb-10 red" title="爱心传递" sub-title="热心救助">
				<template v-slot:decoration>
					<view class="titleLine decoration"></view>
				</template>
			</uni-section>
			<uni-list :border="true">
				<uni-list-chat
					:style="[{ background: `${activeClass}` }]"
					title="拉布拉多"
					avatar="https://web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
					note="因种种原因,忍痛割爱，转让此爱大......"
					time="2020-02-02 20:20"
					badge-positon="left"
					badge-text="dot"
				>
					<view class="chat-custom-right">
						<text class="chat-custom-text">2020-02-02 20:20</text>
						<!-- 需要使用 uni-icons 请自行引入 -->
						<uni-icons type="star-filled" :color="isFav ? '#f8c555' : '#909eb0'" size="18" @click="favSave()"></uni-icons>
					</view>
				</uni-list-chat>
			</uni-list>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			city: '北京',
			background: ['color1', 'color2', 'color3'],
			indicatorDots: true,
			autoplay: true,
			interval: 2000,
			duration: 500,
			isFav: false,
			activeClass: '',
			navList: [
				{
					url: 'canting',
					text: '上门喂养',
					badge: '0',
					picClor: '',
					textColor: '',
					type: 'primary'
				},
				{
					url: 'yushi',
					text: '上门洗护',
					badge: '0',
					picClor: '',
					textColor: '',
					type: 'primary'
				},
				{
					url: 'yuding',
					text: '附近医院',
					badge: '0',
					picClor: '',
					textColor: '',
					type: 'primary'
				},
				{ url: 'Mewode', text: '票务代理', badge: '0', picClor: '', textColor: '', type: 'primary' },
				{ url: 'a-shejiaoMyCommunity', text: '闲置集市', badge: '0', picClor: '', textColor: '', type: 'primary' },
				{ url: 'shequ', text: '爱心领养', badge: '0', picClor: '', textColor: '', type: 'primary' },
				{
					url: 'yezhuweiyuanhui',
					text: '流浪救助',
					badge: '0',
					picClor: '',
					textColor: '',
					type: 'primary'
				},
				{
					url: 'liwu',
					text: '商家推荐',
					badge: '0',
					picClor: '',
					textColor: '',
					type: 'primary'
				},
				{
					url: 'a-wuyeMyEstate',

					text: '更多',
					textColor: '',
					badge: '0',
					picClor: '',
					textColor: '',
					type: 'primary'
				}
			]
		};
	},
	watch: {
		isFav(newVal, oldVal) {
			this.activeClass = newVal ? '#f6f8fa' : '';
		}
	},
	computed: {},
	created() {},
	methods: {
		back() {
			uni.navigateBack({
				delta: 1
			});
		},
		showMenu() {
			uni.showToast({
				title: '菜单'
			});
		},
		clickLeft() {
			uni.showToast({
				title: '左侧按钮'
			});
		},
		search() {
			uni.showToast({
				title: '搜索'
			});
		},
		showCity() {
			uni.showToast({
				title: '选择城市'
			});
		},
		scan() {
			uni.showToast({
				title: '扫码'
			});
		},
		confirm() {
			uni.showToast({
				title: '搜索'
			});
		},
		favSave() {
			this.isFav = !this.isFav;
		},
		locationCity() {
			uni.navigateTo({
				url: '/pages/component/view/address'
			});
		},
		navChange(e) {
			let { index } = e.detail;
			this.navList[index].badge && this.navList[index].badge++;

			uni.showToast({
				title: `业务正在扩展`,
				icon: 'none'
			});
		}
	},
	onPullDownRefresh() {
		console.log('onPullDownRefresh');
		setTimeout(function() {
			uni.stopPullDownRefresh();
			console.log('stopPullDownRefresh');
		}, 1000);
	}
};
</script>

<style lang="scss" scoped>
$nav-height: 30px;

.wraper {
	width: 100%;

	.head {
		.city {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: flex-start;
			margin-left: 4px;
		}

		.input-view {
			display: flex;
			flex-direction: row;
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

	.banner {
		background-color: skyblue;
		margin-bottom: 10px;
		// height: 100px;
	}
	.nav {
		.image {
			width: 25px;
			height: 25px;
		}

		.text {
			font-size: 14px;
			margin-top: 5px;
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

		.grid-dot {
			position: absolute;
			top: 5px;
			right: 15px;
		}
	}
	.section {
		.chat-custom-right {
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: flex-end;
		}

		.chat-custom-text {
			font-size: 12px;
			color: #999;
		}
	}
}
.titleLine {
	width: 4px;
	height: 16px;
	border-radius: 10px;
	margin-right: 4px;
}
.hot {
	background-color: #cc3300 !important;
}
.history {
	background-color: #33cc33 !important;
}
.decoration {
	// background-color: #dd524d !important;
	background: #2979ff !important;
}
</style>
