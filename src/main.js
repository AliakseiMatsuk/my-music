import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";

import svgUse from '@/components/etc/svg-use.vue'
import bLoading from "@/components/blocks/b-loading.vue";

// Global components
Vue.component('svgUse', svgUse);
Vue.component('bLoading', bLoading);


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");
