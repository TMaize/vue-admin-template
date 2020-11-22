<template>
  <el-row class="login" type="flex" justify="center" align="middle">
    <el-col class="container" :xs="18" :sm="12" :md="8" :xl="4">
      <h2>XXX Admin</h2>
      <p>XXX 单页面后台管理模板系统</p>
      <div class="form-body">
        <login-form
          v-if="isLogin"
          @to-register="isLogin = false"
          @submit="handleLogin"
        />
        <register-form
          v-if="!isLogin"
          @to-login="isLogin = true"
          @submit="handleRegister"
        />
      </div>
    </el-col>
  </el-row>
</template>

<script>
import LoginForm from '../../components/admin/login/LoginForm.vue'
import RegisterForm from '../../components/admin/login/RegisterForm.vue'
export default {
  components: {
    LoginForm,
    RegisterForm
  },
  data () {
    return {
      isLogin: true
    }
  },
  methods: {
    handleLogin (form, callback) {
      // 模拟请求
      setTimeout(() => {
        callback()
        this.$router.replace({ name: 'home' })
      }, 1000)
    },
    handleRegister (form, callback) {
      this.$message('注册')
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  height: 100%;
  overflow: auto;
}
.container {
  > h2 {
    text-align: center;
    margin-bottom: 10px;
    font-weight: 300;
    font-size: 30px;
    color: #000;
  }
  > p {
    text-align: center;
    color: #999;
  }
  > .form-body {
    padding: 20px 0;
  }
}
</style>
