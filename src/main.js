import { createApp } from "vue";
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";

import "@/index.css";
import App from "./App.vue";

import HomeView from "@/views/HomeView.vue";
import DirectionView from "@/views/DirectionView.vue";
import GameView from "@/views/GameView.vue";
import SightView from "@/views/SightView.vue";
import EndView from "@/views/EndView.vue";

const routes = [
  {
    path: "/home",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/nuernberg/direction",
    name: "Direction",
    component: DirectionView,
  },
  // {
  //   path: "/nuernberg/story",
  //   name: "Story",
  //   component: StoryView,
  // },
  {
    path: "/nuernberg/game",
    name: "Game",
    component: GameView,
  },
  {
    path: "/nuernberg/sight",
    name: "Sight",
    component: SightView,
  },
  {
    path: "/nuernberg/end",
    name: "End",
    component: EndView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.mount("#app");
