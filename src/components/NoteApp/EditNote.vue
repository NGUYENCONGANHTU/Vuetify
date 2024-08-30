<template>
  <!-- Dialog component with v-model for controlling its state -->
  <v-dialog v-model="dialog" max-width="550">
    <template v-slot:activator="{ props }">
      <div
        v-bind="props"
        color="surface-variant"
        variant="flat"
        style="cursor: pointer; display: inline-block"
      >
        <v-icon>mdi-pencil</v-icon>
      </div>
    </template>

    <v-card>
      <v-card-title>{{ t("Edit Note") }}</v-card-title>
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
            <v-btn :text="t('Close Dialog')" @click="dialog = false"></v-btn>
            <v-btn :text="t('Edit')" @click="submit"></v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, computed, defineProps, watch } from "vue";
import moment from "moment";
import { useNoteStore } from "@/stores/NoteStore";
const props = defineProps(["item"]);
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const dialog = ref(false);
const id = ref("");
const title = ref("");
const content = ref("");
const showNote = ref(true); // Thêm biến menu để điều khiển v-menu
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

const detail = computed(() => {
  if (!props.item) {
    return null;
  } else {
    return props.item;
  }
});

const parseDate = (dataString) => {
  if (!dataString) return;
  const [day, month, year] = dataString.split("-").map(Number);
  return new Date(year, month - 1, day);
};

watch(
  detail,
  (newDetail) => {
    if (newDetail) {
      datePicker.value = parseDate(newDetail.DataBook);
      id.value = newDetail.Id;
      title.value = newDetail.Name || "";
      content.value = newDetail.Content || "";
    }
  },
  { immediate: true }
);

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

    store.update(id.value, book);
  }
  showNote.value = false;
  dialog.value = false;
  title.value = "";
  content.value = "";
};
</script>

<style scoped></style>
