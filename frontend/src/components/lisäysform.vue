<template>
  <div class="formkomponentti">
    <div class="container">
      <form>
        <label for="nimi">Reseptin nimi</label>
        <input id="nimi" type="text" v-model="state.name">
        <label for="ohjeet">Ohjeet</label>
        <textarea id="ohjeet" rows="4" v-model="state.content"/>
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
      name: '',
      content: ''
    })

    const store = useStore();

    function lisaaResepti() {
      if (state.name && state.content) {
        store.dispatch('addRecipe', {
          name: state.name,
          content: state.content
        });

        state.name = '';
        state.content = '';

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
  width: 100%;
  margin: auto;
}

.container {
  background: bisque;
  width: 40%;
  margin: auto;
  border: 5px black;
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