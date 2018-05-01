<template>
  <div>
    <div class="recommend-title">周末去哪儿</div>
    <ul>
      <li class="item" v-for="item in recommendList" :key="item.id">
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
  data () {
    return {
      recommendList: [
        {
          id: '001',
          imgUrl: '//img1.qunarzz.com/sight/source/1505/4e/3e87ee62e59cdb.jpg_r_640x214_fe6cc902.jpg',
          title: '11111111111111111111111111111111111',
          desc: '11111111111111111111111111111111111111111'
        },
        {
          id: '002',
          imgUrl: '//img1.qunarzz.com/sight/source/1505/4e/3e87ee62e59cdb.jpg_r_640x214_fe6cc902.jpg',
          title: '11111111111111111111111111111111111',
          desc: '11111111111111111111111111111111111'
        },
        {
          id: '003',
          imgUrl: '//img1.qunarzz.com/sight/source/1505/4e/3e87ee62e59cdb.jpg_r_640x214_fe6cc902.jpg',
          title: '11111111111111111111111111111111111',
          desc: '11111111111111111111111111111111111'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .recommend-title
    line-height: .8rem
    margin-top: .2rem
    background: #eee
    text-indent: .2rem
  .item
    border-bottom: .1rem solid #f5f5f5
  .item-img
    overflow: hidden
    height: 0
    padding-bottom: 33.9%
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
