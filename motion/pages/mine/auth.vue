<template>
	<view class="auth-page">
		<view class="auth-tips">
			<uni-icons type="info-filled" size="22" color='#d9965e'>
			</uni-icons>
			实名认证成功后，身份信息不可修改
		</view>
		<view class="auth-section">
			<form @submit="onSubmit">
				<view class="auth-form-item">
					<label class="uni-list-cell uni-list-cell-pd">真实姓名</label>
					<input class="uni-input" type="text" placeholder="请填写真实姓名" />
				</view>
				<view class="auth-form-item">
					<label class="uni-list-cell uni-list-cell-pd">证件类型</label>
					<uni-data-picker placeholder="请选择证件类型" :localdata="range" v-model="cate" @change="onchange"
						@nodeclick="onnodeclick" @popupopened="onpopupopened" @popupclosed="onpopupclosed"
						popup-title="证件类型">
					</uni-data-picker>
					<!-- <uni-data-select class='uni-input' v-model="value" :localdata="range" @change="changeType">
					</uni-data-select> -->
				</view>
				<view class="auth-form-item">
					<label class="uni-list-cell uni-list-cell-pd">证件号码</label>
					<input class="uni-input" type="idcard" placeholder="请填写身份证号" />
				</view>
				<view class="auth-agree">
					<uni-icons type="info-filled" size="24" color='#d9965e'>
					</uni-icons>
					点击本人实名认证表示您已阅读并同意<uni-link href="/pages/agree/agree" text="《平台许可及服务协议》" color="#007BFF">
					</uni-link>

				</view>
				<button form-type="submit" class="auth-btn">本人实名认证</button>
			</form>

		</view>
	</view>

	</view>
</template>

<script>
	export default {
		data() {
			return { // 基础表单数据
				baseFormData: {
					name: '',
					age: '',
					introduction: '',
					sex: 2,
					hobby: [5],
					datetimesingle: 1627529992399
				},
				// 表单数据
				alignmentFormData: {
					name: '',
					age: '',
				},
				// 单选数据源
				sexs: [{
					text: '男',
					value: 0
				}, {
					text: '女',
					value: 1
				}, {
					text: '保密',
					value: 2
				}],

				// 校验规则
				rules: {
					name: {
						rules: [{
							required: true,
							errorMessage: '姓名不能为空'
						}]
					},
					age: {
						rules: [{
							required: true,
							errorMessage: '年龄不能为空'
						}, {
							format: 'number',
							errorMessage: '年龄只能输入数字'
						}]
					}
				},
				// 自定义表单数据
				customFormData: {
					name: '',
					age: '',
					hobby: []
				},
				// 自定义表单校验规则
				customRules: {
					name: {
						rules: [{
							required: true,
							errorMessage: '姓名不能为空'
						}]
					},
					age: {
						rules: [{
							required: true,
							errorMessage: '年龄不能为空'
						}]
					},
					hobby: {
						rules: [{
								format: 'array'
							},
							{
								validateFunction: function(rule, value, data, callback) {
									if (value.length < 2) {
										callback('请至少勾选两个兴趣爱好')
									}
									return true
								}
							}
						]
					}

				},
				dynamicFormData: {
					email: '',
					domains: {}
				},
				dynamicLists: [],
				dynamicRules: {
					email: {
						rules: [{
							required: true,
							errorMessage: '域名不能为空'
						}, {
							format: 'email',
							errorMessage: '域名格式错误'
						}]
					}
				},
				formData: {},
				testValue: 'Hello',
				range: [{
						value: 0,
						text: "身份证"
					},
					{
						value: 1,
						text: "港澳台"
					},
					{
						value: 2,
						text: "永久居民卡"
					},
				],
				cate: 0,
			}


		},
		methods: {
			onSubmit(e) {
				console.log(e)
			},
			changeType(e) {
				console.log("e:", e);
			},
			onnodeclick(e) {
				console.log(e);
			},
			onpopupopened(e) {
				console.log('popupopened');
			},
			onpopupclosed(e) {
				console.log('popupclosed');
			},
			onchange(e) {
				console.log('onchange:', e);
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background: #fff;
	}

	.auth-section {
		width: 100%;
	}

	.auth-tips {
		width: 94%;
		display: flex;
		align-items: center;
		border-radius: 10rpx;
		box-sizing: border-box;
		padding: 10px;
		margin: 0 auto;
		background-color: #fdf2ed;
		color: #d9965e;
		font-size: 28rpx;
	}


	.auth-form-item {
		width: 100%;
		display: flex;
		line-height: 64rpx;
		align-items: center;
		border-bottom: 2rpx solid #ebeef5;
		box-sizing: border-box;
		padding: 20rpx 20rpx;

		.uni-list-cell {
			width: 200rpx;
			text-align: center;
			color: #a2a2a2;
			font-size: 30rpx;
		}

		.uni-input {
			flex: 1;
			border: 0;
			// color: #dedede;
			font-size: 30rpx;
		}
	}

	.auth-agree {
		width: 90%;
		display: flex;
		align-items: center;
		margin: 20rpx auto;
	}

	.auth-btn {
		width: 90%;
		margin: 100rpx auto 0;
		border: 0;
		border-radius: 50rpx;

	}

	uni-button:after {
		border: 0;
	}

	.uni-select {
		border: 0 !important;
	}
</style>
