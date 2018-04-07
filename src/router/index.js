import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/index'
import Audio from '../pages/audio/index'
import Mine from '../pages/mine/index'
import Group from '../pages/group/index'
import Broadcast from '../pages/broadcast/index'

import Vsideo from '../pages/audio/video'
import Book from '../pages/audio/book'
import Television from '../pages/audio/television'
import City from '../pages/audio/city'
import Music from '../pages/audio/music'
import Login from '../pages/login/index'



import store from '../store/index'
Vue.use(Router)

const routes =  new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/audio',
      name: 'audio',
      component: Audio,
      children:[
        {path:'/',component:Vsideo, name:"vsideo"},
        {path:'video',component:Vsideo},
        {path:'book',component:Book},
        {path:'television',component:Television},
        {path:'city',component:City},
        {path:'music',component:Music, meta:{
          requireAuth:true
        }
      }
      ],
     
     
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      path: '/group',
      name: 'group',
      component: Group
    },
    {
      path: '/broadcast',
      name: 'broadcast',
      component: Broadcast,
      meta:{
        requireAuth:true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})


routes.beforeEach((to, from, next) => {
  console.log(to, from);
  if(to.matched.some((t)=>t.meta.requireAuth)){
    if (store.state.token) {
      next();
    }else {
      next({
          path: '/login',
          query: {redirect: to.fullPath}
      })
    }
  }
  else {
    next();
  }
});

routes.afterEach((to, from) => {
    console.log(to,from)
})

export default routes;