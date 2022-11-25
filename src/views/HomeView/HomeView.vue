<template>
  <div class="mt-10 text-3xl mx-auto max-w-6xl">
    Counter: {{ counterStore.count }}
    <button
      @click="counterStore.increment"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Increment
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useCounterStore } from "@/stores/counterStore";

export default defineComponent({
  name: "HomeView",
  setup() {
    const counterStore = useCounterStore();

    return { counterStore };
  },
});
</script>
