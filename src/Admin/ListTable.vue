<template>
  <v-app>
    <v-container fluid>
      <v-header class="d-flex justify-space-between border-thin px-10 py-4">
        <h3 class="name" style="font-size: 25px">{{ t("Notes") }}</h3>
        <AddNote />
      </v-header>
      <v-container class="d-block align-center" height="100vh">
        <v-card class="pa-3">
          <v-data-table
            :items="formattedBooks"
            item-key="Id"
            class="elevation-1"
          >
            <template v-slot:[`item.Actions`]="{ item }">
              <v-icon @click="remove(item.Id)" class="mr-2">mdi-delete</v-icon>
              <EditNote class="mr-2" :item="item" />
            </template>
          </v-data-table>
        </v-card>
      </v-container>
    </v-container>
  </v-app>
</template>

<script setup>
import AddNote from "@/components/NoteApp/AddNote.vue";
import EditNote from "@/components/NoteApp/EditNote.vue";
import { onMounted, computed } from "vue";
import { useNoteStore } from "@/stores/NoteStore";
import localStorage from "@/lib/localStorage";
import { KEY } from "@/lib/key-data";
const user = localStorage.all(KEY.user);
import { useRouter } from "vue-router";
const store = useNoteStore();
const router = useRouter();
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const formattedBooks = computed(() => {
  return store.books.map((book) => ({
    Id: book.id,
    User:
      JSON.parse(user).id == book.user_id
        ? JSON.parse(user).name
        : book.user_id,
    Name: book.name,
    Content: book.notes,
    DataBook: book.time_boos,
    Actions: book.actions,
  }));
});
const remove = (id) => {
  if (!id) return;
  store.deleteBook(id);
};

onMounted(() => {
  if (JSON.parse(user).role !== "30") {
    router.push("/403");
  }
  store.fetchBooks();
});
</script>

<style scoped>
* {
  padding: 0;
}
</style>
