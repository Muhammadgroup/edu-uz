<template>
  <div class="auth-layout">
    <header class="auth-header header d-flex align-center justify-center p-fixed w-100">
      <router-link class="app-logo text-decoration-none d-flex align-center" to="/">
        <img src="@/assets/img/logo.svg" alt="Logo" />
        <span class="ml-5">edu</span>
      </router-link>

      <div class="header-lang p-absolute h-100">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="h-100" :elevation="0" color="transparent" dark v-bind="attrs" v-on="on">
              <img src="@/assets/img/icons/icon-1.svg" alt />
            </v-btn>
          </template>
          <v-list class="lang-dropdown">
            <v-list-item class="pointer">
              <v-list-item-title>
                <div class="dropdown-items d-flex align-center">
                  <img class="mr-2" src="@/assets/img/icons/icon-2.svg" alt />
                  <span>O’zbekcha</span>
                </div>
              </v-list-item-title>
            </v-list-item>
            <v-list-item class="pointer">
              <v-list-item-title>
                <div class="dropdown-items d-flex align-center">
                  <img class="mr-2" src="@/assets/img/icons/icon-3.svg" alt />
                  <span>Руский</span>
                </div>
              </v-list-item-title>
            </v-list-item>
            <v-list-item class="pointer">
              <v-list-item-title>
                <div class="dropdown-items d-flex align-center">
                  <img class="mr-2" src="@/assets/img/icons/icon-4.svg" alt />
                  <span>English</span>
                </div>
              </v-list-item-title>
            </v-list-item>
            <v-list-item class="pointer">
              <v-list-item-title>
                <div class="dropdown-items d-flex align-center">
                  <img class="mr-2" src="@/assets/img/icons/icon-5.svg" alt />
                  <span>Qoraqalpoqcha</span>
                </div>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </header>

    <div class="layout-route">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthLayout",
};
</script>

<style>
</style>