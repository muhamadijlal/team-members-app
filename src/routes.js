import Team from "./components/Team.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/team",
    name: "team",
    component: Team,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
