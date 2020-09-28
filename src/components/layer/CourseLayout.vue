<template>
  <div class="course-layout">
    <div class="course-layout-route d-flex flex-column">
      <header class="course-header">
        <router-link
          to="/"
          class="header-logo-2 d-flex align-center text-decoration-none"
        >
          <img src="@/assets/img/logo-white.svg" class="d-block mr-4" alt="" />
          <span>edu</span>
        </router-link>

        <div class="course-haeder-dropdown">
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="transparent" dark v-bind="attrs" v-on="on">
                <span></span>
                <span></span>
                <span></span>
              </v-btn>
            </template>
            <v-list>
              <v-list-item>
                <v-list-item-title>
                  <div
                    @click="shareDialog = true"
                    class="course-dropdown-items d-flex align-center"
                  >
                    <img
                      class="mr-3"
                      src="@/assets/img/icons/icon-39.svg"
                      alt=""
                    />

                    <span class="font-500 color-grey">Kursni ulashish</span>
                  </div>
                </v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>
                  <div
                    @click="ratingDialog = true"
                    class="course-dropdown-items d-flex align-center"
                  >
                    <img
                      class="mr-3"
                      src="@/assets/img/icons/icon-40.svg"
                      alt=""
                    />

                    <span class="font-500 color-grey">Kursga baho berish</span>
                  </div>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </header>
      <router-view />
    </div>

    <v-dialog v-model="shareDialog" persistent max-width="700">
      <div class="share-modal-wrap p-relative">
        <div class="remove-icon p-absolute" @click="shareDialog = false">
          <img src="@/assets/img/icons/icon-41.svg" alt="" />
        </div>

        <h1 class="text-center color-grey font-600">
          Kursni boshqalar bilan ulashish
        </h1>

        <div class="share-modal-input d-flex align-center my-12">
          <input type="text" v-model="message" />
          <button class="share-button" @click.stop.prevent="copyText">
            Nusxa olish
          </button>
          <input type="hidden" id="copy-code" :value="message" />
        </div>
      </div>
    </v-dialog>

    <v-dialog v-model="ratingDialog" persistent max-width="625">
      <div class="share-modal-wrap p-relative">
        <div class="remove-icon p-absolute" @click="ratingDialog = false">
          <img src="@/assets/img/icons/icon-41.svg" alt="" />
        </div>

        <h1 class="text-center color-grey font-600">Kursga baho bering</h1>

        <div class="share-modal-input my-6">
          <v-rating
            class="d-flex justify-center"
            v-model="rating"
            color="#FACE6D"
            background-color="#C4C4C4"
            empty-icon="$ratingFull"
            half-increments
            size="59"
            hover
            length="5"
          ></v-rating>
        </div>

        <div class="share-modal-input d-flex justify-center">
          <button class="share-button">Saqlash</button>
        </div>
      </div>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "CourseLayout",
  data() {
    return {
      rating: 4.5,
      shareDialog: false,
      ratingDialog: false,
      message: "https://edu.uz/c/aasswweee",
    };
  },
  methods: {
    copyText() {
      let $copyText = document.querySelector("#copy-code");
      $copyText.setAttribute("type", "text");
      $copyText.select();

      try {
        var successful = document.execCommand("copy");
        alert("Nusxa olindi");
      } catch (err) {
        alert("Nusxa olinmadi");
      }

      $copyText.setAttribute("type", "hidden");
      window.getSelection().removeAllRanges();
    },
  },
};
</script>

<style>
</style>