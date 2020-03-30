import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'
import './assets/mui/css/mui.min.css'
import './assets/mui/css/iconfont.css'
import { Header, Swipe, SwipeItem, Button, Lazyload } from 'mint-ui'
import 'mint-ui/lib/style.css'
import moment from 'moment'
import VuePreview from 'vue2-preview'
Vue.use(VuePreview)
// axios.defaults.baseURL = 'http://www.liulongbin.top:3005'
Vue.prototype.$http = axios

Vue.filter('dateFormat', function (dataStr, pattern = 'YYYY-MM-DD') {
  return moment(dataStr).format(pattern)
})
Vue.filter('MDHms', function (dataStr, pattern = 'MM-DD \n HH:mm:ss') {
  return moment(dataStr).format(pattern)
})

Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)
Vue.use(Lazyload)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
