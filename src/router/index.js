import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AddProduct from '../views/AddProduct.vue'
import Login from '../views/Login.vue'
import store from '../store'
import MainLayout from '../layout/MainLayout.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { public: true, title: 'Login' },
  },
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { auth: true, title: 'Home' },
      },
      {
        path: '/add-product',
        name: 'Add Product',
        component: AddProduct,
        meta: { auth: true, title: 'Home' },
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, _from, next) => {
  const routeNeedsAuth = to.matched.some((record) => record.meta.auth)
  const isAuth = store.state.auth.isAuth
  if (routeNeedsAuth && !isAuth) {
    next('/login')
  } else {
    next()
  }
})

router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = to.meta.title || 'Whyw8t'
  })
})

export default router
