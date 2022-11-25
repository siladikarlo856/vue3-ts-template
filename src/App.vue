<template>
  <div class="container mx-auto mt-5">
    <ul class="flex justify-center">
      <li class="mr-6">
        <router-link to="/" class="text-blue-500 hover:text-blue-800"
          >Go to Home</router-link
        >
      </li>
      <li class="mr-6">
        <router-link to="/about" class="text-blue-500 hover:text-blue-800"
          >Go to About</router-link
        >
      </li>
    </ul>
  </div>
  <div class="flex">
    <router-view></router-view>
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
