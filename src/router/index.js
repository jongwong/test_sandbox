import Vue from "vue"; //引入Vue
import Router from "vue-router";
import Home from "./../components/layout/default/Home.vue";
import TestOne from "./../components/pages/test/TestOne.vue";
import TestTwo from "./../components/pages/test/TestTwo.vue";
import TestRouteQuery from "./../components/pages/test/TestRouteQuery.vue";
Vue.use(Router); //Vue全局使用Router

export default new Router({
  routes: [
    {
      path: "/",
      name: "index",
      redirect: "/home"
    },
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/testOne",
      name: "testOne",
      component: TestOne
    },
    {
      path: "/testTwo/:id",
      name: "testTWo",
      component: TestTwo,
      props: true
    },
    {
      path: "/testRouteQuery",
      name: "testRouteQuery",
      component: TestRouteQuery,
      props: route => ({ query: route.query.q })
    }
  ]
});
