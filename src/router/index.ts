import { createRouter, createWebHistory } from "vue-router";
import OptionsApiTest from "../views/OptionsApiTest.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: OptionsApiTest,
    },
  ],
});

export default router;
