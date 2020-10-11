import Vue from "vue";
import App from "./App.vue";

// FILTERS
import toTimeFormat from "@/filters/toTimeFormat";
Vue.use(toTimeFormat);

// STORE
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
