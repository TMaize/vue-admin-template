<template>
  <div class="frame" :class="{ 'menu-hide': menuHide }">
    <frame-sidebar />
    <frame-header @action="handleHeaderAction" />
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import FrameHeader from '../components/admin/frame/FrameHeader.vue'
import FrameSidebar from '../components/admin/frame/FrameSidebar.vue'

export default {
  components: {
    FrameHeader,
    FrameSidebar
  },
  methods: {
    handleHeaderAction (name) {
      if (name === 'logout') {
        this.$router.replace({ name: 'login' })
        return
      }
      if (name === 'toggle-menu') {
        this.$store.commit('settings/TOGGLE_MENU')
        return
      }
      this.$message(name)
    }
  },
  computed: {
    menuHide () {
      return this.$store.state.settings.menuHide
    }
  }
}
</script>
<style lang="scss" scoped>
.frame {
  height: 100vh;
  width: 100%;
  padding-top: 50px;
  padding-left: 220px;
  box-sizing: border-box;
  overflow: hidden;
  transition: padding-left 220ms linear;
  .content {
    width: 100%;
    height: 100%;
    overflow: auto;
  }
  ::v-deep {
    > .menu {
      transition: left 220ms linear;
    }
    > .header {
      transition: left 220ms linear;
    }
  }
}

.menu-hide {
  padding-left: 0;
  ::v-deep {
    > .menu {
      left: -220px;
    }
    > .header {
      left: 0;
    }
  }
}
</style>
