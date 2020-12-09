<template>
  <el-popover placement="bottom-end" trigger="click" v-model="visible">
    <template slot="reference">
      <div class="summary">
        <el-avatar :src="headImage" fit="cover" class="headimg"/>
        <i class="el-icon-caret-bottom"></i>
      </div>
    </template>
    <div class="user-info">
      <el-avatar :src="headImage" fit="cover" />
      <span class="nickname">{{ username }}</span>
    </div>
    <ul class="menu-list">
      <el-dropdown-item
        icon="el-icon-user"
        @click.native="sendAction('show-user-info')"
      >
        基本资料
      </el-dropdown-item>
      <el-dropdown-item
        icon="el-icon-s-operation"
        @click.native="sendAction('update-user-pwd')"
      >
        修改密码
      </el-dropdown-item>
      <el-dropdown-item
        icon="el-icon-switch-button"
        divided
        @click.native="sendAction('logout')"
      >
        退出系统
      </el-dropdown-item>
    </ul>
  </el-popover>
</template>

<script>
import headImage from '../../../assets/img/head.png'
export default {
  data () {
    return {
      username: 'Administrator',
      headImage: headImage,
      visible: false
    }
  },
  methods: {
    sendAction (name) {
      this.$emit('action', name)
    }
  }
}
</script>

<style scoped>
.summary {
  display: flex;
  align-items: center;
  height: 50px;
  padding-right: 18px;
}
.summary .headimg {
  border-radius: 50%;
  border: 1px solid rgb(242, 242, 242);
  margin-right: 5px;
  width: 35px;
  height: 35px;
  box-sizing: border-box;
}
.user-info {
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  user-select: none;
}
.user-info .el-avatar {
  flex-shrink: 0;
  margin-right: 10px;
}
.user-info .nickname {
  width: 0;
  flex-grow: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.menu-list >>> .el-dropdown-menu__item {
  padding: 0 10px;
}
.menu-list >>> .el-dropdown-menu__item:focus,
.menu-list >>> .el-dropdown-menu__item:not(.is-disabled):hover {
  background-color: red;
  background-color: transparent;
}
</style>
