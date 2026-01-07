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

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import userHeader from './template/detail/head.vue'

// 数据定义
const password = ref<string>('898979879789')

// 表单数据（这里form未在原模板中使用，保持原有逻辑）
const form = ref<{ id?: string | number }>({})

// 获取store
const store = useStore()

// 计算属性
const getDetail = computed(() => {
  return store.getters['shop/getDetail']
})

// 方法定义
const loadData = () => {
  const data = {
    id: form.value.id
  }
  const _params = {
    paramsDate: data,
    callBack: () => {
      console.log('getDetail')
    }
  }
  store.dispatch('shop/getDetail', _params)
}
</script>

<style scoped lang="scss">
.page-user-detail {
  height: 100vh;
  background: white !important;
  .img {
    width: 80px;
    height: 80px;
  }
}
</style>
