<template>
  <div class="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: vue3-ts-template</div>
    <div>Framework: vue3</div>
    <div>Language: TypeScript</div>
    <div>CSS: Tailwind</div>
  </div>
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
import { useCounterStore } from "./stores/counterStore";

export default defineComponent({
  setup() {
    const counterStore = useCounterStore();

    console.log("Test lint warning");

    return { counterStore };
  },
});
</script>
