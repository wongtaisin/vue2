<template>
  <section class="page-user">
    <div class="white top-0">
      <van-row @click="edit" align="center" type="flex">
        <van-col>
          <van-image lazy-load round src="https://img.yzcdn.cn/vant/cat.jpeg" />
        </van-col>
        <van-col class="va">
          <div>李多读都</div>
          <div>lisa123</div>
        </van-col>
      </van-row>
    </div>
  </section>
</template>

<script>

export default {
  name: 'page-user',
  components: {
  },
  data () {
    return {
    }
  },
  // created () { },
  // mounted () { },
  methods: {
    edit () {
      this.$router.push({
        path: '/user/detail'
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.page-user {
  .top-0 {
    height: 108px;
    .van-image {
      width: 60px;
      height: 60px;
      margin-left: 24px;
      margin-right: 16px;
    }
    .van-row--align-center {
      height: 108px;
    }
    .va {
      div {
        &:first-child {
          font-weight: bold;
        }
        &:last-child {
          margin-top: 8px;
          color: #999;
        }
      }
    }
  }
}
</style>
