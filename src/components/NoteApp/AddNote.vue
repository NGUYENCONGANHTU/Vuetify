<template>
  <!-- Dialog component with v-model for controlling its state -->
  <v-dialog v-model="dialog" max-width="550">
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" color="surface-variant" variant="flat">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </template>

    <v-card>
      <v-card-title>{{ t("Add New Note") }}</v-card-title>
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
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                label="Title:"
                v-model="title"
                :rules="titleRules"
              ></v-text-field>
              <v-textarea
                label="Content:"
                v-model="content"
                :rules="contentRules"
              ></v-textarea>
            </v-form>
          </div>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="dialog = false">{{ t("Close Dialog") }} </v-btn>
            <v-btn @click="submit">{{ t("Add") }} </v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, computed } from "vue";
import moment from "moment";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
import { useNoteStore } from "@/stores/NoteStore";
// import { Book } from "@/models/book"
const dialog = ref(false);
const title = ref("");
const content = ref("");
const showNote = ref(false); // Thêm biến menu để điều khiển v-menu
const datePicker = ref(null);
const store = useNoteStore();
const titleRules = [(v) => !!v || " Tiêu đề không được để trống "];
const contentRules = [(v) => !!v || " Nội dung không được để trống "];
import localStorage from "@/lib/localStorage";
import { KEY } from "@/lib/key-data";
const user = localStorage.all(KEY.user);

const formattedDate = computed(() => {
  return moment(datePicker.value).format("DD-MM-YYYY");
});

const getValueDate = async (date) => {
  showNote.value = true;
  datePicker.value = date;
};

const submit = () => {
  if (!title.value || !content.value) {
    alert("Title or content không được để trống");
    showNote.value = true;
    dialog.value = true;
  } else {
    const book = {
      name: title.value || "",
      notes: content.value || "",
      time_boos: formattedDate.value || null,
      user_id: JSON.parse(user).id,
    };

    store.addBook(book);
  }
  showNote.value = false;
  dialog.value = false;
  title.value = "";
  content.value = "";
};
</script>

<style scoped></style>
