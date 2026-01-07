<template>
  <section class="page-login">
    <div class="bg-contain">
      <div class="title">
        <p>企业监督管理平台</p>
        <p>注册</p>
      </div>
      <van-form @submit="onSubmit" class="form">
        <van-field
          :rules="[{ required: true, message: '请填写用户名' }]"
          clearable
          left-icon="username iconfont icongerenzhongxin_n"
          name="用户名"
          placeholder="请输入姓名（必填）"
          v-model="username"
        />
        <van-field
          :rules="[{ pattern, message: '请填写正确手机号' }]"
          @input="inputPhone"
          clearable
          left-icon="phone iconfont icongerenzhongxin_n"
          maxlength="11"
          name="手机号"
          placeholder="请输入手机号（必填）"
          v-model="phone"
        />
        <van-field
          :rules="[{ required: true, message: '请填写密码' }]"
          clearable
          left-icon="password iconfont icongerenzhongxin_n"
          name="密码"
          placeholder="请输入密码（最少6位数）"
          type="password"
          v-model="password"
        />
        <van-field
          :rules="[{ required: true, message: '请填写验证码' }]"
          @input="inputSms"
          center
          clearable
          left-icon="sms iconfont icongerenzhongxin_n"
          name="验证码"
          placeholder="请输入验证码"
          v-model="sms"
        >
          <template #button>
            <van-button
              @click="mesCode"
              color="#4c73f8"
              native-type="button"
              size="small"
              v-if="show"
              >发送验证码</van-button
            >
            <van-button color="#D3D6DD" disabled native-type="button" plain size="small" v-else>{{
              codeText
            }}</van-button>
          </template>
        </van-field>
        <div style="margin-top: 9.33333vw">
          <van-button block native-type="submit" type="info" v-if="show1">提交</van-button>
          <van-button block color="#DFE1E6" disabled v-else>提交</van-button>
        </div>
      </van-form>
      <div class="protocol">
        点击提交，即表示你已阅读并同意
        <span>《墨点狗用户注册协议》</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      username: '',
      phone: '',
      password: '',
      sms: '',
      codeText: '发送验证码',
      show: false,
      show1: false,
      pattern: /^1[3456789]\d{9}$/
    }
  },
  computed: {},
  methods: {
    onSubmit(values) {
      console.log('submit', values)
    },
    inputPhone(val) {
      // console.log(this.phone, val.length)
      if (!this.pattern.test(val)) this.show = false
      else this.show = true
    },
    inputSms(val) {
      // console.log(val)
      if (val.length === 0) this.show1 = false
      else this.show1 = true
    },
    mesCode() {
      // this.$toast('发送60s')
      this.codeText = 60
      this.show = false
      const code = setInterval(() => {
        --this.codeText
        if (this.codeText === 0)
          clearInterval(code), (this.codeText = '发送验证码'), (this.show = true)
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
.page-login {
  width: 750px;
  height: 100vh;
  background: white !important;

  .bg-contain {
    margin-top: 120px;

    .title {
      margin-left: 96px;
      p {
        &:first-child {
          font-size: 48px;
          color: #4c73f8;
        }
        &:last-child {
          margin: 32px 0 60px;
          font-size: 36px;
          color: #141733;
        }
      }
    }

    .form {
      margin: 0 68px;
    }

    .protocol {
      margin-top: 40px;
      font-size: 24px;
      color: #babec9;
      text-align: center;

      span {
        color: #4c73f8;
      }
    }
  }
}
</style>
