<template>
  <v-app class="border-thin">
    <v-container
      fluid
      class="d-flex justify-space-between border-thin px-10 py-4"
    >
      <h3 class="name" style="font-size: 25px">Notes</h3>
      <AddNote />
    </v-container>
  </v-app>
</template>

<script setup>
import AddNote from "./AddNote.vue";
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.name {
  text-align: end;
}
</style>
