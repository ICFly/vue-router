<template>
	<div>
		<h3>用户中心</h3>
		<ul>
			<li>我的订单</li>
			<li>我的账户</li>
			<li>我的余额</li>
			<li>我的余额</li>
			<li>我的余额</li>
			<li>我的余额</li>
			<li>我的余额</li>
			<li>我的余额</li>
			<li><router-link to="/user/userInfo">个人中心</router-link></li>


			<li>
				<router-link :to="{path:'/user2',params:{'id':'110'}}">back</router-link>
			</li>

		</ul>


		<!-- <div id='box'> -->
			
			<transition id='box' :css='false' @before-enter='beforeEnter' @enter='enter' @leave='leave'>
				<router-view></router-view>
			</transition>

		<!-- </div> -->






		<div style='height:38px;'></div>
	</div>
</template>
<script>
	
export default{

	data (){
		return{
			id:121212
		}
	},
	mounted (){
		// console.log(new Date().toLocaleString());
		// this.test();
	},
	methods :{
		// test => () console.log(1212);
		test:function(){
			console.log("hello");
			console.log(new Date().toLocaleString());
		},


	    beforeEnter:function(el){
	      $(el).css({
	        left:'-100%',
	        // position:'absolute',d
	        opacity:'0'
	      });

	      // console.log('before');
	    },
	    enter:function(el,done){
	      $(el).animate({
	        left:0,
	        opacity:1,
	      },{
	        duration:1000,
	        complate:done
	      });

	      console.log('enter');
	    },
	    leave:function(el,done){
	      $(el).animate({
	        left:'100%',
	        opacity:0,
	      },{
	        duration:1000,
	        complate:done
	      });

	      // console.log('leave');
	    }



	}

}

</script>

<style scoped>
body{
	/*font-size:16px;*/
}

h3{
	text-align: center;
	margin:20px auto;
}
ul{
	padding:20px 0;

	background: #89CDFC;
}
li{
	color:#fff;
	padding:10px;
}

#box{
	position: absolute;
}



</style>