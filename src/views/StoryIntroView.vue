<template>
  <p>{{ storyIntro }}</p>
  <BackAndContinueBtns
    :showContinue="true"
    :continueLink="'/nuremberg/direction/' + $route.params.index"
    backLink="/"
    tag="button"
  />
</template>

<script>
  import sights from "@/data/data.js";
  import BackAndContinueBtns from "../components/BackAndContinueBtns.vue";

  export default {
    computed: {
      storyIntro() {
        return sights[Number(this.$route.params.index)].story[0];
      },
    },
    components: { BackAndContinueBtns },
  };
</script>
