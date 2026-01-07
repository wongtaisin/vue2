<template>
  <div class="content-box">
    <div class="wrapper" ref="wrapperRef">
      <div ref="contentRef">
        <div v-if="options.pullingDown">
          <div :style="pullDownStyle" class="pulling-down-tips" ref="pullingDownTipsElRef">
            <div class="tips-box">
              <div>
                <i class="iconfont minku-jiantou1"></i>
              </div>
              <div>
                <p>松开立即刷新</p>
                <p>
                  <span>最后更新：今天</span>
                  <span>{{ new Date(time).toLocaleTimeString() }}</span>
                </p>
              </div>
              <div>
                <!-- <img class="img" src="./loading.gif" v-show="loadingFlag" /> -->
              </div>
            </div>
          </div>
        </div>
        <slot name="content"></slot>
      </div>
      <div v-if="options.loading">加载中....</div>
      <div v-if="options.noMore">--已经到底了--</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BScroll from 'better-scroll'
import { nextTick, onMounted, onUnmounted, ref } from 'vue'

// 定义Props类型
interface ScrollOptions {
  top?: number
  bottom?: number
  loading?: boolean
  noMore?: boolean
  pullingDown?: boolean
}

// 定义Props
const props = withDefaults(
  defineProps<{
    options?: ScrollOptions
  }>(),
  {
    options: () => ({
      top: 0,
      bottom: 0,
      loading: false,
      noMore: false,
      pullingDown: false
    })
  }
)

// 工具函数：获取元素尺寸
const getRect = (
  el: HTMLElement | SVGElement
): { top: number; left: number; width: number; height: number } => {
  if (el instanceof window.SVGElement) {
    const rect = el.getBoundingClientRect()
    return {
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height
    }
  } else {
    return {
      top: el.offsetTop,
      left: el.offsetLeft,
      width: el.offsetWidth,
      height: el.offsetHeight
    }
  }
}

// 定义组件名称
defineOptions({
  name: 'common-scroll'
})

// 响应式数据
const pullingDownTipsRef = ref<HTMLElement | null>(null)
const wrapperRef = ref<HTMLElement | null>(null)
const contentRef = ref<HTMLElement | null>(null)
const pullingDownTipsElRef = ref<HTMLElement | null>(null)

const time = ref<number>(new Date().getTime())
const loadingFlag = ref<boolean>(false)
const scrollFlag = ref<boolean>(false)
const pullDownStyle = ref<string>('')
const pullDownInitTop = ref<number>(-120)

// BetterScroll实例
let scroll: BScroll | null = null

// 滚动初始化
const _scrollInit = () => {
  nextTick(() => {
    if (!wrapperRef.value || !contentRef.value) return

    const hh = `${(props.options.top! * 100 + props.options.bottom! * 100) / 100}`
    const wrapperRect = getRect(wrapperRef.value)
    contentRef.value.style.minHeight = `${(wrapperRect.height / 37.5) * 10 - parseFloat(hh)}vw`
    contentRef.value.style.paddingTop = `${props.options.top}vw`
    contentRef.value.style.paddingBottom = `${props.options.bottom}vw`

    const _options = {
      mouseWheel: true,
      probeType: 3,
      click: true,
      openPullUp: true,
      pullUpLoad: {
        threshold: 50
      },
      pullDownRefresh: {
        threshold: 90,
        stop: 0
      }
    }

    scroll = new BScroll(wrapperRef.value, _options)

    scroll.on('beforeScrollStart', () => {
      scroll?.refresh()
    })

    scroll.on('pullingUp', () => {
      // emit('pullingUp')
    })

    scroll.on('pullingDown', () => {
      loadingFlag.value = true
      // emit('pullingDown')
    })

    scroll.on('scroll', (pos: { y: number }) => {
      if (!props.options.pullingDown) return
      if (!scrollFlag.value) return
      if (props.options.top === 0) {
        if (pos.y < 20) {
          pullDownStyle.value = `top:${Math.min((pos.y / 37.5) * 10 * 0.8 + (pullDownInitTop.value / 37.5) * 10)}vw`
        }
      } else {
        if (pos.y < 70) {
          pullDownStyle.value = `top:${Math.min((pos.y / 37.5) * 10 * 0.8 + (pullDownInitTop.value / 37.5) * 10)}vw`
        }
      }
    })

    scroll.on('scrollEnd', () => {
      if (!props.options.pullingDown) return
      scrollFlag.value = false
    })

    scroll.on('scrollStart', () => {
      if (!props.options.pullingDown) return
      time.value = new Date().getTime()
      scrollFlag.value = true
    })
  })
}

// 刷新方法
const refresh = () => {
  console.log('refresh刷新了...')
  scroll?.finishPullUp()
  scroll?.finishPullDown()
  scroll?.refresh()
  loadingFlag.value = false
}

// 暴露方法给父组件
defineExpose({
  refresh
})

// 生命周期钩子
onMounted(() => {
  _scrollInit()
})

onUnmounted(() => {
  scroll?.destroy()
})
</script>

<style lang="scss" scoped>
.content-box {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .wrapper {
    height: 100%;
  }
  .pulling-down-tips {
    position: absolute;
    top: -100px;
    width: 100%;
    height: 100px;
    .tips-box {
      width: 375px;
      position: relative;
      display: flex;
      justify-content: space-around;
      align-items: center;
      line-height: 25px;
      font-size: 12px;
      div {
        width: 100%;
        .img {
          width: 25px;
          margin-right: 75px;
        }
        .minku-jiantou1 {
          margin-left: 75px;
        }
      }
    }
  }
}
</style>
