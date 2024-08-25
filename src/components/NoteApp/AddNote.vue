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
          <v-text-field label="Title:" v-model="title"></v-text-field>
          <v-textarea label="Content:" v-model="content"></v-textarea>

          <!-- Chỉ giữ lại một v-date-picker trong v-menu -->
          <v-menu
            max-width="290"
            v-model="menu"
            transition="scale-transition"
            offset-y
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                :value="formattedDate"
                label="Due date"
                prepend-icon="mdi-calendar-range"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="due"
              @update:modelValue="menu = false"
            ></v-date-picker>
          </v-menu>

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
import { computed, ref } from "vue";
import moment from "moment";

const dialog = ref(false);
const title = ref("");
const content = ref("");
const due = ref(""); // Sử dụng ref để giữ ngày
const menu = ref(false); // Thêm biến menu để điều khiển v-menu

const formattedDate = computed(() => {
  return due.value ? moment(due.value).format("Do MMMM YYYY") : "";
});

const submit = () => {
  console.log("Title:", title.value);
  console.log("Content:", content.value);
  console.log("Due date:", formattedDate.value); // Sử dụng formattedDate.value thay vì formattedDate(due.value)
  dialog.value = false; // Đóng dialog sau khi submit
};
</script>

<style scoped></style>
