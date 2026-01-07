<template>
  <div class="content-box">
    <div class="wrapper" ref="wrapper">
      <div ref="content">
        <div v-if="options.pullingDown">
          <div :style="pullDownStyle" class="pulling-down-tips" ref="pullingDownTips">
            <div class="tips-box">
              <div>
                <i class="iconfont minku-jiantou1"></i>
              </div>
              <div>
                <p>松开立即刷新</p>
                <p>
                  <span>最后更新：今天</span>
                  <span v-text="_utils.dateFormat(time, 'hh:mm')"></span>
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

<script>
import BScroll from 'better-scroll'
const getRect = el => {
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
export default {
  name: 'common-scroll',
  props: {
    options: {
      type: Object,
      default() {
        return {
          top: 0,
          bottom: 0,
          loading: false,
          noMore: false,
          pullingDown: false
        }
      }
    }
  },
  data() {
    return {
      pullingDownTips: false,
      time: new Date().getTime(),
      loadingFlag: false,
      scrollFlag: false,
      pullDownStyle: '',
      pullDownInitTop: -120
    }
  },
  destroyed() {
    this.scroll && this.scroll.destroy()
  },
  mounted() {
    this._scrollInit()
  },
  methods: {
    _scrollInit() {
      this.$nextTick(() => {
        const hh = `${(this.options.top * 100 + this.options.bottom * 100) / 100}`
        this.$refs.content.style.minHeight = `${
          (getRect(this.$refs.wrapper).height / 37.5) * 10 - hh
        }vw`
        this.$refs.content.style.paddingTop = `${this.options.top}vw`
        this.$refs.content.style.paddingBottom = `${this.options.bottom}vw`

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
        this.scroll = new BScroll(this.$refs.wrapper, _options)

        this.scroll.on('beforeScrollStart', () => {
          this.scroll.refresh()
        })
        this.scroll.on('pullingUp', () => {
          this.$emit('pullingUp')
        })
        this.scroll.on('pullingDown', () => {
          this.loadingFlag = true
          this.$emit('pullingDown')
        })

        this.scroll.on('scroll', pos => {
          if (!this.options.pullingDown) return false
          if (!this.scrollFlag) return false
          if (this.options.top === 0) {
            if (pos.y < 20)
              this.pullDownStyle = `top:${Math.min(
                (pos.y / 75) * 10 * 0.8 + (this.pullDownInitTop / 75) * 10
              )}vw`
          } else {
            if (pos.y < 70)
              this.pullDownStyle = `top:${Math.min(
                (pos.y / 75) * 10 * 0.8 + (this.pullDownInitTop / 75) * 10
              )}vw`
          }
        })
        this.scroll.on('scrollEnd', () => {
          if (!this.options.pullingDown) return false
          this.scrollFlag = false
        })
        this.scroll.on('scrollStart', () => {
          if (!this.options.pullingDown) return false
          this.time = new Date().getTime()
          this.scrollFlag = true
        })
      })
    },
    refresh() {
      console.log('refresh刷新了...')
      this.scroll.finishPullUp()
      this.scroll.finishPullDown()
      this.scroll.refresh()
      this.loadingFlag = false
    }
  }
}
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
