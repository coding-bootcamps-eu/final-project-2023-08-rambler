<template>
  <h1 class="text-6xl font-bold">Hello GameView</h1>
  <game-page-1 />
</template>

<script>
  import GamePage1 from "../components/GamePage1.vue";
  export default {
    name: "GameView",
    components: { GamePage1 },
  };
</script>
