<template>
  <div
    id="container"
    class="mx-auto flex h-screen max-w-screen-sm flex-col justify-between border bg-white"
  >
    <header class="flex w-full items-start justify-center bg-primary-accent-color-green">
      <img
        class="h-fit w-[200px] py-3"
        :src="Logo"
        alt="App-Logo"
      />
    </header>
    <router-view />
    <footer class="mt-auto flex w-full justify-center bg-footer-color-grey">&copy; Rambler</footer>
  </div>
</template>

<script>
  import logo from "@/assets/logo/Logo-White.svg";

  export default {
    name: "App",
    data() {
      return {
        Logo: logo,
        headline: "Hello Hello",
      };
    },

    components: {},
  };
</script>

<style>
  body {
    background-color: grey;
    font-family: "DM Sans", "sans-serif";
  }
</style>
