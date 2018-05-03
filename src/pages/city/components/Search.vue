<template>
  <div>
    <div class="search">
      <input type="text" placeholder="输入城市名或拼音" v-model="search"/>
    </div>
    <div class="search-content" ref="search" v-show="search">
      <ul>
        <li class="border-bottom" v-for="item in list" :key="item.id"
        @click="handleCityClick(item.name)">{{item.name}}</li>
        <li class="border-bottom" v-show="hasNoData">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapMutations} from 'vuex'
export default {
  props: {
    cities: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      search: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  methods: {
    back () {
      this.$router.back()
    },
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search)
  },
  watch: {
    search () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.search) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((item) => {
            if (item.spell.indexOf(this.search) > -1 || item.name.indexOf(this.search) > -1) {
              result.push(item)
            }
          })
        }
        this.list = result
      }, 100)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .search
    height: .72rem
    background: $bgColor
    padding: 0 .1rem
    input
      box-sizing: border-box
      height: .62rem
      padding: 0 .1rem
      line-height: .62rem
      width: 100%
      text-align: center
      border-radius: .06rem
      color: #666
  .search-content
    z-index: 1
    position: absolute
    overflow: hidden
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    background: #eee
    ul
      li
        line-height: .62rem
        padding-left: .2rem
        color: #666
        background: #fff
</style>
