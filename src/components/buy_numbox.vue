<template>
  <div class="mui-numbox" data-numbox-step="1" data-numbox-min="0">
    <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
    <input class="mui-numbox-input" type="number" ref="numbox" value="1" @change="countChange" />
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
      this.$emit('countChange', this.$refs.numbox.value)
    }
  },
  props: ['max'],
  watch: {
    max: function (newV, oldV) {
      mui('.mui-numbox').numbox().setOption('max', newV)
    }
  }
}
</script>
