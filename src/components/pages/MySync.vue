<template>
  <div id="MySync"><input type="text" @input="handleInput" /></div>
</template>

<script>
export default {
  name: "MySync",

  data() {
    return {
      currentValue: this.value
    };
  },
  props: ["value"],
  methods: {
    handleInput(event) {
      var value = event.target.value;
      this.$emit("update:value", value); //触发 input 事件，并传入新值
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
