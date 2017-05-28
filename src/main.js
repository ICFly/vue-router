// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import router from './router'
import store from './store'

import rem from './config/rem'

Vue.config.productionTip = false


//自定义注册事件，让input自动获取光标
Vue.directive('focus',{
	inserted:function(el){
		// alert('111')
		el.focus();
	}
})

Vue.directive('blur',{
	inserted:function(el){
		el.blur();
	}
})

//跳转页面之前验证是否登录状态。
// router.beforeEach((to, from, next) => {

// 	// console.log(to);
// 	// console.log(from);
// 	console.log("check Login");
// 	//console.log(next);
// 	next();
// })

//跳转页面之前检查是否登录
router.beforeEach(function(to,from,next){
	console.log("before");
	next();
});

//切换页面时验证前进还是后退，显示不同的动画效果
router.afterEach((to,from) =>{
	console.log("after");
});



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  // directives:{

  	// test:function(el,binding){
  	// 	//el.style.color = binding.value;
  	// 	console.log(binding.value);
  	// }

  // }


})
// Vue.directive('focus',{
// 	inserted:function(el){
// 		el.focuse();
// 	}
// })





