import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueMeta from 'vue-meta';



Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueMeta);
new Vue({
  render: h => h(App),
}).$mount('#app')
