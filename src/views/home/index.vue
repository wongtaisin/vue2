<template>
  <div class="page-index">
    <common-scroll :options="options" ref="commonScroll">
      <div slot="content">
        <div class="content">
          <transition name="slide-fade">
            <router-view></router-view>
          </transition>
        </div>
      </div>
    </common-scroll>
  </div>
</template>

<script>
export default {
  name: 'index',
  metaInfo: {
    title: 'Home'
  },
  data() {
    return {
      options: {
        top: 12,
        bottom: 17
      }
    }
  },
  methods: {
    loadData() {
      console.log('a')
    }
  }
}
</script>

<style lang="scss" scoped>
.page-index {
}
</style>
