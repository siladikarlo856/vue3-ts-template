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
import { Axios } from "axios";
import { defineComponent, inject } from "vue";

export default defineComponent({
  setup() {
    const axios = inject<Axios>("axios"); // inject axios

    axios
      ?.get("https://dummyjson.com/products/1")
      .then((response: { data: any }) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.error("API call error", err);
      });

    console.log("Test lint warning");
    return {};
  },
});
</script>
