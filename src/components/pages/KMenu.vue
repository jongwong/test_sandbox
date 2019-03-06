<template>
  <div id="k-menu">
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: "kMenu",
  components: {},
  data() {
    return {
      msg: "this is KMenu Componet"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#k-menu {
  width: 100px;
  height: 200px;
  background-color: red;
}
</style>
