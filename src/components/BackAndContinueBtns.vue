<template>
  <div class="mt-16 flex h-[50px] w-[450px] flex-row justify-between">
    <button class="w-[200px] rounded-full border-[1px] border-black shadow-lg">
      {{ backBtn }}
    </button>
    <button
      :class="{
        'w-[200px] rounded-full border-[1px] border-black shadow-lg': true,
        hidden: !showContinue,
      }"
    >
      {{ continueBtn }}
    </button>
  </div>
</template>

<script>
  export default {
    props: ["showContinue"],
    data() {
      return {
        backBtn: "Zurück",
        continueBtn: "Weiter",
      };
    },
  };
</script>
