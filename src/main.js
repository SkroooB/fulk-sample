import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./index.css";
import "./registerServiceWorker";
import VueAddtohomescreen from "@owliehq/vue-addtohomescreen";

createApp(App).use(store, VueAddtohomescreen).use(router).mount("#app");
this.$addToHomescreen.mount();