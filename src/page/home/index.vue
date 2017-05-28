<template>

<div>
	
	<h3>hello this is index.page</h3>
	
	<input type="text" v-focus>

	<p>
		<button v-bg=' "#89CDFC" ' class='btn' @click='test'>push</button>
	</p>
</div>
	

</template>


<script>
	
export default{


	data (){
		return{

		}
	},
	directives:{
		bg:function(el,binding){
			el.style.background = binding.value;
		},
		// focus:function(el,binding){
		// 	el.focus();
		// }
		// focus:{
		// 	inserted:function(el,binding){
		// 		el.focus();
		// 	}
		// }
	},
	methods:{

		test:function(){
			// router.push('home');
			this.$router.push('user')
		}

		// test: () => {

		// 	$router.push('home');


		// }

	}


}

</script>

<style scoped>
	
	h3{
		padding:100px 0;
		text-align: center;
	}



</style>