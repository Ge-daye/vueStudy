<template>
  <div class="demo">
    <h2>{{ msg }}</h2>
    <h4>学生姓名：{{ name }}</h4>
    <div>性别：{{ sex }}</div>
    <div>学生年龄：{{ age }}</div>
  </div>
</template>

<script>

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

}
</script>

<style>

</style>