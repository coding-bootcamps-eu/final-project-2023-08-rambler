import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import DirectionView from "@/views/DirectionView.vue";
import GameView from "@/views/GameView.vue";
import SightView from "@/views/SightView.vue";
import EndView from "@/views/EndView.vue";
import StoryIntroView from "@/views/StoryIntroView.vue";
import StoryView from "@/views/StoryView.vue";
import Story2View from "@/views/Story2View.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/nuremberg/storyintro/:index",
      name: "StoryIntro",
      component: StoryIntroView,
    },
    {
      path: "/nuremberg/direction/:index",
      name: "Direction",
      component: DirectionView,
    },
    {
      path: "/nuremberg/story/:index",
      name: "Story",
      component: StoryView,
    },
    {
      path: "/nuremberg/game/:index",
      name: "Game",
      component: GameView,
    },
    {
      path: "/nuremberg/story2/:index",
      name: "Story2",
      component: Story2View,
    },
    {
      path: "/nuremberg/sight/:index",
      name: "Sight",
      component: SightView,
    },
    {
      path: "/nuremberg/end",
      name: "End",
      component: EndView,
    },
  ],
});

let isInitialRouting = true;

router.beforeEach((to, from, next) => {
  const lastRoute = localStorage.getItem("lastRoute");

  if (lastRoute && lastRoute != to.href && isInitialRouting) {
    next({
      path: lastRoute,
    });
    isInitialRouting = false;
    return;
  }
  isInitialRouting = false;

  localStorage.setItem("lastRoute", to.href);
  next();
});
