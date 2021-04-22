<template>
  <nav-bar class="cart-nav">
    <template v-slot:center>
      购物车
    </template>
  </nav-bar>
</template>
<script>
  import NavBar from 'components/common/navbar/NavBar'

  export default {
    name: 'Cart',
    data() {
      return {
      }
    },
    props: {
    },
    components: {
      NavBar
    },
    mounted() {
    },
    methods: {
    },
  }
</script>

<style scoped>
  .cart-nav{
    background-color: goldenrod;
  }
</style>