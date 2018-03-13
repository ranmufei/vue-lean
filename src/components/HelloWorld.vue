<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
   
  
    <h2>hello {{ $route.params.name}} , now you have {{$route.params.old}}</h2>
   

   {{name}}

  </div>
</template>

<script>
export default {
  
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed:{
    name(){
      return '我是hello world 的name'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
