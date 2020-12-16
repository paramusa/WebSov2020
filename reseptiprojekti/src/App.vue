<template>
  <div id="app">
    <img alt="logo" src="./assets/logo.jpg">
    <router-view/>
  </div>
</template>

<script>
import { useStore } from 'vuex';

export default {
  name: 'App',
  components: {

  },
  setup(){
    const store = useStore();

    return {
      store
    }
  },
  mounted() {
    useStore().dispatch('refreshAllRecipesFromDB');
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
