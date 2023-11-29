<template>
  <div class="mt-5 flex w-full justify-around">
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
        'w-[200px] rounded-full border-[1px] border-black shadow-lg': true,
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
