<template>
  <div class="ml-[10%] mr-[10%] mt-2 max-w-screen-sm overflow-auto">
    <button
      class="mt-7 flex h-[60px] items-center overflow-auto rounded-full border-[1px] border-black shadow-lg"
      v-for="answer in gameData"
      :key="answer"
      :class="{
        'bg-green-500': selectedAnswer?.id === answer.id && answer.isCorrect,
        'bg-red-500': wrongAnswer && wrongAnswer.id === answer.id,
      }"
      @click="checkIsCorrect(answer)"
    >
      <p class="ml-3 mr-8 pl-[10px] text-3xl font-bold">{{ answer.id }}</p>
      <div>
        <p class="text-left text-[20px] font-normal">
          {{ answer.answer }}
        </p>
      </div>
    </button>
  </div>
  <div class="">
    <BackAndContinueBtns
      :showContinue="selectedAnswer?.isCorrect"
      continueLink="/nuremberg/story2"
      backLink="/nuremberg/story"
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
        wrongAnswer: null,
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
          return;
        } else {
          this.wrongAnswer = selectedAnswer;

          setTimeout(() => {
            this.wrongAnswer = null;
          }, 300);
        }
      },
    },
  };
</script>
