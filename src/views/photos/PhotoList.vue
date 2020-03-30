<template>
  <div>
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            :class="['mui-control-item',category.id==0?'mui-active':'']"
            v-for="category in allcate"
            :key="category.id"
            @click="getImgList(category.id)"
          >{{category.title}}</a>
        </div>
      </div>
    </div>
    <ul class="imglist">
      <router-link :to="'/home/photoinfo/'+imgs.id" v-for="imgs in imgList" :key="imgs.id" tag="li">
        <img v-lazy="imgs.img_url" />
        <div class="img-title">
          <h4>{{imgs.title}}</h4>
          <p>{{imgs.zhaiyao}}</p>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
import mui from '../../assets/mui/js/mui.js'
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
      allcate: [],
      imgList: []
    }
  },
  methods: {
    getCategory () {
      this.$http.get('http://www.liulongbin.top:3005/api/getimgcategory').then(result => {
        if (result.data.status === 0) {
          result.data.message.unshift({ title: '全部', id: 0 })
          this.allcate = result.data.message
        } else {
          Toast('图片分类获取失败！')
        }
      })
    },
    getImgList (cateid) {
      this.$http.get('http://www.liulongbin.top:3005/api/getimages/' + cateid).then(result => {
        if (result.data.status === 0) {
          this.imgList = result.data.message
        }
      })
    }
  },
  created () {
    this.getCategory()
    this.getImgList(0)
  },
  mounted () {
    mui('.mui-scroll-wrapper').scroll({
      deceleration: 0.0005
    })
  }
}
</script>

<style lang="scss" scoped>
* {
  touch-action: pan-y;
}
.imglist {
  list-style: none;
  margin: 0;
  padding: 10px 10px 50px;
  li {
    background-color: #ccc;
    margin-bottom: 10px;
    box-shadow: 0 0 10px rgb(100, 100, 100);
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    img {
      width: 100%;
      vertical-align: middle;
      margin: 0 auto;
      position: relative;
    }
    .img-title {
      width: 100%;
      color: #fff;
      background: rgba(0, 0, 0, 0.4);
      border: 5px solid rgba(0, 0, 0, 0);
      overflow: hidden;
      position: absolute;
      left: 0;
      bottom: 0;
      max-height: 88px;
      h4 {
        line-height: 20px;
        font-size: 14px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      p {
        color: #fff;
        font-size: 12px;
        line-height: 16px;
        margin: 0;
      }
    }
  }
}
</style>
