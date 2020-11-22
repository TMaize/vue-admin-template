<template>
  <div class="header">
    <div class="left">
      <div class="icon-btn" @click="sendAction('toggle-menu')">
        <i :class="menuHide ? 'el-icon-s-unfold' : 'el-icon-s-fold'"></i>
      </div>
      <div class="icon-btn" @click="sendAction('fresh-route')">
        <i class="el-icon-refresh-right"></i>
      </div>
    </div>
    <div class="right">
      <user-info-popover @action="sendAction" />
    </div>
  </div>
</template>

<script>
import UserInfoPopover from './UserInfoPopover.vue'
export default {
  components: {
    UserInfoPopover
  },
  methods: {
    sendAction () {
      this.$emit('action', ...arguments)
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
.header {
  position: fixed;
  z-index: 1;
  top: 0;
  left: 220px;
  right: 0;
  height: 50px;
  background-color: #ffffff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  user-select: none;
  display: flex;
  justify-content: space-between;

  > .left {
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    flex-grow: 1;
    > .icon-btn {
      cursor: pointer;
      height: 100%;
      width: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      color: #333333;
      transition: background-color 400ms linear;
      background-color: rgba(0, 0, 0, 0);

      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
      }
    }
  }
  > .right {
    padding-left: 20px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    > * {
      flex-shrink: 0;
    }
  }
}
</style>
