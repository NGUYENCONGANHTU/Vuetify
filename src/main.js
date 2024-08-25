import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import { createPinia } from "pinia";
import router from "./router";

// Tải các phông chữ
loadFonts();

// Tạo ứng dụng Vue
const app = createApp(App);

// Sử dụng các plugin và router
app.use(router);
app.use(vuetify);
app.use(createPinia()); // Sử dụng Pinia

// Mount ứng dụng vào phần tử có id 'app'
app.mount("#app");
