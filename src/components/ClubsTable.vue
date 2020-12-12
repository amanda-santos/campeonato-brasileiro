<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th colspan="2" class="text-left">Clube</th>
          <th class="text-right">Pontos</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(club, index) of clubs" :key="club.id">
          <td>{{ index + 1 }}</td>
          <td>
            <v-avatar size="24">
              <img :src="club.escudo" :alt="club.nome" />
            </v-avatar>
            <span class="pl-2">{{ club.nome }}</span>
          </td>
          <td class="text-right">{{ club.pontos }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  name: "ClubsTable",
  props: {
    clubs: {
      type: Array,
      required: true,
    },
  },
};
</script>