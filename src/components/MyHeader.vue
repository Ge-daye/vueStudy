<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="add"/>
  </div>
</template>

<script>
export default {
  name: "MyHeader",
  methods:{
    add(e){
      if(!e.target.value.trim()){
        alert("任务不能为空")
        return
      }
      console.log("添加了一个待办事项："+e.target.value)
      let todoId = 3
      // 根据输入的内容新建一个待办事项的对象
      const newObj = {id:todoId++,title:e.target.value,done:false}
      this.addTodo(newObj)
      e.target.value=''

    }
  },
  // eslint-disable-next-line vue/no-dupe-keys
  props:['addTodo']
}
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>