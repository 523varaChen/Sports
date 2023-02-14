<template>
	<view class="add-address">
		<uni-forms ref="baseForm" :modelValue="baseFormData">
			<uni-forms-item label="收货地址" name="address" required>
				<uni-data-picker
					placeholder="请选择地址"
					popup-title="请选择省市区"
					:localdata="dataTree"
					v-model="baseFormData.address"
					@change="onchange"
					@nodeclick="onnodeclick"
					@popupopened="onpopupopened"
					@popupclosed="onpopupclosed"
				></uni-data-picker>
				<!-- <uni-easyinput v-model="baseFormData.address" placeholder="小区/写字楼/学校" /> -->
			</uni-forms-item>
			<uni-forms-item label="门牌号" name="house" required><uni-easyinput v-model="baseFormData.house" placeholder="例:6号楼661室" /></uni-forms-item>
			<uni-forms-item label="联系人" name="user" required><uni-easyinput v-model="baseFormData.user" placeholder="您的姓名" /></uni-forms-item>
			<uni-forms-item label="手机号" name="phone" required><uni-easyinput v-model="baseFormData.phone" placeholder="您的手机号" /></uni-forms-item>
			<uni-forms-item label="标签">
				<view class="tag-list">
					<text class="tag" v-for="(item, index) in tagList" :key="index" @click="activeTag(index)" :class="curTag == index ? 'activeTag' : ''">{{ item.name }}</text>
				</view>
			</uni-forms-item>
		</uni-forms>
		<view class="baseBtn" @click="submit('baseForm')">保存</view>
	</view>
</template>
<script>
import cityData from './city.json';

export default {
	data() {
		return {
			// 基础表单数据
			baseFormData: {
				address: '110105',
				house: '',
				user: '',
				phone: '',
				tag: ''
			},
			curTag: 0,
			tagList: [
				{
					id: 1,
					name: '公司'
				},
				{
					id: 2,
					name: '家'
				},
				{
					id: 3,
					name: '父母家'
				}
			],
			// 分段器数据
			current: 0,
			rules: {
				address: {
					rules: [
						{
							required: true,
							errorMessage: '地址不能为空'
						}
					]
				},
				house: {
					rules: [
						{
							required: true,
							errorMessage: '请填写门牌号'
						}
					]
				},
				user: {
					rules: [
						{
							required: true,
							errorMessage: '请填写姓名'
						},
						{
							minLength: 2,
							maxLength: 10,
							errorMessage: '{label}长度在 {minLength} 到 {maxLength} 个字符'
						}
					]
				},
				phone: {
					rules: [
						{
							required: true,
							errorMessage: '请填写手机号'
						},
						{
							validateFunction: (rule, value, data, callback) => {
								// 异步需要返回 Promise 对象
								console.log(123, rule, value, data, callback);
							}
						},
						{
							format: 'number',
							errorMessage: '手机号只能是数字'
						}
					]
				}
			},
			dataTree: [],
			defaultCity: '110105'
		};
	},
	computed: {},

	onLoad() {
		if (cityData.length) {
			this.dataTree = this.$dataUtil.compareCity(cityData);
		}
	},
	onReady() {
		// 设置自定义表单校验规则，必须在节点渲染完毕后执行
		this.$refs.baseForm.setRules(this.rules);
	},
	methods: {
		submit(refs) {
			this.$refs[refs]
				.validate()
				.then(res => {
					uni.setStorage({
						key: 'adress',
						data: res,
						success: () => {
							uni.showToast({
								title: `保存成功`
							});
							uni.navigateTo({
								url: '/pages/component/view/address'
							});
						}
					});
				})
				.catch(err => {
					console.log('err', err);
				});
		},
		moveNum(nums) {
			let count = 0;
			for (let i = 0; i < nums.length - count; i++) {
				while (nums[i] === 0) {
					nums.splice(i, 1);
					nums.push(0);
					count++;
				}
			}
			return nums;
		},
		activeTag(index) {
			this.curTag = index;
		},
		onnodeclick(e) {
			// console.log('onnodeclick', e);
		},
		onpopupopened(e) {
			// console.log('popupopened', e);
		},
		onpopupclosed(e) {
			// console.log('popupclosed', e);
		},
		onchange(e) {
			this.baseFormData.address = e.detail.value[e.detail.value.length - 1].value;
		}
	}
};
</script>
<style lang="scss">
page {
	background: #f9f9f9;
	padding: 16px;
}

.add-address {
	padding: 20px;
	background: #fff;
	border-radius: 10px;

	.uni-forms {
		background: #fff;
	}

	.uni-forms-item:last-child {
		align-items: center;
		justify-content: center;
	}

	.tag-list {
		display: flex;
		padding: 8px 0;

		.tag {
			padding: 2px 6px;
			border: 1px solid #ccc;
			border-radius: 2px;
			font-size: 12px;
			margin-left: 20px;

			&:first-child {
				margin: 0;
			}
		}

		.activeTag {
			color: #4db1fb;
			background: #effcfe;
			border: 1px solid #c2dae3;
		}
	}
}

.title {
	font-size: 14px;
	font-weight: bold;
	margin: 20px 0 5px 0;
}

.data-pickerview {
	height: 400px;
	border: 1px #e5e5e5 solid;
}
</style>
