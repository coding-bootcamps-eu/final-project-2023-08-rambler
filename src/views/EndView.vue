<template>
  <h1 class="m-auto">Congrats ! You finished the game !!!</h1>
  <div class="mb-[5%] flex items-center justify-center">
    <BackAndContinueBtns
      :showContinue="true"
      continueLink="/nuernberg/end"
      backLink="/nuernberg/sight"
      tag="button"
    />
  </div>
</template>

<script>
  import BackAndContinueBtns from "../components/BackAndContinueBtns.vue";

  export default {
    data() {
      return {};
    },
    components: { BackAndContinueBtns },
  };
</script>
