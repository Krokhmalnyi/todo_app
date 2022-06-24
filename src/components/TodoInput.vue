<template>
    <div>
        <input
         @change="todoTextChange"
         v-bind:value="todoText" 
         type="text"
         />
        <button @click="addTodoI(todoText)" class="blue">Add</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import { v1 } from "uuid";

export default {
    data() {
        return {
            todoText: ""
        };
    },
    methods: {
        ...mapActions(["addTodo"]),
        todoTextChange(e) {
            this.todoText = e.target.value;
        },

        addTodoI() {
            this.addTodo({
                id: v1(),
                title: this.todoText
            });
            this.todoText = "";
        }
    }
};
</script>

