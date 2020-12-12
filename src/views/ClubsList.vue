<template>
  <v-container>
    <h2 class="text-h5 text-center mb-3 mt-5">Classificação dos clubes</h2>
    <ClubsTable :clubs="orderedClubs" />
  </v-container>
</template>

<script>
import ClubsTable from "../components/ClubsTable";

export default {
  name: "ClubsList",
  components: {
    ClubsTable,
  },
  data() {
    return {
      clubsList: [],
    };
  },
  computed: {
    orderedClubs() {
      // se a for maior que b então retorna -1
      // -1 significa que o valor de a será ordenado antes do b
      const computedList = this.clubsList
        .slice(0)
        .sort((a, b) => (a.pontos > b.pontos ? -1 : 1));
      return computedList;
    },
  },
  created() {
    fetch("https://hackthon-decola.firebaseio.com/clubes-lista.json")
      .then((response) => response.json())
      .then((json) => {
        this.clubsList = json;
      });
  },
};
</script>