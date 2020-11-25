<template>
  <div class="frame">
    <frame-sidebar />
    <frame-header @action="handleHeaderAction" />
    <frame-content />
  </div>
</template>

<script>
import FrameHeader from '../components/admin/frame/FrameHeader.vue'
import FrameSidebar from '../components/admin/frame/FrameSidebar.vue'
import FrameContent from '../components/admin/frame/FrameContent.vue'

export default {
  components: {
    FrameHeader,
    FrameSidebar,
    FrameContent
  },
  methods: {
    handleHeaderAction (name) {
      if (name === 'logout') {
        this.$router.replace({ name: 'login' })
        return
      }
      if (name === 'toggle-menu') {
        this.$store.commit('settings/MENU_SHOW', !this.menuIsShow)
        return
      }
      this.$message(name)
    }
  },
  computed: {
    menuIsShow () {
      return this.$store.state.settings.menuIsShow
    }
  }
}
</script>
<style lang="scss" scoped>
.frame {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
}
</style>
