<template>
  <div>
    <Appheader />
    <Nuxt />
    <Appfooter />
  </div>
</template>




<script>

import Appheader from "../components/Appheader";
import Appfooter from '../components/Appfooter';


export default {
  components:{
    Appheader,
    Appfooter
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  background: #f4f4f4;
}

a {
  color: #666;
  text-decoration: none;
}

ul {
  list-style: none;
}

.container {
  max-width: 800px;
  margin: 2rem auto;
  overflow: hidden;
  padding: 1rem 2rem;
  background: #fff;
}
</style>
