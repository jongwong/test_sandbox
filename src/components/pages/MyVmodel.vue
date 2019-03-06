<template>
  <div id="MyVmodel">
    <input type="text" :value="currentValue" @input="handleInput" />
  </div>
</template>

<script>
export default {
  name: "MyVmodel",

  data() {
    return {
      currentValue: this.value
    };
  },
  props: ["value"],
  methods: {
    handleInput(event) {
      var value = event.target.value;
      this.$emit("input", value); //触发 input 事件，并传入新值
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
