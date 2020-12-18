<template>
  <div class="reseptisivu">
    <div class="imagecontainer">
      <img src="../assets/placeholder.png">
    </div>
    <button @click="deleteRecipe">Delete</button>
    <h3>{{ resepti.name }}</h3>
    <p>{{ resepti.content }}</p>
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
      console.log("Deleted " + resepti.name);
      store.dispatch('deleteRecipe', resepti.id);
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

.reseptisivu {
  width: 80%;
  margin: auto;
}

.imagecontainer {
  width: 100%;
}

img {
  width: 50%;
  margin: 50px;
}
</style>