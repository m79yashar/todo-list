<script setup>
import BaseHeader from '@/components/BaseHeader.vue';
</script>

<template>
  <base-header />
  <router-view/>
</template>

<style>
*{ 
  margin: 0;
}
body{
  background-color: #172A3A;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #51E5FF;
}

</style>
