<template>
  <div id="KButonTest">
    <p>{{ msg }}</p>
    <div class="btn green" v-k-button:default v-k-menu-triger="'tri-menu'">
      button
    </div>
    <KMenu v-k-menu="'tri-menu'"></KMenu>
  </div>
</template>

<script>
import KMenu from "./../KMenu.vue";

export default {
  name: "KButonTest",
  components: {
    KMenu
  },
  data() {
    return {
      msg: "this is KButtonTest Componet"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn {
  display: inline-block;
  margin-bottom: 0;
  font-weight: normal;
  text-align: center;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  padding: 6px 12px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  outline: none !important;
  border-radius: 2px;
  margin-right: 0.3em;
}
.btn.green {
  color: #ffffff;
  background-color: #00c249;
  border-color: #00a93f;
}

.btn.green:active,
.btn.green.active,
.open > .dropdown-toggle.btn.green {
  color: #ffffff;
  background-color: #008f36;
  border-color: #006b28;
}
.btn.green:hover {
  color: #ffffff;
  background-color: #008f36;
  border-color: #006b28;
}
</style>
