<template>
  <div class="newsinfo">
    <h3 class="title">{{newsInfo.title}}</h3>
    <p class="sub-title">
      <span>发布时间:{{newsInfo.add_time|dateFormat}}</span>
      <span>点击{{newsInfo.click}}次</span>
    </p>
    <div class="content" v-html="newsInfo.content"></div>
    <comment-box :newsid="this.id"></comment-box>
  </div>
</template>

<script>
import comment from '../../components/comment.vue'
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
      id: this.$route.params.id,
      newsInfo: {}
    }
  },
  methods: {
    getNewsInfo () {
      this.$http.get('api/getnew/' + this.id).then(result => {
        if (result.data.status === 0) {
          this.newsInfo = result.data.message[0]
        } else {
          Toast('加载新闻详情失败')
        }
      })
    }
  },
  components: {
    'comment-box': comment
  },
  created () {
    this.getNewsInfo()
  }
}
</script>

<style lang="scss" scoped>
.newsinfo {
  padding: 0 5px 50px;
  .title {
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
  }
  .sub-title {
    font-size: 12px;
    color: #189bff;
    display: flex;
    justify-content: space-between;
    padding-bottom: 2px;
    border-bottom: 1px solid #eee;
  }
  .content {
    padding: 15px 0;
  }
}
</style>
