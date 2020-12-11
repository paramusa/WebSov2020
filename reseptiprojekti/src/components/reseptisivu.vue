<template>
  <div class="reseptisivu">
    <button @click="deleteRecipe">Delete</button>
    <p>Tähän vaikka kuva</p>
    <h3>{{ resepti.nimi}}</h3>
    <p>{{ resepti.ohjeet }}</p>
  </div>
</template>

<script>
import {computed, reactive} from "vue";
import {useStore} from "vuex";
import {useRoute, useRouter} from "vue-router";

export default {
  name: "reseptisivu",
  setup() {
    const state = reactive({
      //data tänne
    })

    const store = useStore();
    const route = useRoute();
    const router = useRouter();

    //Computed, joka tuo storesta reseptit
    const reseptit = computed(() => store.state.reseptit);

    //nykyinen resepti
    const resepti = store.getters.getRecipe(route.params.id);

    function deleteRecipe() {
      console.log("Deleted " + resepti.nimi);
      store.dispatch('deleteRecipe', route.params.id);
      router.push('/');
    }

    return {
      state,
      reseptit,
      resepti,
      deleteRecipe
    }
  }
}

</script>

<style scoped>
p {
  color: gray;
}
</style>