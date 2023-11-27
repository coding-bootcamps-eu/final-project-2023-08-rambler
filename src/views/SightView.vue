<template>
  <img
    class="h-fit w-[600px] py-3"
    :src="sightImage"
    alt="nuernberg-image"
  />
  <section>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, autem rerum cumque nisi
    quia harum aliquid incidunt veritatis officiis. Quaerat sapiente nobis earum praesentium? Sequi
    laborum animi pariatur ut eius.
  </section>
  <BackAndContinueBtns
    :showContinue="true"
    continueLink="/nuernberg/end"
    backLink="/nuernberg/game"
    tag="button"
  />
</template>

<script>
  import sightImage from "@/assets/fotos/nuernberg1.jpg";
  import BackAndContinueBtns from "../components/BackAndContinueBtns.vue";

  export default {
    data() {
      return {
        sightImage,
      };
    },
    components: { BackAndContinueBtns },
  };
</script>
