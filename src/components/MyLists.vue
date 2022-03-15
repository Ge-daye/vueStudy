<template>
  <ul class="todo-main">
<!--    <h3><button @click="changeTodo">点击查看todos数据</button></h3>-->
    <MyItem v-for="todoObj in todos"
            :todoObj="todoObj"
            :key="todoObj.id"
            :checkTodo="checkTodo">
    </MyItem>
  </ul>
</template>

<script>
import MyItem from "./MyItem";
export default {
  name: "MyLists",
  components: {MyItem},
  props:['todos','checkTodo'],
  methods:{
    changeTodo(){
      // this.todos.pop();
      this.todos.forEach((todoObj)=>{
        console.log(todoObj.title)
        todoObj.done = true;
      })
    }
  }
}
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>