<script setup>

// import Home from './components/Home/Home.vue';
import Navbar from './components/Navbar/Navbar.vue';
// import SchoolOfProduct from './views/Schools/School of Product/index.vue'
</script>

<template>
  <div class="relative inset-x-0">
    <Navbar />
    <!-- <Home/> -->
    <!-- <SchoolOfProduct/> -->
    <RouterView/>
  </div>
</template>

<style scoped>

</style>
