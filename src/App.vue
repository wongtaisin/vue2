<template>
  <div id="vue">
    <router-view v-slot="{ Component }">
      <transition :name="moveName">
        <keep-alive>
          <component
            :is="Component"
            :data-page-id="$route.fullPath"
            @touchend="touchEnd"
            @touchstart="touchStart"
            class="app-view"
          />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

// 页面滑动 name值
const moveName = ref('')
const startX = ref(0)
const endX = ref(0)

// 监听路由变化
watch(route, (to, from) => {
  // 添加空值检查，确保meta属性存在
  const toGrade = to.meta?.grade || 0
  const fromGrade = from.meta?.grade || 0

  if (toGrade < fromGrade) moveName.value = 'move-left'
  if (toGrade > fromGrade) moveName.value = 'move-right'
  if (!from.name) moveName.value = ''
})

// 处理键盘弹起的事件处理函数
const handleFocusOut = () => {
  window.scrollTo(0, 0)
}

onMounted(() => {
  // ios 键盘弹起失效问题
  document.body.addEventListener('focusout', handleFocusOut)
})

onUnmounted(() => {
  document.body.removeEventListener('focusout', handleFocusOut)
})

// 记录初始位置
const touchStart = (e: TouchEvent) => {
  if (e.touches.length > 0) {
    startX.value = e.touches[0].clientX
  }
}

// 滑动结束
const touchEnd = (e: TouchEvent) => {
  if (e.changedTouches.length > 0) {
    endX.value = e.changedTouches[0].clientX
  }

  if (route.meta.grade === 1) return

  if (startX.value - endX.value > 160) {
    console.log(e, '左滑')
  }

  if (startX.value - endX.value < -160) {
    if (startX.value === 0) return
    console.log(e, '右滑')
    router.go(-1)
  }

  startX.value = 0
  endX.value = 0
}
</script>

<style lang="scss">
#vue {
  width: 100%;
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
