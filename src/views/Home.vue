<template>
  <div class="home">
    <van-button type="primary" @click="buy">购买</van-button>
    <van-popup
      v-model="show"
      round
      closeable
      close-icon-position="top-left"
      position="bottom"
      :style="{ height: '60%' }"
    >
      <div class="sheet-header">
        标题
        <a href="">面容支付</a>
      </div>
      <div class="sheet-container">
        <div class="title"><span>QQ超级会员</span></div>
        <div class="money">
          <span class="i-type">￥</span><span class="num">200.00</span>
        </div>
        <div class="pay-way">
          <span>支付方式</span>
          <a href="">
            <van-icon name="balance-o" />
            <span>招商银行-储蓄卡(8835)</span>
            <van-icon name="arrow" />
          </a>
        </div>
        <div class="pwd-table">
          <div class="input">
            <input type="password" />
            <input type="password" />
            <input type="password" />
            <input type="password" />
            <input type="password" />
            <input type="password" />
          </div>
          <div class="keyboard">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>&nbsp;</span>
            <span>0</span>
            <span><van-icon name="revoke" /></span>
          </div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data() {
    return {
      show: false,
    };
  },
  methods: {
    buy() {
      this.show = true;
    },
  },
};
</script>
<style scoped lang="less">
/deep/ .sheet-header {
  flex-shrink: 0;
  font-weight: bold;
  font-size: 16px;
  line-height: 48px;
  text-align: center;
  a {
    position: absolute;
    top: 0;
    right: 16px;
    font-size: 12px;
    font-weight: normal;
    color: blue;
  }
}
.sheet-container {
  background: #fff;
  .title {
    padding: 8px 16px 0 16px;
    line-height: 32px;
  }
  .money {
    padding: 0 16px;
    margin-bottom: 24px;
    font-weight: bold;
    .i-type {
      font-size: 18px;
      color: #333;
      line-height: 22px;
      vertical-align: top;
    }
    .num {
      font-size: 32px;
      line-height: 32px;
      color: #333;
    }
  }
  .title,
  .pay-way {
    text-align: center;
    span {
      font-size: 12px;
      color: #999;
      line-height: 22px;
    }
  }
  .pay-way {
    padding: 0 16px;
    width: 100%;
    display: inline-block;
    box-sizing: border-box;
    > span {
      float: left;
    }
    a {
      float: right;
      i {
        line-height: 22px;
        vertical-align: middle;
      }
      .van-icon-balance-o {
        margin-right: 4px;
      }
      .van-icon-arrow {
        color: #ccc;
        margin-left: 8px;
        font-size: 14px;
      }
    }
  }
  .pwd-table {
    margin-top: 16px;
    .input {
      display: grid;
      grid-template-columns: repeat(6, 17%);
      width: 77%;
      margin: 0 auto 36px auto;
      input {
        text-align: center;
        line-height: 46px;
        border: 1px solid #ccc;
        &:nth-child(1) {
          border-top-left-radius: 6px;
          border-bottom-left-radius: 6px;
        }
        &:nth-child(6) {
          border-top-right-radius: 6px;
          border-bottom-right-radius: 6px;
        }
        &:not(:nth-child(6)) {
          border-right: 0;
        }
      }
    }
    .keyboard {
      display: grid;
      width: 100%;
      grid-template-columns: repeat(3, 33.33%);
      grid-template-rows: repeat(4, 25%);
      span {
        font-size: 22px;
        color: #333;
        font-weight: bold;
        text-align: center;
        line-height: 42px;
        border-top: 1px solid #eee;
        &:nth-child(10) {
          background: #eee;
        }
        &:nth-child(12) {
          background: #eee;
        }
        &:not(:nth-child(3n)) {
          border-right: 1px solid #eee;
        }
      }
    }
  }
}
</style>
