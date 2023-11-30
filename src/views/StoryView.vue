<template>
  <div class="flex flex-col items-center justify-center px-10">
    <h1 class="my-12 text-3xl font-bold">The story continues...</h1>
    <p class="mb-10 text-[16px] leading-7">{{ story }}</p>

    <BackAndContinueBtns
      :showContinue="true"
      continueLink="/nuremberg/game"
      backLink="/nuremberg/direction"
      tag="button"
    />
  </div>
</template>

<script>
  import BackAndContinueBtns from "../components/BackAndContinueBtns.vue";
  import questionsData from "@/data/data.js";

  export default {
    data() {
      return {
        story: questionsData[0].story[1],
      };
    },
    components: { BackAndContinueBtns },
  };
</script>
