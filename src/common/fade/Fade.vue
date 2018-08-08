<template>
  <transition name="fade">
    <slot></slot>
  </transition>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
  .fade-enter, .fade-leave-to
    opacity: 0
  .fade-enter-active, .fade-leave-active
    transition: all .5s
</style>
