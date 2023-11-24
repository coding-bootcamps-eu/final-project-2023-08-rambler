<template>
  <button
    class="ml-3 mr-3 mt-7 flex h-[60px] w-[450px] items-center rounded-full border-[1px] border-black shadow-lg"
    v-for="answer in gameData"
    :key="answer"
    :class="{
      'bg-green-500': selectedAnswer === answer.id,
    }"
    @click="checkIsCorrect(answer.id)"
  >
    <p class="ml-3 mr-8 pl-[10px] text-3xl font-bold">{{ answer.id }}</p>
    <div class="w-[450px]">
      <p class="text-left text-[20px] font-normal">
        {{ answer.answer }}
      </p>
    </div>
  </button>
  <BackAndContinueBtns />
</template>

<script>
  import questionsData from "@/data/data.js";
  import BackAndContinueBtns from "@/components/BackAndContinueBtns.vue";

  export default {
    data() {
      return {
        gameData: [],
        selectedAnswer: null,
        correctAnswer: null,
        currentQuestionIndex: 0,
      };
    },
    components: {
      BackAndContinueBtns,
    },
    computed: {
      // eslint-disable-next-line vue/return-in-computed-property
      invokeAnswers: function () {
        const question = questionsData[0];
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.gameData = question.answers;
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.correctAnswer = question.isCorrect;
      },
    },
    methods: {
      checkIsCorrect: function (selectedAnswer) {
        const correctAnswer = this.gameData.find((answer) => answer.isCorrect);
        if (selectedAnswer === correctAnswer.id) {
          this.selectedAnswer = selectedAnswer;
          console.log("Richtig!");
          return;
        } else {
          console.log("Falsch!");
        }
      },
    },
    created() {
      this.invokeAnswers;
    },
  };
</script>
