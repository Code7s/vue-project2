import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
var car = JSON.parse(localStorage.getItem('car') || '[]')
export default new Vuex.Store({
  state: {
    car
  },
  mutations: {
    addToCar (state, carData) {
      var flag = false
      state.car.some(item => {
        if (item.id === carData.id) {
          item.num += carData.num
          flag = true
          return true
        }
      })
      if (!flag) {
        state.car.push(carData)
      }
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    updateShopNum (state, updateData) {
      state.car.some(item => {
        if (item.id === updateData.id) {
          item.num = parseInt(updateData.count)
          return true
        }
      })
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    removeShop (state, id) {
      state.car.some((item, i) => {
        if (item.id === id) {
          state.car.splice(i, 1)
          return true
        }
      })
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    updateOptions (state, o) {
      state.car.forEach(item => {
        if (item.id === o.id) {
          item.option = o.option
        }
      })
      localStorage.setItem('car', JSON.stringify(state.car))
    }
  },
  getters: {
    getAllNum (state) {
      var allNum = 0
      state.car.forEach(item => {
        allNum += item.num
      })
      return allNum
    },
    getAllPrice (state) {
      var allPrice = 0
      state.car.forEach(item => {
        allPrice += item.num * item.price
      })
      return allPrice
    },
    getShopCount (state) {
      var o = {}
      state.car.forEach(item => {
        o[item.id] = item.num
      })
      return o
    },
    getOption (state) {
      var o = {}
      state.car.forEach(item => {
        o[item.id] = item.option
      })
      return o
    },
    getSum (state) {
      var o = {
        allNum: 0,
        allPrice: 0
      }
      state.car.forEach(item => {
        if (item.option === true) {
          o.allNum += item.num
          o.allPrice += item.num * item.price
        }
      })
      return o
    }
  },
  actions: {
  },
  modules: {
  }
})
