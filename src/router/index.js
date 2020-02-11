
import VueRouter from 'vue-router'
import Vue from 'vue'
import login from '../views/login/login.vue'
import register from '../views/components/register.vue'
Vue.use(VueRouter)
const router = new VueRouter({
routes: [
 {
path: '/',
component:login
 },
 {
path: '/a',
component:register
 }
  ]
})
export default router