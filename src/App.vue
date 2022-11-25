<template>
  <div class="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: vue3-ts-template</div>
    <div>Framework: vue3</div>
    <div>Language: TypeScript</div>
    <div>CSS: Tailwind</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    console.log("Test lint warning");

    return {};
  },
});
</script>
