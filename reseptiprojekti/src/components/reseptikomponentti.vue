<template>
  <div class="reseptikomponentti">
    <p>Tähän vaikka kuva</p>
    <h3>{{resepti.nimi}}</h3>
    <p>{{ resepti.ohjeet }}</p>
  </div>
</template>

<script>
export default {
  name: "reseptikomponentti",
  props: {
    resepti: Object //onko mahdollista että tulee sama resepti jos vaihtaa samalla sivulla toiseen?
  },
  data() {
    return {

    };
  }
}
</script>

<style scoped>
.reseptikomponentti {
  border: 1px #2c3e50 solid;
  margin: 5px 2px;
}

p {
  color: gray;
}
</style>