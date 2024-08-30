<template>
  <v-app class="border-thin">
    <v-container fluid>
      <div
        class="d-flex justify-space-between align-center border-thin px-10 py-4"
      >
        <h3 class="name" style="font-size: 25px; float: left">
          {{ t("Notes") }}
        </h3>
        <div class="select-language d-flex">
          <SelectLanguage style="margin-right: 5px" />
          <AddNote />
        </div>
      </div>
      <div class="p-4">
        <ListNote />
      </div>
    </v-container>
  </v-app>
</template>

<script setup>
import AddNote from "./AddNote.vue";
import ListNote from "./ListNote.vue";
import SelectLanguage from "./SelectLanguage.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
