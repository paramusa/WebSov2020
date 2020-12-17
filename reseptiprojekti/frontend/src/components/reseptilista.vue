<template>
  <div>
    <h1>Tänne reseptejä</h1>
    <div class="reseptilistakomponentti">
      <lisäysform/>
      <div class="lista" v-if="reseptit">
        <div class="laatikko" v-for="resepti in reseptit" :key="resepti.id">
          <reseptikomponentti :resepti="resepti" @click="$router.push({ name: 'Resepti', params: { id: resepti.id } })"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import reseptikomponentti from "@/components/reseptikomponentti";
import lisäysform from "@/components/lisäysform";
import { reactive, computed } from 'vue';
import store from '@/store';

export default {
  name: "reseptilista",
  components: {
    reseptikomponentti,
    lisäysform
  },
  setup() {
    const state = reactive({
      //data tänne
    })

    //Computed, joka tuo storesta reseptit
    const reseptit = computed(() => store.state.reseptit);

    return {
      state,
      reseptit
    }
  }
}
</script>

<style scoped>

.reseptilistakomponentti {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
}

.lista {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

.laatikko {
  width: 200px;
}

.laatikko:hover {
  background: whitesmoke;
}
</style>