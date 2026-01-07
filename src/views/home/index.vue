<template>
  <div class="page-index">
    首页
    <router-view></router-view>
    <common-scroll :options="options" ref="commonScroll">
      <template v-slot:content>
        <div class="content"></div>
      </template>
    </common-scroll>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 数据定义
const options = ref({
  top: 12,
  bottom: 17
})
</script>

<style lang="scss" scoped>
.page-index {
}
</style>
