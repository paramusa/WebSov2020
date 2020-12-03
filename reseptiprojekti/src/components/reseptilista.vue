<template>
  <div class="reseptilistakomponentti">
    <h1>Tänne reseptejä</h1>
    <div class="lista">
      <div class="laatikko" v-for="resepti in reseptit" :key="resepti.id">
        <reseptikomponentti :resepti="resepti"></reseptikomponentti>
      </div>
    </div>
  </div>
</template>

<script>
import reseptikomponentti from "@/components/reseptikomponentti";
import { reactive, computed } from 'vue';
import store from '@/store';

export default {
  name: "reseptilista",
  components: {
    reseptikomponentti
  },
  setup() {
    const state = reactive({

    })

    const reseptit = computed(() => store.state.reseptit);

    return {
      state,
      reseptit
    }
  }
}
</script>

<style scoped>

.lista {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

.laatikko {
  width: 200px;
}

</style>