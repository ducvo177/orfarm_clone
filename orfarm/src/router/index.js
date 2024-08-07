import { createRouter, createWebHistory } from 'vue-router';
import App from '../App.vue';
import ProductDetail from '../views/ProductDetail.vue';
import ShopLeftSidebar from '../views/ShopLeftSidebar.vue';
import Blog from '../views/Blog.vue';
import BlogDetails from '../views/BlogDetails.vue';
import Checkout from '../views/Checkout.vue';
import LogIn from '../views/LogIn.vue';
import Cart from '../views/Cart.vue';
import Wishlist from '../views/Wishlist.vue';
import NotFound from '../views/NotFound.vue';
import Home from '../views/Home.vue';
import Register from '../views/Register.vue';
import User from '../views/User.vue';
import ForgotPassword from '../views/ForgotPassword.vue';
import store from '../stores/auth.js';
import { useStore} from "vuex"

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/product-details/:product',
    name: 'product-details',
    component: ProductDetail,
    props: true
  },
  {
    path: '/shop-left-sidebar',
    name: 'shop-left-sidebar',
    component: ShopLeftSidebar
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog
  },
  {
    path: '/blog-details',
    name: 'blog-details',
    component: BlogDetails
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: Checkout,
  },
  {
    path: '/login',
    name: 'login',
    component: LogIn
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path:'/forgotpassword',
    name:'forgotpassword',
    component:ForgotPassword,
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart,
  },
  {
    path: '/wishlist',
    name: 'wishlist',
    component: Wishlist,
  },
  {
    path: '/404',
    name: 'not-found',
    component: NotFound
  },
  {
    path: '/user',
    name: 'user',
    component: User,
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404'
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  
  if (!token) {
    return false;
  }

  try {
    const tokenPayload = JSON.parse(atob(token.split('.')[1]));
    const expiry = tokenPayload.exp;
    const now = Math.floor(Date.now() / 1000);
    return now < expiry;
  } catch (error) {
    console.error('Invalid token:', error);
    return false;
  }
};

router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && to.name!=='register' && !isAuthenticated()) {
    next({ name: 'login' });
  } else {
    next();
  }
});

export default router;
