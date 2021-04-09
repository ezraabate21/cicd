<template>
    <header class="header">
        <nuxt-link to="/"> <h1 class="title">To do List</h1></nuxt-link> 
        <ul>
            <li>
                <nuxt-link to="/">Home</nuxt-link>
            </li>

            <li>
                <nuxt-link to="/tasks">My Tasks</nuxt-link>
            </li>

            <li>
                <nuxt-link to="/about">About</nuxt-link>
            </li>

        </ul>
    </header>
</template>


<script>
export default {
    name: "Appheader",

    
    
}
</script>



<style>

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-left: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px dotted #ccc;
  background: #333;

}

.header .title {
  font-size: 3rem;
  color: #ccc;
  background: #333;
}

.header ul {
  display: flex;
}

.header a {
  display: inline-block;
  background: #333;
  color: #fff;
  padding: 0.3rem 1rem;
  margin-right: 0.5rem;
}

</style>