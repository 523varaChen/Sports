<template>
	<view class="location-page">
		<uni-search-bar radius="100" @confirm="search" :focus="false" v-model="searchValue" @blur="blur" @focus="focus" @input="input" @cancel="cancel" @clear="clear"></uni-search-bar>

		<view class="ul">
			<view class="li">当前地址：汉威大厦</view>
			<view class="title">我的收货地址</view>
			<view v-for="(item, index) in localList" :key="index" class="li" @click="checkLocal(item, index)">
				<view class="head">
					<text class="tag">{{ item.tag == 0 ? '家' : item.tag == 1 ? '公司' : '学校' }}</text>
					<text class="company">{{ item.company }}</text>
				</view>
				<view class="body">
					<text>{{ item.name }}</text>
					<text>{{ item.phone }}</text>
					<text class="check"><uni-icons v-if="active == index" type="checkmarkempty" size="24" color="#2979ff"></uni-icons></text>
				</view>
				<view class="foot">
					此地址可购
					<text v-for="(it, i) in item.note" :key="i">{{ it }}</text>
					商品
				</view>
			</view>
			<view class="noData">暂无地址</view>
			<view class="title">附近地址</view>
			<view class="li">当前地址：金童事宜</view>
		</view>
	</view>
</template>

<script>
import cityData from './city.json';
export default {
	data() {
		return {
			searchValue: '123123',
			active: 0,
			localList: [
				{
					company: '汉威大厦',
					tag: 0, //0=家，1=公司，2=学校,
					phone: '1877827817271',
					name: '张三',
					note: ['产地量贩', '云购物', '线下多优惠'],
					isChecked: false
				},
				{
					company: '建外SOHO',
					tag: 1, //0=家，1=公司，2=学校,
					phone: '1527817281782',
					name: '李四',
					note: ['产地量贩'],
					isChecked: false
				},
				{
					company: '望京SOHO',
					tag: 1, //0=家，1=公司，2=学校,
					phone: '1527817281782',
					name: '王五',
					note: ['产地量贩'],
					isChecked: true
				}
			]
		};
	},
	watch: {},
	mounted() {
		// uni.getStorage({
		// 	key: 'adress',
		// 	success: function(res) {
		// 		console.log(res.data);
		// 	}
		// });
	},
	created() {},
	methods: {
		search(res) {
			uni.showToast({
				title: '搜索：' + res.value,
				icon: 'none'
			});
		},
		input(res) {
			console.log('----input:', res);
		},
		clear(res) {
			uni.showToast({
				title: 'clear事件，清除值为：' + res.value,
				icon: 'none'
			});
		},
		blur(res) {
			uni.showToast({
				title: 'blur事件，输入值为：' + res.value,
				icon: 'none'
			});
		},
		focus(e) {
			uni.showToast({
				title: 'focus事件，输出值为：' + e.value,
				icon: 'none'
			});
		},
		cancel(res) {
			uni.showToast({
				title: '点击取消，输入值为：' + res.value,
				icon: 'none'
			});
		},
		checkLocal(data, index) {
			this.active = index;
			uni.switchTab({
				url: '/pages/index/index'
			});
		}
	},
	onBackPress() {
		plus.key.hideSoftKeybord();
	},
	onNavigationBarButtonTap() {
		uni.navigateTo({
			url: '/pages/component/view/addAddress'
		});
	}
};
</script>

<style lang="scss">
page {
	// background: #f9f9f9;
}
.ul {
	.title {
		font-size: 14px;
		background-color: #f9f9f9;
		padding: 8px 16px;
		color: #333;
	}
	.li {
		background-color: #fff;
		font-size: 14px;
		padding: 8px 16px;
		position: relative;
		&::after {
			content: '';
			position: absolute;
			bottom: 0;
			right: 0;
			left: 0;
			height: 1px;
			transform: scaleY(0.5);
			background-color: #e5e5e5;
		}
		.head {
			.tag {
				background-color: #2979ff;
				border-color: #2979ff;
				color: #fff;
				padding: 1px 3px;
				font-size: 12px;
				border-radius: 2px;
			}
			.company {
				margin-left: 10px;
				font-size: 16px;
				font-weight: 500;
			}
		}
		.body {
			margin: 8px 0;
			position: relative;
			text {
				margin-right: 10px;
				font-size: 14px;
				color: #999;
			}
			.check {
				position: absolute;
				top: -4px;
				right: 10px;
				vertical-align: middle;
			}
		}
		.foot {
			font-size: 14px;
			color: #333;
			text {
				font-size: 10px;
				font-weight: 300;
				border: 1rpx solid #e5e5e5;
				border-radius: 4px;
				padding: 1px 2px;
				margin: 0 2px;
			}
		}
	}
}
::v-deep.uni-data-checklist {
	flex: 0;
	.uni-label-pointer {
		margin: 0px !important;
		.checkbox__inner {
			width: 12px !important;
			height: 12px !important;
			.checkbox__inner-icon {
				position: absolute;
				top: 1px !important;
				left: 0 !important;
				right: 0 !important;
				margin: auto !important;
				height: 6px !important;
				width: 3px !important;
			}
		}
	}
}
</style>
