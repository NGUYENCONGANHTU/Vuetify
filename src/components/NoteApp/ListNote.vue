<template>
  <v-app>
    <v-container fluid>
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
import EditNote from "@/components/NoteApp/EditNote.vue";
import { onMounted, computed } from "vue";
import { useNoteStore } from "@/stores/NoteStore";
import localStorage from "@/lib/localStorage";
import { KEY } from "@/lib/key-data";
const user = localStorage.all(KEY.user);
const store = useNoteStore();
const formattedBooks = computed(() => {
  return store.boosUser.map((book) => ({
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
  store.fetchUserBooks();
});
</script>

<style scoped>
* {
  padding: 0;
}
</style>
