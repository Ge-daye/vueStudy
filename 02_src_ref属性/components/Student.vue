<template>
  <div>
    <h2>{{name}}</h2>
    <div ref="ageDom" id="ageDom">{{age}}</div>
    <Book  ref="book"></Book>
    <button @click="showMsg()">点击在控制台查看结点</button>
  </div>
</template>

<script>
import Book from "./Book"
export default {
  name: "Student",
  data(){
    return {
      name:'tom',
      age:19
    }
  },
  methods:{
    showMsg(){
      console.log(this.$refs.ageDom) //this.$refs获取的结点就是传统js中传统的节点元素
      // let ageDom = document.getElementById('ageDom')
      // console.log(ageDom)
      console.log(this.$refs.book)
    }
  },
  components:{
    Book
  }
}
</script>

<style scoped>

</style>