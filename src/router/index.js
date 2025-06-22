import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Category from '@/views/Category.vue'
import Cart from '@/views/Cart.vue'
import My from '@/views/My.vue'
import d from '../views/denglu.vue';
import bo from '../views/bofang.vue';
import d2 from '../views/my2.vue'
import n1 from '../views/nav/nav1.vue'
import cart1 from '../components/cart1.vue'
import cart2 from '../components/cart2.vue'
import nav2 from '../views/nav2.vue';
import ck from '../components/clickcart.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home' // 重定向， 当请求/路径时，重定向到/home对应组件
    },
    {
      path: '/home',
      component: HomeView,
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
      path: '/my',
      component: My
    },
    {
      path: '/h',
      component: d,
      meta: {
        requiresAuth: false // 标记此页面不需要登录验证，可自由访问
    }
    
    },
    {
      path: '/cart1',
      component:cart1,
    },
    {
      path: '/cart2',
      component:cart2,
    },
    {
      path:'/b',
      component:bo,
    },
    {
      path:'/d',
      component:d2,
      meta: {
        requiresAuth: true, // 标记此页面需要登录验证，登录成功才能访问
        keepAlive: true // 标记该页面登录成功后要缓存，刷新不再重新加载组件
    }
      
    },
    {
      path:'/nav',
      component:n1,
    },
   
     {
          path: '/ck',
          name: 'ck',
          component: ck 
        },
        {
          path: '/nav2',
          name: 'About',
          component: nav2 // 同理，检查此组件路径及导入情况
        }

  ],
});
router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'; // 简单通过本地存储模拟登录状态，实际可替换为更合理的验证方式，比如token验证等
  if (to.meta.requiresAuth &&!isLoggedIn) {
      // 如果要访问的页面需要登录验证但用户未登录，则跳转到登录页面
      next('/h');
  } else {
      next();
  }
});

export default router
