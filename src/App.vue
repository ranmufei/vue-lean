<template>
  <div id="app">
   

   <p>
     router.app: {{$route.params.name}}
   </p>      
   <hr>
   

    <router-link to="/hello/冉慕飞/29"> hello 组件</router-link>
    <router-link to="/head/profile/冉慕飞/29/腴地上虞">head组件</router-link>
    <router-link to="/head/love/fujiang/wuhan city">love组件</router-link>
    <hr>

    <p>
      <transition
        name="Bounce"
        enter-active-class="bounceLeft-enter"
        leave-active-class="bounceRight-leave"
      >
      
      <router-view></router-view>
      
      </transition>
    </p>
  </div>

</template>

<script>
export default {
  name: 'App',
  mode:'hash',
  data(){
   return {
       transitionName: 'slide-left',
       show:true
   }
  },
  methods:{

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
