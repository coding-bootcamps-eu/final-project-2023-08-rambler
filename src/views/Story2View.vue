<template>
  <h1 class="m-auto">Story2View</h1>

  <BackAndContinueBtns
    :showContinue="true"
    continueLink="/nuremberg/sight"
    backLink="/nuremberg/game"
    tag="button"
  />
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
