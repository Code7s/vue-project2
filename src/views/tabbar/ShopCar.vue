<template>
  <div class="shop-car">
    <div class="mui-card" v-for="(item,index) in cardata" :key="item.id">
      <div class="shopcar-list">
        <input v-model="$store.getters.getOption[item.id]" type="checkbox" @change="updateOption(item.id)"/>
        <img :src="item.thumb_path" alt />
        <div class="info">
          <h3>{{item.title}}</h3>
          <p>
            <span>¥{{item.sell_price}}</span>
            <shopcarnum :count="$store.getters.getShopCount[item.id]" :shopid="item.id"></shopcarnum>
            <a href="#" @click.prevent="remove(item.id,index)">删除</a>
          </p>
        </div>
      </div>
    </div>
    <div class="shop-total mui-card">
      <p>
        总计：
        <br />已勾选商品
        <span>{{$store.getters.getSum.allNum}}</span>件，总价：
        <span>¥{{$store.getters.getSum.allPrice}}</span>
      </p>
      <button>结算</button>
    </div>
  </div>
</template>
<script>
import shopcarnum from '../../components/shopcar_numbox.vue'
export default {
  data () {
    return {
      cardata: {}
    }
  },
  methods: {
    getShopData () {
      var idArr = []
      this.$store.state.car.forEach(item => idArr.push(item.id))
      if (idArr.length <= 0) {
        return false
      } else {
        this.$http
          .get('http://www.liulongbin.top:3005/api/goods/getshopcarlist/' + idArr.join(','))
          .then(result => {
            if (result.data.status === 0) {
              this.cardata = result.data.message
            }
          })
      }
    },
    remove (id, index) {
      this.cardata.splice(index, 1)
      this.$store.commit('removeShop', id)
    },
    updateOption (id) {
      this.$store.commit('updateOptions', { id, option: this.$store.getters.getOption[id] })
    }
  },
  created () {
    this.getShopData()
  },
  components: { shopcarnum }
}
</script>

<style lang="scss" scoped>
.shop-car {
  background-color: #eee;
  height: 100%;
  overflow: auto;
  .shopcar-list {
    padding: 5px;
    display: flex;
    align-items: center;
    input {
      width: 18px;
      height: 18px;
    }
    img {
      width: 60px;
      height: 60px;
      margin: 0 5px;
    }
    .info {
      h3 {
        font-size: 16px;
        max-width: 250px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      p {
        margin: 0;
        span {
          color: red;
          font-size: 20px;
        }
        a {
          margin-left: 10px;
        }
      }
    }
  }
  .shop-total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    input {
      width: 18px;
      height: 18px;
    }
    p {
      font-size: 14px;
      color: #555;
      margin: 0;
      span {
        font-size: 20px;
        color: red;
      }
    }
    button {
      width: 80px;
      height: 40px;
      background-color: red;
      color: #fff;
      border: none;
      font-size: 16px;
    }
  }
}
</style>
