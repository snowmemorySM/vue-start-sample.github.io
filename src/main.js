import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
// 전역필터 선언
Vue.filter('multiply_number', function(value){
  return value * 3;
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
