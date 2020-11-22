<template>
  <div @keydown.enter="submit">
    <el-input
      placeholder="请输入用户名"
      prefix-icon="el-icon-user-solid"
      v-model="username"
      size="medium"
      class="input"
    />
    <el-input
      placeholder="请输入密码"
      prefix-icon="el-icon-lock"
      type="password"
      size="medium"
      v-model="password"
      class="input"
    />
    <el-row class="input" type="flex" align="middle" justify="space-between">
      <el-checkbox v-model="remember">记住账号</el-checkbox>
      <el-button type="text" @click="toRegister">注册账号</el-button>
    </el-row>
    <el-button
      class="submit"
      type="primary"
      size="medium"
      @click="submit"
      :loading="loading"
    >
      登陆
    </el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      remember: false,
      loading: false,
      username: 'admin',
      password: '123456789'
    }
  },
  methods: {
    toRegister () {
      if (this.loading) {
        return
      }
      this.$emit('to-register')
    },
    submit () {
      // 组件内只做简单校验，登陆逻辑放在view中，成功/失败后执行回调关闭loading
      if (this.username === '' || this.password === '') {
        this.$message({
          message: '请输入用户名/密码',
          type: 'warning'
        })
        return
      }
      this.loading = true
      this.$emit(
        'submit',
        {
          username: this.username,
          password: this.password
        },
        () => (this.loading = false)
      )
    }
  }
}
</script>

<style scoped>
.input {
  border-radius: 2px;
  margin-bottom: 15px;
}
.submit {
  width: 100%;
  border-radius: 2px;
}
</style>
