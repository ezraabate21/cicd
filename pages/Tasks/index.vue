<template>
   <Tasks />
</template>



<script>
import Tasks from '../../components/Tasks'
export default {
    head() {
        return{
            title: 'Tasks',
            meta:[
                {
                    hid:'tasks',
                    name:'tasks',
                    content:'tasks'
                }
            ]
        }
    },
    components:{
        Tasks
    }
}
</script>



<style>

</style>