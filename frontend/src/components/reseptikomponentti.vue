<template>
  <div class="reseptikomponentti">
    <p>Resepti {{ resepti.id }}</p>
    <h3>{{ resepti.name }}</h3>
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
  cursor: pointer;
  padding: 20px 5px;
}

p {
  color: gray;
}
</style>