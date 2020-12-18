<template>
  <div id="app">
    <img alt="logo" src="./assets/logo.jpg" @click="router.push('/')">
    <router-view/>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import {useRouter} from "vue-router";

export default {
  name: 'App',
  components: {

  },
  setup(){
    const store = useStore();
    const router = useRouter();

    return {
      store,
      router
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

body {
  background: #f0fafa;
}
</style>
