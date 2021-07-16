<template>
  <div> 
    <div :key="task.id" v-for="task in tasks" :class="[task.reminder ? 'reminder' : '', 'task']" @dblclick="updateReminder(task.id)">
    <h5>
      {{ task.name }}
      <font-awesome-icon class="fas" :icon="['fas', 'times']"  @click="removeTask(task.id)"/>
    </h5>
    <h5>{{ task.day }}</h5>
</div>
  </div>
</template>



<script>
import {mapState,mapActions,mapGetters,mapMutations} from 'vuex'
export default {
   name:'Task',
   computed: mapState(["tasks"]),
   methods: {
   ...mapActions(["update","delete"]),
    updateReminder(id){
    this.update(id)
  },
  removeTask(id){
    this.delete(id)
  }

   }
}
</script>



<style>
.fas {
  color: red;
  float: right;
  margin-top: 20px;
}

.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;

}

.task.reminder {
  border-left: 5px solid green;
}

.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>