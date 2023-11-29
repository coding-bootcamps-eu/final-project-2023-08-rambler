<template>
  <div>
    <img
      :src="image"
      width="638"
      alt="nuernberg-image"
    />

    <section class="m-8">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, autem rerum cumque nisi
      quia harum aliquid incidunt veritatis officiis. Quaerat sapiente nobis earum praesentium?
      Sequi laborum animi pariatur ut eius.
      <button @click="slideDivUp">Weiterlesen...</button>
    </section>
    <BackAndContinueBtns
      :showContinue="true"
      :continueLink="isLastSight ? '/nuremberg/end' : '/nuremberg/direction/' + (sightIndex + 1)"
      backLink="/nuremberg/story2"
      tag="button"
    />
    <div
      v-show="divVisible"
      class="absolute flex h-max w-[640px] flex-col items-center bg-white opacity-80 transition-all duration-[0.5s] ease-[ease-out]"
      :style="{ top: divPosition }"
    >
      <button
        class="rounded-full border-[1px] border-black"
        @click="slideDivDown"
      >
        x
      </button>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto nesciunt blanditiis cum
        neque nihil voluptas enim laboriosam excepturi mollitia voluptatum iusto reprehenderit hic
        alias similique, cumque magnam, tempore maxime dolor? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Totam obcaecati adipisci minus voluptas aperiam id, eligendi ratione dolor
        qui, officiis error soluta. Tenetur ipsam explicabo autem pariatur, maxime eum laborum!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo labore vero laborum? Nam fugit
        voluptates at enim asperiores doloremque vel, iste non repellendus, doloribus quasi sit,
        veniam numquam necessitatibus omnis!Lorem Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Corrupti sequi ex quos omnis unde rerum. Expedita, dolorum tempore molestiae quia
        blanditiis dicta quis rem, quidem recusandae cupiditate sit quae aliquid?
      </p>
    </div>
  </div>
</template>

<script>
  import sights from "@/data/data.js";
  import BackAndContinueBtns from "../components/BackAndContinueBtns.vue";
  export default {
    data() {
      return {
        image: sights[0].images[0],
        divPosition: "100%",
        divVisible: false,
      };
    },
    methods: {
      slideDivUp() {
        // Ändere die Position des div-Elements
        this.divPosition = "8%";
        this.divVisible = true;
      },
      slideDivDown() {
        // Ändere die Position des div-Elements
        this.divPosition = "100%";
        this.divVisible = false;
      },
    },
    computed: {
      sightIndex() {
        return Number(this.$route.params.index);
      },
      isLastSight() {
        return this.sightIndex === sights.length - 1;
      },
    },
    components: { BackAndContinueBtns },
  };
</script>
