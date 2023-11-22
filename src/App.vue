<template>
  <DirectionsPage />
  <h1 class="mt-8 text-center text-6xl">Hallo Vue</h1>
</template>

<script>
  import DirectionsPage from "./components/DirectionsPage.vue";

  export default {
    name: "App",
    components: {
      DirectionsPage,
    },
  };
</script>

<style>
  body {
    background-color: black;
  }
</style>
