<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
        <img :src="item.imgUrl" alt="">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
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
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1709/28/288fbeccc335f774a3.img.jpg_200x200_4a81bde9.jpg',
          title: '11111111111111111111111111111111111',
          desc: '11111111111111111111111111111111111111111'
        },
        {
          id: '002',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1709/28/288fbeccc335f774a3.img.jpg_200x200_4a81bde9.jpg',
          title: '11111111111111111111111111111111111',
          desc: '11111111111111111111111111111111111'
        },
        {
          id: '003',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1709/28/288fbeccc335f774a3.img.jpg_200x200_4a81bde9.jpg',
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
    overflow: hidden
    display: flex
    height: 1.9rem
    margin: .2rem
    padding-bottom: .2rem
    img
      width: 1.7rem
      height: 1.7rem
      margin: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        nowrap()
      .item-desc
        line-height: .4rem
        color: #ccc
        nowrap()
      .item-button
        line-height: .44rem
        margin-top: .16rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff
</style>
