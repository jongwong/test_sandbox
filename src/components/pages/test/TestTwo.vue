<template>
  <div id="TestTwo">
    <p>{{ msg }}</p>
    <div>id: {{ id }}</div>
    <div>name: {{ name }}</div>
  </div>
</template>

<script>
export default {
  name: "TestTwo",
  props: ["id", "name"],
  components: {},
  data() {
    return {
      msg: "this is TestTwo Componet"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
