import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import { createPinia } from "pinia";
import router from "./router";
import { createI18n } from "vue-i18n";

import en from "./locales/en.json";
import jp from "./locales/jp.json";
import vn from "./locales/vn.json";

const i18n = createI18n({
  legacy: false, // todo: lúc nào sử dụng api dịch động thì bật lên thành true
  locale: "vi", // mặc định là ngôn ngữ tiếng anh
  messages: {
    en: en,
    vi: vn,
    jp: jp,
  },
});
// Tải các phông chữ
loadFonts();

// Tạo ứng dụng Vue
const app = createApp(App);

// Sử dụng các plugin và router
app.use(router);
app.use(i18n);
app.use(vuetify);
app.use(createPinia()); // Sử dụng Pinia

// Mount ứng dụng vào phần tử có id 'app'
app.mount("#app");
