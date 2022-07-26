<template>
<div>
    <div class="container">     
        <h3 v-if="!editing">{{todo.title}}</h3>
        <input v-model="todoText"
         v-else 
         type="text" 
         class="form-control">
    </div>
        <button @click="changeTodoTitle()" 
         v-if="editing"
         class="blue">Update
         </button>
        <button v-else @click="editing = true;
         todoText = todo.title; " 
         class="blue">Edit
        </button>
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
 
    changeTodoTitle() {
        const todo = {...this.todo, title: this.todoText }
        this.updateTodo(todo)
        this.editing = false
    }
   }
}
</script>

<style lang="scss">
