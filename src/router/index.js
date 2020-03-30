import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/tabbar/Home.vue'
import Vip from '../views/tabbar/Vip.vue'
import ShopCar from '../views/tabbar/ShopCar.vue'
import Search from '../views/tabbar/Search.vue'
import News from '../views/news/News.vue'
import NewsInfo from '../views/news/Newsinfo.vue'
import PhotoList from '../views/photos/PhotoList.vue'
import PhotoInfo from '../views/photos/PhotoInfo.vue'
import Commodity from '../views/buy/Commodity.vue'
import CommodityInfo from '../views/buy/CommodityInfo.vue'
import BuyIntorduce from '../views/buy/BuyIntroduce.vue'
import About from '../views/aboutus/AboutUs.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/vip', component: Vip },
  { path: '/shopcar', component: ShopCar },
  { path: '/search', component: Search },
  { path: '/home/news', component: News },
  { path: '/home/newsinfo/:id', component: NewsInfo },
  { path: '/home/image', component: PhotoList },
  { path: '/home/photoinfo/:id', component: PhotoInfo },
  { path: '/home/buy', component: Commodity },
  { path: '/home/commodityinfo/:id', component: CommodityInfo },
  { path: '/home/buyintorduce/:id', component: BuyIntorduce },
  { path: '/home/about', component: About }
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'mui-active'
})

export default router
