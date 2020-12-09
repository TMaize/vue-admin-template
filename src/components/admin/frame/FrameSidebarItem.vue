<template>
  <el-menu-item v-if="!hasSubRoutes" :index="basePath">
    <i :class="route.meta.icon"></i>
    <span>{{ route.meta.title }}</span>
  </el-menu-item>
  <el-submenu v-else-if="hasSubRoutes" :index="basePath">
    <template slot="title">
      <i :class="route.meta.icon"></i>
      <span>{{ route.meta.title }}</span>
    </template>
    <el-menu-item-group>
      <frame-sidebar-item
        v-for="subRoute in subRoutes"
        :key="joinPath([basePath, subRoute.path])"
        :route="subRoute"
      />
    </el-menu-item-group>
  </el-submenu>
</template>
<script>
export default {
  name: 'FrameSidebarItem',
  props: {
    route: {
      type: Object,
      required: true
    }
  },
  computed: {
    basePath () {
      const arr = []
      let p = this
      // TODO 判断逻辑不太合理，如何判断两个实例是同一个组件
      // 向上查找，认为含有 p.route.path的就是FrameSidebarItem组件
      while (p.$parent !== p.$root) {
        if (p.route && p.route.path !== undefined) {
          arr.unshift(p.route.path)
        }
        p = p.$parent
      }
      return this.joinPath(arr)
    },
    subRoutes () {
      return this.route.children || []
    },
    hasSubRoutes () {
      let subRoutes = this.subRoutes
      subRoutes = subRoutes.filter(
        item => item.meta && item.meta.menu === true
      )
      return subRoutes.length > 0
    }
  },
  methods: {
    joinPath (arr) {
      return arr.join('/').replace(/\/+/g, '/')
    }
  }
}
</script>

<style></style>
