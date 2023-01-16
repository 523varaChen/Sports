<template>
	<view>
		<view class="list">
			<view class="list-item" v-for='(item,index) in listInfo' :key='index' @click="nextPage(item)">
				<view class="list-pic">
					<uni-tag v-if='hasLeftTag' :text="item.tagText" class='item-tag' />
					<image :src="item.avatar" class="list-avatar"></image>
					<uni-tag v-if='hasRightTag' :text="item.tagRightText + '赛'" class='tag-right'
						:style="{backgroundColor:item.tagRightType?'#4A7BF7':'#894FC4'}" />
				</view>
				<view class="list-content">
					<view class="content-top">
						<view class="content-title">{{item.title}}</view>
					</view>
					<view class="content-bottom">
						<text class="chat-custom-text">
							<uni-icons type="location-filled" color="#999" size="17"></uni-icons>{{item.location}}
						</text>
						<text class="chat-custom-text">{{item.time}}</text>
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				projectList: []
			}
		},
		props: {
			listInfo: {
				type: Array,
			},
			hasLeftTag: {
				type: Boolean,
				default: false
			},
			tagLeftText: {
				type: String,
				default: ''
			},
			tagLeftType: {
				type: String,
				default: 'success'
			},
			hasRightTag: {
				type: Boolean,
				default: false
			},
			tagRightText: {
				type: String,
				default: ''
			},
			tagRightType: {
				type: String,
				default: 'success'
			},
			current: {
				type: [Number, String],
				default: 0
			},
			backgroundColor: {
				type: String,
				default: '#fbfbfb'
			},
			color: {
				type: String,
				default: '#999'
			},
			tintColor: {
				type: String,
				default: '#42b983'
			}
		},
		watch: {
			isShow(param) {
				if (param) {
					this.isShowModal = true;
				} else {
					this.isShowModal = false;
				}
			},
			projectList(param) {
				console.log(param)
			}
			// listInfo(param) {
			// 	// console.log(12, param)
			// 	if (param) {
			// 		// this.listInfo = param
			// 		// this.getSClassList(token_1); //页面一打开，就加载数据
			// 	}
			// }
		},
		methods: {
			nextPage(item) {
				console.log(item)
				uni.navigateTo({
					url: '/pages/match/matchDetail?id=' + item.id
				})


			}
		}
	}
</script>

<style lang="scss" scoped>
	.list {
		width: 100%;
		height: auto;

		.list-item {
			width: 94%;
			margin: 0 auto;
			display: flex;
			padding: 20upx 0;
			box-sizing: border-box;
			border-bottom: 1upx solid #ccc;

			.list-pic {
				width: 260upx;
				height: 200upx;
				margin-right: 20upx;
				position: relative;
				border-radius: 6upx;
				overflow: hidden;

				.item-tag,
				.tag-right {
					position: absolute;
					top: 0;
					z-index: 10;
					border: 0;
				}

				.item-tag {
					left: 0;
				}

				.tag-right {
					right: 0;
				}

				.list-avatar {
					width: 100%;
					height: 100%;
				}
			}

			.list-content {
				flex: 1;
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				.content-bottom {
					display: flex;
					line-height: 40upx;
					justify-content: space-between;
					align-items: center;

					.chat-custom-text {
						font-size: 28upx;
						color: #999;
					}

				}
			}
		}

	}
</style>
