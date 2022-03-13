<template>
  <div>
    <h1>{{name}}</h1>
    <p>{{address}}</p>
    <button @click="showMsg">显示信息</button>
  </div>
</template>

<script>
import mixinDemo from "../mixinDemo"
export default {
  name: "School",
  data(){
    return {
      name:'HFUU',
      address:'合肥'
    }
  },
  methods:{
    showMsg(){
      alert('School的方法')
    }
  },
  mixins:[mixinDemo]
}
</script>

<style scoped>

</style>