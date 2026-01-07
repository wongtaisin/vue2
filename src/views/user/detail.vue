<template>
  <section class="page-user-detail">
    <van-cell-group>
      <user-header></user-header>
      <van-cell is-link title="姓名" value="内容" />
      <van-cell is-link title="账号" value="内容" />
      <van-cell is-link title="手机号" value="内容" />
      <van-field
        disabled
        input-align="right"
        label="密码"
        right-icon="arrow"
        type="password"
        v-model="password"
      />
    </van-cell-group>
  </section>
</template>

<script>
import userHeader from './template/detail/head'
export default {
  name: 'page-user-detail',
  components: {
    userHeader
  },
  data() {
    return {
      password: '898979879789'
    }
  },
  computed: {
    getDetail() {
      return this.$store.getters['shop/getDetail']
    }
  },
  methods: {
    loadData() {
      const data = {
        id: this.form.id
      }
      const _params = {
        paramsDate: data,
        callBack: () => {}
      }
      this.$store.dispatch('shop/getDetail', _params)
    }
  }
}
</script>

<style scoped lang="scss">
.page-user-detail {
  height: 100vh;
  background: white !important;
  .img {
    width: 40px;
    height: 40px;
  }
}
</style>
