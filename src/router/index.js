import Vue from 'vue';
import VueRouter from 'vue-router';

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')

// 安装插件
Vue.use(VueRouter);

// 创建路有对象
const routes = [
  { 
    path: '',
    redirect:'/home'
  },
  { 
    path: '/home',
    component: Home
  },
  { 
    path: '/category',
    component: Category
  },
  { 
    path: '/cart',
    component: Cart
  },
  { 
    path: '/profile',
    component: Profile
  }
]
const router = new VueRouter({
  // base: '/',
  mode: 'history',
  routes
});

// 导出 router
export default router