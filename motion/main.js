// #ifndef VUE3
import Vue from 'vue'
import App from './App'
import Mock from './mock/match'
import http from './services/index.js'

Vue.config.productionTip = false
Vue.prototype.$http = http;
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
