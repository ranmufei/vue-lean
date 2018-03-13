import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Header from '@/components/Header'
import UserProfile from '@/components/UserProfile'
import UserLove from '@/components/UserLove'
import 'vue2-animate/dist/vue2-animate.min.css'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello/:name/:old',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/head',
      component: Header,
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'profile/:name/:old/:from',
          component: UserProfile
        },
        {
          // 当 /user/:id/posts 匹配成功
          // UserPosts 会被渲染在 User 的 <router-view> 中
          path: 'love',
          component: UserLove
        },
        { path: '', component: Header },
      ]
    }
  ]
})
