<template>
  <p>{{ story2 }}</p>

  <BackAndContinueBtns
    :showContinue="true"
    continueLink="/nuremberg/sight"
    backLink="/nuremberg/game"
    tag="button"
  />
</template>

<script>
  import BackAndContinueBtns from "../components/BackAndContinueBtns.vue";
  import questionsData from "@/data/data.js";

  export default {
    data() {
      return {
        story2: questionsData[0].story[2],
      };
    },
    components: { BackAndContinueBtns },
  };
</script>
