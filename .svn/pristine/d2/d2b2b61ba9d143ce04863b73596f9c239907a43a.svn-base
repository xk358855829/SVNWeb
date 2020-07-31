import Vue from "vue"
import Router from "vue-router"
import Home from "./views/Home.vue"
Vue.use(Router)

export default new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      redirect: "login",
      children: [
        {
          path: "order",
          name: "order",
          meta: {
            requireAuth: true
          },
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import("@/views/Order.vue")
        },
        {
          path: "key",
          name: "key",
          meta: {
            requireAuth: true
          },
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () =>
            import(/* webpackChunkName: "about" */ "./views/Key.vue")
        },
        {
          path: "my",
          name: "my",
          meta: {
            requireAuth: true
          },
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () =>
            import(/* webpackChunkName: "about" */ "./views/My.vue")
        }
      ]
    },
    {
      path: "/detail",
      name: "detail",
      meta: {
        requireAuth: true
      },
      component: () => import("@/views/OrderDetail.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/Login.vue")
    }
  ]
})
