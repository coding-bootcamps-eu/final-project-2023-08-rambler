<template>
  <div class="mx-auto flex h-screen w-[600px] flex-col items-start border bg-white">
    <header class="flex w-full items-start justify-center bg-primary-accent-color-green">
      <img
        class="h-fit w-[200px] py-3"
        :src="Logo"
        alt="App-Logo"
      />
    </header>
    <h1 class="mx-auto text-[28px]">{{ headline }}</h1>
    <slot></slot>
    <footer class="bg-footer-color-grey mt-auto flex w-full justify-center">&copy; Rambler</footer>
  </div>
</template>

<script>
  import logo from "@/assets/logo/Logo-White.svg";
  export default {
    name: "AppContainer",
    data() {
      return {
        Logo: logo,
        headline: "Headline",
      };
    },
  };
</script>

<style></style>
