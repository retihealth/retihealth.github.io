import Team from "./views/Team.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: import("./views/Home.vue") },
  { path: "/team", component: Team },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
