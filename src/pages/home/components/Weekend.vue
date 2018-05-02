<template>
  <div>
    <div class="recommend-title">周末去哪儿</div>
    <ul v-if="list.length">
      <li class="item" v-for="item in list" :key="item.id">
        <div class="item-img">
          <img :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
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
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .recommend-title
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item
    border-bottom: .1rem solid #f5f5f5
  .item-img
    overflow: hidden
    height: 0
    padding-bottom: 38%
    img
      width: 100%
  .item-info
    padding: .2rem
    .item-title
      line-height: .54rem
      font-size: .32rem
      nowrap()
    .item-desc
      line-height: .4rem
      color: #616161
      nowrap()
</style>
