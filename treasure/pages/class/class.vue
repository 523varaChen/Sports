<template>
	<view class="wraper">
		<view class="tab">
			<view class="tab-item" v-for="(item, index) in tabList" :class="current == index ? 'active' : ''" :key="index" @click="changeTab(index)">{{ item.text }}</view>
		</view>
		<view class="class-nav"></view>
		<view class="content">
			<view class="list">
				<view class="list-item"></view>
				<uni-list :border="true">
					<!-- 显示圆形头像 -->
					<uni-list-chat
						:avatar-circle="true"
						title="uni-app"
						avatar="https://web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
						note="您收到一条新的消息"
						time="2020-02-02 20:20"
					></uni-list-chat>
					<!-- 右侧带角标 -->
					<uni-list-chat
						title="uni-app"
						avatar="https://web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
						note="您收到一条新的消息"
						time="2020-02-02 20:20"
						badge-text="12"
					></uni-list-chat>
					<!-- 头像显示圆点 -->
					<uni-list-chat
						title="uni-app"
						avatar="https://web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
						note="您收到一条新的消息"
						time="2020-02-02 20:20"
						badge-positon="left"
						badge-text="dot"
					></uni-list-chat>
					<!-- 头像显示角标 -->
					<uni-list-chat
						title="uni-app"
						avatar="https://web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
						note="您收到一条新的消息"
						time="2020-02-02 20:20"
						badge-positon="left"
						badge-text="99"
					></uni-list-chat>
					<!-- 显示多头像 -->
					<uni-list-chat title="uni-app" :avatar-list="avatarList" note="您收到一条新的消息" time="2020-02-02 20:20" badge-positon="left" badge-text="dot"></uni-list-chat>
					<!-- 自定义右侧内容 -->
					<uni-list-chat title="uni-app" :avatar-list="avatarList" note="您收到一条新的消息" time="2020-02-02 20:20" badge-positon="left" badge-text="dot">
						<view class="chat-custom-right">
							<text class="chat-custom-text">刚刚</text>
							<!-- 需要使用 uni-icons 请自行引入 -->
							<uni-icons type="star-filled" color="#999" size="18"></uni-icons>
						</view>
					</uni-list-chat>
				</uni-list>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			current: 0,
			tabList: [
				{
					id: 1,
					text: '人类'
				},
				{
					id: 2,
					text: '宠物'
				}
			],
			contentList: [],
			avatarList: []
		};
	},
	methods: {
		changeTab(cur) {
			this.current = cur;
		}
	}
};
</script>

<style lang="scss" scoped>
.wraper {
	width: 100%;
	display: flex;
	min-height: 100vh;

	.tab {
		width: 100px;
		// margin-right: 20px;
		background-color: #ccc;
		padding-top: 30px;

		.tab-item {
			text-align: center;
			line-height: 36px;
			font-size: 14px;
		}

		.active {
			background-color: red;
		}
	}

	.content {
	}
}
</style>
