<template>
  <location-map class="mx-auto" />
  <BackAndContinueBtns
    :showContinue="true"
    continueLink="/nuremberg/story"
    backLink="/"
    tag="button"
  />
</template>

<script>
  import LocationMap from "@/components/LocationMap.vue";
  import BackAndContinueBtns from "../components/BackAndContinueBtns.vue";

  export default {
    name: "DirectionView",
    components: {
      LocationMap,
      BackAndContinueBtns,
    },
  };
</script>
