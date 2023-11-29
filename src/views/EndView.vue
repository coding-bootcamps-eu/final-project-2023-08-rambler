<template>
  <div class="mt-5 flex flex-col items-center justify-center">
    <end-logo class="h-[400px] w-[400px]" />
    <h1 class="mt-12 text-4xl">Ramblers, well done!</h1>
    <p class="my-6 ml-4">
      We hope you enjoyed your rambler experience in Nuremberg. We wish you a great time visiting
      the city and join us again as you visit other cities and locations.
    </p>
  </div>

  <div>
    <router-link
      to="/"
      class="flex justify-center"
    >
      <div
        class="flex h-[50px] w-[200px] items-center justify-center rounded-full border-[1px] border-black bg-black font-bold text-white shadow-lg"
      >
        New Rambler Journey
      </div>
    </router-link>
  </div>
</template>

<script>
  import EndLogo from "@/components/EndLogo.vue";

  export default {
    components: {
      EndLogo,
    },
  };
</script>
