//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
// import store from './store'
import axios from "axios"
//引入VueRouter
import VueRouter from 'vue-router'
//引入路由器
import router from './router'
// 引入store
import store from './store'

import { Dropdown, DropdownMenu, DropdownItem } from 'element-ui';

Vue.component(Dropdown.name,Dropdown);
Vue.component(DropdownMenu.name, DropdownMenu);
Vue.component(DropdownItem.name, DropdownItem);

//关闭Vue的生产提示
Vue.config.productionTip = false
// Vue.use(ElementUI)
Vue.prototype.axios = axios
Vue.use(VueRouter)

//创建vm
new Vue({
	el:'#app',
	render: h => h(App),
	beforeCreate() {
		Vue.prototype.$bus = this
	},
	router,
	store
})
