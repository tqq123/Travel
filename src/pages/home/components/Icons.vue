<template>
  <div class="icons">
    <swiper :options="swiperOption" v-if="list.length">
      <swiper-slide v-for="(page, index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <img class="icon-img-content" :src="item.imgUrl" alt="">
          <p>{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  },
  data () {
    return {
      swiperOption: {
        loop: false
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
    padding-top: .2rem
  .icons
    .icon
      overflow: hidden
      float: left
      height: 0
      width: 25%
      padding-bottom: 25%
      text-align: center
      img
        width: 1.1rem
        height: 1.1rem
        margin: .1rem
      p
        color: $darkTextColor
        nowrap()
</style>
