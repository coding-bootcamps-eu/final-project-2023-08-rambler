<template>
  <div>
    <img
      :src="image"
      width="638"
      alt="nuernberg-image"
    />

    <section class="m-8 flex items-center justify-center">
      <button
        @click="slideDivUp"
        class="animate-bounce rounded-lg border-2 border-primary-accent-color-green p-1 px-2 font-semibold"
      >
        Info's about Nuremberg-Castle
      </button>
    </section>
    <BackAndContinueBtns
      :showContinue="true"
      continueLink="/nuremberg/end"
      backLink="/nuremberg/story2"
      tag="button"
    />
    <transition
      enter-from-class="opacity-0 translate-y-full"
      enter-to-class="opacity-100"
      enter-active-class="transition-all duration-[o.5s] ease-[ease-out] transform"
      leave-active-class="transition-all duration-[o.5s] ease-[ease-out] transform"
      leave-from-class="opacity-100"
      leave-to-class="opactiy-0"
    >
      <div
        v-show="divVisible"
        class="absolute flex h-max w-[640px] flex-col items-center bg-white opacity-95"
        :style="{ top: divPosition }"
      >
        <button
          class="mt-2 h-fit w-fit rounded-full border-[1px] border-black px-2"
          @click="slideDivDown"
        >
          x
        </button>
        <div class="overflow-auto">
          <p class="mx-7 mb-4 pb-3">
            The Nuremberg Castle, a landmark with over 1,000 years of history, not only provides a
            spectacular view of the Old Town but also houses the Germanic National Museum. <br />
            <br />
            It has evolved over the centuries into a symbol of the city’s resilience and cultural
            richness. The castle’s sprawling complex encompasses not only the imposing Kaiserburg
            but also the delightful Sinwell Tower and the elegant Burggrafenhalle, each contributing
            to the castle’s unique charm, <br />
            <br />
            The Kaiserburg, the central nucleus of the castle, boasts a mix of architectural styles
            from Romanesque to Renaissance, reflecting the various periods of its construction.
            Visitors can explore the Imperial Chapel, where emperors once held religious ceremonies,
            and the Palas, a grand hall that served as the imperial living quarters. The castle’s
            architecture tells a story of power, prestige, and the ever-changing dynamics of
            medieval Europe. <br />
            <br />
            Wandering through the castle’s courtyards and gardens, visitors are treated to
            breathtaking views of Nuremberg and the surrounding landscapes. The Tiergarten, the
            castle’s charming garden, invites moments of quiet contemplation amid its greenery and
            historical ambiance.
          </p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import questionsData from "@/data/data.js";
  import BackAndContinueBtns from "../components/BackAndContinueBtns.vue";
  export default {
    data() {
      return {
        image: questionsData[0].images[0],
        divPosition: "100%",
        divVisible: false,
      };
    },
    methods: {
      slideDivUp() {
        // Ändere die Position des div-Elements
        this.divPosition = "0%";
        this.divVisible = true;
      },
      slideDivDown() {
        // Ändere die Position des div-Elements
        this.divPosition = "100%";
        this.divVisible = false;
      },
    },
    components: { BackAndContinueBtns },
  };
</script>
