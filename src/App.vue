<template>
  <div id="app">
    <transition :name="moveName">
      <keep-alive>
        <router-view
          :data-page-id="$route.fullPath"
          @touchend.native="touchEnd"
          @touchstart.native="touchStart"
          class="app-view"
        ></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      moveName: '', // 页面滑动 name值
      startX: 0,
      endX: 0
    }
  },
  watch: {
    $route(to, from) {
      if (to.meta.grade < from.meta.grade) this.moveName = 'move-left'
      if (to.meta.grade > from.meta.grade) this.moveName = 'move-right'
      if (!from.name) this.moveName = ''
    }
  },
  mounted() {
    this.$nextTick(() => {
      // ios 键盘弹起失效问题
      document.body.addEventListener('focusout', () => {
        window.scrollTo(0, 0)
      })
    })
  },
  destroy() {
    document.body.removeEventListener('focusout', () => {
      window.scrollTo(0, 0)
    })
  },
  methods: {
    touchStart(e) {
      // 记录初始位置
      this.startX = e.touches[0].clientX
    },
    // 滑动结束
    touchEnd(e) {
      this.endX = e.changedTouches[0].clientX
      if (this.$route.meta.grade === 1) return false
      if (this.startX - this.endX > 160) console.log(e, '左滑')
      if (this.startX - this.endX < -160) {
        if (this.startX === 0) return false
        console.log(e, '右滑')
        this.$router.go(-1)
      }
      this.startX = 0
      this.endX = 0
    }
  }
}
</script>

<style lang="scss">
#app {
  width: 750px;
  height: 100%;
  font-size: 28px;
  line-height: 1.2;
  color: #333;

  .app-view {
    background: #f8f9fb;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
      width: 0;
      background: transparent;
    }

    &.transition-slide {
      transition: transform 0.35s cubic-bezier(0, 0, 0.2, 1);
      &.slide-left-enter {
        transform: translate(100%, 0);
      }
      &.slide-left-enter-active {
        box-shadow: 0 0 32px 4px rgba(0, 0, 0, 0.3);
      }
      &.slide-right-enter {
        transform: translate(-30%, 0);
        transition-timing-function: linear;
      }
      &.slide-right-leave-active {
        transform: translate(100%, 0);
        box-shadow: 0 0 32px 4px rgba(0, 0, 0, 0.3);
        z-index: 99;
      }
      &.slide-left-leave-active {
        transform: translate(-30%, 0);
        transition-timing-function: linear;
      }
      &.app-view-scroll-enabled,
      &.slide-left-enter-active,
      &.slide-left-leave-active,
      &.slide-right-enter-active,
      &.slide-right-leave-active {
        overflow-y: auto;
      }
    }

    &.transition-fade {
      opacity: 1;
      transition: opacity 1s ease;
      &.fade-enter {
        opacity: 0;
      }
      &.fade-leave-active {
        opacity: 0;
      }
    }
  }

  // 页面左右滑动
  .move-left-enter {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 99999;
    transform: translate(-50%);
  }

  .move-left-enter-active {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 99999;
    transition: all 0.3s ease;
  }

  .move-left-leave-active {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 88888;
    transform: translate(50%);
    transition: all 0 ease;
  }

  .move-right-enter {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 99999;
    transform: translate(50%);
  }

  .move-right-enter-active {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 99999;
    transition: all 0.3s ease;
  }

  .move-right-leave-active {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 88888;
    transform: translate(-50%);
    transition: all 0 ease;
  }
}
</style>
