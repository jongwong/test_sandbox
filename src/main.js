// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
//import Antd from "ant-design-vue";
import router from "./router";
import kRouteLink from "./directive/kRouteLink";
import kButton from "./directive/kButton";
import kColor from "./directive/kColor";
import KMenu from "./directive/KMenu";

//import "ant-design-vue/dist/antd.css";
Vue.config.productionTip = false;
//Vue.use(Antd);
/* eslint-disable no-new */

new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
