<template>
  <v-container fluid fill-heigh class="d-flex justify-center align-center">
    <v-row class="text-center">
      <v-col>
        <v-icon large>mdi-alert-octagon</v-icon>
        <h1 class="display-1">403</h1>
        <h2>{{ t("No Rights") }}</h2>
        <v-btn
          ><router-link to="/" style="text-decoration: none">{{
            t("Back")
          }}</router-link></v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<style scoped>
.v-col,
h1,
h2 {
  font-size: 40px;
  color: darkgrey;
}
</style>
