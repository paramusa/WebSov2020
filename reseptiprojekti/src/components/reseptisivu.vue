<template>
  <div class="reseptisivu">
    <p>Tähän vaikka kuva</p>
    <h3>{{reseptit[$route.params.id-1].nimi }}</h3>
    <p>{{ reseptit[$route.params.id - 1].ohjeet }}</p>
  </div>
</template>

<script>
import {computed, reactive} from "vue";
import store from "@/store";

export default {
  name: "reseptisivu",
  setup() {
    const state = reactive({
      //data tänne
    })

    //Computed, joka tuo storesta reseptit
    const reseptit = computed(() => store.state.reseptit);
    //HUOM jos id:t ei ole 123 järjestyksessä tuo routeparamsid -1 ei toimi
    return {
      state,
      reseptit
    }
  }
}

</script>

<style scoped>
p {
  color: gray;
}
</style>