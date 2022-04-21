import { createApp } from "vue/dist/vue.esm-bundler.js";
import App from "./App.vue";
// import Home from "./views/Home.vue";
// import Team from "./views/Team.vue";
import "./index.css";
// import { createRouter, createWebHistory } from "vue-router";

import { router } from "./router";

// const routes = [
//   { path: "/", component: Home },
//   { path: "/team", component: Team },
// ];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
// const router = createRouter({
//   // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
//   history: createWebHistory(),
//   routes, // short for `routes: routes`
// });

// 5. Create and mount the root instance.
const app = createApp(App);
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router);

app.mount("#app");
