import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入elementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引入echarts
import * as echarts from 'echarts';
Vue.prototype.$echarts = echarts;
// 阻止启动生产消息
Vue.config.productionTip = false
Vue.use(ElementUI)
//        < !--周振君1111 -->

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
