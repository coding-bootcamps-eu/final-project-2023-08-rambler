<template>
  <div class="mt-2 flex flex-col items-center">
    <h1 class="mt-4 text-3xl font-semibold">{{ GameHeader }}</h1>
    <header class="border-b-1 border-black pb-8 shadow-2xl">
      <p class="ml-5 mr-5 mt-5 text-[20px]">{{ generateQuestion }}</p>
    </header>
    <img
      class="mt-4 h-[150px]"
      :src="MultplyChoiceIcon"
      alt="game-image"
    />
  </div>
  <MultipleChoiceGame />
</template>

<script>
  import multipleChoiceImage from "@/assets/fotos/MultiplyChoiceIcon.svg";
  import questionsData from "@/data/data.js";
  import MultipleChoiceGame from "@/components/MultipleChoiceGame.vue";

  export default {
    data() {
      return {
        GameHeader: "Let the games begin !",
        MultplyChoiceIcon: multipleChoiceImage,
        IntroLines: "",
      };
    },
    components: {
      MultipleChoiceGame,
    },
    computed: {
      generateQuestion: function () {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        return (this.IntroLines = questionsData[0].question);
      },
    },
  };
</script>
