import Vue from "vue";
import EventBus from "./event-bus.js";
Vue.directive("k-menu", {
  bind: function(el, binding, vnode) {
    /* EventBus.$on("updateMessage", val => {
      console.log(val);
    });*/
    if (binding.value) {
      console.log("5555555555");

      console.log("5558888885555");
    }
  },
  update: function(el, binding, vnode) {
    EventBus.$on("updateMessage", val => {
      console.log(val);
    });
    if (binding.value) {
      console.log("5555555555");

      console.log("5558888885555");
    }
  },
  inserted: function(el, binding) {
    console.log("menu");
  }
});
Vue.directive("k-menu-triger", {
  bind: function(el, binding, vnode) {
    // console.log(EventBus);
    if (binding.value) {
      EventBus.$emit("updateMessage", {
        test: "123456789"
      });
    }
  },

  inserted: function(el, binding) {}
});
