<template>
  <div class="flex flex-col items-center justify-center px-10">
    <h1 class="my-12 text-3xl font-bold">End of Story</h1>
    <p class="mb-10 leading-7">{{ story2 }}</p>

    <BackAndContinueBtns
      :showContinue="true"
      continueLink="/nuremberg/sight"
      backLink="/nuremberg/game"
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
        story2: questionsData[0].story[2],
      };
    },
    components: { BackAndContinueBtns },
  };
</script>
