<template>
  <div class="ml-[10%] mr-[10%] mt-2 flex flex-col items-center justify-center">
    <button
      class="ml-3 mr-3 mt-7 flex h-[60px] w-[450px] items-center rounded-full border-[1px] border-black shadow-lg"
      v-for="answer in gameData"
      :key="answer"
      :class="{
        'bg-green-500': selectedAnswer?.id === answer.id && answer.isCorrect,
      }"
      @click="checkIsCorrect(answer)"
    >
      <p class="ml-3 mr-8 pl-[10px] text-3xl font-bold">{{ answer.id }}</p>
      <div class="w-[450px]">
        <p class="text-left text-[20px] font-normal">
          {{ answer.answer }}
        </p>
      </div>
    </button>
  </div>
  <div class="mb-[70%]">
    <BackAndContinueBtns
      :showContinue="selectedAnswer?.isCorrect"
      continueLink="/nuernberg/sight"
      backLink="/nuernberg/ss"
      tag="button"
    />
  </div>
</template>

<script>
  import questionsData from "@/data/data.js";
  import BackAndContinueBtns from "@/components/BackAndContinueBtns.vue";

  export default {
    data() {
      return {
        selectedAnswer: null,
        currentQuestionIndex: 0,
      };
    },
    components: {
      BackAndContinueBtns,
    },
    computed: {
      gameData() {
        return questionsData[0].answers;
      },
    },
    methods: {
      checkIsCorrect: function (selectedAnswer) {
        const correctAnswer = this.gameData.find((answer) => answer.isCorrect);
        if (selectedAnswer.id === correctAnswer.id) {
          this.selectedAnswer = selectedAnswer;
          console.log("Richtig!");
          return;
        } else {
          console.log("Falsch!");
        }
      },
    },
  };
</script>
