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

export default {
  name: "reseptilista",
  components: {
    reseptikomponentti
  },
  data() {
    return {
      reseptit: [
        {
          id: 1,
          nimi: "Alpakka",
          teksti: "Paista ja nauti"
        },
        {
          id: 2,
          nimi: "Paahtoleipä",
          teksti: "Paahda ja syö"
        },
        {
          id: 3,
          nimi: "Roiskeläppä",
          teksti: "Mikroon ja polta suu"
        },
        {
          id: 4,
          nimi: "Tonnikalapurkki",
          teksti: "Avaa ja maiskis"
        },
        {
          id: 5,
          nimi: "Omena",
          teksti: "Siis vaan syö"
        }
      ]
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