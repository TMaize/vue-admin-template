<template>
  <div>
    <transition name="slide">
      <div class="menu" v-show="menuIsShow">
        <h1>XXX 管理系统</h1>
        <el-menu class="list" :default-active="active" @select="handleSelect">
          <frame-sidebar-item
            v-for="route in routes"
            :key="route.path"
            :route="route"
          />
        </el-menu>
      </div>
    </transition>
    <transition name="fade">
      <div class="bg" @click="closeMenu" v-if="menuIsShow"></div>
    </transition>
  </div>
</template>

<script>
import FrameSidebarItem from './FrameSidebarItem.vue'
export default {
  components: {
    FrameSidebarItem
  },
  data () {
    return {
      active: '/'
    }
  },
  computed: {
    routes () {
      const routes = this.$router.options.routes
      return routes.filter(item => item.meta && item.meta.menu === true)
    },
    menuIsShow () {
      return this.$store.state.settings.menuIsShow
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      if (this.$route.path === key) {
        return
      }
      this.$router.push({ path: key })
    },
    closeMenu () {
      this.$store.commit('settings/MENU_SHOW', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  position: fixed;
  z-index: 1003;
  top: 0;
  left: 0;
  bottom: 0;
  width: 220px;
  overflow: hidden;
  background-color: #20222a;
  display: flex;
  flex-flow: column nowrap;
  user-select: none;
  transition: left 600ms;

  > h1 {
    height: 50px;
    font-size: 16px;
    font-weight: normal;
    cursor: default;
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    color: rgba(255, 255, 255, 0.8);
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
  }
  > .list {
    background-color: transparent;
    flex-grow: 1;
    height: 0;
    overflow: auto;
    border-right: none;

    &::-webkit-scrollbar {
      display: none;
    }

    ::v-deep {
      .el-menu-item {
        color: rgba(255, 255, 255, 0.7);
        &.is-active {
          color: rgba(255, 255, 255, 1);
          background-color: transparent !important;
          // background-color: #009688 !important;
        }
        &:hover {
          color: rgba(255, 255, 255, 1);
          background-color: transparent;
        }
      }
      .el-submenu {
        &.is-active {
          > .el-submenu__title {
            color: rgba(255, 255, 255, 1);
          }
        }
        > .el-submenu__title {
          color: rgba(255, 255, 255, 0.7);
          &:hover {
            background-color: transparent;
          }
        }
        .el-menu-item-group__title {
          display: none;
        }
        > .el-menu {
          background-color: #16181d;
        }
      }
    }
  }
}
.bg {
  position: fixed;
  z-index: 1002;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.13);
  transition: background-color 660ms;
}
@media screen and (min-width: 768px) {
  .bg {
    display: none;
  }
}
.slide-enter,
.slide-leave-to {
  left: -220px;
}
.fade-enter,
.fade-leave-to {
  background-color: rgba(0, 0, 0, 0);
}
</style>
