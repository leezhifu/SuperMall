<template>
  <tab-bar>
    <tab-bar-item path='/home'>
      <!-- 在新版本中，slot 指令被废弃，我们用 v-slot 代替 slot，同时需要在外层包裹一层 template 标签元素 -->
      <template v-slot:item-icon>
        <img src="~assets/img/tabbar/icon01.png" alt="">
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/img/tabbar/icon01_active.png" alt="">
      </template>
      <template v-slot:item-text>
        <div>首页</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path='/category'>
      <template v-slot:item-icon>
        <img src="~assets/img/tabbar/icon02.png" alt="">
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/img/tabbar/icon02_active.png" alt="">
      </template>
      <template v-slot:item-text>
        <div>分类</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path='/cart'>
      <template v-slot:item-icon>
        <img src="~assets/img/tabbar/icon03.png" alt="">
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/img/tabbar/icon03_active.png" alt="">
      </template>
      <template v-slot:item-text>
        <div>购物车</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path='/profile'>
      <template v-slot:item-icon>
        <img src="~assets/img/tabbar/icon04.png" alt="">
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/img/tabbar/icon04_active.png" alt="">
      </template>
      <template v-slot:item-text>
        <div>我的</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem'

  export default {
    name:'MainTabBar',
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>