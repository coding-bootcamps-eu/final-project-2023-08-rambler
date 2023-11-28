<template>
  <h1 class="m-auto">StoryView</h1>

  <BackAndContinueBtns
    :showContinue="true"
    continueLink="/nuremberg/game"
    backLink="/nuremberg/direction"
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
