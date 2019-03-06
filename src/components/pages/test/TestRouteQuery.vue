<template>
  <div id="TestRouteQuery.">
    <p>{{ msg }}</p>
    <div>name: {{ q }}</div>
  </div>
</template>

<script>
export default {
  name: "TestRouteQuery.",
  props: ["q"],
  components: {},
  data() {
    return {
      msg: "this is TestRouteQuery. Componet"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
