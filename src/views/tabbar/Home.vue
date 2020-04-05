<template>
  <div>
    <swiper :bannerList="bannerList" :isfull="true"></swiper>
    <ul id="sub-nav" class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/news">
          <img src="../../assets/images/news.png" alt />
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/image">
          <img src="../../assets/images/image.png" alt />
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/buy">
          <img src="../../assets/images/buy.png" alt />
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/feedback">
          <img src="../../assets/images/feedback.png" alt />
          <div class="mui-media-body">留言反馈</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/video">
          <img src="../../assets/images/video.png" alt />
          <div class="mui-media-body">视频专区</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/about">
          <img src="../../assets/images/contact.png" alt />
          <div class="mui-media-body">联系我们</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import swiper from "../../components/swiper.vue";
export default {
  data() {
    return {
      bannerList: [
        {
          id: 1,
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586089391615&di=2b84e4ae7a12672d4ed8a928438a9867&imgtype=0&src=http%3A%2F%2Fimg1.sooshong.com%2Fpics%2F201712%2F7%2F2017127104231990.jpg"
        },
        {
          id: 2,
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586089117337&di=ee88488a791c2b4e3219127bc44257ec&imgtype=0&src=http%3A%2F%2Fstatic.open-open.com%2Flib%2FuploadImg%2F20170812%2F20170812080605_40.png"
        },
        {
          id: 3,
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586089006809&di=59975162057e28e0c67ef3df8b6fefd0&imgtype=0&src=http%3A%2F%2Fimg.xz7.com%2Fup%2F2017-12%2F20171219651.jpg"
        }
      ]
    };
  },
  methods: {
    // getBanner() {
    //   this.$http
    //     .get("http://www.liulongbin.top:3005/api/getlunbo")
    //     .then(result => {
    //       if (result.data.status === 0) {
    //         this.bannerList = result.data.message;
    //       } else {
    //         Toast("加载轮播图失败");
    //       }
    //     });
    // }
  },
  components: {
    swiper
  },
  created() {
    // this.getBanner();
  }
};
</script>

<style lang="scss" scoped>
#sub-nav {
  background: white;
  border: none;
  .mui-table-view-cell {
    border: none;
    img {
      width: 100%;
    }
    .mui-media-body {
      font-size: 14px;
    }
  }
}
</style>
