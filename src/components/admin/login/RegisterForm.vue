<template>
  <div>
    <el-input
      placeholder="手机"
      prefix-icon="el-icon-mobile-phone"
      v-model="phone"
      size="medium"
      class="input"
    />
    <el-row
      class="captcha-row"
      type="flex"
      align="middle"
      justify="space-between"
    >
      <el-input
        placeholder="验证码"
        prefix-icon="el-icon-chat-dot-square"
        v-model="captcha"
        size="medium"
        class="input"
      />
      <el-button @click="sendCaptcha" size="medium">获取验证码</el-button>
    </el-row>
    <el-input
      placeholder="密码"
      prefix-icon="el-icon-lock"
      type="password"
      size="medium"
      v-model="password"
      class="input"
    />
    <el-input
      placeholder="确认密码"
      prefix-icon="el-icon-lock"
      type="password"
      size="medium"
      v-model="passwordConfirm"
      class="input"
    />
    <el-input
      placeholder="昵称"
      prefix-icon="el-icon-user-solid"
      v-model="username"
      size="medium"
      class="input"
    />
    <el-row class="input" type="flex" align="middle" justify="space-between">
      <el-checkbox v-model="agree">同意用户协议</el-checkbox>
      <el-button type="text" @click="toLogin">返回登陆</el-button>
    </el-row>
    <el-button
      class="submit"
      type="primary"
      size="medium"
      @click="submit"
      :loading="loading"
    >
      注册
    </el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      phone: '',
      captcha: '',
      password: '',
      passwordConfirm: '',
      username: '',
      agree: false,
      loading: false
    }
  },
  methods: {
    sendCaptcha () {
      this.$message('发送验证码')
    },
    toLogin () {
      if (this.loading) {
        return
      }
      this.$emit('to-login')
    },
    submit () {
      this.$emit('submit', {})
    }
  }
}
</script>

<style lang="scss" scoped>
.input {
  border-radius: 2px;
  margin-bottom: 15px;
}
.captcha-row {
  margin-bottom: 15px;
  .input {
    margin-bottom: 0;
    width: 0;
    flex-grow: 1;
  }
  .el-button {
    flex-shrink: 0;
    margin-left: 10px;
  }
}
.submit {
  width: 100%;
  border-radius: 2px;
}
</style>
