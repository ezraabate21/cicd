<template>


<div class="card">
  <img src="@/assets/todo.png" alt="Avatar">
  <div class="container">
    <nuxt-link to="/tasks">
    <h4><b>Your To Do's</b></h4>
    </nuxt-link> 
    <p><b> Keeps Your Life Easy</b></p> 
  </div>
</div>

</template>

<script>

export default {

  head () {
    return{
      title: 'Home'
    }
  }

}
</script>

<style>

.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 50%;
  margin-bottom: 10%;
  margin-left: 23%;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  
}


.container {
  padding: 20px 22px;
}

h4 , p {
  text-align: center;
}

h4:hover {
    color: red;
}


</style>
