<template>
  <div class="container">
  <form>
   <div class="form-group">
    <label for="taskname">Task Name</label>
    <input type="text" class="form-control" id="taskname" aria-describedby="emailHelp" placeholder="Enter task name">
   </div>
    <br>
   <div class="form-group">
    <label for="duedate">Due Date</label>
    <input type="date" class="form-control" id="duedate">
   </div>
   <br>
   <div class="form-check">
    <input type="checkbox" class="form-check-input" id="reminder">
    <label class="form-check-label" for="exampleCheck1">Task Reminder</label>
   </div>
    <br>
   <nuxt-link to="/tasks" class="btn btn-secondary">Back</nuxt-link>
   <button type="submit" class="btn btn-primary">Submit</button>
  
</form>
</div>
</template>




<script>
export default {
    head(){
        return{
            title:'Create New task',
             meta: [
        {
          hid: "description",
          name: "description",
          content: "content"
        }
      ]
        }
        
    }
}
</script>



<style>
 .contaier{
  align-items: center;
}
</style>