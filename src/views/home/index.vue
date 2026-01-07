<template>
  <div class="page-index">
    <router-view></router-view>
    <common-scroll :options="options" ref="commonScroll">
      <template v-slot:content>
        <div class="content">首页</div>
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
  width: 750px;
}
</style>
