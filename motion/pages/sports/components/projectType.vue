<template>
	<view class="project-type">
		<view v-for='(item,index) in listType' :key='index' :class="index==isActive? 'item active':'item'"
			@click="selectType(index)">{{item.text}}
		</view>

		<button>下一步</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isActive: 0,
				listType: [{
					id: 1,
					text: ' 自行车'
				}, {
					id: 2,
					text: '广场舞'
				}, {
					id: 3,
					text: '健步走'
				}, {
					id: 4,
					text: '企业排舞'
				}]
			};
		},
		methods: {
			selectType(index) {
				this.isActive = index;
				console.log(this.isActive)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.project-type {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding-top: 30px;

		.item {
			width: 50%;
			height: 50px;
			line-height: 50px;
			background: #ccc;
			color: #ffff;
			border-radius: 10px;
			margin-bottom: 40px;
			text-align: center;
		}

		.active {
			background: #51edc8 !important;
		}

		button {
			width: 30%;
			height: 40px;
			line-height: 40px;
		}
	}
</style>
