<template>
  <div class="select-language">
    <select ref="languageSelect" name="cars" id="cars" @change="updateLangUser">
      <option value="vi">Tiếng Việt</option>
      <option value="jp">Tiếng Nhật</option>
      <option value="en">Tiếng Anh</option>
    </select>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { ref } from "vue";
const languageSelect = ref(null);
const { locale } = useI18n();

const updateLangUser = () => {
  const selectLang = languageSelect.value.value;
  locale.value = selectLang;
};
</script>

<style scoped>
select {
  padding: 5px;
  border: 1px solid;
  border-radius: 5px;
}
option {
  padding: 5px;
}
select:focus {
  outline: none;
}
</style>
