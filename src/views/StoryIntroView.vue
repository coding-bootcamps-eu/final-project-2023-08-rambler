<template>
  <div class="flex flex-col items-center justify-center px-10">
    <h1 class="my-12 text-3xl font-bold">Story Intro</h1>
    <p class="mb-10 leading-7">{{ storyIntro }}</p>
    <BackAndContinueBtns
      :showContinue="true"
      continueLink="/nuremberg/direction"
      backLink="/"
      tag="button"
    />
  </div>
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
