<template>
<div class="container">
<nuxt-link class="btn btn-success addtask" to="/tasks/create">Add Task</nuxt-link>

<div :key="task.id" v-for="task in tasks" >
    <Task :task="task" @toggle-reminder="toggleTask" />
</div>

</div>
</template>



<script>

import Task from "./Task" 
export default {
    name:'Tasks',

    data() {
        return {
            tasks: Array
            
        }
    },
    components: {
        Task
    },
    methods:{
        toggleTask(id){
             this.tasks = this.tasks.map((task) => {
                 task.id === id ? {...task , reminder: !task.reminder} : task
             })
        }
    },
    created(){
        this.tasks = [
            {
                id:1,
                name:'task1',
                day:'02/02/2020',
                reminder: true
            },
            {
                id:2,
                name:'task2',
                day:'03/03/2020',
                reminder: true
            },
            {
                id:3,
                name:'task3',
                day:'04/04/2020',
                reminder: false
            }
        ]
    }
  
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