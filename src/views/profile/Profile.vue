<template>
  <div id='profile'>
    <nav-bar class="profile-nav">
      <template v-slot:center>
        我的
      </template>
    </nav-bar>
  </div>
</template>
<script>
  import NavBar from 'components/common/navbar/NavBar'

  export default {
    name: 'profile',
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
  .profile-nav{
    background-color: darkorange;
  }
</style>