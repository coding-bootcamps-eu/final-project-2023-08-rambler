<template>
  <div class="mb-5 mt-5 flex w-full justify-around">
    <router-link
      :to="backLink"
      class="border-button-color hover:shadow-back text-button-color w-[200px] rounded-full border-[1px] text-[18px] font-bold shadow-lg hover:font-black hover:tracking-wider"
    >
      <div class="flex h-[50px] items-center justify-center">
        {{ backBtn }}
      </div>
    </router-link>
    <router-link
      :to="continueLink"
      :class="{
        'hover:shadow-continue w-[200px] rounded-full bg-primary-accent-color-green text-[18px] font-bold text-white shadow-lg hover:tracking-wider': true,
        hidden: !showContinue,
      }"
    >
      <div class="flex h-[50px] items-center justify-center">
        {{ continueBtn }}
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    props: ["showContinue", "backLink", "continueLink"],
    data() {
      return {
        backBtn: "<- Back",
        continueBtn: "Continue ->",
      };
    },
  };
</script>
