<template>
  <div class="tab-bar-item" @click='itemClick'>
    <div v-if='!isActive'><slot name='item-icon'></slot></div>
    <div v-else><slot name='item-icon-active'></slot></div>

    <!-- 插槽最终是被完全替换掉的，所以一般属性不直接写在插槽内,而是写在插槽外层的 div 里面 -->
    <!-- 然后通过样式继承的方式，让插槽继承外层 `div` 上面的样式 -->
    <!-- 所以最好都在 `slot` 的外层包裹一层 `div`，来预留样式 -->
    <!-- slot 标签只写 `name=xxx` 属性，其他的属性一律写在外层 `div` 上 -->
    <div :class={active:isActive}><slot name='item-text'></slot></div>
  </div>
</template>

<script>
  export default {
    name:'TabBarItem',
    props:{
      path:String
    },
    data(){
      return{
        // isActive:true
      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path) !== -1
      }
    },
    methods:{
      itemClick(){
        this.$router.push(this.path).catch(err => err)
      }
    }

  }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tab-bar-item img{
    height: 24px;
    width: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 4px;
  }

  .active{
    color:orangered;
  }

</style>