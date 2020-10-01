<template>
  <div class="main-layout">
    <div class="app-navigation d-flex">
      <div class="app-aside">
        <v-navigation-drawer
          fixed
          width="300"
          data-area="sidebar"
          v-model="drawer"
          class="app-drawer"
          permanent
          floating
          expand-on-hover
          miniVariantWidth="117"
        >
          <div class="drawer-top">
            <v-list-item to="/" :ripple="false" class="px-2">
              <v-list-item link class="drawer-anchor">
                <v-list-item-icon>
                  <v-img
                    max-height="39"
                    max-width="47"
                    src="@/assets/img/logo.svg"
                  ></v-img>
                </v-list-item-icon>

                <v-list-item-content class="ml-0">
                  <v-list-item-title class="brand-text color-grey"
                    >edu</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
            </v-list-item>
          </div>

          <div class="drawer-content">
            <v-list dense>
              <router-link to="/" exact class="d-block text-decoration-none">
                <v-list-item class="drawer-anchor">
                  <v-list-item-icon>
                    <!-- <v-img
                      max-height="24"
                      max-width="24"
                      src="@/assets/img/icons/icon-6.svg"
                    ></v-img> -->
                    <i class="mdi mdi-view-dashboard"></i>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>
                      <span>Asosiy sahifa</span>
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </router-link>

              <router-link
                :to="{ name: 'my-courses' }"
                exact
                class="d-block text-decoration-none"
              >
                <v-list-item link class="drawer-anchor">
                  <v-list-item-icon>
                    <v-img
                      max-height="24"
                      max-width="24"
                      src="@/assets/img/icons/icon-7.svg"
                    ></v-img>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>Mening kurslarim</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </router-link>

              <router-link
                :to="{ name: 'chat' }"
                exact
                class="d-block text-decoration-none"
              >
                <v-list-item class="drawer-anchor">
                  <v-list-item-icon>
                    <v-img
                      max-height="24"
                      max-width="24"
                      src="@/assets/img/icons/icon-8.svg"
                    ></v-img>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>
                      <div class="d-flex align-center">
                        <span>Xabarlar</span>

                        <div
                          class="app-badge app-badge__success ml-auto d-flex align-center justify-center"
                        >
                          +1
                        </div>
                      </div>
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </router-link>

              <router-link
                :to="{ name: 'test' }"
                exact
                class="d-block text-decoration-none"
              >
                <v-list-item link class="drawer-anchor">
                  <v-list-item-icon>
                    <v-img
                      max-height="24"
                      max-width="24"
                      src="@/assets/img/icons/icon-9.svg"
                    ></v-img>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>Testlar</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </router-link>

              <router-link
                :to="{ name: 'library' }"
                exact
                class="d-block text-decoration-none"
              >
                <v-list-item link class="drawer-anchor">
                  <v-list-item-icon>
                    <v-img
                      max-height="24"
                      max-width="24"
                      src="@/assets/img/icons/icon-10.svg"
                    ></v-img>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>Kutubxona</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </router-link>

              <router-link
                :to="{ name: 'course-payment' }"
                exact
                class="d-block text-decoration-none"
              >
                <v-list-item link class="drawer-anchor">
                  <v-list-item-icon>
                    <v-img
                      max-height="24"
                      max-width="24"
                      src="@/assets/img/icons/icon-10.svg"
                    ></v-img>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>Payment (Test)</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </router-link>

              <router-link
                :to="{ name: 'watch-course' }"
                exact
                class="d-block text-decoration-none"
              >
                <v-list-item link class="drawer-anchor">
                  <v-list-item-icon>
                    <v-img
                      max-height="24"
                      max-width="24"
                      src="@/assets/img/icons/icon-10.svg"
                    ></v-img>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>Watch Course (Test)</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </router-link>

              <router-link
                :to="{ name: 'search-result' }"
                exact
                class="d-block text-decoration-none"
              >
                <v-list-item link class="drawer-anchor">
                  <v-list-item-icon>
                    <v-img
                      max-height="24"
                      max-width="24"
                      src="@/assets/img/icons/icon-10.svg"
                    ></v-img>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>Search Result (Test)</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </router-link>
            </v-list>
          </div>

          <div class="drawer-bottom">
            <v-list dense>
              <router-link
                :to="{ name: 'help' }"
                class="d-block text-decoration-none"
              >
                <v-list-item link class="drawer-anchor">
                  <v-list-item-icon>
                    <v-img
                      max-height="24"
                      max-width="24"
                      src="@/assets/img/icons/icon-11.svg"
                    ></v-img>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>Yordam</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </router-link>
            </v-list>
          </div>
        </v-navigation-drawer>
        <div class="mobile-layer" data-toggle="close"></div>
        <div
          class="close-cicrle p-absolute d-flex justify-center align-center"
          data-toggle="close"
        >
          <img src="@/assets/img/icons/icon-21.svg" alt />
        </div>
      </div>
      <main class="app-main d-flex flex-column">
        <header class="header app-header d-flex">
          <div class="mobile-menu align-center mr-8" data-toggle="menu">
            <img src="@/assets/img/icons/icon-20.svg" alt />
          </div>
          <div class="header-search f-fill p-relative">
            <input type="text" class="w-100 h-100 p-relative" />
            <span
              class="p-absolute w-100 h-100 d-flex align-center justify-center"
              >tizimdan izlash</span
            >
            <img src="@/assets/img/icons/icon-12.svg" alt />
          </div>

          <div class="header-toolbar d-flex ml-auto">
            <v-menu offset-y :close-on-content-click="closeOnContentClick">
              <template v-slot:activator="{ on, attrs }">
                <div
                  class="header-tools notification-dropdown ml-5 d-flex align-center justify-center"
                  v-bind="attrs"
                  v-on="on"
                >
                  <div class="notification-icon-wrap has-notification">
                    <div class="icon-dot-wrap">
                      <div class="icon-dot"></div>
                    </div>
                    <i class="mdi mdi-bell-outline"></i>
                  </div>

                  <div class="notification-count">
                    <span>+2</span>
                  </div>
                </div>
              </template>
              <v-list class="notification-dropdown-list">
                <v-list-item>
                  <v-list-item-title>
                    <h1
                      class="title-1 color-grey text-center font-500 mt-4 mb-5"
                    >
                      E'lonlar
                    </h1>
                  </v-list-item-title>
                </v-list-item>

                <div class="alert-group-wrap pl-5 pr-5">
                  <router-link
                    :to="{ name: 'news' }"
                    class="text-decoration-none"
                  >
                    <v-alert
                      class="custom-alert mb-6"
                      color="#E8FFE7"
                      prominent
                    >
                      <span class="alert-title color-grey d-block"
                        >Matematikadan oliy ta’lim muassalari uchun ...</span
                      >

                      <div class="alert--text mt-3">
                        <p>Yakshanba kuni ochiq test bo’ladi tayyorlaningla</p>
                      </div>

                      <div class="alert-date d-flex align-center mt-2">
                        <img
                          class="mr-1"
                          src="@/assets/img/icons/icon-19.svg"
                          alt
                        />
                        <span class="color-grey font-600"
                          >11:35, 10 sentabr</span
                        >
                      </div>
                    </v-alert>
                  </router-link>

                  <router-link
                    :to="{ name: 'news' }"
                    class="text-decoration-none"
                  >
                    <v-alert
                      class="custom-alert mb-6"
                      color="#F7FAFF"
                      prominent
                    >
                      <span class="alert-title color-grey d-block"
                        >Tizim yangiliklari</span
                      >

                      <div class="alert--text mt-3">
                        <p>Yakshanba kuni ochiq test bo’ladi tayyorlaningla</p>
                      </div>

                      <div class="alert-date d-flex align-center mt-2">
                        <img
                          class="mr-1"
                          src="@/assets/img/icons/icon-19.svg"
                          alt
                        />
                        <span class="color-grey font-600"
                          >11:35, 10 sentabr</span
                        >
                      </div>
                    </v-alert>
                  </router-link>

                  <div class="read-more-notification ml-5 mr-5 mb-5">
                    <v-btn
                      large
                      class="reset-text-case w-100 letter-spacing-0"
                      depressed
                      color="#F1F1F1"
                      >Barchasini o’qilgan sifatida belgilash</v-btn
                    >
                  </div>
                </div>
              </v-list>
            </v-menu>

            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <div class="header-tools ml-6 d-flex" v-bind="attrs" v-on="on">
                  <div class="auth-dropdown d-flex align-center justify-center">
                    <v-img
                      max-height="50"
                      max-width="50"
                      src="@/assets/img/icons/icon-14.svg"
                    ></v-img>
                  </div>

                  <div class="user-auth d-flex align-center">
                    <p
                      class="user-auth-name mb-0 pl-2 pr-5 font-500 color-grey"
                    >
                      Erkin
                    </p>
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
                <v-list-item class="dropdown--list pointer">
                  <v-list-item-title>
                    <router-link
                      :to="{ name: 'user-account' }"
                      class="dropdown-item text-decoration-none color-dark d-flex align-center"
                    >
                      <img src="@/assets/img/icons/icon-15.svg" alt />
                      <span class="ml-3">Shaxsiy sozlamalar</span>
                    </router-link>
                  </v-list-item-title>
                </v-list-item>

                <v-list-item class="dropdown--list pointer">
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

                <v-list-item class="dropdown--list pointer">
                  <v-list-item-title>
                    <div
                      @click="logOut = true"
                      class="dropdown-item text-decoration-none color-dark d-flex align-center"
                    >
                      <img src="@/assets/img/icons/icon-17.svg" alt />
                      <span class="ml-3">Tizimdan chiqish</span>
                    </div>
                  </v-list-item-title>
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

    <v-dialog v-model="logOut" width="600">
      <div class="log-out-modal px-15 py-15">
        <p class="mb-10">Tizimdan chiqmochimisiz?</p>

        <div class="log-out-buttons d-flex align-center justify-space-between">
          <v-btn
            color="var(--grey)"
            class="button-yes reset-text-case"
            x-large
            dark
            @click="logOut = false"
          >
            Ha
          </v-btn>

          <v-btn
            color="var(--pink)"
            class="button-no reset-text-case"
            x-large
            dark
            @click="logOut = false"
          >
            Yo'q
          </v-btn>
        </div>
      </div>
    </v-dialog>
  </div>
</template>

<script>
import { mobileMenu } from "@/utils/frontend";

export default {
  name: "MainLayout",
  data() {
    return {
      logOut: false,
      closeOnContentClick: false,
      drawer: true,
      mini: true,
    };
  },
  mounted() {
    mobileMenu();
  },
};
</script>

<style>
</style>