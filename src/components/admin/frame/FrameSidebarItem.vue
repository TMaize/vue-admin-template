<template>
  <el-menu-item v-if="isMenu && !hasChildren" :index="basePath + route.path">
    <i :class="route.meta.icon"></i>
    <span>{{route.meta.title}}</span>
  </el-menu-item>
  <el-submenu v-else-if="isMenu && hasChildren" :index="basePath + route.path">
    <template slot="title">
      <i :class="route.meta.icon"></i>
      <span>{{route.meta.title}}</span>
    </template>
    <el-menu-item-group>
      <frame-menu-item  v-for="route in routes" :key="route.path" :route="route" :base-path="route.path"/>
    </el-menu-item-group>
  </el-submenu>
</template>
// TODO :index 计算错误
<script>
export default {
  name: 'FrameMenuItem',
  props: {
    route: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  computed: {
    isMenu () {
      return this.route.meta.menu === true
    },
    routes () {
      return this.route.children
    },
    hasChildren () {
      let children = this.route.children || []
      children = children.filter(item => item.meta.menu === true)
      return children.length > 0
    }
  }
}
</script>

<style></style>
