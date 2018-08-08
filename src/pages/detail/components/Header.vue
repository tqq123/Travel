<template>
  <div>
    <div class="header-abs" @click="back" v-show="showAbs">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      城市选择
      <div @click="back" class="iconfont header-back">&#xe624;</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    back () {
      this.$router.back()
    },
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        const opacity = top / 140
        // eslint-disable-next-line
        opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    // 解绑全局事件
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header-abs
    position: absolute
    left: .2rem
    top: .2rem
    width: .8rem
    height: .8rem
    line-height: .8rem
    border-radius: .4rem
    text-align: center
    background: rgba(0, 0, 0, .8)
    .back-icon
      color: #fff
      font-size: .4rem
  .header-fixed
    z-index: 99
    position: fixed
    top: 0
    right: 0
    left: 0
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    background: $bgColor
    font-size: .32rem
    .header-back
      position: absolute
      top: 0
      left: 0
      width: .64rem
      font-size: .4rem
      text-align: center
</style>
