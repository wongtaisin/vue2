<!--
 * @Author: wingddd wongtaisin1024@gmail.com
 * @Date: 2026-01-07 14:53:14
 * @LastEditors: wingddd wongtaisin1024@gmail.com
 * @LastEditTime: 2026-01-07 17:00:33
 * @FilePath: \vue2\src\views\home\404.vue
 * @Description:
 *
 * Copyright (c) 2026 by wongtaisin1024@gmail.com, All Rights Reserved.
-->
<template>
  <div class="mk-error">
    <p>{{ message }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// 计算错误信息，同时支持路由参数和查询参数
const message = computed(() => {
  return route.params.error || route.query.error || '您访问的路径不存在'
})
</script>

<style lang="scss" scoped>
.mk-error {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
