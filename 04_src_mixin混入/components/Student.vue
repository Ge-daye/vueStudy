<template>
  <div>
    <h2>{{ msg }}</h2>
    <h4>学生姓名：{{ name }}</h4>
    <div>性别：{{ sex }}</div>
    <div>学生年龄：{{ age }}</div>
    <button @click="showMsg">显示信息</button>
  </div>
</template>

<script>
import mixinDemo from "../mixinDemo"
export default {
  name: "Student",
  data() {
    return {
      msg: '我是一个学生',
      name:'tom',
      sex:'男',
      age:19
    }
  },
  mixins:[mixinDemo]
}
</script>

<style scoped>

</style>