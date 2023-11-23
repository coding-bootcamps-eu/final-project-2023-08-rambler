<template>
  <div
    class="bg-home-background-image flex h-full w-full items-center justify-center backdrop-blur-sm"
  >
    <div>
      <multi-select />
    </div>
  </div>
</template>

<script>
  import MultiSelect from "./MultiSelect.vue";

  export default {
    name: "HomePage",
    components: {
      MultiSelect,
    },
  };
</script>
