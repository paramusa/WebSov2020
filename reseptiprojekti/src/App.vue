<template>
  <div id="app">
    <img alt="logo" src="./assets/logo.jpg">
    <Reseptilista/>
  </div>
</template>

<script>
import Reseptilista from "@/components/reseptilista";

export default {
  name: 'App',
  components: {
    Reseptilista
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
