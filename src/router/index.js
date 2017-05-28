import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import user from '@/page/user/index'
import userInfo from '@/page/user/userInfo'

import home from '@/page/home/index'


import user2 from '@/page/user/user2'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
    	path:'/user',
    	name:'user',
    	component:user,
    	children: [
	        {
	          // 当 /user/:id/profile 匹配成功，
	          // UserProfile 会被渲染在 User 的 <router-view> 中
	          path: 'userinfo',
	          component:userInfo
	          // component: UserProfile
	        },
	        // {
	        // 	path:'login',
	        // 	component:'login'
	        // },
	        // {
	        // 	path:'resetUser',
	        // 	component:'reset'
	        // }




	        // {
	        //   // 当 /user/:id/posts 匹配成功
	        //   // UserPosts 会被渲染在 User 的 <router-view> 中
	        //   path: 'posts',
	        //   // component: UserPosts
	        // }
	      ]
    	// children: 
    	// [
    	// 	{
     //            path: 'userInfo/:id', 
     //            name:'userInfo',
     //            component: userInfo,
     //        }
    	// ]

    },
    {
    	path:'/home',
    	name:'home',
    	component:home

    },
    {
    	path:'/user2/:id',
    	name:'user2',
    	component:user2
    }
  ]
})
