<template>
    <div>
        
        <todo-item/>
         <todo-item/>
          <todo-item/>
    </div>
</template>


<script>
import TodoItem from '@/components/TodoItem.vue'

export default {
    components: {
        TodoItem,
    }
}
</script>