<template>
  <section class="page-home">
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
    <van-dropdown-menu>
      <van-dropdown-item
        :options="options"
        @change="changeOption"
        icon="dropdown iconfont iconico_liebiao"
        v-model="value"
      />
    </van-dropdown-menu>
    <van-tabbar @change="onChange" active-color="#4C73F8" v-model="bottomNav">
      <van-tabbar-item icon="message iconfont iconxiaoxi_n" name="message">消息</van-tabbar-item>
      <van-tabbar-item icon="index iconfont iconshouye_s" name="index">首页</van-tabbar-item>
      <van-tabbar-item icon="friends iconfont icontongxunlu_n" name="friends"
        >通讯录</van-tabbar-item
      >
      <van-tabbar-item icon="user iconfont icongerenzhongxin_n" name="user"
        >个人中心</van-tabbar-item
      >
    </van-tabbar>
  </section>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      options: [
        { text: '全部商品', value: 0, icon: 'https://img.yzcdn.cn/vant/cat.jpeg' },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
      ],
      value: 0,
      bottomNav: 'index'
    }
  },
  methods: {
    onChange(index) {
      console.log(index)
    },
    changeOption() {
      console.log('12')
    },
    handleChange(url) {
      this.$router.push(url)
    }
  }
}
</script>

<style lang="scss" scoped>
.page-home {
  width: 750px;
  min-height: 100%;
  font-size: 56px;
}
</style>
