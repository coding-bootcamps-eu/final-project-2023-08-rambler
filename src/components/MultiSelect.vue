<template>
  <div class="h-[100px] bg-white">
    <label
      for="selectField"
      class="mb-2 block px-3 text-sm font-bold text-gray-700"
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
        >
          <path
            d="M12 12.586 8.707 9.293l-1.414 1.414L12 15.414l4.707-4.707-1.414-1.414L12 12.586z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selectedValue: "",
        options: ["Nuremberg", "Beispiel"],
      };
    },
  };
</script>
