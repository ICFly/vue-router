import vue from 'vue'
import vuex from 'vuex'


vue.use(vuex);



export default({
	state:{
		count : 0,
		test:'hello store'
	},
	mutations: {
	    test(state,msg) {
	      state.count = msg;
	    }
  	},
  	actions:{

  		add2 (state,price){
  			state.count -= price;
  		}
  	}
})

