<template>
<div>
    <div class="container">     
        <h3 v-if="!editing">{{todo.title}}</h3>
        <input v-bind:value="todoText"
         @change="todoTextChange" 
         v-else 
         type="text" 
         class="form-control">
    </div>
        <button @click="updateTodoI(todo)" class="blue">{{editing? 'Update':'Edit'}}</button>
        <button @click="deleteTodo(todo.id)" >Delete</button>
        <button @click="selectTodo(todo.id)" >Select</button>
   </div>


   
</template>

<script>
import { mapActions } from 'vuex'
export default {
    props:{
        todo: {}
    },
    data() {
        return {
            todoText: "",
            editing: false,
        }
    },
   methods: {
    ...mapActions(['deleteTodo', 'updateTodo','selectTodo']),
    todoTextChange(e) {
        this.todoText = e.target.value;
    },
    updateTodoI(todo) {
    this.editing = this.editing == true ? false : true;
    if (this.editing) {
        this.todoText = todo.title;
    } else {
        todo.title = this.todoText;
        todo.complete = this.completed;
    }
    }
   }
}
</script>

<style lang="scss">
