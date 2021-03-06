import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import "./scss/index.scss";
import routes from "./routes.js";

Vue.config.productionTip = false;
Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  routes,
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
