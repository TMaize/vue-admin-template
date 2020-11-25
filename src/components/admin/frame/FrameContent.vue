<template>
  <div class="content" :class="{ 'menu-is-show': menuIsShow }">
    <div class="router-view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    menuIsShow () {
      return this.$store.state.settings.menuIsShow
    }
  }
}
</script>

<style scoped>
.content {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
  padding-top: 50px;
  padding-left: 0px;
  transition: padding-left 600ms;
}
.router-view {
  width: 100%;
  height: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
@media screen and (min-width: 768px) {
  .content.menu-is-show {
    padding-left: 220px;
  }
}
</style>
