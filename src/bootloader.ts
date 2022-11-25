import { createApp } from "vue";
import { createPinia } from "pinia";
import axios from "axios";
import VueAxios from "vue-axios";

import "devextreme/dist/css/dx.light.css";
import "./index.scss";

import App from "./App.vue";
import router from "./router";

const pinia = createPinia();
const app = createApp(App);
app.use(VueAxios, axios);
app.use(router);
app.use(pinia);

app.provide("axios", app.config.globalProperties.axios); // provide 'axios'

app.mount("#app");
