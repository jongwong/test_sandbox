<template>
  <div id="MyProp">{{ hello }}<br /></div>
</template>

<script>
export default {
  name: "MyProp",

  data() {
    return {
      hello: this.sayHello
    };
  },
  props: ["sayHello"],
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
