<template>
  <div>
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
      msg: '我是一个学生'
    }
  },
  // eslint-disable-next-line vue/no-dupe-keys
  // 数据不用写死，使用组件时属性的值是什么，组件对应的数据就是什么（默认都是字符串）
  // 第1种：数组的写法
  /*
   props:['name','sex','age']
  */
  // 第2种：对象的写法,键是属性名，值为数据类型，但是注意：这里不会做自动类型转换，如果类型不匹配，则会在控制台提醒
  /*
  props:{
    name:String,
    sex:String,
    age:Number
  }
   */
  // 第3种：对象嵌套对象的写法,注意：一般required为true时不需设置默认值default
  props: {
    name: {
      type: String, //类型
      required: true,//必要性
    },
    sex: {
      type: String,
      required: false,
      default: '男' //默认值
    },
    age:{
      type:Number,
      default: 20

    }

  }
}
</script>

<style scoped>

</style>