<template>
	<view class="container">
		<view>33</view>
		<input class="input" v-model="name" />
		<button type="primary" @click="add">22</button>
	</view>
</template>

<script>
const collection = 'hello';
export default {
	data() {
		return {
			name: ''
		};
	},
	methods: {
		add() {
			uni.showLoading();
			// let db = uniCloud.database();
			// db.collection(collection)
			// 	.add({
			// 		name: this.name
			// 	})
			// 	.then(res => {
			// 		uni.showToast({
			// 			title: 11
			// 		});
			// 	})
			// 	.catch(err => {
			// 		uni.showModal({
			// 			content: err.message,
			// 			showCancel: false
			// 		});
			// 	})
			// 	.finally(() => {
			// 		uni.hideLoading();
			// 	});
		}
	}
};
</script>

<style>
.input {
	border: 1px solid #ebebeb;
	border-radius: 3px;
	margin-top: 15px;
	margin-bottom: 15px;
	padding: 8px;
}
</style>
