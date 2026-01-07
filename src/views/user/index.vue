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

<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const edit = (): void => {
  router.push({ path: '/user/detail' })
}
</script>

<style lang="scss" scoped>
.page-user {
  .top-0 {
    height: 216px;
    .van-image {
      width: 120px;
      height: 120px;
      margin-left: 48px;
      margin-right: 32px;
    }
    .van-row--align-center {
      height: 216px;
    }
    .va {
      div {
        &:first-child {
          font-weight: bold;
        }
        &:last-child {
          margin-top: 16px;
          color: #999;
        }
      }
    }
  }
}
</style>
