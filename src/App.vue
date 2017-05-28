<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->



    <transition name="action">
      
      <router-view></router-view>

    </transition>

    <div>
      <button @click='add'>add</button>

    </div>

    <div class="footer">
      <ul>
      <li>
        <router-link to="/home">主页</router-link>
      </li>
      <li>
        <router-link to="/user">用户中心</router-link>
      </li>
      <li>
        <router-link to="/user2">个人中心</router-link>
      </li>
      <li>
        <router-link to="/user3">个人中心{{count}}</router-link>
      </li>
<!--       <li>
        <router-link :to=" '/user/'+id ">test</router-link>
      </li> -->

    </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data (){
    return{
      list:['1212'],
      price:10,
      // id:"userInfo"
    }
  },
  computed:{
    count (){
      return this.$store.state.count;
    }
  },
  watch:{




    // '$route':function(to,from){
    //   console.log(to);
    //   console.log(from);
    // }
    '$route' : (to,from) => {

      //console.log(to);console.log(from);




    }

  },

  methods:{

    add (){

      // this.$store.commit('increment',this.price);
      // console.log(this.$store.state.count);
      //this.$store.commit('increment',this.price);
      // console.log(this.$store.state.count);

      // console.log(this.$store.state.test);

      this.$store.commit('test',10);

    }



  }


}
</script>




<style scoped>

@import './assets/css/reset.less';

.action-enter-active,.action-leave{
  transition:transform .3s;
}


.action-enter{
  /*transform:translateY(-500px);*/
  transform:translateX(-100%);
  opacity:0;
}

.action-leave-active{
  /*transform: translateY(500px);*/
  transform:translateX(100%);
  opacity:0;
}



#box{
  position:absolute;
}


#app {

}

.footer{

  position:fixed;
  bottom:0;
  left:0;
  width:100%;
  z-index:10;


}

.footer ul{
  display: flex;
}
.footer li{
  line-height:38px;
  flex:1;
  background: #4BCD61;
  color:#fff;
  text-align:center;
}
.footer a{
  display: block;
  color:#fff;
}

.footer a.router-link-active{
  background: #f00;
}

</style>
