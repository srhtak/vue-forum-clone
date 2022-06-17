import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "../src/assets/style.css";
import AppDate from "@/components/AppDate";
import { createPinia } from "pinia";

const pinia = createPinia();
const app = createApp(App);
app.use(router);
app.use(pinia);
app.component("AppDate", AppDate);
app.mount("#app");
