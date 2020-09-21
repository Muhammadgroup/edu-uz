<template>
  <v-app id="app">
    <component :is="layout">
      <router-view />
    </component>
  </v-app>
</template>

<script>
import MainLayout from "./components/layer/MainLayout";
import AuthLayout from "./components/layer/AuthLayout";

export default {
  name: "App",

  components: {
    MainLayout,
    AuthLayout,
  },

  data: () => ({
    //
  }),

  computed: {
    layout() {
      return (this.$route.meta.layout || "auth") + "-layout";
    },
  },
};
</script>
