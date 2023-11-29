<template>
  <div class="flex h-full w-full items-center justify-center bg-home-background-image bg-cover">
    <div class="flex flex-col items-center">
      <multi-select />
    </div>
  </div>
</template>

<script>
  import MultiSelect from "@/components/MultiSelect.vue";

  export default {
    name: "HomePage",
    components: {
      MultiSelect,
    },
  };
</script>
