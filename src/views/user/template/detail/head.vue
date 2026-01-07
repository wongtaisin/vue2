<template>
  <section class="page-user-detail-head">
    <van-cell-group>
      <van-cell center is-link title="头像">
        <template #default>
          <van-image class="img" round src="https://img.yzcdn.cn/vant/cat.jpeg" />
        </template>
      </van-cell>
    </van-cell-group>
    <van-popup overlay-class="overlay" v-model="show">
      <van-image class="img" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      <van-button block color="#4C73F8">单色按钮</van-button>
    </van-popup>
  </section>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  },
  computed: {
    getDetail() {
      return this.$store.getters['shop/getDetail']
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.page-user-detail-head {
  .img {
    width: 80px;
    height: 80px;
  }
  .overlay {
    .img {
      width: 560px;
      height: 560px;
    }
  }
}
</style>
