<template>


<div>
	<h3>个人中心-个人信息界面</h3>

	<button @click='back'>back</button>
</div>



</template>

<script>
	
	console.log('个人中心00000000000000');


	export default{


		data(){

			return{

			}
		},
		mounted (){
			console.log(new Date().toLocaleString());
		},
		computed (){

		},
		methods:{

			back:function(){
				this.$router.go(-1);
			}

		}


	}

</script>