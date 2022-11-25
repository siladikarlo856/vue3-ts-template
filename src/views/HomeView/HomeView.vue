<template>
  <div class="flex flex-col mx-auto">
    <div class="mt-10 text-3xl mx-auto max-w-6xl">
      Counter: {{ counterStore.count }}
      <button
        @click="counterStore.increment"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Increment
      </button>
    </div>
    <div class="mt-10 mx-auto">
      <DxButton text="Click me" @click="sayHelloWorld" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DxButton from "devextreme-vue/button";
import { useCounterStore } from "@/stores/counterStore";

export default defineComponent({
  name: "HomeView",
  components: { DxButton },
  setup() {
    const counterStore = useCounterStore();

    function sayHelloWorld() {
      alert("Hello world!");
    }
    return { counterStore, sayHelloWorld };
  },
});
</script>
