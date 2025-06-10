import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import AOS from "aos";
import { createBootstrap } from "bootstrap-vue-next";
import { createPinia } from "pinia";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";
import "aos/dist/aos.css";
import "swiper/css/bundle";
import "./assets/css/flaticon.css";
import "./assets/css/remixicon.css";
import "./assets/css/tabler-icons.min.css";
import "./assets/css/AmazMegaGrungeOneFonts-stylesheet.css";
import "./assets/scss/style.css";

const app = createApp(App).use(router);
app.use(createBootstrap(app));
app.use(createPinia());
app.mixin({
  mounted() {
    AOS.init();
  },
});
app.mount("#app");
