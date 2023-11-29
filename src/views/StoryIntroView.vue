<template>
  <p>{{ storyIntro }}</p>
  <BackAndContinueBtns
    :showContinue="true"
    continueLink="/nuremberg/direction"
    backLink="/"
    tag="button"
  />
</template>

<script>
  import questionsData from "@/data/data.js";
  import BackAndContinueBtns from "../components/BackAndContinueBtns.vue";

  export default {
    data() {
      return {
        storyIntro: questionsData[0].story[0],
      };
    },
    components: { BackAndContinueBtns },
  };
</script>
