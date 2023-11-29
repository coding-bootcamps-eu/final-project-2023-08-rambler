<template>
  <div
    class="mx-auto mb-12 w-[550px] flex-col items-center justify-center rounded-3xl bg-white p-10"
  >
    <!-- Rambler Logo -->
    <AppLogo class="text-black" />

    <div class="mt-4">
      <label
        for="selectField"
        class="mb-2 block px-3 text-center text-sm font-bold text-gray-700"
      >
        Your city, your adventure.
      </label>
      <div class="relative mx-auto w-48">
        <select
          v-model="selectedValue"
          id="selectField"
          class="w-full cursor-pointer appearance-none rounded border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-700 focus:border-blue-500 focus:outline-none"
          @change="handleCitySelected"
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
  </div>
  <!-- Show StartButton only when a city is selected -->

  <start-button
    v-if="selectedValue"
    class="mt-4 bg-white"
  />
</template>

<script>
  import AppLogo from "@/components/AppLogo.vue";
  import IconArrow from "@/components/IconArrow.vue";
  import StartButton from "@/components/StartButton.vue";

  export default {
    data() {
      return {
        selectedValue: "",
        options: ["Nuremberg"],
      };
    },
    components: {
      IconArrow,
      AppLogo,
      StartButton,
    },
  };
</script>
