<template>
  <div class="nav-bar">
    <div class="left">
      <slot name='left'></slot>
    </div>
    <div class="center">
      <slot name='center'></slot>
    </div>
    <div class="left">
      <slot name='right'></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: '',
    data() {
      return {
      }
    },
    props: {
    },
    components: {
    },
    mounted() {
    },
    methods: {
    },
  }
</script>

<style scoped>
  .nav-bar{
    height: 44px;
    line-height: 44px;
    width: 100%;
    position:fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    text-align: center;
    color: #fff;
    text-align: center;
  }
  .center{
    flex: 1;
  }
  .left,.right{
    width: 60px;
  }
</style>