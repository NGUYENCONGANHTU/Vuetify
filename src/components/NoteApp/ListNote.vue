<template>
  <v-app>
    <v-container>
      <v-data-table
        :headers="headers"
        :items="data"
        item-key="name"
        :search="Search"
        class="elevation-1"
      >
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon @click="remove(item.id)" class="mr-2">mdi-delete</v-icon>
        </template>
        <template v-slot:top>
          <v-text-field
            v-model="search"
            label="Search"
            class="mb-2"
            append-icon="mdi-magnify"
          ></v-text-field>
        </template>
      </v-data-table>
    </v-container>
  </v-app>
</template>

<script setup>
import { useNoteStore } from "@/stores/NoteStore";
import { ref } from "vue";
const store = useNoteStore();

const data = ref(store.notes);
const search = ref(null);

const headers = [
  { text: "Name", value: "name" },
  { text: "Content", value: "content" },
  { text: "Date", value: "date" },
  { text: "Actions", value: "actions", sortable: false }, // Đảm bảo có giá trị 'actions' ở đây
];
const remove = (uId) => {
  store.deleteNote(uId);
};

const Search = () => {
  store.searchName(search.value);
};
</script>

<style>
/* Your custom styles here */
</style>
