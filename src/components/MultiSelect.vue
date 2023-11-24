<template>
  <div class="my-auto h-[200px] w-[550px] flex-row justify-center rounded-3xl bg-white p-10">
    <!-- Rambler Logo -->
    <AppLogo class="text-black" />
    <label
      for="selectField"
      class="mb-2 mt-7 block px-3 text-sm font-bold text-gray-700"
    >
      Your city, your adventure.
    </label>
    <div class="relative flex w-48">
      <select
        v-model="selectedValue"
        id="selectField"
        class="w-full appearance-none rounded border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-700 focus:border-blue-500 focus:outline-none"
      >
        <!-- Placeholder option -->
        <option
          value=""
          disabled
          selected
          hidden
        >
          Select an option
        </option>
        <!-- Other options -->
        <option
          v-for="option in options"
          :key="option"
          :value="option"
          class="text-gray-700"
        >
          {{ option }}
        </option>
      </select>
      <div
        class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 text-gray-700"
      >
        <!-- Arrow Icon -->
        <IconArrow />
      </div>
    </div>
  </div>
</template>

<script>
  import AppLogo from "@/components/AppLogo.vue";
  import IconArrow from "@/components/IconArrow.vue";
  export default {
    data() {
      return {
        selectedValue: "",
        options: ["Nuremberg", "Beispiel"],
      };
    },
    components: {
      IconArrow,
      AppLogo,
    },
  };
</script>
