<template>
  <section class="page-message"></section>
</template>

<script>
export default {
  components: {},
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.page-message {
  width: 100%;
  min-height: 100%;
  .content {
    width: 1080px;
    margin: 0 auto 60px;
    .title {
      font-size: 18px;
      font-weight: bold;
    }
    .list {
      line-height: 2;
      font-size: 16px;
      margin-bottom: 30px;
      li {
        border-bottom: 1px solid #eee;
        font-size: 16px;
        padding: 30px 0;
        .answer {
          .answer-ti {
            display: flex;
            align-items: center;
            div:first-child {
              margin-right: 5px;
              background: #c12219;
              color: white;
              width: 16px;
              height: 16px;
              text-align: center;
              border-radius: 3px;
              line-height: 16px;
              font-size: 12px;
            }
          }
          span {
            display: inline-block;
            font-size: 14px;
            color: #666;
            text-indent: 22px;
          }
        }
        .question {
          display: flex;
          align-items: center;
          div:first-child {
            margin-right: 5px;
            background: #3c3835;
            color: white;
            width: 16px;
            height: 16px;
            text-align: center;
            border-radius: 3px;
            line-height: 16px;
            font-size: 12px;
          }
        }
        span {
          display: inline-block;
          font-size: 14px;
          color: #666;
          text-indent: 20px;
        }
      }
    }
    .form {
      margin-top: 20px;
      textarea {
        width: 1040px;
        padding: 20px;
        border: 1px solid #dddddd;
      }
      button {
        margin-top: 20px;
        font-size: 16px;
        text-align: center;
        line-height: 45px;
        width: 168px;
        height: 45px;
        background: #c12219;
        color: white;
        border: none;
        cursor: pointer;
        &:active {
          background: #850e07;
        }
      }
    }
  }
}
</style>
