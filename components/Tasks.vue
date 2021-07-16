<template>
<div class="container">
<nuxt-link class="btn btn-success addtask" to="/tasks/create">Add Task</nuxt-link>

<div>
    <Task />
</div>

</div>

</template>



<script>

import Task from "./Task" 
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex'
export default {
    name:'Tasks',

    components: {
        Task
    },   
  
}
</script>



<style scoped>
.container{
    align-items: center;
    
}

.addtask{
    margin-left: 86%;    
}
</style>