<template>
    <div>
      
      <h1>Archived Items:</h1>
      <div v-for="({ title }, i) in selectTodo" :key="''.concat(i, title)">
        {{ title }}
      </div>
    </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
    components: {
      
    },
    computed: { 
        ...mapGetters(["selectTodo"])
    }
}
</script>
