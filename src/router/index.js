import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import NoteApp from "../components/NoteApp/NoteApp.vue";
const routes = [
  {
    path: "/",
    name: "NoteApp",
    component: NoteApp,
  },
  {
    path: "/hw",
    name: "HelloWorld",
    component: HelloWorld,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
