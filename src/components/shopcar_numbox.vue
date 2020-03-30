<template>
  <div class="mui-numbox" data-numbox-step="1" data-numbox-min="0">
    <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
    <input
      class="mui-numbox-input"
      type="number"
      ref="numbox"
      :value="count"
      @change="countChange"
      readonly
    />
    <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
  </div>
</template>

<script>
import mui from '../assets/mui/js/mui.js'
export default {
  mounted () {
    mui('.mui-numbox').numbox()
  },
  methods: {
    countChange () {
      this.$store.commit('updateShopNum', {
        id: this.shopid,
        count: this.$refs.numbox.value
      })
    }
  },
  props: ['shopid', 'count']
}
</script>
