<template>
  <div class="hot-nav">
    <!-- 滚动区域 -->
    <div class="hot-nav-content">
      <div class="nav-content-inner">
        <a class="inner-item">
          <img src="./../../imgs/nav/app.png" alt />
          <span>限时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="./../../imgs/nav/calendar.png" alt />
          <span>限时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="./../../imgs/nav/draw.png" alt />
          <span>限时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="./../../imgs/nav/lock.png" alt />
          <span>限时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="./../../imgs/nav/mails.png" alt />
          <span>限时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="./../../imgs/nav/notebook.png" alt />
          <span>限时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="./../../imgs/nav/paper-plane.png" alt />
          <span>限时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="./../../imgs/nav/setup.png" alt />
          <span>限时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="./../../imgs/nav/shield.png" alt />
          <span>限时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="./../../imgs/nav/talk.png" alt />
          <span>限时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="./../../imgs/nav/bank.png" alt />
          <span>限时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="./../../imgs/nav/conversation.png" alt />
          <span>限时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="./../../imgs/nav/file.png" alt />
          <span>限时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="./../../imgs/nav/group.png" alt />
          <span>限时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="./../../imgs/nav/monitor.png" alt />
          <span>限时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="./../../imgs/nav/test.png" alt />
          <span>限时秒杀</span>
        </a>
      </div>
    </div>
    <!-- 滚动条 -->
    <div class="hot-nav-bottom">
      <div class="nav-bottom-inner" :style="innerBarStyle"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HotNav",
  data: function() {
    return {
      // 屏幕宽度
      screenW:
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth,
      // 滚动内容宽度
      scrollContentW: 720,
      // 滚动条背景长度
      bgBarW: 100,
      // 滚动条长度
      barXWidth: 0,
      // 起点
      startX: 0,
      // 结束点
      endFlag: 0,
      // 移动距离
      barMoveWidth: 0
    };
  },
  computed: {
    /**
     * 滚动条样式
     */
    innerBarStyle: function() {
      return {
        width: `${this.barXWidth}px`,
        left: `${this.barMoveWidth}px`
      };
    }
  },
  mounted() {
    this.getBottomBarWidth();
    this.bindEvent();
  },
  methods: {
    getBottomBarWidth: function() {
      this.barXWidth = this.bgBarW * (this.screenW / this.scrollContentW);
    },
    bindEvent: function() {
      this.$el.addEventListener("touchstart", this.handleTouchStart, false)
      this.$el.addEventListener("touchmove", this.handleTouchMove, false)
      this.$el.addEventListener("touchend", this.handleTouchEnd, false)
    },
    /**
     * 开始触摸
     */
    handleTouchStart: function(event) {
      // 获取第一个焦点
      let touch = event.touches[0];
      // 求出起始点
      this.startX = Number(touch.pageX);
    },
    /**
     * 开始移动
     */
    handleTouchMove: function(event) {
     // 获取第一个焦点
      let touch = event.touches[0];// 求出移动的距离
      // 求出移动的距离
      let moveWidth = Number(touch.pageX) - this.startX;
      // 滚动条走的距离
      this.barMoveWidth = -((this.bgBarW / this.scrollContentW) * moveWidth-this.endFlag) ;
      // 边界值处理
      if (this.barMoveWidth <= 0) { // 左边
        this.barMoveWidth = 0;
      } else if(this.barMoveWidth >= this.bgBarW - this.barXWidth){ // 右边
        this.barMoveWidth = this.bgBarW - this.barXWidth;
      }
    },
    /**
     * 结束触摸
     */
    handleTouchEnd: function() {
      // 求出结束点
      this.endFlag = this.barMoveWidth;
    }
  }
};
</script>
<style scoped lang="stylus" ref="stylesheet/stylus">
.hot-nav {
  width: 100%;
  height: 180px;
  position: relative;
  background-color: #fff;
  padding-bottom: 10px;

  .hot-nav-content {
    width: 100%;
    overflow-x: scroll;

    .nav-content-inner {
      height: 100%;
      width: 720px;
      display: flex;
      flex-wrap: wrap;

      .inner-item {
        width: 90px;
        height: 90px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        color: #666666;

        img {
          width: 50%;
          margin-bottom: 5px;
        }
      }
    }
  }
  
  .hot-nav-content::-webkit-scrollbar {
    display none
  }

  .hot-nav-bottom {
    width 100px
    height 2px
    background-color #ccc
    position absolute
    left 50%
    margin-left -50px
    bottom 8px
    .nav-bottom-inner {
      position absolute
      left 0
      height 100%
      background-color orange
      width 0
    }
  }
}
</style>