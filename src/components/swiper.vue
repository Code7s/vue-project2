<template>
  <mt-swipe :auto="3000">
    <mt-swipe-item v-for="item in bannerList" :key="item.id">
      <img :src="item.img||item.src" :class="{full: isfull}" />
    </mt-swipe-item>
  </mt-swipe>
</template>

<script>
export default {
  props: ['bannerList', 'isfull']
}
</script>
<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    text-align: center;
    img {
      height: 100%;
    }
    .full{
      width: 100%;
    }
  }
}
</style>
