<template>
  <div class="buy-container">
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :bannerList="bannerList" :isfull="false"></swiper>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">{{info.title}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>
            售价：
            <span class="new-price">￥{{info.sell_price}}</span>&nbsp;&nbsp;
            <del>￥{{info.market_price}}</del>
          </p>
          <p>
            购买数量：
            <numbox @countChange="getNumboxCount" :max="info.stock_quantity"></numbox>
          </p>
          <mt-button type="danger" size="small">立即购买</mt-button>
          <mt-button type="primary" size="small" @click="addToShopCar">加入购物车</mt-button>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：{{info.goods_no}}</p>
          <p>库存信息：{{info.stock_quantity}}</p>
          <p>上架时间：{{info.add_time|MDHms}}</p>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">详情介绍</div>
      <buyintorduce></buyintorduce>
    </div>
    <div class="mui-card m-comment">
      <buycomment :id="id"></buycomment>
    </div>
    <transition @before-enter="beforEnter" @enter="enter" @after-enter="afterEnter">
      <div class="ball" v-show="ballFlag" ref="ball">{{count}}</div>
    </transition>
  </div>
</template>

<script>
import swiper from "../../components/swiper.vue";
import numbox from "../../components/buy_numbox.vue";
import buyintorduce from "../buy/BuyIntroduce.vue";
import buycomment from "../../components/comment.vue";
export default {
  data() {
    return {
      id: parseInt(this.$route.params.id),
      bannerList: [],
      info: [],
      ballFlag: false,
      count: 1
    };
  },
  created() {
    this.getBanner();
    this.getInfo();
  },
  methods: {
    getBanner() {
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        if (result.data.status === 0) {
          this.bannerList = result.data.message;
        }
      });
    },
    getInfo() {
      this.$http.get("api/goods/getinfo/" + this.id).then(result => {
        if (result.data.status === 0) {
          this.info = result.data.message[0];
        }
      });
    },
    beforEnter(el) {
      el.style.transform = "translate(0,0)";
    },
    enter(el, done) {
      const ballPosition = this.$refs.ball.getBoundingClientRect();
      const badgePosition = document
        .getElementById("badge")
        .getBoundingClientRect();
      const xDist = badgePosition.left - ballPosition.left;
      const yDist = badgePosition.top - ballPosition.top;
      el.offsetWidth;
      el.style.transform = `translate(${xDist}px,${yDist}px)`;
      el.style.transition = "all .5s cubic-bezier(.4,-0.3,1,.68)";
      done();
    },
    afterEnter(el) {
      this.ballFlag = !this.ballFlag;
    },
    getNumboxCount(data) {
      this.count = data
    },
    addToShopCar() {
      var carData = {
        id: this.id,
        num: parseInt(this.count),
        price: this.info.sell_price,
        option: true
      };
      this.$store.commit("addToCar", carData);
      this.ballFlag = !this.ballFlag;
    },
  },
  components: {
    swiper,
    numbox,
    buyintorduce,
    buycomment
  }
}
</script>

<style lang="scss" scoped>
.buy-container {
  background-color: #eee;
  overflow: hidden;
  padding-bottom: 50px;
  .mint-swipe {
    height: 200px;
    .mint-swipe-item {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .mint-button--small {
    margin-right: 10px;
  }
  .new-price {
    color: red;
    font-size: 20px;
  }
  .m-comment {
    padding: 0 5px;
  }
  .ball {
    width: 19px;
    height: 19px;
    border-radius: 50%;
    background-color: red;
    font-size: 10px;
    line-height: 19px;
    text-align: center;
    color: #fff;
    position: absolute;
    left: 150px;
    top: 410px;
    z-index: 99;
  }
}
</style>
