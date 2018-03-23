<template>
    <transition
  name="bounce"
  enter-active-class="bounceInLeft"
  leave-active-class="bounceOutRight"
>
    <div>
        <el-progress type="circle" :percentage="0"></el-progress>
        <el-progress type="circle" :percentage="25"></el-progress>
        <el-progress type="circle" :percentage="100" status="success"></el-progress>
        <el-progress type="circle" :percentage="50" status="exception"></el-progress>
    
        <p>姓名：{{$route.params.name}}</p>
        <p>年龄：{{$route.params.old}}</p>
        <p>籍贯：{{$route.params.from}}</p>
        
         <p>$route.path:  {{$route.path}}</p>

        <p>$route.params:{{$route.params}}</p>
        <p>$route.query:{{$route.query}}</p>

    </div>
    </transition>
</template>

<script>
export default  {
    name:'Header',
    data () {
        return {
         name:'fe'
                   }
    }
}

</script>

<style>
    
</style>