<template>
  <div id="kButtonTest">
    <p>{{ msg }}</p>
    <KButtonTest>button</KButtonTest>
  </div>
</template>

<script>
import FilePage from "./../../pages/FilePage.vue";
import TestOne from "./../../pages/test/TestOne.vue";

import KButtonTest from "./../../pages/test/KButtonTest.vue";
export default {
  name: "kButtonTest",
  components: {
    FilePage,
    TestOne,
    KButtonTest
  },
  data() {
    return {
      msg: "this is Home Componet"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
