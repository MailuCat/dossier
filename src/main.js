import Vue from 'vue'
import '@/plugins/base'
import vuetify from '@/plugins/vuetify'
import App from './App.vue'
import Vuetify from 'vuetify/lib'
import VueIframe from 'vue-iframes'

Vue.use(VueIframe)
Vue.use(Vuetify)

Vue.config.productionTip = false
export default new Vuetify({
  icons: {
    iconfont: 'svgPath',
  },
})

new Vue({
  vuetify,
  render: h => h(App),
}).$mount('#app')
