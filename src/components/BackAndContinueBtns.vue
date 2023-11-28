<template>
  <div class="absolute bottom-10 flex w-[600px] flex-row justify-center">
    <router-link
      :to="backLink"
      class="w-[200px] rounded-full border-[1px] border-black shadow-lg"
    >
      <div class="flex h-[50px] items-center justify-center">
        {{ backBtn }}
      </div>
    </router-link>
    <router-link
      :to="continueLink"
      :class="{
        'ml-12 w-[200px] rounded-full border-[1px] border-black shadow-lg': true,
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
        backBtn: "Zurück",
        continueBtn: "Weiter",
      };
    },
  };
</script>
