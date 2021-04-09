<template>
    <footer>
        <p> &copy; {{currentdate.getFullYear()}} All Right Reserved!!!</p>
    </footer>
</template>



<script>
export default {

    name: 'Appfooter',
    data(){
      return{
        currentdate: new Date
      }
    }
    
}
</script>



<style scoped>

footer{
    background: #333;
    
}

footer p {
    color: #fff;
    text-align: center;
    padding-top: 3%;
    padding-bottom: 3%;

}

</style>