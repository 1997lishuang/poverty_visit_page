import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper/dist/ssr'
// import VueQriously from 'vue-qriously'
import ElementUI from 'element-ui' //element-ui的全部组件
import 'element-ui/lib/theme-chalk/index.css'//element-ui的css
Vue.use(ElementUI) //使用elementUI
// Vue.use(VueQriously)
Vue.use(VueAwesomeSwiper)

import iView from 'iview'
Vue.use(iView);
import 'iview/dist/styles/iview.css'
//引入echart

import echarts from 'echarts' // 引入echarts
Vue.prototype.$echarts = echarts // 引入组件（将echarts注册为全局）
// import { setStore, getStore, removeStore } from '~/utils/storage.js'
// Vue.prototype.setStore = setStore
// Vue.prototype.getStore = getStore
// Vue.prototype.removeStore = removeStore
