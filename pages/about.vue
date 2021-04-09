<template>
    <div> 
   <p><b>The App allows to keep track of your daily todo, Add your daily tasks here and save your time</b></p>
   <small class="small">Version 1.0.0</small>
   </div>
</template>



<script>
export default {
    head(){
        return{
            title: 'About',
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


<style scoped>
h1 {
    text-align: center;
}

.small {
    margin-left: 90%;
}

</style>


