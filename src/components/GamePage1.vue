<template>
  <h1 class="text-6xl font-bold">Hello GamePage</h1>
  <multiple-choice-game />
</template>

<script>
  import MultipleChoiceGame from "./MultipleChoiceGame.vue";

  export default {
    name: "GamePage",
    components: {
      MultipleChoiceGame,
    },
  };
</script>
