<template>
	<view>
		<view class="title">{{$t('index.demo')}}</view>
		<view class="description">{{$t('index.demo-description')}}</view>
		<view class="detail-link">{{$t('index.detail')}}: <text
				class="link">https://uniapp.dcloud.net.cn/collocation/i18n</text></view>
		<view class="locale-setting">{{$t('index.language-info')}}</view>
		<view class="list-item">
			<text class="k">{{$t('index.system-language')}}:</text>
			<text class="v">{{systemLocale}}</text>
		</view>
		<view class="list-item">
			<text class="k">{{$t('index.application-language')}}:</text>
			<text class="v">{{applicationLocale}}</text>
		</view>
		<view class="locale-setting">{{$t('index.language')}}</view>
		<view class="locale-list">
			<view class="locale-item" v-for="(item, index) in locales" :key="index" @click="onLocaleChange(item)">
				<text class="text">{{item.text}}</text>
				<text class="icon-check" v-if="item.code == applicationLocale"></text>
			</view>
		</view>

		<uni-indexed-list :options="list" :show-select="true" @click="bindClick" />
	</view>
</template>

<script>
	import airport from '../../lib/common/airport.js'
	export default {
		data() {
			return {
				list: airport.list,
				systemLocale: '',
				applicationLocale: ''
			}
		},
		computed: {
			locales() {
				return [{
						text: this.$t('locale.auto'),
						code: 'auto'
					}, {
						text: this.$t('locale.en'),
						code: 'en'
					},
					{
						text: this.$t('locale.zh-hans'),
						code: 'zh-Hans'
					},
					{
						text: this.$t('locale.zh-hant'),
						code: 'zh-Hant'
					},
					{
						text: this.$t('locale.ja'),
						code: 'ja'
					}
				]
			}
		},
		onLoad() {
			let systemInfo = uni.getSystemInfoSync();
			this.systemLocale = systemInfo.language;
			this.applicationLocale = uni.getLocale();
			this.isAndroid = systemInfo.platform.toLowerCase() === 'android';
			uni.onLocaleChange((e) => {
				this.applicationLocale = e.locale;
			})
		},
		methods: {
			bindClick(e) {
				console.log('点击item，返回数据' + JSON.stringify(e))
			},
			onLocaleChange(e) {
				if (this.isAndroid) {
					uni.showModal({
						content: this.$t('index.language-change-confirm'),
						success: (res) => {
							if (res.confirm) {
								uni.setLocale(e.code);
							}
						}
					})
				} else {
					uni.setLocale(e.code);
					this.$i18n.locale = e.code;
				}
			}
		}


	}
</script>

<style>

</style>
