<template>
	<view class="match-page">

	</view>
</template>

<script>
	import listBar from '@/components/common/list-bar/list-bar.vue'
	export default {
		data() {
			return {

			}
		},
		components: {
			listBar
		},
		created() {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.match-page {
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	.tab-header {
		width: 100%;
		height: 54rpx;
		display: flex;
		background-color: #fff;
		// position: fixed;
		// z-index: 10;

		.head-item {
			flex: 1;
			text-align: center;
		}

		.navActive {
			border-bottom: 2rpx solid palegreen;
		}
	}

	.swiper {
		width: 100%;
		overflow-y: scroll;
		height: calc(100vh - 600rpx);
		margin-bottom: 100rpx;
	}

	.content {
		flex: 1;
		height: calc(100vh - 600rpx);
		margin-bottom: 100rpx;
		margin-top: 54rpx;
		// width: 100%;
		// height: 500px;
		// background-color: pink;

	}
</style>
