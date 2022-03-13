<template>
  <div id="app">
    <Student name="jerry" sex="男"></Student>
    <hr>
    <Student name="Alice" sex="女" :age="18"></Student>
  </div>
</template>

<script>

import Student from "./components/Student"
export default {
  name: 'App',
  components: {
    Student
  }
}
</script>

<style>

</style>
