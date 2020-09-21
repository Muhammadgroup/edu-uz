<template>
  <div class="main-layout">
    <div class="app-navigation d-flex">
      <v-navigation-drawer
        class="app-drawer"
        floating
        miniVariantWidth="118"
        v-model="drawer"
        :mini-variant.sync="mini"
        permanent
        expand-on-hover
      >
        <div class="drawer-top">
          <v-list-item class="px-2">
            <v-list-item link class="drawer-anchor">
              <v-list-item-icon>
                <v-img max-height="39" max-width="47" src="@/assets/img/logo.svg"></v-img>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title class="brand-text">edu</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item>
        </div>

        <div class="drawer-content">
          <v-list dense>
            <v-list-item link class="drawer-anchor">
              <v-list-item-icon>
                <v-img max-height="24" max-width="24" src="@/assets/img/icons/icon-6.svg"></v-img>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>Asosiy sahifa</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item link class="drawer-anchor">
              <v-list-item-icon>
                <v-img max-height="24" max-width="24" src="@/assets/img/icons/icon-7.svg"></v-img>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>Mening kurslarim</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item link class="drawer-anchor">
              <v-list-item-icon>
                <v-img max-height="24" max-width="24" src="@/assets/img/icons/icon-8.svg"></v-img>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>Xabarlar</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item link class="drawer-anchor">
              <v-list-item-icon>
                <v-img max-height="24" max-width="24" src="@/assets/img/icons/icon-9.svg"></v-img>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>Testlar</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item link class="drawer-anchor">
              <v-list-item-icon>
                <v-img max-height="24" max-width="24" src="@/assets/img/icons/icon-10.svg"></v-img>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>Kutubxona</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </div>

        <div class="drawer-bottom">
          <v-list dense>
            <v-list-item link class="drawer-anchor">
              <v-list-item-icon>
                <v-img max-height="24" max-width="24" src="@/assets/img/icons/icon-11.svg"></v-img>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>Yordam</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </div>
      </v-navigation-drawer>

      <main class="app-main">
        <header class="header app-header d-flex">
          <div class="header-search f-fill p-relative">
            <input type="text" class="w-100 h-100 p-relative" />
            <span class="p-absolute w-100 h-100 d-flex align-center justify-center">tizimdan izlash</span>
            <img src="@/assets/img/icons/icon-12.svg" alt />
          </div>

          <div class="header-toolbar d-flex ml-auto">
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <div
                  class="header-tools notification-dropdown d-flex align-center justify-center"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-img max-height="34" max-width="34" src="@/assets/img/icons/icon-13.svg"></v-img>
                </div>
              </template>
              <v-list>
                <v-list-item>
                  <v-list-item-title>
                    <router-link
                      to="/"
                      class="dropdown-item text-decoration-none color-dark d-flex align-center"
                    >
                      <img src="@/assets/img/icons/icon-15.svg" alt />
                      <span class="ml-3">Shaxsiy sozlamalar</span>
                    </router-link>
                  </v-list-item-title>
                </v-list-item>

                <v-list-item>
                  <v-list-item-title>
                    <router-link
                      to="/"
                      class="dropdown-item text-decoration-none color-dark d-flex align-center"
                    >
                      <img src="@/assets/img/icons/icon-16.svg" alt />
                      <span class="ml-3">Parolni o’zgartirish</span>
                    </router-link>
                  </v-list-item-title>
                </v-list-item>

                <v-list-item>
                  <v-list-item-title>
                    <router-link
                      to="/"
                      class="dropdown-item text-decoration-none color-dark d-flex align-center"
                    >
                      <img src="@/assets/img/icons/icon-17.svg" alt />
                      <span class="ml-3">Tizimdan chiqish</span>
                    </router-link>
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>

            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <div class="header-tools ml-6 d-flex">
                  <div
                    class="auth-dropdown d-flex align-center justify-center"
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-img max-height="50" max-width="50" src="@/assets/img/icons/icon-14.svg"></v-img>
                  </div>

                  <div class="user-auth d-flex align-center">
                    <p class="user-auth-name mb-0 pl-2 pr-5">Erkin</p>
                    <v-img
                      class="mr-4"
                      max-width="23"
                      max-height="14"
                      src="@/assets/img/icons/icon-18.svg"
                    ></v-img>
                  </div>
                </div>
              </template>
              <v-list>
                <v-list-item>
                  <v-list-item-title>adw</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </header>

        <div class="app-route">
          <router-view />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainLayout",
  data() {
    return {
      drawer: true,
      mini: true,
    };
  },
};
</script>

<style>
</style>