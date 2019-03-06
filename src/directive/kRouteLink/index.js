import Vue from "vue";
import router from "./../../router";
Vue.directive("router-link", {
  bind: function(el, binding, vnode) {
    if (
      !(
        binding.value === null ||
        binding.value === undefined ||
        binding.value === ""
      )
    ) {
      el.addEventListener("click", function() {
        switch (binding.arg) {
          case "to":
            if (binding.modifiers.replace === true) {
              router.replace(binding.value);
              console.log(binding.modifiers.replace);
              console.log("replace");
            } else {
              if (typeof binding.value === "string") {
                console.log(typeof binding.value);
                /*               if (binding.value.includes("?")) {
                  var strList = binding.value.split("?");
                  if (strList.lenght === 2) {
                    var urlObject = {
                      name: strList[0],
                      query: strList[1]
                    };
                    router.push(urlObject);
                  }

                  router.push(binding.value.path);
                }
                */

                router.push(binding.value);
              }
              if (typeof binding.value === "object") {
                if (binding.value.path) {
                  console.log(binding.value.path);
                  router.push(binding.value.path);
                }
                console.log(typeof binding.value);
                router.push(binding.value);
              }

              console.log("no");
            }

            break;
          case "go":
            router.go(binding.value);
            break;
          default:
            console.error(`${binding.arg} it does not exist .`);
        }
      });
    } else {
      console.error("binding.value Can not be null or undefined or ''");
    }
  },

  inserted: function(el) {
    el.style.cursor = "pointer";
  }
});
