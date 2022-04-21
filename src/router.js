import Team from "./views/Team.vue";
import Home from "./views/Home.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: Home },
  { path: "/team", component: Team },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
