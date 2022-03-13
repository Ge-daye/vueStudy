<template>
  <div>
    <h2>{{name}}</h2>
    <button @click="showMsg()">点击选择</button>
  </div>
</template>

<script>
export default {
  name: "test",
  data(){
    return {
      name:'tom',
    }
  },
  methods:{
    showMsg(){
      alert('你选择了 '+this.name+' 同学!')
    }
  }
}
</script>

<style scoped>

</style>