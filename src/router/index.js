import { createRouter, createWebHistory } from "vue-router";
import LoginAuth from "../components/LoginAuth.vue";
import SignUp from "../components/SignUp.vue";
import NoteApp from "../components/NoteApp/NoteApp.vue";
import ListTable from "../Admin/ListTable.vue";
import PageError from "../Admin/PageError.vue";
import { authMiddleware } from "@/middleware/middleware";
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
    path: "/403",
    name: "PageError",
    component: PageError,
  },

  {
    path: "/admin",
    name: "ListTable",
    component: ListTable,
    beforeEnter: (to, from, next) => {
      authMiddleware(to, from, next);
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
