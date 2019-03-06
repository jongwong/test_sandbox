import Vue from "vue";
import router from "./../../router";
Vue.directive("k-button", {
  bind: function(el, binding, vnode) {},

  inserted: function(el, binding) {
    switch (binding.arg) {
      case "pointer":
        el.style.cursor = "pointer";

        break;
      case "text":
        el.style.cursor = "text";
        break;
      case "default":
        el.style.cursor = "default";

        break;
      default:
        el.style.cursor = "default";
    }
  }
});
