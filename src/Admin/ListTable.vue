<template>
  <v-container class="d-block align-center" height="100vh">
    <v-card class="pa-3">
      <v-data-table :items="items"></v-data-table>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
  {
    title: "African Elephant",
    content: "Loxodonta africana",
    date: "Herbivore",
    acions: "Savanna, Forests",
  },
]);
</script>

<style scoped></style>
