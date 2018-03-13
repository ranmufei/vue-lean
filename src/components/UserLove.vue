<template>
<transition
  name="bounce"
  enter-active-class="bounceInLeft"
  leave-active-class="bounceOutRight"
>
  <el-checkbox-group 
    v-model="checkedCities1"
    :min="1"
    :max="2">
    <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
  </el-checkbox-group>
  </transition>
</template>
<script>
  const cityOptions = ['上海', '北京', '广州', '深圳'];
  export default {
    data() {
      return {
        checkedCities1: ['上海', '北京'],
        cities: cityOptions
      };
    }
  };
</script>