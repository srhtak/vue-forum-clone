import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "../src/assets/style.css";
import AppDate from "@/components/AppDate";

const app = createApp(App);
app.use(store);
app.use(router);
app.component("AppDate", AppDate);
app.mount("#app");
