
import VueRouter from 'vue-router'
import Vue from 'vue'
import login from '../views/login/login.vue'
import index from '../components/index.vue'
Vue.use(VueRouter)
import chart from '../components/chart/chart.vue'
import user from '../components/user/user.vue'
import question from '../components/question/question.vue'
import enterprise from '../components/enterprise/enterprise.vue'
import subject from '../components/subject/subject.vue'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import { removeToken, getToken } from "@/untils/token.js";
import { info } from "@/abi/index.js";
import { Message } from 'element-ui';
const router = new VueRouter({
  routes: [
    {
      path: '/login',
      component: login
    },
    {
      path: '/index',
      component: index,
      children: [
        {
          path: 'chart',
          component: chart
        },
        {
          path: 'user',
          component: user
        },
        {
          path: 'question',
          component: question
        },
        {
          path: 'enterprise',
          component: enterprise
        },
        {
          path: 'subject',
          component: subject
        },
      ]
    }
  ],

});
router.beforeEach((to, from, next) => {
  nprogress.start()
  next()
  const witlepaths = ['/login']
  if (witlepaths.includes(to.path.toLocaleLowerCase())!=true) {
    if (getToken() == undefined) {
      Message.warning('登录异常')
      next('/login')
    } else {
      info().then(res => {
        window.console.log(res);
        if (res.data.code == 206) {
          Message.warning('登录异常')
          removeToken()
          next('/login')
        } else if (res.data.code == 200) {
          next()
        }
      })
    }
  } else {
    next()
  }
})
router.afterEach(() => {
  nprogress.done()
})
export default router