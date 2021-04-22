<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        购物街
      </template>
    </nav-bar>
    <home-swiper :banners="banners"
                     ref="hSwiper"></home-swiper>
  </div>
</template>

<script>
  import NavBar from 'common/navbar/NavBar'
  import HomeSwiper from './childComps/HomeSwiper'
  import { getHomeMultidata, getHomeData, RECOMMEND, BANNER } from "network/home";

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper
    },
    data() {
      return {
        banners: [],
        // recommends: [],
        // goodsList: {
        //   'pop': { page: 1, list: [] },
        //   'new': { page: 1, list: [] },
        //   'sell': { page: 1, list: [] }
        // },
        // currentType: POP,
        // isTabFixed: false,
        // tabOffsetTop: 0,
        // showBackTop: false
      }
    },
    computed: {
    },
    created() {
      console.log('创建Home');
      // 1.请求多个数据
      this.getMultiData()
    },
    methods: {
      /**
       * 网络请求相关方法
       */
      getMultiData() {
        getHomeMultidata().then(res => {
          this.banners = res.data[BANNER].list
          // this.recommends = res.data[RECOMMEND].list
          // // 下次更新DOM时,获取新的tabOffsetTop值(不保险,可以在updated钩子中获取)
          // this.$nextTick(() => {
          //   this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
          // })
        })
      },
    }
  }
</script>

<style scoped>
  #home {
    /*position: relative;*/
    height: 100vh;
  }

  .nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
  }

  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

  .fixed {
    position: fixed;
    top: 44px;
    left: 0;
    right: 0;
  }

  .back-top {
    position: fixed;
    right: 10px;
    bottom: 60px;
  }
</style>