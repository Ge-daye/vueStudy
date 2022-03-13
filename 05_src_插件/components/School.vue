<template>
  <div>
    <h1>{{name}}</h1>
<!--    使用全局过滤器-->
    <p>{{address | mySlice}}</p>
    <button @click="showMsg">显示信息</button>
  </div>
</template>

<script>

export default {
  name: "School",
  data(){
    return {
      name:'HFUU',
      address:'合肥蜀山区锦绣大道'
    }
  },
  methods:{
    showMsg(){
      alert('School的方法')
    }
  }
}
</script>

<style scoped>

</style>