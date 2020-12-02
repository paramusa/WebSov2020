<template>
  <div class="reseptikomponentti">
    <p>Tähän vaikka kuva</p>
    <h3>{{resepti.nimi}}</h3>
    <p>{{resepti.teksti }}</p>
  </div>
</template>

<script>
export default {
  name: "reseptikomponentti",
  props: {
    resepti: Object
  },
  data() {
    return {

    };
  }
}
</script>

<style scoped>
p {
  color: gray;
}
</style>