<template>
  <img
    class="h-fit w-[600px] py-3"
    :src="image"
    alt="nuernberg-image"
  />

  <section>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, autem rerum cumque nisi
    quia harum aliquid incidunt veritatis officiis. Quaerat sapiente nobis earum praesentium? Sequi
    laborum animi pariatur ut eius.
  </section>
  <BackAndContinueBtns
    :showContinue="true"
    continueLink="/nuremberg/end"
    backLink="/nuremberg/game"
    tag="button"
  />
</template>

<script>
  import questionsData from "@/data/data.js";
  import BackAndContinueBtns from "../components/BackAndContinueBtns.vue";

  export default {
    data() {
      return {
        image: questionsData[0].images[0],
      };
    },
    components: { BackAndContinueBtns },
  };
</script>
