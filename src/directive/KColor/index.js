import Vue from "vue";
import router from "./../../router";
Vue.directive("k-color", {
  bind: function(el, binding, vnode) {},

  inserted: function(el, binding) {
    if (binding.value) {
      console.log(binding.value);
      el.style.backgroundColor = binding.value;
    }
  }
});
