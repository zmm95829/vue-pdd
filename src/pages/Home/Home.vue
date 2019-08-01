<template>
  <div class="home">
    <ly-tab
      v-model="selectedId"
      :items="items"
      :options="options"
      @change="handleChange"
      class="fix"
    ></ly-tab>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "Home",
  data: function() {
    return {
      selectedId: 0,
      items: [
        {label: "热门"},
        {label: "服饰"},
        {label: "鞋包"},
        {label: "母婴"},
        {label: "百货"},
        {label: "食品"},
        {label: "内衣"},
        {label: "男装"},
        {label: "电器"},
        ],
        options: {
          activeColor: "#e9232c"
        },
        // 二级路由路径
        subRouterUrl: [
          "/home/hot",
          "/home/dress",
          "/home/box",
          "/home/mbaby",
          "/home/general",
          "/home/food",
          "/home/shirt",
          "/home/man",
          "/home/ele",
        ]
    }
  },
  methods: {
    handleChange: function(item, index) {
      this.$router.replace(this.subRouterUrl[index]);
    }
  }
};
</script>
<style scoped lang="stylus" ref="stylesheet/stylus">
.home
  background-color #f5f5f5
  height calc(100% - 50px)
  .fix
    position fixed
    top 0
    left 0
    z-index 998
</style>