<template>
    <div>
      
        <div>
        <el-button @click="print">打印路由对象</el-button>
     
      </div>
      <span>
        this is head ddd asdas
        {{free}}

        <p>$route.path:  {{$route.path}}</p>
        <p>$route.params:{{$route.params}}</p>
        <p>$route.query:{{$route.query}}</p>
        <p>$route.hash:{{$route.hash}}</p>
      


    </span>
     <router-view></router-view>

    </div>
    
    
</template>

<script>
export default  {
    name:'Header',
    data () {
        return {
           
            free:"this is node js project"

        }
    },
    methods:{
        print(){
            console.log('{{$route}} :',this.$route)
        }
    }
}

</script>

<style>
    
</style>