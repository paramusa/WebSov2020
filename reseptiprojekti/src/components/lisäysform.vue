<template>
  <div class="formkomponentti">
    <div class="container">
      <form>
        <label for="nimi">Reseptin nimi</label>
        <input id="nimi" type="text" v-model="state.nimi">
        <label for="ohjeet">Ohjeet</label>
        <textarea id="ohjeet" rows="4" v-model="state.ohjeet"/>
        <button type="button" @click="lisaaResepti">Lisää</button>
      </form>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import { useStore } from "vuex";

export default {
name: "lisäysform",
  setup() {
    const state = reactive({
      //data tänne
      nimi: '',
      ohjeet: ''
    })

    const store = useStore();

    function lisaaResepti() {
      if (state.nimi && state.ohjeet) {
        store.dispatch('addRecipe', {
          nimi: state.nimi,
          ohjeet: state.ohjeet
        });

        state.nimi = '';
        state.ohjeet = '';

      }
    }

    return {
      state,
      lisaaResepti
    }
  }
}
</script>

<style scoped>

.formkomponentti {
  width: 40%;
  margin: auto;
}

.container {
  background: bisque;
}

form {
  display: flex;
  flex-direction: column;
  padding: 10px;
}

form * {
  margin-top: 3px;
}

textarea {
  resize: vertical;
}

</style>