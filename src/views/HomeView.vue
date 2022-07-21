<template>
  <div class="home">
    <HelloWorld />
    <TodoInput/>
    <TodoList/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import TodoInput from '@/components/TodoInput.vue'
import TodoList from '@/components/TodoList.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    TodoInput,
    TodoList
  },
}
</script>
