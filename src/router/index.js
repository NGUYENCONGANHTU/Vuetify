import { createRouter, createWebHistory } from "vue-router";
import LoginAuth from "../components/LoginAuth.vue";
import SignUp from "../components/SignUp.vue";
import NoteApp from "../components/NoteApp/NoteApp.vue";
import ListTable from "../Admin/ListTable.vue";
const routes = [
  {
    path: "/",
    name: "NoteApp",
    component: NoteApp,
  },
  {
    path: "/login",
    name: "LoginAuth",
    component: LoginAuth,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/admin",
    name: "ListTable",
    component: ListTable,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
