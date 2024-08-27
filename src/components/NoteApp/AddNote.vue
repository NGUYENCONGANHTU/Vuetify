<template>
  <!-- Dialog component with v-model for controlling its state -->
  <v-dialog v-model="dialog" max-width="550">
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" color="surface-variant" variant="flat">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </template>

    <v-card>
      <v-card-title>Add New Note</v-card-title>
      <v-card-text>
        <v-form>
          <v-date-picker
            class="w-100"
            v-model="datePicker"
            @update:model-value="getValueDate"
            show-adjacent-months
          ></v-date-picker>
          <div v-show="showNote" class="border mt-3">
            <div class="py-2">
              <h3 class="px-2">{{ formattedDate }}</h3>
            </div>
            <v-text-field label="Title:" v-model="title"></v-text-field>
            <v-textarea label="Content:" v-model="content"></v-textarea>
          </div>
          <!-- Chỉ giữ lại một v-date-picker trong v-menu -->
          <!-- <v-menu v-model="menu"
            ><v-date-input label="Date input"></v-date-input
          ></v-menu> -->
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text="Close Dialog" @click="dialog = false"></v-btn>
            <v-btn text="Add" @click="submit"></v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, computed } from "vue";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import { useNoteStore } from "@/stores/NoteStore";
// import { Book } from "@/models/book"

const dialog = ref(false);
const title = ref("");
const content = ref("");
//const due = ref(""); // Sử dụng ref để giữ ngày
const showNote = ref(false); // Thêm biến menu để điều khiển v-menu
const datePicker = ref(null);
const store = useNoteStore();

const formattedDate = computed(() => {
  return moment(datePicker.value).format("DD-MM-YYYY");
});

const getValueDate = async (date) => {
  showNote.value = true;
  datePicker.value = date;
};

const submit = () => {
  //const books = [];
  const book = {
    id: uuidv4() || "",
    name: title.value || "",
    content: content.value || "",
    date: formattedDate.value || null,
  };

  store.addNote(book);

  dialog.value = false; // Đóng dialog sau khi submit
  showNote.value = false;
  title.value = "";
  content.value = "";
  datePicker.value = null;
};
</script>

<style scoped></style>
