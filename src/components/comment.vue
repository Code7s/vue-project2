<template>
  <div class="comment-box">
    <h3>发表评论:</h3>
    <textarea placeholder="请输入评论内容(120字)..." maxlength="120" v-model="msg"></textarea>
    <mt-button class="mint-button mint-button--primary mint-button--large" @click="postComment">评论</mt-button>
    <div class="comment-list">
      <div class="cmt-item" v-for="comment in commentList" :key="comment.index">
        <p class="cmt-title">
          {{comment.user_name}}
          <span>{{comment.add_time|MDHms}}</span>
        </p>
        <div class="cmt-body">{{comment.content}}</div>
      </div>
    </div>
    <mt-button class="mint-button mint-button--danger mint-button--large" @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
      commentList: [],
      msg: '',
      pageIndex: 1,
      id: this.$route.params.id
    }
  },
  methods: {
    getComments () {
      this.$http
        .get('api/getcomments/' + this.id + '?pageindex=' + this.pageIndex)
        .then(result => {
          if (result.data.status === 0) {
            this.commentList = this.commentList.concat(result.data.message)
          } else {
            Toast('加载评论列表失败')
          }
        })
    },
    postComment () {
      if (this.msg.trim().length === 0) {
        return Toast('评论内容不能为空！')
      }
      this.$http
        .post('api/postcomment/' + this.id, {
          content: this.msg.trim()
        })
        .then(result => {
          if (result.data.status === 0) {
            var cmt = {
              user_name: '匿名用户',
              add_time: Date.now(),
              content: this.msg.trim()
            }
            this.commentList.unshift(cmt)
            this.msg = ''
          }
        })
    },
    getMore () {
      this.pageIndex++
      this.getComments()
    }
  },
  props: ['newsid'],
  created () {
    this.getComments()
  }
}
</script>

<style lang="scss" scoped>
.comment-box {
  padding-bottom: 15px;
  h3 {
    color: black;
    font-size: 17px;
    font-weight: normal;
    font-family: 'Helvetica Neue',Helvetica,sans-serif;
    padding: 10px 0;
    border-bottom: 1px solid #eee;
  }
  textarea {
    margin-top: 15px;
  }
  .comment-list {
    .cmt-item {
      color: #666;
      padding: 10px 0;
      border-bottom: 1px dashed #eee;
    }
    .cmt-title {
      color: #189bff;
      span {
        color: rgb(206, 206, 206);
      }
    }
  }
  .mint-button {
    margin: 15px 0;
  }
}
</style>
