<template>
  <div id="TestOne">
    <p>{{ msg }}</p>
    <MySync v-bind:value.sync="msg"></MySync>
    <MyVmodel v-model="msg"></MyVmodel>
    <MyProp say-hello="hi,this is  vue props"></MyProp>
  </div>
</template>

<script>
import MyProp from "./../MyProp.vue";
import MyVmodel from "./../MyVmodel.vue";
import MySync from "./../MySync.vue";
export default {
  name: "TestOne",
  components: {
    MyProp,
    MyVmodel,
    MySync
  },
  data() {
    return {
      msg: "this is TestOne Componet"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
