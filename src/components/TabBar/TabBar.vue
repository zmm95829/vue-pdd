<template>
  <div class="bottom-tab">
    <span class="tab-item" @click="switchTo('/home')">
      <img :src="$route.path.includes('/home') ? tabBarImgArray[0].selected : tabBarImgArray[0].normal" alt />
      <span :class="{ 'on': $route.path.includes('/home') }">首页</span>
    </span>
    <span class="tab-item" @click="switchTo('/recomment')">
      <img :src="$route.path.includes('/recomment') ? tabBarImgArray[1].selected : tabBarImgArray[1].normal" alt />
      <span :class="{ 'on': $route.path.includes('/recomment') }">推荐</span>
    </span>
    <span class="tab-item" @click="switchTo('/search')">
      <img :src="$route.path.includes('/search') ? tabBarImgArray[2].selected : tabBarImgArray[2].normal" alt />
      <span :class="{ 'on': $route.path.includes('/search') }">搜索</span>
    </span>
    <span class="tab-item" @click="switchTo('/chat')">
      <img :src="$route.path.includes('/chat') ? tabBarImgArray[3].selected : tabBarImgArray[3].normal" alt />
      <span :class="{ 'on': $route.path.includes('/chat') }">聊天</span>
    </span>
    <span class="tab-item" @click="switchTo('/me')">
      <img :src="$route.path.includes('/me') ? tabBarImgArray[4].selected : tabBarImgArray[4].normal" alt />
      <span :class="{ 'on': $route.path.includes('/me') }">个人中心</span>
    </span>
  </div>
</template>
<script>
export default {
  name: "TabBar",
  data: function() {
    return {
      tabBarImgArray: [{
        normal: require("./../../../static/img/icon_home.png"),
        selected: require("./../../../static/img/icon_home_selected.png")
      },
      {
        normal: require("./../../../static/img/icon_recomment.png"),
        selected: require("./../../../static/img/icon_recomment_selected.png")
      },
      {
        normal: require("./../../../static/img/icon_search.png"),
        selected: require("./../../../static/img/icon_search_selected.png")
      },
      {
        normal: require("./../../../static/img/icon_chat.png"),
        selected: require("./../../../static/img/icon_chat_selected.png")
      },
      {
        normal: require("./../../../static/img/icon_me.png"),
        selected: require("./../../../static/img/icon_me_selected.png")
      }]
    };
  },
  methods: {
    /**
     * 切换一级路由
     */
    switchTo: function(path) {
      this.$router.replace(path);
    }
  }
};
</script>
<style scoped lang="stylus" ref="stylesheet/stylus">
.bottom-tab
  width 100%
  height 50px
  background-color #fff
  position fixed
  left 0
  bottom 0
  display flex
  z-index 999
  .tab-item
    display flex
    flex 1
    flex-direction column
    align-items center
    justify-content center
    font-size 14px
    color #666
    img 
      width 35%
      margin-bottom 2px
    .on 
      color red
</style>