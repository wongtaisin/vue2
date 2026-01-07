<template>
  <div class="mk-error">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'error',
  computed: {
    message() {
      return this.$route.params.error || '您访问的路径不存在'
    }
  },
  created() {
    const query = this.$route.query
    if (Object.keys(query).length !== 0) {
      this.$router.replace({
        name: 'error',
        params: query
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.mk-error {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
